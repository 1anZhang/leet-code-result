/**
 * split拆分一下
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  let v1 = version1.split('.');
  let v2 = version2.split('.');
  let len = Math.max(v1.length, v2.length);
  for (let i = 0; i < len; i++) {
    let num1 = +v1[i] || 0;
    let num2 = +v2[i] || 0;
    if (num1 === num2) continue;
    if (num1 > num2) return 1;
    return -1;
  }
  return 0;
};


let version1 = "1.01";
let version2 = "1.001";