// Write a function that returns the minimum number of swaps to
// convert the first binary string into the second.

function minSwaps(s1, s2) {
  return s1.split('').filter((c, i) => c !== s2[i]).length / 2;
}

console.log(minSwaps('1001', '1001'), 0);
console.log(minSwaps('1100', '1001'), 1);
console.log(minSwaps('110011', '010111'), 1);
console.log(minSwaps('1100', '0011'), 2);
console.log(minSwaps('110011', '001111'), 2);
console.log(minSwaps('10011001', '01100101'), 3);
console.log(minSwaps('11111000001100', '10110010100110'), 3);
console.log(minSwaps('01100100100111', '10110010100110'), 3);
console.log(minSwaps('11110011001', '01100110111'), 3);
console.log(minSwaps('100110001', '010100110'), 3);
console.log(minSwaps('100101011', '011001101'), 3);
console.log(minSwaps('10011001', '01100110'), 4);
