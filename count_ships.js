var countSheep = function (num) {
  let mySheeps = "";
  for (let i = 1; i <= num; i++) {
    mySheeps += `${i} sheep...`;
  }
  return mySheeps;
};
let res = countSheep(3);
console.log(res);
