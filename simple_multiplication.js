function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

let res = simpleMultiplication(9);
console.log(res);
