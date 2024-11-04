function mergeSortedArrays(arr1, arr2) {
  // Check input
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  //  Start
  let pointer1 = 0;
  let pointer2 = 0;
  const result = [];

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] <= arr2[pointer2]) {
      result.push(arr1[pointer1]);
      pointer1++;
    } else {
      result.push(arr2[pointer2]);
      pointer2++;
    }
  }
  return result;
}

function mergeSortedArrays2(arr1, arr2) {
  // Check input
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  // Start
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let mergedArray = [];

  let i = 1;
  let j = 1;

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }
  return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
