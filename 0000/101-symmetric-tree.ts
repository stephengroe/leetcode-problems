// First solution, solved 2025-04-30 in ~15:00

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

function isSymmetric(root: TreeNode | null): boolean {
  let rightNodeList: Array<number | null> = [];
  let leftNodeList: Array<number | null> = [];

  // Walk left
  function walkLeft(root: TreeNode | null, nodeList: Array<number | null>) {
      if (!root) {
          nodeList.push(null);
          return
      };
      nodeList.push(root.val);
      walkLeft(root.right, nodeList);
      walkLeft(root.left, nodeList);
  }

  // Walk right
  function walkRight(root: TreeNode | null, nodeList: Array<number | null>) {
      if (!root) {
          nodeList.push(null);
          return
      };
      nodeList.push(root.val);
      walkRight(root.left, nodeList);
      walkRight(root.right, nodeList);
  }

  walkRight(root.right, rightNodeList);
  walkLeft(root.left, leftNodeList);

  for (let i = 0; i<rightNodeList.length; i++) {
      if (rightNodeList[i] !== leftNodeList[i]) return false;
  }

  return true;
};