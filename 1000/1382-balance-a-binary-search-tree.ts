// First solution, solved 2024-06-26 (with help)
// Time: O(n), space: O(n)

// Definition for a binary tree node
interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
}

function balanceBST(root: TreeNode | null): TreeNode | null {
  let values: number[] = [];
  inorderTraverse(root, values);
  return buildBST(values, 0, values.length - 1);
}

function buildBST(values: number[], start: number, end: number): TreeNode | null {
  if (start > end) return null;

  let mid = Math.floor((start + end) / 2);

  let left = buildBST(values, start, mid - 1);
  let right = buildBST(values, mid + 1, end);

  const newNode: TreeNode = new TreeNode(values[mid], left, right);
  return newNode;
}

function inorderTraverse(node: TreeNode | null, values: number[]): void {
  if (node === null) return;

  inorderTraverse(node.left, values);
  values.push(node.val);
  inorderTraverse(node.right, values);
}
