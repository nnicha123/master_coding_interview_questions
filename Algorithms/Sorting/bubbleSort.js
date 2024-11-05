const bubbleSort = (arr) => {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));
console.log(bubbleSort([6, 5, 3, 1, 8, 7, 2, 4]));
