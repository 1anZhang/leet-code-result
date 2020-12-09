/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 这道理使用了一个后序遍历，先拉平左右子树，然后把左子树塞到右子树的前面。
 * 因为是后序遍历，所以左右子树是已经flatten过的。
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (root === null) return;
  flatten(root.left);
  flatten(root.right);

  let left = root.left;
  let right = root.right;

  root.left = null;
  root.right = left;

  let temp = root;
  while(temp.right !== null) {
    temp = temp.right
  };
  temp.right = right;
};