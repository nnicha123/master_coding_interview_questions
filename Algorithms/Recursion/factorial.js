function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let answer = 1;
  while (number !== 1) {
    answer *= number;
    number -= 1;
  }
  return answer;
}

console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
