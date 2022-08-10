// create array with 5 elements
let x = new Array(5);

// loop array
for (let i = 0; i < x.length; i++) {
  x[i] = new Array(3).fill(2);
  console.log(x[i]);
  for (let j = 0; j < x[i].length; j++) {
    let element = x[i][j];
    element = element * element;
    console.log(element);
  }
  return x;
}

console.log(x);
