/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
// Given a word, create an object that stores the indexes of each letter in an array.

//    Make sure the letters are the keys.
//    Make sure the letters are symbols.
//   Make sure the indexes are stored in an array and those arrays are values.

function mapLetters(word) {
  return [...word].reduce(
    (a, b, i) => ({ ...a, [b]: [...(a[b] || []), i] }),
    {},
  );
}

console.log(mapLetters(''), {});
console.log(mapLetters('a'), { a: [0] });
console.log(mapLetters('abcdefg'), {
  a: [0],
  b: [1],
  c: [2],
  d: [3],
  e: [4],
  f: [5],
  g: [6],
});
console.log(mapLetters('balloon'), {
  b: [0],
  a: [1],
  l: [2, 3],
  o: [4, 5],
  n: [6],
});
console.log(mapLetters('imagining'), {
  i: [0, 4, 6],
  m: [1],
  a: [2],
  g: [3, 8],
  n: [5, 7],
});
console.log(mapLetters('mummy'), { m: [0, 2, 3], u: [1], y: [4] });
console.log(mapLetters('aaaaaaabaaabaaabbb'), {
  a: [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14],
  b: [7, 11, 15, 16, 17],
});
