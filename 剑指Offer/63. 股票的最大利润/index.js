/**
 * 其实可以暴力解
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0;
  let len = prices.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      max = Math.max(max, prices[j] - prices[i])
    }
  }
  return max;
};

/**
 * 然后可以用动态规划去解
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let cost = Infinity;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    cost = Math.min(cost, prices[i]);
    profit = Math.max(profit, prices[i] - cost);
  }
  return profit;
};