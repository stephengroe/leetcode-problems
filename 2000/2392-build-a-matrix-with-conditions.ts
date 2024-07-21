// First solution, solved 2024-07-21 in 1:30 (with lots of help)
// Time: O(k^2), space: O(k^2)
function buildMatrix(k: number, rowConditions: number[][], colConditions: number[][]): number[][] {
  const getTopologicalOrder = (k: number, conditions: number[][]): number[] => {
      const graph: Map<number, number[]> = new Map();
      const indegree: number[] = Array(k + 1).fill(0);

      for (const [u, v] of conditions) {
          if (!graph.has(u)) graph.set(u, []);
          graph.get(u)!.push(v);
          indegree[v]++;
      }

      const queue: number[] = [];
      for (let i = 1; i <= k; i++) {
          if (indegree[i] === 0) queue.push(i);
      }

      const order: number[] = [];
      while (queue.length > 0) {
          const node = queue.shift()!;
          order.push(node);
          if (graph.has(node)) {
              for (const neighbor of graph.get(node)!) {
                  indegree[neighbor]--;
                  if (indegree[neighbor] === 0) queue.push(neighbor);
              }
          }
      }

      return order.length === k ? order : [];
  };

  const rowOrder = getTopologicalOrder(k, rowConditions);
  const colOrder = getTopologicalOrder(k, colConditions);

  if (rowOrder.length === 0 || colOrder.length === 0) return [];

  const rowPosition: Record<number, number> = {};
  const colPosition: Record<number, number> = {};

  for (let i = 0; i < k; i++) {
      rowPosition[rowOrder[i]] = i;
      colPosition[colOrder[i]] = i;
  }

  const matrix: number[][] = Array.from({ length: k }, () => Array(k).fill(0));
  for (let i = 1; i <= k; i++) {
      const row = rowPosition[i];
      const col = colPosition[i];
      matrix[row][col] = i;
  }

  return matrix;
}
