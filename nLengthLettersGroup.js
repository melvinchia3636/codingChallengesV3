/* eslint-disable indent */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
// Write a function that returns an array of strings populated
// from the slices of n-length characters of the given word
// (a slice after another while n-length applies onto the word).

function collect(s, n) {
  return Array(Math.floor(s.length / n))
    .fill(0)
    .map((_, i) => s.slice(i * n, i * n + n))
    .sort();
}

const [strVector, numVector, resVector] = [
  [
    'intercontinentalisationalism',
    'strengths',
    'pneumonoultramicroscopicsilicovolcanoconiosis',
    'lexicographically',
    'anesthesiologists',
    'subdermatoglyphic',
    'sesquipedalianism',
    'recollection',
    'pseudopseudohypoparathyroidism',
    'floccinaucinihilipilification',
    'antidisestablishmentarianism',
    'supercalifragilisticexpialidocious',
    'incomprehensibilities',
    'astrophysicists',
    'honorificabilitudinitatibus',
    'unimaginatively',
    'euouae',
    'tsktsk',
    'uncopyrightable',
  ],
  [6, 3, 15, 4, 6, 6, 6, 3, 7, 2, 5, 3, 9, 4, 12, 8, 7, 6, 11],
  [
    ['ationa', 'interc', 'ntalis', 'ontine'],
    ['eng', 'str', 'ths'],
    ['croscopicsilico', 'pneumonoultrami', 'volcanoconiosis'],
    ['aphi', 'call', 'cogr', 'lexi'],
    ['anesth', 'esiolo'],
    ['matogl', 'subder'],
    ['pedali', 'sesqui'],
    ['ect', 'ion', 'oll', 'rec'],
    ['hyroidi', 'poparat', 'pseudop', 'seudohy'],
    [
      'at',
      'ci',
      'fl',
      'ic',
      'if',
      'ih',
      'il',
      'il',
      'in',
      'io',
      'ip',
      'na',
      'oc',
      'uc',
    ],
    ['ablis', 'antid', 'arian', 'hment', 'isest'],
    [
      'ali',
      'ali',
      'doc',
      'erc',
      'fra',
      'gil',
      'ice',
      'iou',
      'ist',
      'sup',
      'xpi',
    ],
    ['ensibilit', 'incompreh'],
    ['astr', 'ophy', 'sici'],
    ['honorificabi', 'litudinitati'],
    ['unimagin'],
    [],
    ['tsktsk'],
    ['uncopyright'],
  ],
];
strVector.forEach((_, i) =>
  console.log(collect(strVector[i], numVector[i]), resVector[i]),
);
