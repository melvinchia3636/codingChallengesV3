function insertWhitespace(s) {
  return s.replace(/((?<!^)[A-Z])/g, ' $1');
}

console.log(insertWhitespace('SheWalksToTheBeach'), 'She Walks To The Beach');
console.log(insertWhitespace('MarvinTalksTooMuch'), 'Marvin Talks Too Much');
console.log(
  insertWhitespace('HopelesslyDevotedToYou'),
  'Hopelessly Devoted To You',
);
console.log(
  insertWhitespace('EvenTheBestFallDownSometimes'),
  'Even The Best Fall Down Sometimes',
);
console.log(
  insertWhitespace('TheGreatestUpsetInHistory'),
  'The Greatest Upset In History',
);
