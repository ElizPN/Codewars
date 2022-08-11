const arrMatrix = [
  ["J", "L", "L", "M"],
  ["u", "i", "i", "a"],
  ["s", "v", "f", "n"],
  ["t", "e", "e", ""],
];

function arrAdder(arr) {
  let words = [];

  for (let i = 0; i < arr.length; i++) {
    let line = arr[i];

    for (let j = 0; j < line.length; j++) {
      if (words[j] == undefined) {
        words[j] = "";
      }
      console.log(words[j]);
      words[j] += line[j];
    }
  }
  return words.join(" ");
}

let res = arrAdder(arrMatrix);
console.log(res);
console.log("Just Live Life Man");
