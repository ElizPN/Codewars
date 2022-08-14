function nthEven(n) {
  let currEvenNum = 0;
  let foundElem = false;
  let counter = 0;

  while (foundElem === false) {
    counter += 1;
    if (counter === n) {
      foundElem = !foundElem;
      return currEvenNum;
    }
    currEvenNum += 2;
  }
}

let res = nthEven(3);
console.log(res);

// function nthEven(n) {
//   let arr = [];
//   let currEvenNum = 0;

//   while (true) {
//     arr.push(currEvenNum);

//     if (arr.length === n) {
//       return currEvenNum;
//     }
//     currEvenNum += 2;
//   }
// }
