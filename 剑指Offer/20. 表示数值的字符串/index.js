/**
 * 这个真的是纯纯的正则表达式的匹配，测了一大堆测试用例才完成的
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  s = s.trim();
  let reg1 = /^(\+|-)?((\d+\.\d+)|(\.\d+)|(\d+\.)|\d+)([eE][-\+]?\d+)?$/;
  return reg1.test(s);
};