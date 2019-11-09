class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  isBST() {
    function checkRange(node, min, max) {
      if (node == null) return true;
      if (node.data < min || node.data > max) return false;

      return checkRange(node.left, min, node.data) && checkRange(node.right, node.data, max);
    }

    return checkRange(this.root, Number.MIN_VALUE, Number.MAX_VALUE)
  }

  insertNode(data) {
    if (this.root == null) {
      this.root = new Node(data);

      return;
    }

    function insert(node, data) {
      const side = data <= node.data ? 'left' : 'right';

      if (node[side] == null) node[side] = new Node(data);
      else insert(node[side], data);
    }

    insert(this.root, data);
  }

  containsData(data) {
    if (this.root == null) return false;

    function contains(node, data) {
      if (node == null) return false;
      if (data === node.data) return true;

      return contains(data < node.data ? node.left : node.right, data);
    }
  }

  printInOrder() {
    if (this.root == null) return;

    function print(node) {
      if (node.left != null) print(node.left);

      console.log(node.data);

      if (node.right != null) print(node.right);
    }

    print(this.root);
  }

  balanceTree() {
    if (this.root == null) return;

    const array = [];

    function getInOrder(node) {
      if (node.left != null) getInOrder(node.left);

      array.push(node.data);

      if (node.right != null) getInOrder(node.right);
    }

    getInOrder(this.root);

    this.root = Tree.buildNodeWithArray(array)
  }

  static buildNodeWithArray(array) {
    if (array.length < 1) return;

    const i = Math.floor(array.length / 2);

    return new Node(array[i], Tree.buildNodeWithArray(array.slice(0, i)), Tree.buildNodeWithArray(array.slice(i + 1)));
  }

  static getBSTFromSortedArray(array) {
    return new Tree(Tree.buildNodeWithArray(array));
  }
}
