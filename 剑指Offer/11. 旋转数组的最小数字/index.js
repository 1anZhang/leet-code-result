/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let cur = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= cur) {
      cur = numbers[i];
    } else {
      return numbers[i];
    }
  }
  return numbers[0];
};

let arr = [2, 2, 2, 0, 1];
let result = minArray(arr);
