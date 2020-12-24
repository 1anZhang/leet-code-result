/**
 * 最简单的方式，时间复杂度O(n)，空间复杂度O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(target - nums[i])) {
      return [nums[i], target - nums[i]]
    } else {
      set.add(nums[i])
    }
  }
};

/**
 * 这道题是有序的，所以有优化方法的,头尾指针，直到找到一个符合的，或者指针相交。
 * 证明，因为 i + j < target, 那么小于i的加j一定小于target
 * 因为i + j > target，那么大于j的加i一定大于target
 * 所以向内缩的过程，不会排除掉合理解。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let i = 0, j = nums.length - 1;
  while(i < j) {
    let sum = nums[i] + nums[j];
    if (sum < target) {
      i++;
    } else if (sum > target){
      j--;
    } else {
      return [nums[i], nums[j]];
    }
  }
};