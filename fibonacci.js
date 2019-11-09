// T(n) = O(2^n) exponential time
// S(n) = O(n)
function fibonacciRecursive(n) {
  if (n < 2) return n;

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// T(n) = O(n) linear time
// S(n) = O(n)
function fibonacciMemoization(n) {
  const array = [0, 1];

  function recursion(n) {
    if (n < array.length) return array[n];

    const value = recursion(n - 1) + recursion(n - 2);

    array[n] = value;

    return value;
  }

  return recursion(n);
}

// T(n) = O(n) linear time
// S(n) = O(1) (size of the array)
function fibonacciDynamic(n) {
  const array = [0, 1];

  if (n < array.length) return array[n];

  for (let i = 2; i <= n; i++) {
    array.push(array[0] + array[1]);
    array.shift();
  }

  return array[1];
}
