/**
 * 这道约瑟夫环的问题，其实不是很理解，但是方法是倒着推
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
  let result = 0;
  for (let i = 2; i <= n; i++) {
    result = (result + m) % i;
  }
  return result;
};


