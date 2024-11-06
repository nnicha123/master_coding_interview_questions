let calculations = 0;
// Time complexity => O(2^n)
function fibonacci(n) {
  calculations += 1;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Dynamic programming/Memoized function - don't need to do unnecessary calculations by using cache
// Time complexity -> O(n)
// But space complexity higher since we need to add cache to memory
// Top down + Memoization approach
let caculationsDynamic = 0;
function dynafibonacci() {
  const cache = {};
  return function fibonacci(n) {
    caculationsDynamic += 1;
    if (n < 2) {
      return n;
    }
    const val1 = cache[n - 1] ? cache[n - 1] : fibonacci(n - 1);
    const val2 = cache[n - 2] ? cache[n - 2] : fibonacci(n - 2);

    cache[n] = val1 + val2;

    return cache[n];
  };
}

// Bottom up approach
function fibonacciMaster2(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}

const fibFunc = dynafibonacci();
console.log(fibFunc(35));
console.log({ caculationsDynamic });

console.log(fibonacci(35));
console.log({ calculations });
