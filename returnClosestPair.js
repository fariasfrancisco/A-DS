// Given two arrays of length n and a target number,
// return a pair of numbers from each array whose sum is closest to the target.
// T(n) = O(n log n) because of the sorting
function returnPair(arr1, arr2, target) {
  const n = arr1.length;
  let x = n - 1;
  let y = 0;
  let minClosest, maxClosest, sum;

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  function getSum(tuple) {
    return tuple == null ? Number.MAX_VALUE : tuple[0] + tuple[1];
  }

  while (x !== 0 && y !== n) {
    sum = arr1[x] + arr2[y];

    if (sum === target) {
      return [arr1[x], arr2[y]];
    } else if (sum > target) {
      if (maxClosest == null) maxClosest = [arr1[x], arr2[y]];
      else maxClosest = getSum(maxClosest) > sum ? [arr1[x], arr2[y]] : maxClosest;

      x--;
    } else {
      if (minClosest == null) minClosest = [arr1[x], arr2[y]];
      else minClosest = getSum(minClosest) < sum ? [arr1[x], arr2[y]] : minClosest;

      y++;
    }
  }

  const maxDiff = getSum(maxClosest) - target;
  const minDiff = target - getSum(minClosest);

  return maxDiff > minDiff ? minClosest : maxClosest;
}
