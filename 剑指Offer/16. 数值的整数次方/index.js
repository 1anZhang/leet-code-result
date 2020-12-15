/**
 * 直接写会超出运行时间限制，如果我们直接遍历，就是O(n) 这个n可能巨大，
 * 如果我们使用二分法，就是O(logn)，这里的二分法就是让 2^10 变成 4^5 再变成 16^2 * 4 最后变成256 * 4
 * 让本来循环n次的变成了logn次
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n >= 0) {
    return power(x, n);
  } else {
    return power(1 / x, -n);
  }
};

function power(x, n) {
  if (n === 0) return 1;
  let r = power(x, Math.floor(n / 2));
  if (n % 2 === 1) {
    return r * r * x;
  } else {
    return r * r;
  }
}
