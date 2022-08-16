const arrNum = [5, 8, 12, 19, 22];
// does not work if firs element - lowest
// function sumTwoSmallestNumbers(numbers) {
//   let lowestNum = numbers[0];
//   let secondLowestNum = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < lowestNum) {
//       lowestNum = numbers[i];
//     } else if (numbers[i] < secondLowestNum) {
//       secondLowestNum = numbers[i];
//     }
//   }
//   return lowestNum + secondLowestNum;
// }

function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}
console.log(sumTwoSmallestNumbers(arrNum));
