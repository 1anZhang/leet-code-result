/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  const power = (x, n) => {
    if (n === 0) return 1;
    if (n % 2 === 1) {
      return power(x * x, Math.floor(n / 2)) * x;
    } else {
      return power(x * x, n / 2);
    }
  }
  if (n < 0) {
    return power(1 / x, -n)
  } else {
    return power(x, n)
  }

};