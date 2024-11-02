function containsDuplicate(nums) {
  if (nums.length <= 1) return false;
  let resultObj = new Set();

  for (let i = 0; i < nums.length; i++) {
    console.log(resultObj);
    if (resultObj[nums[i]]) return true;
    resultObj[nums[i]] = true;
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(containsDuplicate([1]));
