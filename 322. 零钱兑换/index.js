/**
 * 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
 * 如果没有任何一种硬币组合能组成总金额，返回 -1。
 */

/**
 * 递归+缓存
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange1 = function (coins, amount) {
  let caches = [];
  function dp(n) {
    if (caches[n] != undefined) return caches[n];
    if (n < 0) return -1;
    if (n === 0) return n;
    let res = Infinity;
    coins.forEach((item) => {
      let sub = dp(n - item);
      if (sub === -1) return;
      res = Math.min(res, 1 + sub);
    });
    caches[n] = res === Infinity ? -1 : res;
    return caches[n];
  }

  return dp(amount);
};

/**
 * 使用dp table, 从下向上依次算出每个值的结果，循环的出口是给定的amount
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange2 = function (coins, amount) {
  let caches = [0];
  for (let i = 1; i <= amount; i++) {
    let res = Infinity;
    coins.forEach((item) => {
      if (i - item < 0) return;
      if (caches[i - item] === -1) return;
      res = Math.min(res, 1 + caches[i - item]);
    });
    caches[i] = res === Infinity ? -1 : res;
  }
  return caches[amount];
};

let coins = [1, 2];
let amount = 13;
let result = coinChange2(coins, amount);
console.log(result);
