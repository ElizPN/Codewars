function derive(coefficient, exponent) {
  const multiply = coefficient * exponent;
  let exponMinus;
  exponMinus = exponent - 1;

  return multiply + "x^" + exponMinus;
}

let res = derive(7, 8);
console.log(res);
