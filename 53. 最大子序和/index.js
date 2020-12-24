/**
 * 这里的核心，使用一个max保存记录过的最大值，
 * 然后用一个pre记录，之前连续最大的和，这个和加上当前值x，再和当前值x比较
 * 如果这个pre没有x大，就直接丢弃之前的所有和，如果pre+x > x，就继续累加。
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let pre = 0; maxAns = nums[0];
  nums.forEach(x => {
    pre = Math.max(pre + x, x);
    maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
};

let arr = [-2,1,-3,4,-1,2,1,-5,4];
maxSubArray(arr);