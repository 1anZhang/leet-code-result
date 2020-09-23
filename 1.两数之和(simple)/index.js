/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 */

/**
 * 显然这道题有很多种不同的解法，第一种，暴力循环，两层循环去计算两个值的和是否是给定的target的值
 * 这种方法的时间复杂度是O(n²), 空间复杂度是O(1);
 * 执行用时：140 ms, 在所有 JavaScript 提交中击败了45.13%的用户
 * 内存消耗: 36.4 MB, 在所有JavaScript提交中击败了 6.95% 的用户
 */

/**
 * 解法① 双循环暴力查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function (nums, target) {
  if (nums.length === 0) return [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [];
};

/**
 * 第二种，使用hashMap，遍历数组，将遍历过的数组存入hashMap，查找hashMap的时间复杂度为O(1)
 * 然后每次读取新的元素时只需要查找对应hashMap中是否有 target - num[i] 的值存在即可
 * 若值存在，则有两个数之和为target，计算结束。
 * 并且，由于需要返回两个数的下标，需要将下标存在hashMap的值中。
 * 这种方法的时间复杂度是O(n), 空间复杂度是O(n);
 * 执行用时: 80 ms, 在所有JavaScript提交中击败了 97.81% 的用户
 * 内存消耗：37.4 MB, 在所有 JavaScript 提交中击败了54.35%的用户
 */

/**
 * 解法② 使用hashMap
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (nums, target) {
  let hashMap = new Map();
  let result = [];
  nums.forEach((elem, index) => {
    if (hashMap.get(target - elem) !== undefined) {
      result = [hashMap.get(target - elem), index];
    }
    hashMap.set(elem, index);
  });
  return result;
};

let a = [2, 7, 11, 15];
let res1 = twoSum1(a, 9);
let res2 = twoSum2(a, 9);
console.log('res1', res1, 'res2', res2);
