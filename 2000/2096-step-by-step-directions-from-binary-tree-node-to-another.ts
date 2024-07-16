// First solution, solved 2024-07-16 in 1:02:24 (with help)
// Time: O(n), space: O(n)
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

function getDirections(root: TreeNode | null, startValue: number, destValue: number): string {
  function dfs(node: TreeNode | null, target: number, path: string[]): string[] | null {
      if (node === null){
          return null;
      } else if (node.val === target) {
          return path;
      }

      // Try going left
      path.push('L');
      const left = dfs(node.left, target, path);
      if (left) return left;

      // Try going right
      path.pop();
      path.push('R');
      const right = dfs(node.right, target, path);
      if (right) return right;

      // Otherwise, not found
      path.pop();
      return null;
  }
  
  const startPath = dfs(root, startValue, []);
  const destPath = dfs(root, destValue, []);

  let i = 0;

  while (i<Math.min(startPath!.length, destPath!.length)) {
      if (startPath![i] !== destPath![i]) {
          break;
      }
      i += 1;
  }

  let result = `U`.repeat(startPath!.slice(i).length) + destPath!.slice(i).join("");

  return result;
};
