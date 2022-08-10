function booleanToString(b) {
  let result;
  return b ? (result = "true") : (result = "false");
  //  return b.toString();
}

let string = booleanToString(false);
console.log(string);
