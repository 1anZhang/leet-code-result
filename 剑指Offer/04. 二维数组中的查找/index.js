/**
 * 首先嘛，根据已经排好序的原则，我们从右上角开始的话，
 * 如果当前节点相等，返回true，如果当前节点大于target，往左移，如果当前节点小于target，往下移
 * 直到到达边界
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  let m = matrix.length;
  if (m === 0) return false;
  let n = matrix[0].length;
  let x = n - 1;
  let y = 0;
  while(x >= 0 && y < m) {
    if (target === matrix[y][x]) {
      return true;
    } else if (target > matrix[y][x]) {
      y++;
    } else if (target < matrix[y][x]) {
      x--
    };
  }
  return false;
};

let matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
let target = 20;

findNumberIn2DArray(matrix, target);