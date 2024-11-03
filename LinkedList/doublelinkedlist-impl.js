class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length += 1;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
    return array;
  }

  insert(index, value) {
    if (index === 0) return this.prepend(value);
    else if (index >= this.length) return this.append(value);
    else {
      const newNode = new Node(value);
      const leader = this.traverseToIndex(index - 1);
      const follower = leader.next;

      leader.next = newNode;
      newNode.prev = leader;
      newNode.next = follower;
      follower.prev = newNode;
      this.length += 1;
    }
    return this;
  }

  remove(index) {
    let leader = this.head;
    if (index <= 0) {
      leader = this.head.next;
      leader.prev = null;
      this.head = leader;
      this.length -= 1;
      return this;
    } else if (index >= this.length - 1) {
      const newTail = this.traverseToIndex(this.length - 2);
      newTail.next = null;
      this.tail = newTail;
      this.length -= 1;
      return this;
    } else {
      leader = this.traverseToIndex(index - 1);
      const unwantedNode = leader.next;
      const follower = unwantedNode.next;
      leader.next = follower;
      follower.prev = leader;
      this.length -= 1;
      return this;
    }
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter < index) {
      currentNode = currentNode.next;
      counter += 1;
    }
    return currentNode;
  }
}

// 1 --> 10 --> 5 --> 16

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
// myLinkedList.insert(5, 88);
// myLinkedList.printList();
myLinkedList.remove(4);
console.log(myLinkedList);
// myLinkedList.printList();
// myLinkedList.remove(3);
// myLinkedList.printList();
// myLinkedList.remove(3);
// myLinkedList.printList();
// myLinkedList.remove(0);
myLinkedList.printList();
