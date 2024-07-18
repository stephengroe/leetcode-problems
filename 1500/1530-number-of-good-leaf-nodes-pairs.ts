// First solution, solved 2024-07-17 in 50:10 (with lots of help)
// Time: O(n^2), space: O(n)
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function countPairs(root: TreeNode | null, distance: number): number {
  let goodPairs = 0;

  function dfs(node: TreeNode | null): number[] {
      if (!node) return [];

      if (!node.left && !node.right) {
          return [1];
      }

      const leftDistances = dfs(node.left);
      const rightDistances = dfs(node.right);

      // Compare distance between adjacent nodes
      for (const left of leftDistances) {
          for (const right of rightDistances) {
              if (left + right <= distance) {
                  goodPairs += 1;
              }
          }
      }

      const newDistances: number[] = [];
      for (const dist of leftDistances.concat(rightDistances)) {
          if (dist + 1 < distance) {
              newDistances.push(dist + 1);
          }
      }

      return newDistances;

  }

  dfs(root);
  return goodPairs;
};
