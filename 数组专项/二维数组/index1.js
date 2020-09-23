/**
 * 旋转矩阵
 * 给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。
 * 请你设计一种算法，将图像旋转 90 度。不占用额外内存空间能否做到？
 */

/**
 * 这不是扯淡吗，不占用额外内存空间也太难了吧，至少需要O(1)个空间用来做数据交换吧
 * 所以如果是O(1)，需要找到矩阵旋转的规律。
 * 首先，进行一次旋转，我们发现会有四个数进行一个轮转，需要使用一个额外变量进行数据交换。
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate1 = function (matrix) {
  let n = matrix.length;
  for (let i = 0; i < (n - 1) / 2; i++) {
    for (let j = 0; j < n / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[n - j - 1][i];
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
      matrix[j][n - i - 1] = temp;
    }
  }
};

/**
 * 第二种 矩阵的知识 直接进行一个水平的翻转，再进行一个对角线的翻
 */

var rotate2 = function (matrix) {
  let n = matrix.length;
  matrix.reverse();
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
};

let matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

// rotate1(matrix);
rotate2(matrix);

const result = [
  [15, 13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7, 10, 11],
];
