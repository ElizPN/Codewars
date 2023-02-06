
function addLength(str) {
  const arrStr = str.split(" ");

  return arrStr.map((el) => {
    return el + " " + el.length;
  }); 
}

console.log(addLength("apple ban"));