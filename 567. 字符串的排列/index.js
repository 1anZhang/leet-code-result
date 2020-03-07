/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let n1 = s1.length,n2 = s2.length;
    if(n1 > n2) return false;
    let count = new Array(26).fill(0);
    let isAllZero = (count) => {
        return count.every( val => val === 0);
    }
    for(let i = 0;i < n1;i++){
        count[s1[i].charCodeAt() - 97]++;
        count[s2[i].charCodeAt() - 97]--;
    }
    if(isAllZero(count)) return true;
    for(let i = n1;i < n2;i++){
        count[s2[i].charCodeAt() - 97]--;
        count[s2[i - n1].charCodeAt() - 97]++;
        if(isAllZero(count)) return true;
    }
    return false;
};

// let s1 = "ab", s2 = "eidbaooo";
let s1= "abaaaaaaaaaa", s2 = "eidabaaaaaaaaaaboaoo";
let r = checkInclusion(s1, s2);
console.log(r);