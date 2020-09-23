/**
 * 零矩阵
 * 编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。
 */

/**
 * 目前能想到的是遍历整个二维数组，然后将值为0的位置的x和y分别用两个Set存储起来
 * 然后遍历两个set给数组设置0值
 * 时间复杂度O(mn)， 空间复杂度为O(max(m, n))
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let arrX = new Set();
  let arrY = new Set();
  matrix.forEach((line, x) => {
    line.forEach((item, y) => {
      if (item === 0) {
        arrX.add(x);
        arrY.add(y);
      }
    });
  });
  arrX.forEach(item => {
    matrix[item].fill(0)
  })
  arrY.forEach(item => {
    matrix.forEach(line => {
      line[item] = 0;
    });
  });
};

let input = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

setZeroes(input);

let output = [
  [0, 0, 0, 0],
  [0, 4, 5, 0],
  [0, 3, 1, 0],
];
