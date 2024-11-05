const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndx]) {
        minIndx = j;
      }
    }
    // swap
    const tmp = arr[minIndx];
    arr[minIndx] = arr[i];
    arr[i] = tmp;
  }
  return arr;
};

console.log(selectionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));
console.log(selectionSort([6, 5, 3, 1, 8, 7, 2, 4]));
