// First solution, solved 2024-06-30 (with lots of help)
// Time: O(n), space: O(n)
class UnionFind {
  parent: number[];
  rank: number[];

  constructor(size: number) {
      this.parent = Array.from({ length: size }, (_, index) => index);
      this.rank = Array(size).fill(1);
  }

  find(x: number): number {
      if (this.parent[x] !== x) {
          this.parent[x] = this.find(this.parent[x]);
      }
      return this.parent[x];
  }

  union(x: number, y: number): boolean {
      const rootX = this.find(x);
      const rootY = this.find(y);

      if (rootX === rootY) {
          return false;
      }

      if (this.rank[rootX] > this.rank[rootY]) {
          this.parent[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
          this.parent[rootX] = rootY;
      } else {
          this.parent[rootY] = rootX;
          this.rank[rootX] += 1;
      }
      return true;
  }
}

function maxNumEdgesToRemove(n: number, edges: number[][]): number {
  const aliceUF = new UnionFind(n);
  const bobUF = new UnionFind(n);
  const sharedUF = new UnionFind(n);
  
  let removableEdges = 0;

  for (const [type, u, v] of edges) {
      if (type === 3) {
          if (!sharedUF.union(u - 1, v - 1)) {
              removableEdges++;
          } else {
              aliceUF.union(u - 1, v - 1);
              bobUF.union(u - 1, v - 1);
          }
      }
  }

  for (const [type, u, v] of edges) {
      if (type === 1) {
          if (!aliceUF.union(u - 1, v - 1)) {
              removableEdges++;
          }
      } else if (type === 2) {
          if (!bobUF.union(u - 1, v - 1)) {
              removableEdges++;
          }
      }
  }

  const isAliceFullyConnected = Array.from({ length: n }, (_, i) => i).every(node => aliceUF.find(node) === aliceUF.find(0));
  const isBobFullyConnected = Array.from({ length: n }, (_, i) => i).every(node => bobUF.find(node) === bobUF.find(0));

  if (!isAliceFullyConnected || !isBobFullyConnected) {
      return -1;
  }

  return removableEdges;
}
