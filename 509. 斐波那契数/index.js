/**
 * 斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。
 * 该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
 * 
 */

/**
 * 递归解法
 * @param {number} n
 * @return {number}
 */
let caches = [];
var fib1 = function (n) {
  if (n === 0 || n === 1) return n;
  if (caches[n]) return caches[n];
  caches[n] = fib(n - 1) + fib(n - 2)
  return caches[n];
};

/**
 * 迭代解法
 * @param {number} n
 * @return {number}
 */
let caches2 = [];
var fib2 = function (n) {
  if (n === 0 || n === 1) return n;
  caches2[0] = 0;
  caches2[1] = 1;
  for (let i = 2; i <= n; i++) {
    caches2[i] = caches2[i - 1] + caches2[i - 2]
  }
  return caches2[n];
};

/**
 * 迭代解法--状态压缩
 * @param {number} n
 * @return {number}
 */
var fib3 = function (n) {
  if (n === 0 || n === 1) return n;
  let pre = 0;
  let cur = 1;
  let sum = 0;
  for (let i = 2; i <= n; i++) {
    sum = pre + cur;
    pre = cur;
    cur = sum;
  }
  return sum;
};