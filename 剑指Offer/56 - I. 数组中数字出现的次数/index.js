/**
 * 这道题和只出现一次的数字的区别是，有两个不同的数，所以没办法直接进行异或计算找到那个不同的数字。
 * 所以核心问题就是：两个只出现一次的数字在不同的组中；相同的数字会被分到相同的组中。
 * 那么我们对所有元素异或，得到的结果一定是两个不同的数的异或值，
 * 此时，我们用一个mask，找到这个结果中最低位的1，这两个不同的数在这个位置一定不一样，所以两个数字就分为了两个组，
 * 用这个mask对所有数字进行分组，相同的数字一定在同一组，因为mask位的数值一样，
 * 所以就满足上面两个条件，然后分别进行异或就找到了两个不同的数。
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
  let k = 0;
  nums.forEach(num => {
    k ^= num;
  })
  let mask = 1;
  while((k & mask) === 0) {
    mask <<= 1;
  }
  let a = 0;
  let b = 0;
  nums.forEach(num => {
    if ((num & mask) === 0) {
      a ^= num;
    } else {
      b ^= num;
    }
  })
  return [a, b];
};