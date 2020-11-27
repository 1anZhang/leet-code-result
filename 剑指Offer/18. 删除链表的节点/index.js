/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
  let pre = null;
  let cur = head;
  while(cur) {
    if (cur.val === val) {
      if (cur === head) {
        head = head.next;
      } else {
        pre.next = cur.next;
      }
      break;
    }
    pre = cur;
    cur = cur.next;
  }
  return head;
};