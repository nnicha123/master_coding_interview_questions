var reverseString = (s) => {
  let pointerLeft = 0;
  let pointerRight = s.length - 1;
  while (pointerLeft < pointerRight) {
    const tmp = s[pointerLeft];
    s[pointerLeft] = s[pointerRight];
    s[pointerRight] = tmp;
    pointerLeft += 1;
    pointerRight -= 1;
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
