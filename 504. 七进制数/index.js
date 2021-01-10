/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  if (num < 0) return '-' + convertToBase7(-num);
  if (num < 7) return num + '';
  return convertToBase7(Math.floor(num / 7)) + (num % 7) + '';
};

//输入: 100 输出: "202"
let num = 100;
let result = convertToBase7(num);