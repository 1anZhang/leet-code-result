/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 这个就老老实实，一个节点一个节点地找呗。
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let ans;
  function dfs(root, p, q) {
    if (root === null) return false;
    let l = dfs(root.left, p, q);
    let r = dfs(root.right, p, q);
    if (
      (l && r) ||
      ((l || r) && (root.val === p.val || root.val === q.val))
    ) {
      ans = root;
    }
    return l || r || root.val === p.val || root.val === q.val;
  }

  dfs(root, p, q);
  return ans;
};