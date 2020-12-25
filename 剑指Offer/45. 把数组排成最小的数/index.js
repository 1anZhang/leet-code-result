/**
 * 这道题本质上是一道排序题，就是把小的放前面，大的放后面，
 * 核心就是排序的时候，比较一下ab及ba
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
  let str = '';
  nums.sort((a, b) => {
    return +(a + '' + b) - +(b + '' + a);
  })
  nums.forEach(e => {
    str += e
  })
  return str;
};