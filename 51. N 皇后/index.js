/**
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
 * 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 */

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let res = [];
  let board = [];
  for (let index = 0; index < n; index++) {
    board.push('.'.repeat(n));
  }
  function backtrack(board, row) {
    if (board.length === row) {
      res.push([...board]);
      return;
    }
    let n = board[row].length;
    for (let col = 0; col < n; col++) {
      if (!isValid(board, row, col)) {
        continue;
      }
      board[row] = '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1);
      backtrack(board, row + 1);
      board[row] = '.'.repeat(n);
    }
  }

  backtrack(board, 0);
  return res;
};

function isValid(board, row, column) {
  // 检查列是否有冲突
  for (let i = 0; i < row; i++) {
    if (board[i][column] === 'Q') return false;
  }
  // 检查左上是否有冲突
  for (let i = row - 1, j = column - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 'Q') return false;
  }
  // 检查右上是否有冲突
  for (let i = row - 1, j = column + 1; i >= 0 && j < board.length; i--, j++) {
    if (board[i][j] === 'Q') return false;
  }
  return true;
}

let res = solveNQueens(4);
console.log('res', res);