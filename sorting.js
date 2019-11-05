function selectionSort (array) {
  const l = array.length
  let index, aux, i, j;

  for (i = 0; i < l; i++) {
    index = i;

    for (j = i; j < l; j++){
      if (array[j] < array[index]) index = j
    }

    aux = array[index];

    array.splice(index, 1);
    array.splice(i, 0, aux);
  }
}

function bubbleSort (array) {
  const l  = array.length - 1;
  let i, aux, swapped = true;
  
  while (swapped) {
    swapped = false;

    for (i = 0; i < l; i++) {
      if (array[i] > array[i + 1]) {
        aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
        swapped = true;
      }
    }
  }
}

function insertSort (array) {
  const l = array.length;
  let i, j, aux, swapped;

  for (i = 1; i < l; i++) {
    swapped = false;

    if (array[i] < array[i - 1]) {
      for (j = i - 2; j > -1; j--) {
        if (array[i] > array[j]) {
          aux = array[i];

          array.splice(i, 1);
          array.splice(j + 1, 0, aux);

          swapped = true;

          break;
        }
      }

      if (!swapped) {
        aux = array[i];

        array.splice(i, 1);
        array.splice(0, 0, aux);
      }
    }
  }
}

function heapSort (array) {
  function getLeftChildIndex (index) {
    return index * 2 + 1;
  }

  function hasLeftChild (index) {
    return getLeftChildIndex(index) < array.length;
  }

  function getLeftChild (index) {
    return array[getLeftChildIndex(index)];
  }

  function getRightChildIndex (index) {
    return index * 2 + 2;
  }

  function hasRightChild (index) {
    return getRightChildIndex(index) < array.length;
  }

  function getRightChild (index) {
    return array[getRightChildIndex(index)];
  }

  function getParentIndex (index) {
    return Math.floor((index -1) / 2);
  }

  function hasParent (index) {
    return getParentIndex(index) >= 0;
  }

  function getParent (index) {
    return array[getParentIndex(index)];
  }

  function swapValues (i, j) {
    const aux = array[i];

    array[i] = array[j];
    array[j] = array[aux];
  }

  function peek () {
    if (array.length < 1) throw new Error('Size');

    return array[0];
  }

  function pool () {
    const item = peek();

    array[0] = array[array.length - 1];
    array.length--;

    heapifyDown();

    return item;
  }

  function add (item) {
    array.push(item);
    heapifyUp();
  }

  function heapifyUp () {
    let index = array.length - 1;

    while (hasParent(index) && getParent(index) > array[index]) {
      swapValues(getParentIndex(index), index);

      index = getParentIndex(index);
    }
  }

  function heapifyDown () {
    let index = 0, smallerChildIndex;

    while (hasLeftChild(index)) {
      smallerChildIndex = hasRightChild(index) && getRightChild(index) < getLeftChild(index) ? getRightChildIndex(index) : getLeftChildIndex(index);

      if (array[index] < array[smallerChildIndex]) {
        break;
      } 

      swapValues(index, smallerChildIndex);
			
      index = smallerChildIndex;
    }
  }
}
