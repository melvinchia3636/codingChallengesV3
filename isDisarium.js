/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
// A number is said to be Disarium if the sum of its digits raised to
// their respective positions is the number itself.
// Create a function that determines whether a number is a Disarium or not.

function isDisarium(num) {
  return [...`${num}`].reduce((a, b, i) => a + b ** (i + 1), 0) === num;
}

const [numVector, resVector] = [
  [6, 75, 135, 466, 372, 175, 1, 696, 876, 89, 518, 598],
  [true, false, true, false, false, true, true, false, false, true, true, true],
];

numVector.forEach((_, i) =>
  console.log(isDisarium(numVector[i]), resVector[i]),
);
