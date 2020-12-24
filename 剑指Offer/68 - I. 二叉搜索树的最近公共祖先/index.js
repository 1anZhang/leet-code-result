/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 二叉搜索树的特点就是，小的在左边，大的在右边，
 * 因为一定能找到一个公共的父节点，
 * 所以p和q都大于当前节点时，去右边节点继续查找，
 * p和q都小于当前节点时，去左边节点查找，
 * 如果一个大一个小，说明这个节点就是最近公共祖先了，
 * 后面那道题难一些，因为无序
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  while (root !== null) {
    if (root.val < p.val && root.val < q.val) {
      root = root.right;
    } else if (root.val > p.val && root.val > q.val) {
      root = root.left;
    } else {
      return root
    }
  }
};