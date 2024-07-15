// First solution, solved 2024-07-15 in 1:25:25 (with help)
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

function createBinaryTree(descriptions: number[][]): TreeNode | null {
  let nodeMap = new Map<number, TreeNode>();
  let orphanNodes = new Set<number>(descriptions.map(node => node[0]));

  for (const node of descriptions) {
      let parent = null;
      let child = null;
      
      // Find or create parent
      if (nodeMap.has(node[0])) { // Parent exists
          parent = nodeMap.get(node[0])!;
      } else {
          parent = new TreeNode(node[0]);
          nodeMap.set(node[0], parent);
      }

      // Find or create child
      if (nodeMap.has(node[1])) { // Parent exists
          child = nodeMap.get(node[1])!;
      } else {
          child = new TreeNode(node[1]);
          nodeMap.set(node[1], child);
      }

      // Attach 'em
      if (node[2]) {
          parent.left = child;
      } else {
          parent.right = child;
      }

      // Mark as not the root
      if (orphanNodes.has(child.val)) {
          orphanNodes.delete(child.val);
      }
  }

  return nodeMap.get([...orphanNodes][0])!;
}