const binaryFunction = (arr, target) => {
  const mid = Math.floor(arr.length / 2);

  if (arr[mid] === target) {
    return true;
  } else {
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    if (left.length === 0 || right.length === 0) {
      console.log({ left, right });
      return false;
    }
    console.log({ left, right });
    return arr[mid] < target
      ? binaryFunction(right, target)
      : binaryFunction(left, target);
  }
};

console.log(binaryFunction([1, 4, 6, 9, 12, 34, 45], 0));
