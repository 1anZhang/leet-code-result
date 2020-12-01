/**
 * 简单来说，排下序，重复的一定连着
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  let last = -1;
  let flag = -1;
  nums.sort();
  nums.some((ele) => {
    if (ele === last) {
      flag = ele;
      return true;
    } else {
      last = ele;
    }
  });
  return flag;
};

/**
 * 简单来说，用一个set存一下
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber2 = function (nums) {
  let repeat = -1;
  let set = new Set();
  nums.some((el) => {
    if (set.has(el)) {
      repeat = el;
      return true;
    } else {
      set.add(el);
    }
  });
  return repeat;
};

/**
 * 换位置,因为在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
 * 所以，我们遍历，遇到一个数，就把这个数和相应下标的数比较，如果相同，那么就有重复数字。
 * 其次，当不相同时，就把这个数和相应下标的数交换位置。
 * 如果当前元素的值和遍历的下标相等时，跳过。
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber3 = function (nums) {
  let repeat = -1;
  nums.some((el, index) => {
    if (el !== index) {
      if (nums[el] === el) {
        repeat = el;
        return true;
      } else {
        let temp = nums[el];
        nums[el] = el;
        nums[index] = temp;
      }
    }
  })
  return repeat;
};

let arr = [2, 3, 1, 0, 2, 5, 3];

let result = findRepeatNumber3(arr);
console.log('12331', result);
