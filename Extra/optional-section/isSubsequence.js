const isSubsequence = (str1, str2) => {
  if (str2.length < str1.length) return false;
  let pointStr1 = 0;

  for (let i = 0; i < str2.length; i++) {
    if (str1.charAt(pointStr1) === str2.charAt(i)) pointStr1 += 1;
  }
  return pointStr1 >= str1.length;
};

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acbeee")); // false (order matters)
