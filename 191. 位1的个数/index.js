/**
 * 直接按位与进行计算，循环32次
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let count = 0;
  while(n > 0) {
    if (n & 1) count++;
    n = n >>> 1;
  }
  return count;
};

/**
 * 还有一种特殊的方法，用来消去数字中的1
 * 有几个1循环几次
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let count = 0;
  while(n !== 0) {
    count++;
    // 一次消去一个1
    n = n & (n - 1);
  }
  return count;
};