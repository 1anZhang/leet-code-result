/**
 * 最简单的循环
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let sum = 0;
  nums.forEach(e => {
    if (e === target) sum++
  })
  return sum;
};

/**
 * 其实这道题是排序好的，那么就一定可以考虑二分法去解题
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  function helper(nums, tar) {
    let i = 0, j = nums.length - 1;
    while(i <= j) {
      let m = Math.floor((i + j) / 2);
      if (nums[m] <= tar) {
        i = m + 1;
      } else {
        j = m - 1;
      }
    }
    return i;
  }
  return helper(nums, target) - helper(nums, target - 1);
};


/**
 * 关于这个二分法找边界的问题，就按照下面这个框架来，i > j的时候跳出循环
 * 然后当 nums[m] <= tar时，i就会终止在第一个大于tar的位置。
 * 当 nums[m] < tar，i就会终止在第一个 >= tar的位置。
 * 所以二分法找一个数的出现次数，可以调整这个等于号，
 * 此外也可以向上面那样，因为是正整数，找tar和tar - 1之间的距离，计算tar的个数
 */

function helper(nums, tar) {
  let i = 0, j = nums.length - 1;
  while(i <= j) {
    let m = Math.floor((i + j) / 2);
    if (nums[m] <= tar) {
      i = m + 1;
    } else {
      j = m - 1;
    }
  }
  return i;
}

let r1 = helper([1,2,3,4,4,5,5,5,6,7,9,9,9,10,11], 3);
let r2 = helper([1,2,3,4,4,5,5,5,6,7,9,9,9,10,11], 5);
let r3 = helper([1,2,3,4,4,5,5,5,6,7,9,9,9,10,11], 7);
let r4 = helper([1,2,3,4,4,5,5,5,6,7,9,9,9,10,11], 8);
let r5 = helper([1,2,3,4,4,5,5,5,6,7,9,9,9,10,11], 9);
let r6 = helper([1,2,3,4,4,5,5,5,6,7,9,9,9,10,11], 10);