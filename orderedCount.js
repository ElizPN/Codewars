// import { strCount } from "./str_count.js";

function strCount(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

const orderedCount = function (text) {
  let mainResult = [];
  let arrStorage = [];
  let num = 0;

  for (let i = 0; i < text.length; i++) {
    let interResult = [];
    let letter = text[i];
    num = strCount(text, letter);

    // check does letter exist in arrStorage. If no - add letter to arrStorage.
    if (!arrStorage.includes(letter)) {
      arrStorage.push(letter);
      interResult = [...interResult, letter, num];
      mainResult = [...mainResult, interResult];
    }
  }

  return mainResult;
};

console.log(orderedCount("909009877556565"));
