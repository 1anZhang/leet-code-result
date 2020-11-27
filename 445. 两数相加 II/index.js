/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 不能进行链表翻转，那么我们选择使用栈的后进先出的方式进行数据计算，最后使用头插法转为链表。
 * 需要注意的点，注意进位，注意判空，可能会最高位再进位。
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const stack1 = [];
  const stack2 = [];
  while(l1) {
    stack1.push(l1);
    l1 = l1.next;
  }
  while(l2) {
    stack2.push(l2)
    l2 = l2.next;
  }
  let num1 = stack1.pop();
  let num2 = stack2.pop();
  let head = {
    val: null,
    next: null
  };
  let carry = false;
  while(num1 || num2) {
    let node = {
      val: 0,
      next: head.next
    }
    if (num1) node.val += num1.val;
    if (num2)  node.val += num2.val;
    if (carry) node.val += 1;
    if (node.val > 9) {
      carry = true;
      node.val = node.val - 10
    } else {
      carry = false;
    }
    head.next = node;
    num1 = stack1.pop();
    num2 = stack2.pop();
  }
  if (carry) {
    let node = {
      val: 1,
      next: head.next
    }
    return node;
  }
  return head.next;
};