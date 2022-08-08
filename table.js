const count = 10;
var x = [];

for (let i = 1; i <= count; i++) {
  x.push([]);
  //   console.log(x[i]);
  for (let j = 1; j <= count; j++) {
    x[i - 1].push(i * j);
  }
}

console.log(x);
