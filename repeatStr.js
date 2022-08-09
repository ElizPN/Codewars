function repeatStr(n, s) {
  let arrStr = [];

  for (let i = 0; i < n; i++) {
    arrStr.push(s);
  }
  arrStr = arrStr.join("");
  return arrStr;
}

const str = repeatStr(6, "hello");
console.log(str);
