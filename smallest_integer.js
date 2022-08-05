const arr = [34, 15, 88, 2];

function findSmallestInt(args) {
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(findSmallestInt(arr));
