const arrayMaximalAdjacentDifference = (inputArray) => {
  return inputArray.reduce((prev, value, i) => {
    if (i + 1 === inputArray.length) return prev;
    return Math.max(prev, Math.abs(value - inputArray[i + 1]));
  }, 0);
};

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
