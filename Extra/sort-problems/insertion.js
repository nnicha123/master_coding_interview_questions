const insertion = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};
console.log(insertion([29, 10, 14, 30, 37, 14, 18]));
