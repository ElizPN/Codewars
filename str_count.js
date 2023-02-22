export function strCount(str, letter) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
    count ++
    }
  }
  return count
}

let res = strCount("8999989", "9");
console.log(res);
