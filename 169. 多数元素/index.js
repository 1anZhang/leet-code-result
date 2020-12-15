/**
 * 第一种，hashmap的方式，记录一下就好了
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = new Map();
  nums.forEach((i) => {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  });
  let res;
  map.forEach((value, key) => {
    if (value > (nums.length / 2)) {
      res = key
    }
  });
  return res;
};

/**
 * 第二种，是摩尔投票算法，两个不相等的数字，就相撞，最后剩下的一定会是超过半数的那个数
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let res = {
    key: null,
    value: 0
  };
  nums.forEach(i => {
    if (i !== res.key && res.value === 0) {
      res.key = i;
      res.value = 1;
      return;
    }
    if (i !== res.key) {
      res.value -= 1;
    } else {
      res.value += 1;
    }
  })
  return res.key;
};

let arr = [6,5,5]
let result = majorityElement(arr);
debugger;
