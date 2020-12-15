/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) return [];
  let l = 0, r = matrix[0].length - 1, t = 0, b = matrix.length - 1, x = 0;
  let res = [];
  while(true) {
    for (let i = l; i <= r; i++) res[x++] = matrix[t][i]; // 从左向右
    if (++t > b) break;
    for(let i = t; i <= b; i++) res[x++] = matrix[i][r]; // 从上向下
    if (l > --r) break;
    for(let i = r; i >= l; i--) res[x++] = matrix[b][i]; // 从右向左
    if (t > --b) break;
    for(let i = b; i >= t; i--) res[x++] = matrix[i][l]; // 从下向上
    if(++l > r) break;
  }
  return res;
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
let res = spiralOrder(matrix);