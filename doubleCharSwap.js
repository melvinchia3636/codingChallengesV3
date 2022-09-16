/* eslint-disable no-nested-ternary */

function doubleSwap(str, c1, c2) {
  return str
    .split('')
    .map((c) => (c === c1 ? c2 : c === c2 ? c1 : c))
    .join('');
}

console.log(doubleSwap('aabbccc', 'a', 'b'), 'bbaaccc');
console.log(
  doubleSwap('random w#rds writt&n h&r&', '#', '&'),
  'random w&rds writt#n h#r#',
);
console.log(doubleSwap('128 895 556 788 999', '8', '9'), '129 985 556 799 888');
console.log(doubleSwap('mamma mia', 'm', 'a'), 'amaam aim');
console.log(doubleSwap('**##**', '*', '#'), '##**##');
console.log(doubleSwap('123456789', '4', '5'), '123546789');
console.log(doubleSwap('445566&&', '4', '&'), '&&556644');
console.log(doubleSwap('!?@,.', ',', '.'), '!?@.,');
console.log(doubleSwap('Q_Q T_T =.= >.<', 'Q', 'T'), 'T_T Q_Q =.= >.<');
console.log(
  doubleSwap('(Q_Q) (T_T) (=.=) (>.<)', ')', '('),
  ')Q_Q( )T_T( )=.=( )>.<(',
);
console.log(doubleSwap('<>', '>', '<'), '><');
console.log(doubleSwap('001101', '1', '0'), '110010');
console.log(
  doubleSwap(
    '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~',
    'a',
    'b',
  ),
  '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`bacdefghijklmnopqrstuvwxyz{|}~',
);
