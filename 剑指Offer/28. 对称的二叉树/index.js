/**
 * 这道题其实你把它想象成比较两棵树，就很容易理解了，
 * 然后，第二颗树翻转一下，直接去比较两棵树，就能判断这个数是不是对称的树了
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  function compare(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    return compare(p.left, q.right) && compare(q.left, p.right)
  }

  return compare(root, root)
};