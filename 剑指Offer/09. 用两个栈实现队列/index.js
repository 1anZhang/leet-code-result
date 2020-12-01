var CQueue = function() {
  this.length = 0;
  this.stack1 = [];
  this.stack2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  while(this.stack1.length > 0) {
    this.stack2.push(this.stack1.pop())
  }
  this.stack2.push(value);
  while(this.stack2.length > 0) {
    this.stack1.push(this.stack2.pop())
  }
  this.length++;
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  if (this.length === 0) return -1;
  this.length--;
  return this.stack1.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */