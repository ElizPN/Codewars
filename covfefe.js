function covfefe(str) {
  let newString = "";
  if (str.includes("coverage")) {
    const arrWithoutCoverage = str.split("coverage");
    newString = arrWithoutCoverage.join("covfefe");
  } else {
    newString = str + " covfefe";
  }

  return newString;
}

console.log(covfefe("double space "));


