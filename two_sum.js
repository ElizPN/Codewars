// const arr = [-1, -2, -3, -4, -5];
// const myTarget = -8;

const arr = [3, 3];
const myTarget = 6;

const twoSum = function (nums, target) {
  let firstIndex = 0;
  let secondIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];

    secondIndex = nums.indexOf(difference);
    if (secondIndex !== -1) {
      firstIndex = i;
      if (secondIndex !== firstIndex) {
        return [firstIndex, secondIndex];
      }
    }
  }
};

console.log(twoSum(arr, myTarget));
