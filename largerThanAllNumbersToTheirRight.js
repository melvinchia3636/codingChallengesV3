// Create a function that retrieves every number that is strictly
// larger than every number that follows it.

function largerThanRight(arr) {
  return arr.filter((e, i) => arr.slice(i + 1).every((f) => f < e));
}

console.log(largerThanRight([3, 13, 11, 2, 1, 9, 5]), [13, 11, 9, 5]);
console.log(largerThanRight([9, 8, 7, 6]), [9, 8, 7, 6]);
console.log(largerThanRight([1, 2, 3, 4]), [4]);
console.log(largerThanRight([5, 9, 8, 7]), [9, 8, 7]);
console.log(largerThanRight([5, 5, 5, 5, 5]), [5]);
