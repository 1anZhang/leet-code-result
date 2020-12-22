/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let res = null;
  for (let i = 1; i <= x; i++) {
    if (i * i <= x) {
      res = i;
    } else {
      break;
    };
  }
  return res;
};