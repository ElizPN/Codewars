// function describeAge(age) {
//   if (age <= 12) {
//     return "You're a(n) kid";
//   } else if (age >= 13 && age <= 17) {
//     return "You're a(n) teenager";
//   } else if (age >= 18 && age <= 64) {
//     return "You're a(n) adult";
//   } else {
//     return "You're a(n) elderly";
//   }
// }

function describeAge(age) {
  let text = "You're a(n)";
  age <= 12
    ? (text += " kid")
    : age >= 13 && age <= 17
    ? (text += " teenager")
    : age >= 18 && age <= 64
    ? (text += " adult")
    : (text += " elderly");
  return text;
}

console.log(describeAge(19));
