/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 第一种方法，时间复杂度O(n)，空间复杂度O(n)， 使用一个Set存储遍历过的节点
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let visited = new Set();
  while (head) {
    if (visited.has(head)) return true;
    visited.add(head);
    head = head.next;
  }
  return false;
};

/**
 * 第二种方法，时间复杂度O(n)，空间复杂度O(1)， 快慢指针
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head.next;
  while (fast) {
    if (slow === fast) return true;
    slow = slow.next;
    fast = fast.next?.next;
  }
  return false;
};
