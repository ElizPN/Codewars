function towerBuilder(nFloors) {
  let build = "*";
  let tower = [];

  for (let i = 0; i < nFloors; i++) {
    tower.push(build);
    build = " *" + build + "* ";
  }

  //   const newTower = tower.map((elem) => " " + elem + " ");

  //   return newTower;

  //   let buildWithSpace;
  //   for (let i = 0; i < tower.length; i++) {
  //     buildWithSpace = tower[i] + "  ";
  //     tower[i];
  //   }

  return tower;
}

console.log(towerBuilder(3));
