const arrayMaxConsecutiveSum = (inputArray, k) => {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i <= inputArray.length - k; i++) {
    let sum = 0;
    for (let j = 0; j <= k - 1; j++) {
      sum += inputArray[i + j];
    }
    max = Math.max(sum, max);
  }
  return max;
};

const bestPractice = (inputArray, k) => {
  let max = inputArray.slice(0, k).reduce((x, y) => x + y);
  let sum = max;
  for (let i = k; i < inputArray.length; i++) {
    sum += inputArray[i] - inputArray[i-k];
    max = Math.max(sum, max);
  }
  return max;
};
