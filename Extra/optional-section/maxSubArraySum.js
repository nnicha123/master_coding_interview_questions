const maxSubarraySum = (arr, num) => {
  if (num > arr.length) return null;
  if (arr.length === 1) return arr[0];
  let currentSum = arr[0];
  let maxSum = currentSum;
  for (let i = 1; i < num; i++) {
    currentSum += arr[i];
  }

  for (let i = num; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - num];
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
};

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
