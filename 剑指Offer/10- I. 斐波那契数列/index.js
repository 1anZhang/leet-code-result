/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if (n === 0 || n === 1) return n;
  let pre = 0;
  let cur = 1;
  let sum = 0;
  for (let i = 2; i <= n; i++) {
    sum = (pre + cur) % 1000000007;
    pre = cur;
    cur = sum;
  }
  return sum;
};