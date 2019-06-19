// 输入: s = "ABCDEFGHIJKLMN", numRows = 3
// 输出: "LCIRETOESIIGEDHN"
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows <= 1) return s;
    let res = '';
    let size = 2 * numRows - 2;
    for (let i = 0; i < numRows; i++) {
        for(let j = i; j < s.length; j += size) {
            res += s[j];
            if (i !=0 && i != numRows - 1 && j - i + (size-i) < s.length) {
                res += s[j - i+ (size-i)];
            }
        }
    }
    return res;
};

let s = "ABCDEFGHIJKLMN";
let numRows = 5;

let result = convert(s, numRows);
console.log(result);
