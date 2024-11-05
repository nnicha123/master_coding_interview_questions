const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (arr[i] < arr[j] && arr[i] > arr[j - 1]) {
          arr.splice(j, 0, arr.splice(i, 1)[0]);
        }
      }
    }
  }
  return arr;
};

console.log(insertionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));
console.log(insertionSort([6, 5, 3, 1, 8, 7, 2, 4]));
