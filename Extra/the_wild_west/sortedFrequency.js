const sortedFrequency = (arr, value) => {
  if (findFirst(arr, value) === -1) return -1;
  return findLast(arr, value) - findFirst(arr, value) + 1;
};

const findFirst = (arr, value) => {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === value) {
      result = mid;
      right = mid - 1;
    } else if (arr[mid] < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
};

const findLast = (arr, value) => {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === value) {
      result = mid;
      left = mid + 1;
    } else if (arr[mid] < value) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
};
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
