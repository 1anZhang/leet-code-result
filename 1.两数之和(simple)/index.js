/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = {};
    let result = [];
    nums.forEach((elem, index) => {
        if (hashMap[target - elem] !== undefined) {
            result = [hashMap[target - elem], index];
        }
        hashMap[elem] = index;
    })
    return result;
};

let a = [2,7,11,15];
let res = twoSum(a, 9);
console.log(res);

// 执行用时: 80 ms, 在所有JavaScript提交中击败了 97.81% 的用户
// 内存消耗: 36.4 MB, 在所有JavaScript提交中击败了 6.95% 的用户