class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length += 1;
    return this;
  }

  dequeue() {
    if (!this.first) return null;
    if (this.first === this.last) {
      console.log(this);
      this.last = null;
    }
    this.first = this.first.next;
    this.length -= 1;
    return this;
  }

  printLinkedList() {
    const arr = [];
    let currentFirst = this.first;
    while (currentFirst) {
      arr.push(currentFirst.value);
      currentFirst = currentFirst.next;
    }
    console.log(arr);
    return arr;
  }
}

let queue = new Queue();
queue.enqueue(2);
queue.enqueue(3);
// console.log(queue);
queue.enqueue(5);
console.log(queue);
queue.printLinkedList();
queue.dequeue();
console.log(queue);
queue.dequeue();
queue.dequeue();
console.log(queue);
queue.printLinkedList();
