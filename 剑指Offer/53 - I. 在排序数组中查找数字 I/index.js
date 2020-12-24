/**
 * 最简单的循环
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let sum = 0;
  nums.forEach(e => {
    if (e === target) sum++
  })
  return sum;
};

/**
 * 其实这道题是排序好的，那么就一定可以考虑二分法去解题
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  function helper(nums, tar) {
    let i = 0, j = nums.length - 1;
    while(i <= j) {
      let m = Math.floor((i + j) / 2);
      if (nums[m] <= tar) {
        i = m + 1;
      } else {
        j = m - 1;
      }
    }
    return i;
  }
  return helper(nums, target) - helper(nums, target - 1);
};