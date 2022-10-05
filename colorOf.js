function colorOf(r, g, b) {
  let rSexteen = convertTo16(r);
  let gSexteen = convertTo16(g);
  let bSexteen = convertTo16(b);

  return "#" + rSexteen + gSexteen + bSexteen;
}

console.log(colorOf(255, 0, 0));

function convertTo16(color) {
  let colorSexteen = "";
  if (color < 16) {
    colorSexteen = 0 + color.toString(16);
  } else {
    colorSexteen = color.toString(16);
  }
  return colorSexteen;
}
// for (let index = 0; index < 100; index++) {
//   console.log(index, index.toString(16));
// }
// ("#ff0000");
