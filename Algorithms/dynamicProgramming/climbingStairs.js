// n = 1
// 1. 1 step

// n = 2 -> f(n=1) + 1
// 1. 1 step + 1 step
// 2. 2 step

// n = 3 f(n=2) + f(n=1)
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 step
// 3. 2 step + 1 step

// n = 4 => f(n=3) + f(n=2)
// 1. 1 step + 1 step + 1 step + 1 step
// 2. 1 step + 1 step + 2 step
// 3. 1 step + 2 step + 1 step
// 4. 2 step + 1 step + 1 step
// 5. 2 step + 2 step

// n = 5 => f(n=4) + f(n=3)
// 1. 1,1,1,1,1
// 2. 1,1,1,2
// 3. 1,1,2,1
// 4. 1,2,1,1
// 5. 1,2,2
// 6. 2,1,1,1
// 7. 2,1,2
// 8. 2,2,1

// Problem becomes similar to fibonacci
let calculations = 0;
const climbingStairsMaster = () => {
  const cache = {};

  return function climbingStairs(n) {
    calculations += 1;
    if (n <= 2) return n;
    else {
      const var1 = cache[n - 1] ? cache[n - 1] : climbingStairs(n - 1);
      const var2 = cache[n - 2] ? cache[n - 2] : climbingStairs(n - 2);
      cache[n] = var1 + var2;
      return cache[n];
    }
  };
};

const climbingStairsFunc = climbingStairsMaster();

// Bottom up solution
const climbingStairs2 = (n) => {
  if (n <= 2) return n;
  const result = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result.pop();
};

// console.log(climbingStairsFunc(2));
// console.log(climbingStairsFunc(3));
// console.log(climbingStairsFunc(4));
// console.log(climbingStairsFunc(5));
console.log(climbingStairsFunc(45));
console.log({ calculations });

console.log(climbingStairs2(45));
