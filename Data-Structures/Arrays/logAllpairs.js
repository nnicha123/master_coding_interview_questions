function logAllPairsOfArray(arr) {
  for (const a of arr) {
    for (const b of arr) {
      console.log({ a, b });
    }
  }
}

logAllPairsOfArray(["a", "b", "c", "d", "e"]);
