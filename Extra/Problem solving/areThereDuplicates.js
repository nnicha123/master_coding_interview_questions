const areThereDuplicatesMultiplePointers = (...argu) => {
  if (argu.length <= 1) return false;
  let left = 0;
  argu.sort(); //for string -> numbers do argu.sort((a,b) => a-b)
  for (let i = 1; i < argu.length; i++) {
    if (argu[left] === argu[i]) return true;
    else {
      left += 1;
      argu[left] = argu[i];
    }
  }
  return false;
};

const areThereDuplicatesFrequencyCounters = (...argu) => {
  const set = new Set();
  if (argu.length <= 1) return false;
  for (const arg of argu) {
    if (set.has(arg)) return true;
    set.add(arg);
  }
  return false;
};

console.log(areThereDuplicatesMultiplePointers(1, 2, 3)); // false
console.log(areThereDuplicatesMultiplePointers(1, 2, 2)); // true
console.log(areThereDuplicatesMultiplePointers("a", "b", "c", "a")); // true
console.log("-------------------------------");
console.log(areThereDuplicatesFrequencyCounters(1, 2, 3)); // false
console.log(areThereDuplicatesFrequencyCounters(1, 2, 2)); // true
console.log(areThereDuplicatesFrequencyCounters("a", "b", "c", "a")); // true
