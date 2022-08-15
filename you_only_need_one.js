const arr = [24, 66, 20];
const value = 66;

function check(a, x) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return true;
    }
  }
  return false;
}
let res = check(arr, value);
console.log(res);
