/* eslint-disable function-paren-newline */
/* eslint-disable no-shadow */
/* eslint-disable implicit-arrow-linebreak */
// In this challenge, you have to obtain a sentence from the elements of a given matrix.
// In the matrix, each word of the sentence follows a columnar order from the top to the bottom,
// instead of the usual left-to-right order: it's time for transposition!

// Given a matrix mtx, implement a function that returns the complete sentence as a string,
// with the words separated by a space between them.

function transposeMatrix(mtx) {
  return mtx[0].map((_, i) => mtx.map((_, j) => mtx[j][i]).join(' ')).join(' ');
}

console.log(
  transposeMatrix([['Enter'], ['the'], ['Matrix.']]),
  'Enter the Matrix.',
);

console.log(
  transposeMatrix([
    ['Unfortunately,', 'be', 'is.', 'see'],
    ['no', 'told', "You'll", 'it'],
    ['one', 'what', 'have', 'for'],
    ['can', 'Matrix', 'to', 'yourself.'],
  ]),
  "Unfortunately, no one can be told what Matrix is. You'll have to see it for yourself.",
);

console.log(
  transposeMatrix([
    ['Matrix', 'that'],
    ['is', 'system'],
    ['a', 'is'],
    ['system', 'our'],
    ['Neo,', 'enemy.'],
  ]),
  'Matrix is a system Neo, that system is our enemy.',
);

console.log(
  transposeMatrix([
    ['If', 'killed', 'you'],
    ['you', 'in', 'die'],
    ['are', 'Matrix', 'here?'],
  ]),
  'If you are killed in Matrix you die here?',
);

console.log(
  transposeMatrix([
    ['As', 'human'],
    ['long', 'race'],
    ['as', 'will'],
    ['Matrix', 'never'],
    ['exists,', 'be'],
    ['the', 'free.'],
  ]),
  'As long as Matrix exists, the human race will never be free.',
);
