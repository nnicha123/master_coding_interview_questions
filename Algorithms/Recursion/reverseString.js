function reverseString(str) {
  let returnStr = "";
  for (let s of str) returnStr = s + returnStr;
  return returnStr;
}

function reverseStringRecursive(str) {
  if (str.length === 0) {
    return "";
  }
  return reverseStringRecursive(str.substring(1)) + str.charAt(0);
}

console.log(reverseString("yoyo master"));
console.log(reverseStringRecursive("yoyo master"));

// r
// re
//
