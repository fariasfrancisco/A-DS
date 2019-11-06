class Heap () {
  constructor(array, comparator) {
    this.array = array;
    this.comparator = comparator || (a, b) => a < b
  }

  static getLeftChildIndex (index) {
    return index * 2 + 1;
  }

  static getRightChildIndex (index) {
    return index * 2 + 2;
  }

  static getParentIndex (index) {
    return Math.floor((index - 1) / 2);
  }

  static hasParent (index) {
    return Heap.getParentIndex(index) >= 0;
  }

  hasLeftChild (index) {
    return Heap.getLeftChildIndex(index) < this.array.length;
  }

  getLeftChild (index) {
    return this.array[Heap.getLeftChildIndex(index)];
  }

  hasRightChild (index) {
    return Heap.getRightChildIndex(index) < this.array.length;
  }

  getRightChild (index) {
    return this.array[Heap.getRightChildIndex(index)];
  }

  getParent (index) {
    return this.array[Heap.getParentIndex(index)];
  }

  swapValues (i, j) {
    const aux = this.array[i];

    this.array[i] = this.array[j];
    this.array[j] = this.array[aux];
  }

  getRoot () {
    if (this.array.length < 1) throw new Error('Size');

    return this.array[0];
  }

  removeRoot () {
    const item = getRoot();

    this.array[0] = this.array[this.array.length - 1];
    this.array.length--;

    heapifyDown();

    return item;
  }

  addItem (item) {
    this.array.push(item);
    heapifyUp();
  }

  heapifyUp () {
    let index = this.array.length - 1;

    while (hasParent(index) && this.comparator(this.array[index], getParent(index))) {
      swapValues(getParentIndex(index), index);

      index = getParentIndex(index);
    }
  }

  heapifyDown () {
    let index = 0;
    let childIndex;

    while (hasLeftChild(index)) {
      childIndex = hasRightChild(index) && this.comparator(getRightChild(index), getLeftChild(index)) ? getRightChildIndex(index) : getLeftChildIndex(index);

      if (this.comparator(this.array[index], this.array[childIndex])) break;

      swapValues(index, childIndex);
      
      index = childIndex;
    }
  }
}
