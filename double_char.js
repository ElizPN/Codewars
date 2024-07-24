function doubleChar(str) {
   return [...str].map(char => char + char).join("")
}
console.log(doubleChar("Liza"));

