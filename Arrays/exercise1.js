function solution1(arr1, arr2) {
  arr1.sort();
  arr2.sort();

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] === arr2[pointer2]) return true;
    if (arr1[pointer1] < arr2[pointer2]) {
      pointer1++;
    } else {
      pointer2++;
    }
  }
  return false;
}

function solution2(arr1, arr2) {
  const obj = {};
  for (const a of arr1) {
    if (!obj[a]) obj[a] = true;
  }

  for (const b of arr2) {
    if (obj[b]) return true;
  }
  return false;
}

function solution3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}
console.log(solution2(["a", "b", "c", "d", 1], ["z", 1, "x"]));
console.log(solution2(["a", "b", "c", "x"], ["z", "y", "r"]));
console.log(solution2(["a", "b", "c", "x"], ["z", "y", "w"]));
