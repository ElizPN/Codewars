function correctTail(bod, tail) {
  const sub = bod.slice(bod.length - tail.length);
  return sub === tail;
}

console.log(correctTail("Fox", "x"));

// shorter solution
function correctTail(bod, tail) {
  return bod[bod.length - 1] === tail;
}
