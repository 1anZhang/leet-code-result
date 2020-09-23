/**
 * 寻找数组的中心索引
 * 给定一个整数类型的数组 nums，请编写一个能够返回数组 “中心索引” 的方法。
 * 我们是这样定义数组 中心索引 的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。
 * 如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。
 */

/**
 * 首先判断边界条件：输入数组长度为0或者2返回-1 输入数组长度为1返回0
 * 还是先用暴力算法，遍历数组，然后分别计算两边数的值，时间复杂度为O(n²), 空间复杂度为O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function calcSum(nums, start, end) {
  let acc = 0;
  for(let i = start; i < end; i++) {
    acc += nums[i]
  }
  return acc;
}
var pivotIndex1 = function(nums) {
  if (nums.length === 0 || nums.length === 2) return -1;
  if (nums.length === 1) return 0;
  for (let i = 0; i < nums.length; i++) {
    if (calcSum(nums, 0, i) === calcSum(nums, i + 1, nums.length)) return i;
  }
  return -1
};

/**
 * 此外，肯定还有一些其他的方法可以去更加有效率的解答这道题，那就是缓存
 * 用一个额外的数组，第一轮遍历算出所有元素左边数的和以及所有数的总和并存储，第二轮遍历计算每个元素左右是否相等
 * 时间复杂度为O(n), 空间复杂度为O(n)
 */
var pivotIndex2 = function(nums) {
  if (nums.length === 0 || nums.length === 2) return -1;
  if (nums.length === 1) return 0;
  let sum = 0;
  let accArray = [];
  for (let i = 0; i < nums.length; i++) {
    accArray.push(sum);
    sum += nums[i]
  }
  for (let i = 0; i < nums.length; i++) {
    if (sum - nums[i] === 2 * accArray[i]) return i
  }
  return -1
};



let a = [1,7,3,6,5,6];
let result1 = pivotIndex1(a);
let result2 = pivotIndex1(a);
console.log(result1);
console.log(result2);
