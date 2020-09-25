/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 */

/**
 * 第一种解法，横向扫描法
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';
    let len = strs.length;
    let prefix = strs[0];
    for(let i = 1; i < len; i++) {
      if (prefix.length === 0) break;
      prefix = lcp(prefix, strs[i])
    }
    return prefix;
}

function lcp(str1, str2) {
  const max = Math.max(str1.length, str2.length);
  let index = 0;
  while (index < max && str1[index] === str2[index]) {
    index++;
  }
  return str1.substring(0, index);
}

/**
 * 第二种，纵向扫描法
 * 首先是
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix2 = function(strs) {
  if (!strs.length) return '';
  let len = strs.length;
  let prefix = strs[0];
  for (let i = 0; i < prefix.length; i++) {
    const c = prefix[i];
    for (let j = 1; j < len; j++) {
      if (c !== strs[j][i] || c === strs[j].length) {
        return strs[0].substring(0, i);
      }      
    }
  }
  return strs[0];
}

let a = ["flower","flow","flight"];
// let a = ["dog233","dog2","dog1"];
let b = longestCommonPrefix2(a);
console.log(b);