function updateLight(current) {
  let changeTo;
  if (current === "green") {
    changeTo = "yellow";
  } else if (current === "yellow") {
    changeTo = "red";
  } else if (current === "red") {
    changeTo = "green";
  }
  return changeTo;
}
