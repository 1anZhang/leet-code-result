/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 方案一，暴力法，直接双层遍历
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let pA = headA;
  while (pA) {
    let pB = headB;
    while (pB) {
      if (pA === pB) return pA;
      pB = pB.next;
    }
    pA = pA.next;
  }
  return null;
};

/**
 * 方案二，哈希表，存一下第一个链表的节点，然后第二个链表遍历的时候去查
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  const hashmap = new Map();
  let pA = headA;
  while (pA) {
    hashmap.set(pA, 1);
    pA = pA.next;
  }

  let pB = headB;
  while (pB) {
    if (hashmap.has(pB)) return pB;
    pB = pB.next;
  }
};

/**
 * 方案三，双指针，两个指针都走一遍链表A和B，如果他们有相交的点，那么第二轮一定会在交点汇合
 * 如果不存在交点，那么最后都在null相遇。
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let pA = headA;
  let pB = headB;
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pA;
};