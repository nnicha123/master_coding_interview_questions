const countUniqueValues = (sortedArr) => {
  if (sortedArr.length === 0) return 0;
  let left = 0;
  for (let right = 1; right < sortedArr.length; right++) {
    if (sortedArr[left] !== sortedArr[right]) {
      left += 1;
      sortedArr[left] = sortedArr[right];
    }
  }
  return left + 1;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log(countUniqueValues([1, 1]));
console.log(countUniqueValues([2, 3]));
