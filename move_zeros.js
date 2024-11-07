var moveZeroes = function (nums) {
  //   if (nums.length > 1) {
  let pLeft = 0;

  for (let pRight = 0; pRight < nums.length; pRight++) {
    if (nums[pRight] !== 0) {
      [nums[pRight], nums[pLeft]] = [nums[pLeft], nums[pRight]];
      pLeft += 1;
    }
  }
  // };
  return nums;
};
// [0,1,0,3,12]
// [1,0,0,3,12]
// [1,3,0,0,12]
// [1,3,12,0,0]

console.log(moveZeroes([4, 2, 4, 0, 0, 3, 0, 5, 1, 0]));
console.log(moveZeroes([2, 1]));
