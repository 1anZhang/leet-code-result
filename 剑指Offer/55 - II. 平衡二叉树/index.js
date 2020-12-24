/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 这道题的核心也是递归遍历树，然后是后序遍历整个🌲，
 * 如果某个节点不平衡了，直接向上传递这个不平衡的结果，记为-1
 * 递归出口是节点为null，返回0
 * 如果左右子树都不为-1，比较左右子树的高度，小于等于1，返回左右子树最高的那个再+1
 * 如果不符合条件，直接返回-1，向上传递
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  function recur(root) {
    if (root === null) return 0;
    let l = recur(root.left);
    if (l === -1) return - 1;
    let r = recur(root.right);
    if (r === -1) return -1;
    return Math.abs(l - r) <= 1 ? Math.max(l, r) + 1 : -1;
  }

  return recur(root) !== -1;
};