function maximumSubArray(nums) {
  if (nums.length === 1) return nums[0];
  let currentMax = -Infinity;
  let currentSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > currentSum) {
      currentSum = nums[i];
    } else {
      currentSum += nums[i];
    }
    if (currentSum > currentMax) {
      currentMax = currentSum;
    }
  }
  return currentMax;
}

// console.log(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maximumSubArray([1]));
console.log(maximumSubArray([5, 4, -1, 7, 8]));
