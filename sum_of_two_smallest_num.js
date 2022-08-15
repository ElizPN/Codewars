const arrNum = [5, 8, 12, 19, 22];

function sumTwoSmallestNumbers(numbers) {
  let lowestNum = numbers[0];
  let secondLowestNum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < lowestNum) {
      secondLowestNum = lowestNum;
      lowestNum = numbers[i];

      //   console.log(secondLowestNum);
    }
  }
  return lowestNum + secondLowestNum;
}
console.log(sumTwoSmallestNumbers(arrNum));
