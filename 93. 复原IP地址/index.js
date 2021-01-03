/**
 * 这道理是典型的暴力穷举法，通过回溯，穷举所有可能性。
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  let len = s.length;
  const result = [];
  if (len > 12 || len < 4) {
    return result;
  }
  backtracking(0, []);
  function backtracking(begin, strArray) {
    if (begin > s.length) return;
    if (strArray.length === 4) {
      // 全部用完，然后呢，index为4
      if (begin === s.length) {
        result.push(strArray.join('.'));
      }
      return;
    }
    // 回溯的回溯，实际上主要是for循环里的回溯，因为上一个循环改变了一些参数，需要在退出递归的时候，重置回去。
    for (let i = 1; i < 4; i++) {
      if (begin + i > s.length) break;
      let tempS = s.substr(begin, i);
      if (judge(tempS)) {
        begin += i;
        strArray.push(tempS);
        backtracking(begin, strArray);
        begin -= i;
        strArray.pop();
      }
    }

  }
  return result;
};

function judge(str) {
  let num = +str;
  if (str.length > 1 && str[0] === '0') return false;
  if (num > -1 && num < 256) return true;
  return false;
}

let r1 = restoreIpAddresses("25525511135");
let r2 = restoreIpAddresses("0000");
let r3 = restoreIpAddresses("1111");
let r4 = restoreIpAddresses("010010");
let r5 = restoreIpAddresses("101023");
let r6 = restoreIpAddresses("25525511135");
// let r7 = restoreIpAddresses("25525511135");