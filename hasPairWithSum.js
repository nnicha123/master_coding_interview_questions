function hasPairWithSum(arr, sum) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j]) return true;
    }
  }

  return false;
}

function hasPairWithSum2(arr, sum) {
  let set = new Set();
  for (const num of arr) {
    if (set.has(num)) return true;
    set.add(sum - num);
  }
  return false;
}
