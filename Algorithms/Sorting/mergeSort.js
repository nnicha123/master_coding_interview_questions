const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const result = [];
  let leftIndx = 0;
  let rightIndx = 0;
  while (leftIndx < left.length && rightIndx < right.length) {
    if (left[leftIndx] < right[rightIndx]) {
      result.push(left[leftIndx]);
      leftIndx += 1;
    } else {
      result.push(right[rightIndx]);
      rightIndx += 1;
    }
  }
  console.log({ left, right });
  console.log({ result });
  return result.concat(left.slice(leftIndx)).concat(right.slice(rightIndx));
};

console.log(mergeSort([6, 5, 3, 1, 8, 7, 2, 4]));
// console.log(mergeSort([6, 5, 3, 1, 8, 7, 2, 4]));
