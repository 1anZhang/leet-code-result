//54. 二叉搜索树的第k大节点
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 这道理利用了二叉搜索树的特性，我们知道，二叉搜索树，中序遍历，
 * 遍历的结果是一个递增的数组，是有序的，那么此时找第k大的数就很容易了，
 * 然后如果反着遍历，先遍历右边，再遍历左边，那么就是一个降序数组，找第k大的数就更容易了。
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
  let arr = [];
  function dfs(root) {
    if (root === null) return;
    dfs(root.right);
    arr.push(root.val);
    dfs(root.left);
  }
  dfs(root);
  return arr[k - 1];
};