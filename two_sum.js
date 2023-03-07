// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

const arr = [1, 2, 7, 11, 15];
const t = 9;
const output = [0, 1];

const twoSum = function (nums, target) {
  let firstIndex = 0;
  let secondIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= target) {
      firstIndex = i;
      const difference = target - nums[i];
      secondIndex = nums.indexOf(difference);
    }
  }
  return [firstIndex, secondIndex];
};

console.log(twoSum(arr, t));
