/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 双指针翻转,还需要添加一个中间变量。首先让cur指向head，pre指向head前一个位置，即null。
 * 然后利用一个中间变量存储cur的next，让cur指向pre，完成一次翻转，然后两个指针同时向前移。
 * 一直到cur为null，pre就位翻转好的链表的头部。
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseBetween = function(head, m, n) {
  let pre = null;
  let cur = head;
  let index = 1;
  let headNode = null;
  let tailNode = null;
  while (cur) {
    if (index === m -1) headNode = cur;
    if (index === n) tailNode = cur;
    if (index < m) {
      pre = cur;
      cur = cur.next;
    }
    if (index > n) {
      
    }
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};