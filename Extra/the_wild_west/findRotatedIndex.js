function findRotatedIndex(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === num) return mid;

    if (arr[left] < arr[mid]) {
      if (num >= arr[left] && num < arr[mid]) {
        // To the left
        right = mid - 1;
      } else {
        // to the right
        left = mid + 1;
      }
    } else {
      // Right side is sorted
      if (num > arr[mid] && num <= arr[right]) {
        // num is in the right sorted portion
        left = mid + 1;
      } else {
        // num is in the left unsorted portion
        right = mid - 1;
      }
    }
  }
  return -1;
}

console.log(findRotatedIndex([3, 4, 1, 2], 4)); // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 44)); // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)); // 5
