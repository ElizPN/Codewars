function reverseWord(str) {
  const splitString = str.split("");
  const reverseString = splitString.reverse();
  const joinString = reverseString.join("");

  return joinString;
}

reverseWord("hello");

function reverseEveryWord(sentence) {
  const splitSentence = sentence.split(" ");
  const reverseArray = splitSentence.map((elem) => reverseWord(elem));
  const joinedArray = reverseArray.join(" ");

  return joinedArray;
}

console.log(reverseEveryWord("I love this world"));
