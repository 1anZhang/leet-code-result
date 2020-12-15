/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 我们知道，前序遍历的第一个节点一定是根节点，而中序遍历时，根节点的左侧全部为它的左子树
 * 根节点的右侧全部为它的右子树，此时，就把一个大的问题分成了两个子树，通过递归的方式，我们继续处理两个子树
 * 最终，递归的出口就是给定的数组左下标大于右下标，此时树到达根节点
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};

function build(preorder, preStart, preEnd, inorder, inStart, inEnd) {
  if(preStart > preEnd) return null;

  let rootVal = preorder[preStart];
  // 找到中序遍历根节点的位置
  let index = inorder.findIndex(i => i === rootVal);

  let root = {
    val: rootVal
  };
  // 左子树的大小
  let leftSize = index - inStart;
  // 前序遍历数组，左下标加1，长度就是左子树的长度，中序遍历数组，就是start到index - 1
  root.left = build(preorder, preStart + 1, preStart + leftSize, inorder, inStart, index - 1);
  // 前序遍历数组，左下标就是preStart + 左子树的长度再加一，到preEnd， 中序遍历数组是index + 1到end
  root.right = build(preorder, preStart + leftSize + 1, preEnd, inorder, index + 1, inEnd);
  return root;
}
