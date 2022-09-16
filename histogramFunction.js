// Build a function that creates histograms.
// Every bar needs to be on a new line and its length corresponds
// to the numbers in the array passed as an argument.
// The second argument of the function represents the character to be used for the bar.

function histogram(arr, char) {
  return arr.map((e) => char.repeat(e)).join('\n');
}

console.log(histogram([2, 4, 5, 6], 'o'), 'oo\noooo\nooooo\noooooo');
console.log(histogram([4, 2], '*'), '****\n**');
console.log(
  histogram([20, 1, 12], 'H'),
  'HHHHHHHHHHHHHHHHHHHH\nH\nHHHHHHHHHHHH',
);
console.log(
  histogram([2, 1, 2, 4, 5, 2, 3], '#'),
  '##\n#\n##\n####\n#####\n##\n###',
);
