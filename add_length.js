// function addLength(str) {
//  const arrStr = str.split(" ")

//  let newArrStr = []

// for (let i = 0; i < arrStr.length; i++) {
//     const lenghtStr = arrStr[i].length
//     newArrStr.push(arrStr[i] + " " + lenghtStr);
// }

//  return newArrStr;
// }

// console.log(addLength("apple ban"));

function addLength(str) {
  const arrStr = str.split(" ");

  return arrStr.map((el) => {
    return el + " " + el.length;
  }); 
}

console.log(addLength("apple ban"));