function splitAndMerge(string, separator) {
  let arrWords = string.split(" ");
  let newArrWords = [];
  for (let word of arrWords) {
    word = word.split("");
    word = word.join(separator);
    newArrWords.push(word);
  }
  console.log(newArrWords);
  newArrWords = newArrWords.join(" ");
  return newArrWords;
}

let res = splitAndMerge("My name is John", " ");
console.log(res);
