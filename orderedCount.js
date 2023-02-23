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
  let resObj = {};
  let num = 0;

  for (let i = 0; i < text.length; i++) {
    num = strCount(text, text[i]);
    let letter = text[i];

    if (!resObj.hasOwnProperty(letter)) {
      resObj[letter] = num;
    }
    console.log(resObj);
  }

  return Object.entries(resObj);
};

console.log(orderedCount("909009877556565"));
