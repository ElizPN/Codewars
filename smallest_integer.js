const arr = [78, 56, 232, 12, 8];

// function findSmallestInt(args) {
//   let smallest = args[0];
//   for (let i = 0; i < args.length; i++) {
//     if (args[i] < smallest) {
//       smallest = args[i];
//     }
//   }
//   return smallest;
// }

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallest = args[0];
    for (let i = 0; i < args.length; i++) {
      if (args[i] < smallest) {
        smallest = args[i];
      }
    }
    return smallest;
  }
}

const smallestFainder = new SmallestIntegerFinder();

console.log(smallestFainder.findSmallestInt(arr));

// console.log(findSmallestInt(arr));
