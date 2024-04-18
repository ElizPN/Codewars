function isConsonant(letter) {
  return /^[^aeiouAEIOU\d\W_]$/.test(letter);
}

function findIndexVowel(word) {
  const regex = /^[aeiou]$/i;
  for (let i = 0; i < word.length; i++) {
    if (regex.test(word[i])) {
      return i;
    }
  }
}
console.log(findIndexVowel("crot"));

function split(word) {
  const index = findIndexVowel(word);
  const result = [word.slice(0, index), word.slice(index)];

  return result;
}

const [consonantPart, restOfWord] = split("crot");

console.log(consonantPart);
console.log(restOfWord);

function transfromWordwithFirstCharConsonant(word) {
  const [consonantPart, restOfWord] = split(word);
  const newWord = `${restOfWord}-${consonantPart}ay`;
  return newWord;
}

console.log(transfromWordwithFirstCharConsonant("crot"));

function transfromWordwithFirstCharVowel(word) {
  const newWord = word + "-way";
  return newWord;
}
console.log(transfromWordwithFirstCharVowel("Aloha"));

function transformWord(word) {
  let newWord;
  if (/^[aeiouAEIOU]/.test(word)) {
    newWord = transfromWordwithFirstCharVowel(word);
  } else if (isConsonant(word[0])) {
    newWord = transfromWordwithFirstCharConsonant(word);
  } else {
    newWord = word;
  }
  return newWord;
}

console.log(transformWord("99"));

function transformLanguage(phrase) {
  const arrayPhrase = phrase.split(" ");

  const newArray = arrayPhrase.map((word, index) => {
    return transformWord(word);
  });
  
  const newPhrase = newArray.join(" ");

  return newPhrase;
}

console.log(transformLanguage("been wondering 99.  pig"));

// const result = transformLanguage("been wondering");
// console.log(result, "res");

// "I've-way een-bay ondering-way
// - at-whay is-way e-thay answer-way?!?!? ow-Hay ill-way e-way ow-knay it's-way orrect-cay?";

//   pigLatinWord = word;
