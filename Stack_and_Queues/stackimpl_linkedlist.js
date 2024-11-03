class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = this.top;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.top) return null;
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    let poppedHead = this.top;
    this.top = this.top.next;
    this.length -= 1;
    return poppedHead;
  }

  printStack() {
    const arr = [];
    let currentNode = this.top;
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr);
    return arr;
  }
}

let stack = new Stack();

stack.push("google");
stack.push("udemy");
stack.push("discord");
console.log(stack.peek());
stack.printStack();
stack.pop();
stack.pop();
stack.pop();
console.log(stack);
// stack.printStack();
// stack.printStack();
