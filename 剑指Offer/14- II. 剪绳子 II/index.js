/**
 * 这个是数学推导出来的，最大值极点为e≈2.7
 * 当大于4的时候切一份3
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
  if (n === 2 || n === 3) {
    return n - 1;
  }
  let res = 1;
  while(n > 4) {
    n -= 3;
    res = (res * 3) % 1000000007;
  }
  return (n * res) % 1000000007;
};


const a = Math.sqrt(6);
