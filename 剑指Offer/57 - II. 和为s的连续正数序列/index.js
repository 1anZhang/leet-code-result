/**
 * @param {number} target
 * @return {number[][]}
 * 这道题呢，使用滑动窗口，需要左右两个指针，因为是连续的数字，我们可以利用求和公式去计算
 * 求和公式是这个：sum = (l + r) * (r - l + 1) / 2
 * 然后，我们初始化两个指针都指向1，当sum < target时，右指针向右移嘛，
 * 当sum > target时，左指针就向右移。
 * 当左指针到达了target的 1 / 2时，循环就该结束了。
 */
var findContinuousSequence = function(target) {
  let res = []
  let l = r = 1;
  while (l < target / 2) {
      let sum = (l + r) * (r - l + 1) / 2;
      if (sum > target) {
          l++;
      } else if (sum < target) {
          r++;
      } else {
          let arr = [];
          for(let i = l; i <= r; i++) {
              arr.push(i)
          }
          res.push(arr);
          l++;
      }
  }
  return res;
};