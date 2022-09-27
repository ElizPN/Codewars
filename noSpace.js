function noSpace(x) {
  let arr = [...x];
  arr = arr.filter(checkSpace);

  return arr.join("");
}

function checkSpace(lit) {
  return lit !== " ";
}

console.log(noSpace("h  ello"));
