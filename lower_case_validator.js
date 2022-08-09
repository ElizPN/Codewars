function hasLowerCase(str) {
  return /^[a-z0-9 -]*$/.test(str);
}

const res = hasLowerCase("hasssssssssssl3-3lo");
console.log(res);
