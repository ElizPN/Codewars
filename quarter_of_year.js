const quarterOf = (month) => {
  if (0 < month && month < 4) {
    return 1;
  } else if (4 <= month && month < 7) {
    return 2;
  } else if (7 <= month && month < 10) {
    return 3;
  } else if (10 <= month && month <= 12) {
    return 4;
  }
};

console.log(quarterOf(11));
