class Node {
  constructor(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

let HEAD = new Node(1);

function insertElementLast(data) {
  let node = HEAD;

  while (node.next != null) {
    node = node.next;
  }

  node.next = new Node(data, null, node);
}

function insertElementFirst(data) {
  const newNode = new Node(data, HEAD);

  HEAD.prev = newNode;
  HEAD = newNode;
}

function insertElementAt(index, data) {
  if (index === 0) return insertElementFirst(data);

  let node = HEAD;
  let i = 0;

  while (i < index && node.next != null) {
    i++;
    node = node.next;
  }

  if (i < index) {
    if (i + 1 === index) {
      node.next = new Node(data, null, node);

      return;
    }

    return 'ERROR';
  }

  const newNode = new Node(data, node, node.prev);

  node.prev.next = newNode;
  node.prev = newNode;
}

function deleteLastElement() {
  let node = HEAD;

  while (node.next != null) {
    node = node.next;
  }

  node.prev.next = null;
}

function deleteFirstElement() {
  const node = HEAD;

  node.next.prev = null;
  HEAD = node.next;
}

function deleteElementAt(index) {
  if (index === 0) return deleteFirstElement();

  let node = HEAD;
  let i = 0;

  while (i < index && node.next != null) {
    i++;
    node = node.next;
  }

  if (i < index) return 'ERROR';

  node.prev.next = node.next;

  if (node.next != null) node.next.prev = node.prev;
}
