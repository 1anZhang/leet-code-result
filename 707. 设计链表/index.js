/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.size = 0;
  this.head = {
    val: null,
    next: null
  };
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index < 0 || index >= this.size) return -1;
      let cur = this.head;
    // index steps needed 
    // to move from sentinel node to wanted index
    for(let i = 0; i < index + 1; ++i) cur = cur.next;
    return cur.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  this.addAtIndex(0, val);
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  this.addAtIndex(this.size, val);
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    // If index is greater than the length, 
    // the node will not be inserted.
    if (index > this.size) return;

    // [so weird] If index is negative, 
    // the node will be inserted at the head of the list.
    if (index < 0) index = 0;

    ++this.size;
    // find predecessor of the node to be added
    let pre = this.head;
    for(let i = 0; i < index; ++i) pre = pre.next;

    // node to be added
    let toAdd = {
      val,
      next: null
    };
    // insertion itself
    toAdd.next = pre.next;
    pre.next = toAdd;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || index >= this.size) return;
  --this.size;
  // find predecessor of the node to be added
  let pre = this.head;
  for(let i = 0; i < index; ++i) pre = pre.next;
  pre.next = pre.next.next;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */