class Stack {
  constructor() {
    this.arr = [];
  }
  peek() {
    return this.arr[this.arr.length - 1];
  }
  push(value) {
    this.arr.push(value);
    return this;
  }
  pop() {
    return this.arr.pop();
  }
}

let stack = new Stack();

stack.push("google");
stack.push("udemy");
stack.push("discord");
console.log(stack.peek());
console.log(stack);
console.log(stack.pop());
console.log(stack);
