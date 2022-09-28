function splitAndMerge(string, separator) {
  let arrWords = string.split(" ");
  for (let word of arrWords) {
    // do not enter to loop
    word = word.split("");
    // return word;
  }
  arrWords = arrWords.join(separator);
  return arrWords;
}

let res = splitAndMerge("My name is John", ".");
console.log(res);
