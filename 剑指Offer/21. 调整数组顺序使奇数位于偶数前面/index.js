/**
 * 投机取巧的办法，利用了排序算法，让他直接把奇数排前面就好了
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange1 = function(nums) {
  let result = nums.sort((a, b) => {
    return b % 2 === 1 ? 1 : -1;
  });
  return result;
};

/**
 * 头尾指针，从前面找到第一个偶数，和后面第一个奇数换，然后两个指针相遇结束
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  let head = 0, tail = nums.length - 1;
  while (head <= tail) {
    while(nums[head] % 2 === 1) {
      head++;
    }
    while(nums[tail] % 2 === 0) {
      tail--;
    }
    if (tail < head) break;
    let temp = nums[head];
    nums[head] = nums[tail];
    nums[tail] = temp;
  }
  return nums
};

/**
 * 还有一种快慢指针的，快指针指向奇数，慢指针指向偶数，然后快指针走到头就可以结束了。
 * @param {number[]} nums
 * @return {number[]}
 */


let nums = [1,2,3,4];
let result = exchange(nums);