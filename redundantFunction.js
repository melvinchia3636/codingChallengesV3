// Write a function redundant that takes in a string str and returns a function that returns str.

function redundant(str) {
  return () => str;
}

const f1 = redundant('apple');
const f2 = redundant('pear');
const f3 = redundant('');

console.log(f1(), 'apple');
console.log(f2(), 'pear');
console.log(f3(), '');
