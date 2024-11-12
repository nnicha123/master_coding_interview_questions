const solution = (arr, n) => {
  if (arr.length === 0) return null;
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < n; i++) {
    currentSum += arr[i];
  }
  for (let i = n; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - n];
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
};

console.log(solution([1, 2, 5, 2, 8, 1, 5], 2));

// left = 0, right = 1
// left = 1, right = 2
