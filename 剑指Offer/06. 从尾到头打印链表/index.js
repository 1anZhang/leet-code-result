/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 反向输出链表，用栈存一下然后反向输出
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
  let arr = [];
  while(head) {
    arr.push(head);
    head = head.next;
  }
  return arr.reverse().map(i => i.val);
};