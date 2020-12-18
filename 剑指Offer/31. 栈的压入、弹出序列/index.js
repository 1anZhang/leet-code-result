/**
 * 其实就是这样的，用一个栈去模拟，push数组先压栈，然后去popped查看能否进行弹出，
 * 不能弹出就继续压栈，能弹出就弹出，最后，如果弹空了，那么就是可以的，
 * 如果没弹空，就是顺序不对的
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  let stack = [];
  let index = 0;
  pushed.forEach(i => {
    stack.push(i);
    while(stack.length !== 0 && stack[stack.length -1] === popped[index]) {
      stack.pop();
      index++;
    }
  })
  return stack.length === 0;
};