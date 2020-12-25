/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s = s.trim();
  let arr = s.split(' ');
  arr = arr.filter(value => {
    return value != ''
  })
  arr.reverse();
  s = arr.join(' ');
  return s;
};

// 一行搞定
var reverseWords = function(s) {
  return s.trim().split(/\s+/).reverse().join(' ');
};

let s = "the sky    is blue";
reverseWords(s)