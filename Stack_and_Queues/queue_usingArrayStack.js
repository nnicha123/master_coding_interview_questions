class Queue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    if (length > 0) {
      for (let i = 0; i < length; i++) {
        this.last.push(this.first.pop());
      }
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    if (this.first.length === 0) {
      while (this.last.length > 0) {
        this.first.push(this.last.pop());
      }
      this.first.pop();
    }
    return this;
  }

  peek() {
    if (this.first.length > 0) {
      return this.first[this.first.length - 1];
    }
    return this.last[0];
  }
}

let queue = new Queue();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(5);
console.log(queue);
queue.dequeue();
console.log(queue);
queue.enqueue(7);
console.log(queue);
queue.dequeue();

console.log(queue);
