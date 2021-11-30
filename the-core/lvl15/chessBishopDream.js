/**
 *
 * this problem is solved using this observation: the movement of the
 * position of one dimension is a pattern. for example with width = 3
 * we have this pattern: 0, 1, 2, 2, 1, 0; and repeat after 6 moves;
 *
 * if we have the final position of the width dimension (k) and the pattern
 * array, we will know the final result of width using pattern[k % (width)]
 * the same applies to height of the array
 *
 * @param {Array<number>} boardSize size of the board
 * @param {Array<number>} initPosition starting point
 * @param {Array<number>} initDirection starting direction
 * @param {number} k number of moves
 * @return {Array<number>} array of the final position after k moves
 */
const solution = (boardSize, initPosition, initDirection, k) => {
  // the final result;
  const finalPosition = [...initPosition];

  // 2 dimension array
  for (let i = 0; i < 2; i++) {
    // calculate the final position after k moves in direction [i]
    finalPosition[i] = finalPosition[i] + initDirection[i] * k;
    // the pattern length, or the recurring point
    const modulus = boardSize[i] * 2;

    // this is the middle point of the pattern, used to quicky
    // calculate the final result
    const mid = (modulus - 1) / 2;

    // do the modulo to get rid of the recurring moves;
    // this will leaves us with the true ending position
    finalPosition[i] = finalPosition[i] % modulus;
    // ensure that the result of the modulo is a positive number
    if (finalPosition[i] < 0) {
      finalPosition[i] += modulus;
    }

    // finding the actual value of the ending point using mid;
    finalPosition[i] = mid - Math.abs(mid - finalPosition[i]);
  }
  return finalPosition;
};
