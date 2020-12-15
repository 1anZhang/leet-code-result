/**
 * 第一种方法还是先用暴力解法吧，就是暴力破解双循环
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (nums === null || nums.length === 0) {
    return []
  }
  let len = nums.length;
  let size = len - k + 1;
  let result = [];
  for(let i = 0; i < size; i++) {
    let max = nums[i];
    for (let j = i; j < i + k; j++) {
      max = Math.max(max, nums[j]);
    }
    result[i] = max;
  }
  return result;
};
