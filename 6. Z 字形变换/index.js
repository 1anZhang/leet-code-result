// 输入: s = "ABCDEFGHIJKLMN", numRows = 3
// 输出: "LCIRETOESIIGEDHN"
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * 首先，我们知道，他这个其实是分组的，分组大小为let size = 2 * numRows - 2 一组。
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

var convert2 = function(s, numRows) {
    let resultS;
    let res = new Array(numRows).fill(null);
    let circleNum = numRows * 2 - 2;
    for(let i = 0; i < s.length; i++) {
        let num = i % circleNum;
        if (num < numRows) {
            if (res[num]) {
                res[num].push(s[i])
            } else {
                res[num] = [s[i]]
            }
        } else {
            let j = circleNum - num;
            res[j].push(s[i])
        }
    }
    let arr = [];
    res.forEach(e => {
        arr = arr.concat(e)
    })
    resultS = arr.join('')
    return resultS;
};

let s = "PAYPALISHIRING";
let numRows = 4;

let s1 = "A";
let numRows1 = 1;

let result = convert2(s1, numRows1);
console.log(result);
