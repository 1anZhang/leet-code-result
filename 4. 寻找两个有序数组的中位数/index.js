/**
 * 此类问题可以归类为寻找两个有序数组中第k大的某个数，那么如何能够寻找到第k大的某个数呢
 * 首先我们能够获取到k/2，
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
    let x = nums1.length;
    let y = nums2.length;
    let left = 0, right = x;
    while( left <= right) {
        let middle = Math.floor((x + y + 1) / 2);
        let partX = Math.floor((left + right) / 2);
        let partY = middle - partX;

        let maxLeftX =  partX === 0 ? -Infinity : nums1[partX - 1];
        let minRightX = partX === x ? Infinity : nums1[partX];
        let maxLeftY = partY === 0 ? -Infinity : nums2[partY - 1];
        let minRightY = partY === y ? Infinity : nums2[partY];

        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if ((x + y) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY){
            right = partX - 1;
        } else {
            left = partX + 1;
        }
    }
};

let arr1 = [1,2];
let arr2 = [3,4];
let res = findMedianSortedArrays(arr1, arr2);
console.log(JSON.stringify(res));