function reverce(str) {
  let arrStr = str.split("");
  let newArrStr = [];
  for (let i = arrStr.length - 1; i >= 0; i--) {
    newArrStr.push(arrStr[i]);
  }
  return newArrStr.join("");
}
console.log(reverce("liza"));
