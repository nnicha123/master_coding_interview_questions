const letters = ["a", "b", "z", "e", "r", "b"];
const basket = [2, 65, 34, 2, 1, 7, 8];

letters.sort();
basket.sort((a, b) => a - b);
console.log(letters);
console.log(basket);
