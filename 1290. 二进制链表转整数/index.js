/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  let sum = 0;
  while (head) {
    sum = sum * 2 + head.val;
    head = head.next;
  }
  return sum;
};