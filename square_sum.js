const myNumbers = [1, 2];

function squareSum(numbers) {
  return numbers.reduce((total, num) => total + num * num, 0);
}
console.log(squareSum(myNumbers));
