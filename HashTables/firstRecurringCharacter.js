function firstRecurringCharacter(nums) {
  let store = new Set();
  for (const num of nums) {
    if (store.has(num)) return num;
    store.add(num);
  }
  return undefined;
}

function firstRecurringCharacter2(nums) {
  let map = {};
  for (const num of nums) {
    if (map[num]) return num;
    map[num] = true;
  }
  return undefined;
}

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 3, 4, 5]));
