const validAnagram = (str1, str2) => {
  if (str1.length != str2.length) return false;
  let obj1 = {};
  addToObj(obj1, str1);
  return checkValid(obj1, str2);
};

const addToObj = (obj, str) => {
  for (const ch of str) {
    if (!obj[ch]) {
      obj[ch] = 1;
    } else {
      obj[ch] += 1;
    }
  }
};

const checkValid = (obj1, str2) => {
  for (const ch of str2) {
    if (!obj1[ch]) return false;
    else {
      obj1[ch] -= 1;
    }
  }
  return true;
};

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false) // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
