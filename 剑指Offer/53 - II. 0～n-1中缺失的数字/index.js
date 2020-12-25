/**
 * 要注意理解题目，长度为n-1，但是数字范围是0~n-1，共有n个数，
 * 所以，按照下标，如果当前下标i的数字不是i，那么缺失的就是i，
 * 如果当前下标全部符合，那么缺失的数字就是n-1，最后return一下数字长度的值即可
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) return i;
  }
  return nums.length;
};