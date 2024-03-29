class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor(node) {
    this.head = node; // Remove Here
    this.tail = node; // Add Here
  }

  isEmpty() {
    return this.head == null
  }

  getHead() {
    return this.head != null ? this.head.data : undefined;
  }

  addNode(data) {
    const node = new Node(data);

    this.tail.next = node;
    this.tail = node;
  }

  removeNode() {
    if (this.head == null) return console.error('No Nodes in Queue');

    const data = this.head.data;

    this.head = this.head.next;

    if (this.head == null) this.tail = undefined;

    return data;
  }
}

class Stack {
  constructor(node) {
    this.top = node;
  }

  isEmpty() {
    return this.top == null
  }

  getTop() {
    return this.top != null ? this.top.data : undefined;
  }

  pushNode(data) {
    this.top = new Node(data, this.top);
  }

  popNode() {
    if (this.top == null) return;

    const data = this.top.data;

    this.top = this.top.next;

    return data;
  }
}
