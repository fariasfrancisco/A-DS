function selectionSort(array) {
  const l = array.length;
  let index, aux, i, j;

  for (i = 0; i < l; i++) {
    index = i;

    for (j = i; j < l; j++) {
      if (array[j] < array[index]) index = j
    }

    aux = array[index];

    array.splice(index, 1);
    array.splice(i, 0, aux);
  }
}

function bubbleSort(array) {
  const l = array.length - 1;
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

function insertSort(array) {
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

// O(n log n)
function quickSort(array) {
  function sortPartition(array, left, right) {
    if (left >= right) return;

    const pivot = array[Math.floor((left + right) / 2)];
    const index = partition(array, left, right, pivot);

    sortPartition(array, left, index - 1);
    sortPartition(array, index, right);
  }

  function partition(array, left, right, pivot) {
    while (left <= right) {
      while (array[left] < pivot) {
        left++;
      }

      while (array[right] > pivot) {
        right--;
      }

      if (left <= right) {
        [array[left], array[right]] = [array[right], array[left]];
        left++;
        right--;
      }
    }

    return left;
  }

  sortPartition(array, 0, array.length - 1);
}

// O(n log n) time
// O(n) space
function mergeSort(arr) {
  function merge(lHalf, rHalf, array) {
    let i = 0;
    let j = 0;
    let k = 0;
    const l = lHalf.length;
    const r = rHalf.length;

    while (i < l && j < r) {
      if (lHalf[i] < rHalf[j]) {
        array[k] = lHalf[i];

        i++;
      } else {
        array[k] = rHalf[j];

        j++;
      }

      k++;
    }

    while (i < l) {
      array[k] = lHalf[i];

      i++;
      k++;
    }

    while (j < r) {
      array[k] = rHalf[j];

      j++;
      k++;
    }
  }

  function sort(array) {
    const l = array.length;

    if (l < 2) return;

    const mid = Math.floor(l / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    sort(left);
    sort(right);
    merge(left, right, array)
  }

  sort(arr);
}
