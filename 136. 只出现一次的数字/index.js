/**
 * 因为要求空间复杂度为O(1)，所以只能使用异或的方式去计算，
 * 由于0 ^ n = n， n ^ n = 0，所以每个数都进行异或，最后得到的那个数就是只出现一次的数字。
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let n = 0;
  nums.forEach(num => {
    n ^= num;
  })
  return n;
};