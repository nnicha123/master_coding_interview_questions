const countZeroesSol1 = (arr) => {
  let count = 0;
  for (const num of arr) {
    if (num === 1) count += 1;
    else break;
  }
  return arr.length - count;
};

const countZeroes = (arr) => {
  if (arr[0] === 0) return arr.length;
  if (arr[arr.length - 1] === 1) return 0;

  let left = 0;
  let right = arr.length - 1;
  while (right != left + 1) {
    const mid = Math.floor((left + right) / 2);
    if (arr[left] === 1 && arr[left + 1] !== 0) left = mid;
    else right = mid;
  }
  return arr.length - left - 1;
};

console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0
