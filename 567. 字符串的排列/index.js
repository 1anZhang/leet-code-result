/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let a = s1.split('');
    
    return s2.indexOf(s1) > -1;
};

let s1 = "ab", s2 = "eidbaooo";
let r = checkInclusion(s1, s2);
console.log(r);