/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
  let arr = [];
  let total = Math.pow(10, n);
  for (let i = 1; i < total; i++) {
    arr.push(i);
  }
  return arr;
};