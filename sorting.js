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
