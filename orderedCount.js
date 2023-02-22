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
  let mainRes = [];

  for (let i = 0; i < text.length; i++) {
    let interResult = [];
    let num = strCount(text, text[i]);
    interResult = [...interResult, text[i], num];
    console.log(interResult);

    mainRes = [...mainRes, [interResult]];
  }

  //   console.log(mainRes);

  const checkIsEqual = (curentRes) => interResult == curentRes;
  let filteredArr = mainRes.filter(checkIsEqual);

  return filteredArr;
};

console.log(orderedCount("90909"));

// let arr = [[1], [2], [1], [2], [1]];
// let uniq = [...new Set(arr)];
// console.log(uniq);
