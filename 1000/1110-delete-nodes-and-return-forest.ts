// First solution, solved 2024-07-17 in 35:35
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

function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
	const deleteSet = new Set(to_delete);
	let result: Array<TreeNode> = [];

	if (root === null) return result;
	// If we don't delete the root, add to result
	if (!deleteSet.has(root.val)) result.push(root);

	function dfs(node: TreeNode | null) {
		if (node === null) return;

		dfs(node.right);
		dfs(node.left);

		// If we need to delete left
		if (node.left && deleteSet.has(node.left.val)) {
			node.left = null;
		}

		// If we need to delete right
		if (node.right && deleteSet.has(node.right.val)) {
			node.right = null;
		}

		// If we need to delete self
		if (deleteSet.has(node.val)) {
			if (node.left) result.push(node.left);
			if (node.right) result.push(node.right);
        }
	}

	dfs(root);

	return result;
}