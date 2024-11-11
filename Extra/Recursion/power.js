function power(base, exponent) {
  if (exponent === 1) return base;
  return base * power(base, exponent - 1);
}

console.log(power(2, 3));
console.log(power(2, 5));
console.log(power(3, 4));
console.log(power(1, 6));

// 2^1 -> 2
// 2^2 -> 2 x 2
// 2^3 -> 2 x 2 x 2
