/**
 * 动态规划，dp table，只不过这是一个二维的dptable。
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
  let r = grid[0].length - 1;
  let b = grid.length - 1;
  for (let i = 0; i <= b; i++) {
      for (let j = 0; j <= r; j++) {
          if (i === 0 && j === 0) continue;
          if (i === 0) {
              grid[i][j] += grid[i][j - 1]
          } else if (j === 0) {
              grid[i][j] += grid[i - 1][j] 
          } else {
              grid[i][j] += Math.max(grid[i][j - 1], grid[i - 1][j])
          }
      }
  }
  return grid[b][r];
};

let arr = [[1,3,1],[1,5,1],[4,2,1]];
let res = maxValue(arr);

