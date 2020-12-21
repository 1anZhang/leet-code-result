/**
 * 核心是排序，剪枝，去除重复的元素，那么什么时候是重复的元素呢
 * 首先是
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = [];
  const used = new Array(nums.length).fill(false);
  const backtrack = (index, arr) => {
    if (index === nums.length) {
      res.push([...arr]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) {
        continue;
      }
      arr.push(nums[i]);
      used[i] = true;
      backtrack(index + 1, arr);
      used[i] = false;
      arr.pop();
    }
  };
  nums.sort();
  backtrack(0, []);
  return res;
};
