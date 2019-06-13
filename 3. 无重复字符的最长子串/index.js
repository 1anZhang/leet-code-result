/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) return 0;
    let total = 0, tempStr = '';
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        let strIndex = tempStr.indexOf(element);
        if (strIndex === -1) {
            tempStr += element;
            total = total > tempStr.length ? total : tempStr.length;
        } else {
            tempStr = tempStr.substr(strIndex + 1, tempStr.length);
            tempStr += element;
            total = total > tempStr.length ? total : tempStr.length;
        }
    }
    return total;
};

let input = '0qwerwedasfsajfkjahdsicasivhiuapsfha'
let output = lengthOfLongestSubstring(input);
console.log(output);