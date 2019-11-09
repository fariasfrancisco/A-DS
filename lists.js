class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(node) {
    this.head = node;
  }

  getLastElement() {
    let node = this.head;

    while (node.next != null) {
      node = node.next;
    }

    return node;
  }

  getElementAt(index) {
    if (index === 0) return this.head;

    let i = 0;
    let node = this.head;

    while (i < index && node.next != null) {
      i++;
      node = node.next;
    }

    if (i < index) return null;

    return node;
  }

  insertElement(data) {
    if (this.head == null) {
      this.head = new Node(data, null);

      return;
    }

    const lastNode = getLastElement();

    lastNode.next = new Node(data, null);
  }

  insertElementAt(index, data) {
    const newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;

      return;
    }

    let i = 0;
    let node = this.head;

    while (i + 1 < index) {
      node = node.next;
    }

    newNode.next = node.next;
    node.next = newNode;
  }

  deleteLastElement() {
    if (this.head == null) return;

    if (this.head.next == null) {
      this.head = undefined;

      return;
    }

    let previous;
    let node = this.head;

    while (node.next != null) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  deleteElementAt(index) {
    if (this.head == null) return;

    if (index === 0) {
      this.head = this.head.next;

      return;
    }

    let previous;
    let i = 0;
    let node = this.head;

    while (i + 1 < index) {
      node = node.next;
    }

    previous.next = node.next;
  }

  deleteByKey(key) {
    if (this.head == null) return;

    if (this.head.data === key) {
      this.head = this.head.next;

      return;
    }

    let node = this.head;

    while (node.next != null && node.next.data !== key) {
      node = node.next;
    }

    if (node.next == null) return;

    node.next = node.next.next;
  }

  printList() {
    let node = this.head;
    console.log(node.data);

    while (node.next == null) {
      node = node.next;

      console.log(node.data);
    }
  }

  getLength() {
    let length = 1;
    let element = this.head;

    while (element.next != null) {
      length++;
      element = element.next;
    }

    return length;
  }

  getNodeByKey(key) {
    if (this.head == null) return;

    let node = this.head;

    while (node.data !== key) {
      node = node.next;
    }

    return node;
  }
}
