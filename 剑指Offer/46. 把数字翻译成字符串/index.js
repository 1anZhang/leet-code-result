/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
  let s = num + '';
  let a = 1, b = 1;
  for (let i = 2; i <= s.length; i++) {
    let tmp = s.substring(i - 2, i);
    tmp = +tmp;
    let c = tmp >= 10 && tmp <= 25 ? a + b : a;
    b = a;
    a = c;
  }
  return a;
};