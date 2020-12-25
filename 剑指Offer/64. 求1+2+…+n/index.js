/**
 * 这道题，限制不能用乘除，所以只能用短路的方式终结循环条件
 * 然后当n=0的时候，用递归的方式去加加加
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
  n && (n += sumNums(n - 1));
  return n;
};