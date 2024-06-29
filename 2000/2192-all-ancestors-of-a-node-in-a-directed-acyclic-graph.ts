// First solution, solved 2024-06-28 (with lots of help)
// Time: O(n^2 + E log n), space: O(n^2 + E)
function getAncestors(n: number, edgeList: number[][]): number[][] {
  const ancestors: number[][] = Array.from({ length: n }, () => []);
  const graph: number[][] = Array.from({ length: n }, () => []);
  const inDegree: number[] = Array(n).fill(0);

  // Build the graph and calculate in-degrees
  for (const [from, to] of edgeList) {
      graph[from].push(to);
      inDegree[to]++;
  }

  // Function to perform BFS to find all ancestors
  function bfs(start: number) {
      const queue: number[] = [];
      const visited: boolean[] = Array(n).fill(false);
      queue.push(start);
      visited[start] = true;

      while (queue.length > 0) {
          const node = queue.shift()!;
          for (const neighbor of graph[node]) {
              if (!visited[neighbor]) {
                  visited[neighbor] = true;
                  ancestors[neighbor].push(start);
                  queue.push(neighbor);
              }
          }
      }
  }

  // Perform BFS for each node to find ancestors
  for (let i = 0; i < n; i++) {
      bfs(i);
  }

  // Sort the ancestors for each node
  for (let i = 0; i < n; i++) {
      ancestors[i] = [...new Set(ancestors[i])].sort((a, b) => a - b);
  }

  return ancestors;
}