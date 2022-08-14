String.prototype.isUpperCase = function () {
  return this.toUpperCase() === String(this) ? true : false;
};
let s = new String("HJHJH");
console.log(s.isUpperCase());

//this.toString() is the same that String(this)
