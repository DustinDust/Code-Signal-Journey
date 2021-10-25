/**
 * find different right most bit
 * @param {Number} n: first number;
 * @param {Number} m: second number;
 * @return {Number}: very first bit that is different
 */
function differentRightmostBit(n, m) {
  return (n ^ m) & (~(n ^ m) + 1);
}

differentRightmostBit(11, 13); // return 2;

// explain:
// bit wise: n xor m -> every different bits will be 1, and the same will be 0
// -(n xor m): invert all the bits, which means we will get a binary string
// where every bit that has the same value at n and m be 1, otherwise 0
// then add 1, we will get the first bit with of diffrerent as one. right most.
