// Given a string, reverse all the words which have odd length.
// The even length words are not changed.

function reverseOdd(str) {
  return str
    .split(' ')
    .map((w) => (w.length % 2 ? w.split('').reverse().join('') : w))
    .join(' ');
}

console.log(reverseOdd('One two three four'), 'enO owt eerht four');
console.log(
  reverseOdd('Make sure uoy only esrever sdrow of ddo length'),
  'Make sure you only reverse words of odd length',
);
console.log(reverseOdd(''), '', 'Should work with empty string.');
console.log(
  reverseOdd('Bananas'),
  'sananaB',
  'Should work with only one word.',
);
console.log(
  reverseOdd('Even even even even even even even even even'),
  'Even even even even even even even even even',
);
console.log(
  reverseOdd('Odd odd odd odd odd odd odd odd odd odd odd'),
  'ddO ddo ddo ddo ddo ddo ddo ddo ddo ddo ddo',
);
