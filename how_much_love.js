function howMuchILoveYou(nbPetals) {
  const arrWords = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];

  let counter = 1;
  for (let i = 0; i < arrWords.length; i++) {
    if (counter === nbPetals) {
      return arrWords[i];
    }

    if (i === arrWords.length - 1) {
      i = -1;
    }
    counter += 1;
  }
}
let res = howMuchILoveYou(7);
console.log(res);
