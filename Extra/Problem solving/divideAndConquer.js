const divideAndConquer = (arr, num) => {
  if (arr.length === 0) return -1;
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === num) return mid;

    if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return -1;
};

console.log(divideAndConquer([1, 2, 3, 4, 5, 6], 4));
console.log(divideAndConquer([1, 2, 3, 4, 5, 6], 6));
console.log(divideAndConquer([1, 2, 3, 4, 5, 6], 11));
console.log(divideAndConquer([1, 2, 3, 4, 5, 6], 1));
