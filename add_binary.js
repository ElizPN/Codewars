function countBinary(num) {
  let interResult = num;
  let remainder;
  let result = [];

  while (interResult > 0) {
    remainder = interResult % 2;
    interResult = interResult / 2;
    interResult = Math.floor(interResult);
    result.push(remainder);
  }
  result.reverse();
  result = result.join("");
  return result;
}

function addBinary(a, b) {
  const sum = a + b;
  return countBinary(sum);
}
console.log(addBinary(9, 4));
