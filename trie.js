class Node {
  constructor(char, children, isWord, count) {
    this.char = char;
    this.children = children || new Map();
    this.isWord = isWord || false;
    this.count = count || 0;
  }

  getChild(char) {
    return this.children.get(char);
  }

  setChild(char, node) {
    this.children.set(char, node);
  }

  getNodeByString(string) {
    if (string.length === 1) return this.getChild(string);

    const child = this.getChild(string.charAt(0));

    if (child == null) return;

    return child.getNodeByString(string.slice(1));
  }
}

// Implement Contact list:
// - Add contact
// - Given a string, return how many contacts begin with that string

class Trie {
  constructor() {
    this.root = new Node('*');
  }

  addString(string) {
    const l = string.length;
    let node = this.root;
    let child;

    for (let i = 0; i < l; i++) {
      child = node.getChild(string.charAt(i));

      if (child == null) {
        child = new Node(string.charAt(i));

        node.setChild(string.charAt(i), child)
      }

      node = child;
    }

    node.isWord = true
    node.count++;
  }

  findCount(string) {
    const node = this.root.getNodeByString(string);

    if (node == null) return 0;

    return Trie.count(node);
  }

  static count(node) {
    let c = node.count;

    for (const [i, entry] of node.children.entries()) {
      c += Trie.count(entry);
    }

    return c;
  }
}
