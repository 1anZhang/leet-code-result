/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len = s.length;
    if (len === 0 || len === 1) return len;
    let start = 0, max = 0, cur=0;
    const map = new Map();
    for (let index = 0; index < len; index++) {
        const element = s[index];
        let i = map.get(element);
        if (i != null && i >= start) {
            start = i;
            cur = index - start;
        } else {
            cur++;
        }
        map.set(element, index);
        max = max > cur ? max : cur;
    }
    return max;
};

// let input = '0qwerwedasfsajfkjahdsicasivhiuapsfha';
let input = "pwwkew";
let output = lengthOfLongestSubstring(input);
console.log(output);