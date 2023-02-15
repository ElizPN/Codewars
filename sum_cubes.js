function sumCubes(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    const cub = i * i * i;
    sum += cub;
  }
  return sum;
}

console.log(sumCubes(3));
