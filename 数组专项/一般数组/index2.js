/**
 * 搜索插入位置
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素。
 */

/**
 * 这题太简单了，暴力方法就是遍历一遍就知道了，时间复杂度为O(n),空间复杂度为O(1)
 * 那肯定不能这么整，既然是有序数组，自然会想到二分法，将复杂度降为O(log(n)),同时空间复杂度还是为O(1)
 * 再仔细分析这道题目，需要总结其中的规律就是，当有相同元素时，插入的位置就是第一个相同元素的位置
 * 当不存在相同的元素时，出循环的时候nums[end]是小于target的，nums[start]是小于target的
 * ()
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] < target) {
      start = mid + 1;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return start;
};

let nums1 = [1, 3, 5, 6];
let target1 = 5;
let result1 = searchInsert(nums1, target1);
console.log('是否正确：', result1 === 2);

let nums2 = [1, 3];
let target2 = 4;
let result2 = searchInsert(nums2, target2);
console.log('是否正确：', result2 === 2);

let target3 = 2;
let result3 = searchInsert(nums1, target3);
console.log('是否正确：', result3 === 1);

let target4 = 0;
let result4 = searchInsert(nums1, target4);
console.log('是否正确：', result4 === 0);
