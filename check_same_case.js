function sameCase(a, b) {
  let result;

  if (/^[a-zA-Z]+$/.test(a) && /^[a-zA-Z]+$/.test(b)) {
    if (
      (a === a.toUpperCase() && b === b.toUpperCase()) ||
      (a === a.toLowerCase() && b === b.toLowerCase())
    ) {
      result = 1;
    } else {
      result = 0;
    }
  } else {
    result = -1;
  }
  return result;
}

console.log(sameCase("S", "e"));

