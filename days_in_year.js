function yearDays(year) {
  if (year % 100 === 0) {
    return year % 400 === 0
      ? `${year} has a 366 days`
      : `${year} has a 365 days`;
  } else {
    return year % 4 === 0
      ? `${year} has a 366 days`
      : `${year} has a 365 days`;
  }
}

console.log(yearDays(1700));
