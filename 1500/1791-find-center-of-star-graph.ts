// First solution, solved 2024-06-26 in 04:28
// Time: O(1), space: O(1)
function findCenter(edges: number[][]): number {
  let seenNumbers = new Set<number>();

  for (let edge of edges) {
      for (let vertex of edge) {
          if (seenNumbers.has(vertex)) {
              return vertex;
          } else {
              seenNumbers.add(vertex);
          }
      }
  }

  // To make TypeScript happy
  return 0;
};