/**
 * 使用回溯法来解决这个问题
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const h = board.length,
    w = board[0].length;
  // 四方向遍历，用来方便的找到四个方向的下一个节点
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  // 需要使用一个相同大小的二维数组，标记是否已经遍历过该节点
  const visited = new Array(h);
  for (let i = 0; i < visited.length; ++i) {
    visited[i] = new Array(w).fill(false);
  }

  const check = (i, j, s, k) => {
    // 出口，如果不相等，返回false，如果到了最后一个字符，返回true
    if (board[i][j] != s.charAt(k)) {
      return false;
    } else if (k == s.length - 1) {
      return true;
    }
    // 回溯，当前节点标记为访问过，接着添加新的路径，回溯结果返回，
    visited[i][j] = true;
    let result = false;
    for (const [dx, dy] of directions) {
      let newi = i + dx,
        newj = j + dy;
      // 首先不能越界，然后没访问过，就添加进路径继续访问
      if (newi >= 0 && newi < h && newj >= 0 && newj < w) {
        if (!visited[newi][newj]) {
          // 找到任何一个节点满足条件，就可以跳出了
          const flag = check(newi, newj, s, k + 1);
          if (flag) {
            result = true;
            break;
          }
        }
      }
    }
    // 回溯出口，移除当前节点，返回结果
    visited[i][j] = false;
    return result;
  };

  // 从word的字符开始做回溯，这是第一层筛选
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      const flag = check(i, j, word, 0);
      if (flag) {
        return true;
      }
    }
  }
  return false;
};
