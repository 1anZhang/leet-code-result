/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let res = undefined, currentNode = undefined;
    let carryFlag = false;
    while (l1 || l2 || carryFlag) {
        let a = (l1 && l1.val) || 0;
        let b = (l2 && l2.val) || 0;
        let sum = a + b;
        if (carryFlag) {
            sum += 1;
            carryFlag = false;
        }
        if (sum >= 10) {
            sum %= 10;
            carryFlag = true;
        }
        let node = new ListNode(sum);
        if (!res) {
            res = currentNode = node;
        } else {
            currentNode.next = node;
            currentNode = node;
        }
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    return res;
};

let l1 = [2, 4, 3];
let l2 = [5, 6, 4];
let res = addTwoNumbers(l1, l2);
console.log(res);
