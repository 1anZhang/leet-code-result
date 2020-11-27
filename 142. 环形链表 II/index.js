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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let visited = new Set();
  while (head) {
    if (visited.has(head)) return head;
    visited.add(head);
    head = head.next;
  }
  return null;
};

/**
 * 第二种方法，时间复杂度O(n)，空间复杂度O(1)， 还是快慢指针
 * slow * 2 = fast;
 * slow = a + b;
 * fast = a + b + c + b = a + 2*b + c;
 * (a + b)*2 = a + 2*b + c;
 * a = c;
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (head === null) {
        return null;
    }
    let slow = head, fast = head;
    while (fast !== null) {
        slow = slow.next;
        if (fast.next !== null) {
            fast = fast.next.next;
        } else {
            return null;
        }
        if (fast === slow) {
            let ptr = head;
            while (ptr !== slow) {
                ptr = ptr.next;
                slow = slow.next;
            }
            return ptr;
        }
    }
    return null;
}