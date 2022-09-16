// A boomerang is a V-shaped sequence that is either upright or upside down.
// Specifically, a boomerang can be defined as: sub-array of length 3,
// with the first and last digits being the same and the middle digit being different.

// Some boomerang examples:
// [3, 7, 3], [1, -1, 1], [5, 6, 5]

// Create a function that returns the total number of boomerangs in an array.

function countBoomerangs(arr) {
  return arr.filter((e, i) => e === arr[i + 2] && e !== arr[i + 1]).length;
}

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]), 2);
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]), 1);
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]), 0);
console.log(countBoomerangs([5, 9, 5, 9, 5]), 3);
console.log(countBoomerangs([4, 4, 4, 8, 4, 8, 4]), 3);
console.log(countBoomerangs([2, 2, 2, 2, 2, 2, 3]), 0);
console.log(countBoomerangs([2, 2, 2, 2, 3, 2, 3]), 2);
console.log(countBoomerangs([1, 2, 1, 1, 1, 2, 1]), 2);
console.log(countBoomerangs([5, 1, 1, 1, 1, 4, 1]), 1);
console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]), 3);
console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]), 5);
console.log(countBoomerangs([5, 5, 5]), 0);
