const solution = (inputArray, result) => {
  let cnt = 0;
  for (let i = 0; i < inputArray.length; i++) {
    for (let j= i + 1; j < inputArray.length; j++) {
      let isCorrectPair = true;
      for (let k = 0; k < result.length; k++) {
        if (inputArray[i][k] !== result[k] &&
            inputArray[j][k] !== result[k]) {
          isCorrectPair = false;
          break;
        }
      }
      if (isCorrectPair) cnt++;
    }
  }
  return cnt;
};
