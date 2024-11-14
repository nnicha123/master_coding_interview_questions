const selection = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndx]) minIndx = j;
    }
    // swap
    [arr[minIndx], arr[i]] = [arr[i], arr[minIndx]];
  }
  return arr;
};

console.log(selection([29, 10, 14, 30, 37, 14, 18]));
