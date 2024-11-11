function productOfArray(arr) {
  if (arr.length === 1) {
    return arr;
  }
  return arr[0] * productOfArray(arr.splice(1));
}

console.log(productOfArray([2, 3, 4]));
