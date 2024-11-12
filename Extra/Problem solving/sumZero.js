const sumZero = (sortedArr) => {
  let left = 0;
  let right = sortedArr.length - 1;
  while (left < right) {
    const sum = sortedArr[left] + sortedArr[right];
    if (sum === 0) {
      return [sortedArr[left], sortedArr[right]];
    } else {
      if (sum < 0) left++;
      else right--;
    }
  }
  return undefined;
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
