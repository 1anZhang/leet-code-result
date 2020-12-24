/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  let arr = [];
  let path = [];
  function dfs(root, tar) {
    if (root === null) return;
    path.push(root.val);
    tar -=root.val;
    if (tar === 0 && root.left === null && root.right === null) {
      arr.push([...path])
    };
    dfs(root.left, tar);
    dfs(root.right, tar);
    path.pop();
  }

  dfs(root, sum);
  return arr;
};