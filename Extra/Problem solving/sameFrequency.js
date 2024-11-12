const solution = (num1, num2) => {
  const str1 = "" + num1;
  const str2 = "" + num2;
  if (str1.length !== str2.length) return false;
  let obj = {};
  for (const n of str1) {
    obj[n] = obj[n] ? obj[n] + 1 : 1;
  }
  for (const n of str2) {
    if (obj[n]) obj[n]--;
    else return false;
  }
  return true;
};

console.log(solution(182, 281)); // true
console.log(solution(34, 14)); // false
console.log(solution(3589578, 5879385)); // true
console.log(solution(22, 222)); // false
