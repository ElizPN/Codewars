function towerBuilder(nFloors) {
  let tower = new Array(nFloors);
  let starsStack = [];

  // From left to center
  for (let i = 1; i <= nFloors; i++) {
    // Fill the starsStack
    for (let j = 0; j < i; j++) {
      starsStack.push("*");
    }
    // Fiil tower from bottom
    for (let i = tower.length - 1; i >= 0; i--) {
      if (!tower[i]) {
        tower[i] = "";
      }
      const star = starsStack.pop();
      if (star) {
        tower[i] = tower[i] + "*";
      } else {
        tower[i] = tower[i] + " ";
      }
    }
  }

  // From center to right
  for (let i = nFloors - 1; i >= 1; i--) {
    // Fill the starsStack
    for (let j = 0; j < i; j++) {
      starsStack.push("*");
    }
    // Fiil tower from bottom
    for (let i = tower.length - 1; i >= 0; i--) {
      const star = starsStack.pop();
      if (star) {
        tower[i] = tower[i] + "*";
      } else {
        tower[i] = tower[i] + " ";
      }
    }
  }

  return tower;
}

console.log(towerBuilder(3));
