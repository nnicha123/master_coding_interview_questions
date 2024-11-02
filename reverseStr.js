function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

function reverse2(str) {
  return [...str].reverse().join("");
}

console.log(reverse2("Hi My name is Andrei"));
console.log(reverse2(""));
