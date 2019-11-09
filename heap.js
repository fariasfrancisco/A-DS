class Heap {
  constructor(array, comparator) {
    this.array = array;
    this.comparator = comparator || ((a, b) => a < b)
  }

  static getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  static getRightChildIndex(index) {
    return index * 2 + 2;
  }

  static getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  static hasParent(index) {
    return Heap.getParentIndex(index) >= 0;
  }

  hasLeftChild(index) {
    return Heap.getLeftChildIndex(index) < this.array.length;
  }

  getLeftChild(index) {
    return this.array[Heap.getLeftChildIndex(index)];
  }

  hasRightChild(index) {
    return Heap.getRightChildIndex(index) < this.array.length;
  }

  getRightChild(index) {
    return this.array[Heap.getRightChildIndex(index)];
  }

  getParent(index) {
    return this.array[Heap.getParentIndex(index)];
  }

  swapValues(i, j) {
    const aux = this.array[i];

    this.array[i] = this.array[j];
    this.array[j] = aux;
  }

  peek() {
    return this.array[0];
  }

  poll() {
    const item = this.peek();

    this.array[0] = this.array[this.array.length - 1];
    this.array.length--;

    this.heapifyDown();

    return item;
  }

  add(item) {
    this.array.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.array.length - 1;

    while (Heap.hasParent(index) && this.comparator(this.array[index], this.getParent(index))) {
      this.swapValues(Heap.getParentIndex(index), index);

      index = Heap.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    let childIndex;

    while (this.hasLeftChild(index)) {
      if (this.hasRightChild(index) && this.comparator(this.getRightChild(index), this.getLeftChild(index))) childIndex = Heap.getRightChildIndex(index);
      else childIndex = Heap.getLeftChildIndex(index);

      if (this.comparator(this.array[index], this.array[childIndex])) break;

      this.swapValues(index, childIndex);

      index = childIndex;
    }
  }
}

// Continous median problem. Read an array of numbers one by one and print the median of all numbers read thus far

function getMedians(array) {
  function addNumber(number) {
    if (lowers.array.length < 1 || number < lowers.peek()) lowers.add(number);
    else highers.add(number);

    rebalance();
  }

  function rebalance() {
    const highersSize = highers.array.length;
    const lowersSize = lowers.array.length;

    if (Math.abs(lowersSize - highersSize) > 1) {
      if (lowersSize > highersSize) highers.add(lowers.poll());
      else lowers.add(highers.poll());
    }
  }

  function getMedian() {
    const highersSize = highers.array.length;
    const lowersSize = lowers.array.length;

    if (highersSize > lowersSize) return highers.peek();
    else if (lowersSize > highersSize) return lowers.peek();
    else return (highers.peek() + lowers.peek()) / 2;
  }

  const highers = new Heap([]);
  const lowers = new Heap([], (a, b) => b < a);
  const medians = [];
  const l = array.length;

  for (let i = 0; i < l; i++) {
    addNumber(array[i]);

    medians[i] = getMedian();
  }

  return medians;
}
