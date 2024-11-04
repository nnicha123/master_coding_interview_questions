function fibonacciIterative(n) {
  // O(n) -> Time complexity (better in this case)
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  //   console.log(arr);
  return arr[n];
}

function fibonacciRecursive(n) {
  // O(2^n) -> Time complexity
  if (n < 2) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciIterative(40));
// console.log(fibonacciIterative(1));
// console.log(fibonacciIterative(2));
// console.log(fibonacciIterative(3));
// console.log(fibonacciIterative(4));
// console.log(fibonacciIterative(5));
// console.log(fibonacciIterative(6));
// console.log(fibonacciIterative(7));
// console.log(fibonacciIterative(8));

//  n = 0 -> return 0
// n = 1 -> return 1
// n = 2 -> return 1
// n = 3 -> return f(1) + f(2) = 2
// n = 4 -> return f(2) + f(3) = 3
// n = 5 -> return f(3) + f(4) = 5
