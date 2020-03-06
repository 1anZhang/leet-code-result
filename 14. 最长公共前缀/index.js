/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';

    let commonStr = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(commonStr) != 0) {
            commonStr = commonStr.substring(0, commonStr.length - 1);
        }
    }
    return commonStr;
}

// let a = ["flower","flow","flight"];
let a = ["dog233","dog2","dog1"];
let b = longestCommonPrefix(a);
console.log(b);