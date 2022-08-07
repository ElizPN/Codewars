const myArr1 = [-1, -2, -3, 0, 1, 2, 3, 4];
const myArr2 = [-3, -2, -2, 0, 1, 2, 3, 4];

function mergeArrays(arr1, arr2) {
  const mergeArray = [...new Set([...arr1, ...arr2])];
  // const newArr = [...new Set(arr1.concat(arr2))];
  mergeArray.sort((a, b) => a - b);
  return mergeArray;
}

console.log(mergeArrays(myArr1, myArr2));
