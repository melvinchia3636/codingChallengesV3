// Create a function that, given a string with at least three characters, returns an array of its:
// 1. Length.
// 2. First character.
// 3. Last character.
// 4. Middle character, if the string has an odd number of characters.
//    Middle TWO characters, if the string has an even number of characters.
// 5. Index of the second occurrence of the second character in the format "@ index #" and
//    "not found" if the second character doesn't occur again.

function allAboutStrings(str) {
  return [
    str.length,
    str[0],
    str[str.length - 1],
    str.slice(str.length / 2 - !(str.length % 2), str.length / 2 + 1),
    `@ index ${str.indexOf(str[1], 2)}`.replace(/^(.+-1)$/, 'not found'),
  ];
}

console.log(allAboutStrings('LASA'), [4, 'L', 'A', 'AS', '@ index 3']);
console.log(allAboutStrings('Computer'), [8, 'C', 'r', 'pu', 'not found']);
console.log(allAboutStrings('Science'), [7, 'S', 'e', 'e', '@ index 5']);
console.log(allAboutStrings('homework'), [8, 'h', 'k', 'ew', '@ index 5']);
console.log(allAboutStrings('spring'), [6, 's', 'g', 'ri', 'not found']);
console.log(allAboutStrings('break'), [5, 'b', 'k', 'e', 'not found']);
console.log(allAboutStrings('programming'), [11, 'p', 'g', 'a', '@ index 4']);
console.log(allAboutStrings('bad'), [3, 'b', 'd', 'a', 'not found']);
