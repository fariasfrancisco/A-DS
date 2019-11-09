class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

let HEAD = new Node(1, null);

function getLastElement() {
  let node = HEAD;

  while (node.next != null) {
    node = node.next;
  }

  return node;
}

function insertElement(data) {
  const lastElement = getLastElement();

  lastElement.next = new Node(data, null);
}

function printListIterative() {
  let node = HEAD;
  console.log(node.data);

  while (node.next == null) {
    node = node.next;

    console.log(node.data);
  }
}

function printListRecursive(node) {
  console.log(node.data);

  if (node.next != null) printListRecursive(node.next);
}

function getElementAt(index) {
  if (index === 0) return HEAD;

  let i = 0;
  let node = HEAD;

  while (i < index && node.next != null) {
    i++;
    node = node.next;
  }

  if (i < index) return null;

  return node;
}

function insertElementAt(index, element) {
  if (index === 0) {
    element.next = HEAD;
    HEAD = element;

    return;
  }

  let i = 0;
  let elm = HEAD;

  while (i + 1 < index) {
    elm = elm.next;
  }

  element.next = elm.next;
  elm.next = element;
}

function deleteLastElement() {
  if (HEAD.next == null) {
    HEAD = undefined;

    return;
  }

  let previous;
  let element = HEAD;

  while (element.next != null) {
    previous = element;
    element = element.next;
  }

  previous.next = null;
}

function deleteElementAt(index) {
  if (index === 0) {
    HEAD = HEAD.next;

    return;
  }

  let previous;
  let i = 0;
  let elm = HEAD;

  while (i + 1 < index) {
    elm = elm.next;
  }

  previous.next = elm.next;
}

function getLengthIterative() {
  let length = 1;
  let element = HEAD;

  while (element.next != null) {
    length++;
    element = element.next;
  }

  return length;
}

function getLengthRecursive(node) {
  if (node.next == null) return 1;

  return 1 + getLengthRecursive(node.next);
}

function searchByKeyIterative(key) {
  let element = HEAD;

  while (element.data !== key && element.next != null) {
    element = element.next
  }

  return element.data === key;
}

function searchByKeyRecursive(node, key) {
  if (node.data === key) return true;
  if (node.next == null) return false;

  return searchByKeyRecursive(node.next, key);
}

function getMiddleElement() {
  let half = getLengthIterative() / 2;

  if (half % 2 === 0) half++;

  return getElementAt(half);
}

// The most efficient way is to use two pointers, the first moves by 1 and the second by 2.
// When the second reaches the end, return the node that the first one is pointing at.

function hasKey(node, key) {
  return node.data === key ? 1 : 0;
}

function countRepetitionsRecursive(node, key) {
  if (node.next == null) return node.data === key ? 1 : 0;

  return countRepetitionsRecursive(node.next, key) + node.data === key ? 1 : 0;
}

function countRepetitionsIterative(key) {
  let element = HEAD;
  let repetitions = HEAD.data === key ? 1 : 0;

  while (element.next != null) {
    element = element.next;
    repetitions += element.data === key ? 1 : 0;
  }

  return repetitions;
}

function hasLoop() {
  let nodes = [HEAD];
  let element = HEAD;

  while (element.next != null) {
    element = element.next;

    if (nodes.includes(element)) return true;

    nodes.push(element);
  }

  return false;
}

function isPalindrome() {
  let stack = [HEAD.data];
  let element = HEAD;
  let elm;

  while (element.next != null) {
    element = element.next;

    stack.push(element.data);
  }

  element = HEAD;
  elm = stack.shift();

  if (element.data !== elm) return false;

  while (element.next != null) {
    element = element.next;
    elm = stack.shift();

    if (element.data !== elm) return false;
  }

  return true;
}
