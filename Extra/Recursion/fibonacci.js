const superFib = () => {
  let cache = {};
  return function fib(num) {
    if (num <= 1) return num;
    const cache1 = cache[num - 1] ? cache[num - 1] : fib(num - 1);
    const cache2 = cache[num - 2] ? cache[num - 2] : fib(num - 2);
    cache[num] = cache1 + cache2;
    console.log(cache);
    return cache[num];
  };
};

let fibFunc = superFib();

console.log(fibFunc(100));
