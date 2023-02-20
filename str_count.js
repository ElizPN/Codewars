function strCount(str, letter) {
  let arrLetters = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
     arrLetters = [...arrLetters, letter]
    }
  }
  return arrLetters.length;
}

let res = strCount("hohoh", "h");
console.log(res);
