/**
 * 合并区间
 * 给出一个区间的集合，请合并所有重叠的区间。
 * 示例 1:
 *  输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
 *  输出: [[1,6],[8,10],[15,18]]
 *  解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * 示例 2:
 *  输入: intervals = [[1,4],[4,5]]
 *  输出: [[1,5]]
 *  区间 [1,4] 和 [4,5] 可被视为重叠区间。
 */

/**
 * 这是一道有那么一点点特别的，但又不那么特殊的一道题，数组的区间合并，首先我们对数组进行排序，那么
 * 如果我们按照区间的左端点排序，那么在排完序的列表中，可以合并的区间一定是连续的。
 * 这一点可以通过反证法去证明，通过掌握了这个特性，这道题的解法就变得非常容易
 * 具体的题解https://leetcode-cn.com/problems/merge-intervals/solution/he-bing-qu-jian-by-leetcode-solution/
 */

 /**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if(intervals.length <= 1) return intervals;
  let merged = [];
  intervals.sort((a, b) => (a[0] - b[0]));
  for(let i = 0; i < intervals.length; i++) {
    const [left, right] = intervals[i];
    if (merged.length === 0 || merged[merged.length - 1][1] < left) {
      merged.push([left, right])
    } else {
      merged[merged.length - 1][1] = Math.max(right, merged[merged.length - 1][1]);
    }
  }
  return merged;
};

const itv1 = [[1,3],[2,6],[8,10],[15,18]];
const result1 = merge(itv1);
console.log('检查', result1)
const itv2 = [[1,4], [5,10],[15,18]];
const result2 = merge(itv2);
console.log('检查', result2)