/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  let temp = Number(x.toString().split('').reverse().join(''));
  return x === temp;
};

let a = isPalindrome(121);
let b = isPalindrome(10);
let c = isPalindrome(-1);

console.log('a,', a, b, c);