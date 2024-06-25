// First solution, solved 2024-06-25 (with help)
// Time: O(n), space: O(n)

// Definition for a binary tree node.
 class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
}

function bstToGst(root: TreeNode | null): TreeNode | null {
  let cumulative = 0;
  
  function bfs(root: TreeNode | null) {
      if (root) {
          bfs(root.right);
          cumulative += root.val;
          root.val = cumulative;
          bfs(root.left);
      }
  }

  bfs(root);

  return root;
};
