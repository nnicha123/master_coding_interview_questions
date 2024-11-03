function twoSum(nums, target) {
  if (nums.length === 2) return [0, 1];

  let storeRequired = {};
  for (let i = 0; i < nums.length; i++) {
    let required = target - nums[i];
    if (storeRequired.hasOwnProperty(nums[i])) {
      const previousIndex = storeRequired[nums[i]];
      return [previousIndex, i];
    }
    storeRequired[required] = i;
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
