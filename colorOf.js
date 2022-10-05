function colorOf(r, g, b) {
  let rSexteen = "";
  if (r < 16) {
    rSexteen = 0 + r.toString(16);
  } else {
    rSexteen = r.toString(16);
  }

  let gSexteen = "";
  if (g < 16) {
    gSexteen = 0 + g.toString(16);
  } else {
    gSexteen = g.toString(16);
  }

  let bSexteen = "";
  if (b < 16) {
    bSexteen = 0 + b.toString(16);
  } else {
    bSexteen = b.toString(16);
  }

  return "#" + rSexteen + gSexteen + bSexteen;
}

console.log(colorOf(255, 0, 0));
// for (let index = 0; index < 100; index++) {
//   console.log(index, index.toString(16));
// }
// ("#ff0000");
