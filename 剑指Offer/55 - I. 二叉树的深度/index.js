/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let max = 0;
  function dfs (root, deep) {
    if (root === null) return;
    max = Math.max(deep + 1, max);
    dfs(root.left, deep + 1);
    dfs(root.right, deep + 1);
  }

  dfs(root, 0);
  return max;
};