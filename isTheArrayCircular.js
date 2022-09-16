// Write a function that determines if an array is circular.
// An array is circular if its subarrays can be reordered such that each subarray's
// last element is equal to the next subarray's first element.

// For example, the array [[1, 1, 1], [9, 2, 3, 4], [4, 1], [1, 2, 5, 7, 9]] is circular
// because we can re-arrange the elements to create the following array:

// [[9, 2, 3, 4], [4, 1], [1, 1, 1], [1, 2, 5, 7, 9]]

function isCircular(arr) {
  return arr
    .map((e) => [e[0], e[e.length - 1]])
    .flat()
    .every((e, _, a) => !(a.filter((f) => f === e).length % 2));
}

console.log(
  isCircular([
    [9, 8],
    [6, 9, 1],
    [8, 4, 2],
    [1, 9],
    [2, 1, 6],
  ]),
  true,
);
console.log(isCircular([[1, 2, 7], [7, 9, 3], [3], [3, 4], [4, 2, 1]]), true);
console.log(
  isCircular([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ]),
  false,
);
console.log(
  isCircular([
    [9, 9],
    [9, 2],
    [2, 9],
    [9, 5],
    [5, 9],
    [9, 6],
    [6, 9],
  ]),
  true,
);
console.log(
  isCircular([
    [1, 2],
    [4, 1],
    [3, 4],
    [2, 3],
  ]),
  true,
);
console.log(
  isCircular([
    [1, 1],
    [1, 2],
  ]),
  false,
);
console.log(
  isCircular([
    [6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6],
    [6, 6, 9],
    [9, 0, 1],
  ]),
  false,
);
console.log(
  isCircular([
    [2, 1],
    [1, 2],
  ]),
  true,
);
console.log(
  isCircular([
    [2, 1],
    [1, 2],
    [2, 1],
    [1, 3, 1],
    [1, 4, 4],
  ]),
  false,
);
