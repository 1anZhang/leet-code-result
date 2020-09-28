/**
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 */

/**
 * 核心思路，使用回溯算法进行全排列
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
  let res = [];
  let track = [];
  function backtrack(nums, track) {
    // 递归的出口
    if (track.length === nums.length) {
      res.push([...track]);
      return;
    }
    // 进入回溯
    nums.forEach((element) => {
      if (track.findIndex((item) => item === element) !== -1) return;
      track.push(element);
      backtrack(nums, track);
      track.pop();
    });
  }
  backtrack(nums, track);
  return res;
};
