// Map solution
function whatFlavors(arr, m) {
  function getIndecesInMenu(price, complement) {
    let a, b;
    const arr1 = map.get(price);
    const arr2 = map.get(complement);

    if (arr1 == null || arr2 == null) return;
    
    for (const i of arr1) {
      for (const j of arr2) {
        if (i !== j) {
          a = i + 1;
          b = j + 1;

          out.add(a > b ? `${b} ${a}` : `${a} ${b}`);
        }
      }
    }
  }

  const menu = arr.slice()
  const out = new Set();
  let complement, submenu, index, j;
  const map = new Map();

  for(const [i, v] of menu.entries()) {
    map.set(v, map.has(v) ? [...map.get(v), i] : [i]);
  }
  
  menu.sort((a, b) => a - b);

  for(const [i, price] of menu.entries()) {
    complement = m - price;

    if (complement < 1 || !map.has(complement)) continue;

    getIndecesInMenu(complement, price);
  }

  for(const o of out) console.log(o);
}

// Binary Search Solution
function icecreamParlor(m, arr) {
  function binarySearch (array, target) {
    let left = 0;
    let right = array.length - 1;
    let mid;

    while (left <= right) {
      mid = left + Math.floor((right - left) / 2);
    
      if (array[mid] === target) return mid;
      else if (array[mid] < target) left = mid + 1;
      else right = mid - 1;
      }
    
      return -1;
  }

  function getAllIndexes(value) {
    const out = [];
    let i = 0;

    while (true) {
      i = arr.indexOf(value, i)

      if(i < 0) break;

      out.push(i);
      i++
    }

    return out;
  }

  function getIndecesInMenu(price, complement) {
    let a, b;
    const arr1 = getAllIndexes(price);
    const arr2 = getAllIndexes(complement);

    for (const i of arr1) {
      for (const j of arr2) {
        if (i !== j) {
          a = i + 1;
          b = j + 1;

          out.add(a > b ? `${b} ${a}` : `${a} ${b}`);
        }
      }
    }
  }

  const menu = arr.slice()
  const out = new Set();
  let complement, submenu, index, j;
  
  menu.sort((a, b) => a - b);

  for(const [i, price] of menu.entries()) {
    complement = m - price;

    if (complement < 1) continue;

    if (complement === price) {
      getIndecesInMenu(price, price);

      continue;
    }

    submenu = complement > price ? menu.slice(i + 1) : menu.slice(0, i)

    if (submenu.length < 1) continue;

    index = binarySearch(submenu, complement);

    if (index < 0) continue;

    getIndecesInMenu(price, complement);
  }

  return out;
}
