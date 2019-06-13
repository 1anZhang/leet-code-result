/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMiddleNum(arr) {
    if (arr.length % 2 === 1) {
        let mid = (arr.length - 1) / 2;
        return arr[mid]; 
    } else {
        let mid = arr.length / 2;
        return (arr[mid] + arr[mid - 1]) / 2; 
    }
}
var findMedianSortedArrays = function(nums1, nums2) {
    let mid1 = Math.floor((nums1.length - 1) / 2);
    let mid2 = Math.floor((nums2.length -1) / 2);
    let num1 = nums1[mid1];
    let num2 = nums2[mid2];
    while(num1 !== undefined || num2 !== undefined) {
        if (num1 === num2) {
            return num1;
        }
        if (!num1) {
            return findMiddleNum(nums2);
        }
        if (!num2) {
            return findMiddleNum(nums1);
        }
        if (num1 > num2) {
            let min = Math.min(mid1, mid2);
            nums1.splice(nums1.length - min - 1, nums1.length);
            nums2.splice(0, min + 1);
        } else {
            let min = Math.min(mid1, mid2);
            nums2.splice(nums2.length - min - 1, nums2.length);
            nums1.splice(0, min + 1);
        }
        mid1 = Math.floor((nums1.length - 1) / 2);
        mid2 = Math.floor((nums2.length -1) / 2);
        num1 = nums1[mid1];
        num2 = nums2[mid2];
    }
};

let arr1 = [1, 3];
let arr2 = [2];
let res = findMedianSortedArrays(arr1, arr2);
console.log(JSON.stringify(res));