/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  return buildTree(nums, 0, nums.length);
};

function buildTree(nums, left, right) {
  if (left === right) return null;
  let maxIndex = findMax(nums, left, right);
  let root = {
    val: nums[maxIndex]
  };
  root.left = buildTree(nums, left, maxIndex);
  root.right = buildTree(nums, maxIndex + 1, right);
  return root;
}

function findMax(nums, left, right) {
  let max = left;
  for (let i = left; i < right; i++) {
    if (nums[i] > nums[max]) max = i;
  }
  return max;
}