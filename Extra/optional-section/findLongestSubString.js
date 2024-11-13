const findLongestSubstring = (str) => {
  if (str.length <= 1) return str.length;
  const observed = {};
  let maxLength = 0;
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    if (observed[str[i]] != undefined && observed[str[i]] >= start) {
      start = observed[str[i]] + 1;
    }
    maxLength = Math.max(maxLength, i - start + 1);
    console.log(i - start + 1);
    observed[str[i]] = i;
  }
  return maxLength;
};

// console.log(findLongestSubstring("")); // 0
// console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
// console.log(findLongestSubstring("thecatinthehat")); // 7
// console.log(findLongestSubstring("bbbbbb")); // 1
// console.log(findLongestSubstring("longestsubstring")); // 8
// console.log(findLongestSubstring("thisishowwedoit")); // 6
