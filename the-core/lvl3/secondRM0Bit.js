/**
 * this function does things
 * @param {Number} n :number input
 * @return{Number} 2**indexofthesecondrightmost0bit;
 */
function secondRightmostZeroBit(n) {
  return (function() {
    let indexFound;
    let timeFound = 0;
    for (let i = 0; i < n.toString(2).length; i++) {
      if (n.toString(2)[i] === '0') {
        timeFound++;
        if (timeFound >= 2) {
          indexFound = i;
          break;
        }
      }
    }
    return 2 ** indexFound;
  })();
}
secondRightmostZeroBit(37);
