/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  let c = ' ';
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1)
    } else {
      map.set(s[i], 1)
    }
  }
  for (let [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }
  return c;
};