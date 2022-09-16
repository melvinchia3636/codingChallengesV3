// Write a function that counts how many concentric layers a rug has.

function countLayers(rug) {
  return [...rug[(rug.length - 1) / 2].slice(0, rug[0].length / 2 + 1)].filter(
    (e, i, a) => i === 0 || e !== a[i - 1],
  ).length;
}

console.log(countLayers(['AAA']), 1);
console.log(countLayers(['AAAA', 'AAAA', 'AAAA']), 1);
console.log(countLayers(['AAAA', 'ABBA', 'AAAA']), 2);
console.log(
  countLayers([
    'AAAAAAAAA',
    'ABBBBBBBA',
    'ABBBBBBBA',
    'ABBBBBBBA',
    'AAAAAAAAA',
  ]),
  2,
);
console.log(
  countLayers([
    'AAAAAAAAA',
    'ABBBBBBBA',
    'ABBAAABBA',
    'ABBBBBBBA',
    'AAAAAAAAA',
  ]),
  3,
);

console.log(
  countLayers([
    'AAAAAAAAA',
    'ABBBBBBBA',
    'ABCCCCCBA',
    'ABBBBBBBA',
    'AAAAAAAAA',
  ]),
  3,
);
console.log(
  countLayers([
    'AAAAAAAAAAA',
    'AABBBBBBBAA',
    'AABCCCCCBAA',
    'AABCAAACBAA',
    'AABCADACBAA',
    'AABCAAACBAA',
    'AABCCCCCBAA',
    'AABBBBBBBAA',
    'AAAAAAAAAAA',
  ]),
  5,
);
console.log(
  countLayers([
    'AAAAAAAAAAA',
    'AABBBBBBBAA',
    'AABCCCCCBAA',
    'AABCAAACBAA',
    'AABCABACBAA',
    'AABCAAACBAA',
    'AABCCCCCBAA',
    'AABBBBBBBAA',
    'AAAAAAAAAAA',
  ]),
  5,
);
console.log(
  countLayers([
    'AAAAAAAAAAA',
    'AABBBBBBBAA',
    'AABCCCCCBAA',
    'AABCDDDCBAA',
    'AABCDDDCBAA',
    'AABCDDDCBAA',
    'AABCCCCCBAA',
    'AABBBBBBBAA',
    'AAAAAAAAAAA',
  ]),
  4,
);
console.log(
  countLayers([
    'FFFFFFFFFFFFFFFFFFFFFFFFF',
    'FFFFFFFFFFFFFFFFFFFFFFFFF',
    'FFFFGGGGGGGGGGGGGGGGGFFFF',
    'FFFFGGGAAAAAAAAAAAGGGFFFF',
    'FFFFGGGAABBBBBBBAAGGGFFFF',
    'FFFFGGGAABCCCCCBAAGGGFFFF',
    'FFFFGGGAABCDDDCBAAGGGFFFF',
    'FFFFGGGAABCDDDCBAAGGGFFFF',
    'FFFFGGGAABCDDDCBAAGGGFFFF',
    'FFFFGGGAABCCCCCBAAGGGFFFF',
    'FFFFGGGAABBBBBBBAAGGGFFFF',
    'FFFFGGGAAAAAAAAAAAGGGFFFF',
    'FFFFGGGGGGGGGGGGGGGGGFFFF',
    'FFFFFFFFFFFFFFFFFFFFFFFFF',
    'FFFFFFFFFFFFFFFFFFFFFFFFF',
  ]),
  6,
);
