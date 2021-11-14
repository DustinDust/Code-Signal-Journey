'use strict';
const mostFrequentDigitSum = (n) => {
  let most = -1;
  const s = (num) => {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  };
  const step = (x) => {
    return x - s(x);
  };
  let temp1 = n;
  const sArr = [];
  while (temp1 > 0) {
    sArr.push(s(temp1));
    temp1 = step(temp1);
  }
  const frequency = {};
  let maxFrequency = -1;
  for (const i of sArr) {
    frequency[i] = (frequency[i] || 0) + 1;
    if (frequency[i] > maxFrequency) {
      maxFrequency = frequency[i];
      most = i;
    } else if (frequency[i] === maxFrequency && i > most) {
      most = i;
    }
  }
  return most;
};
const aBetterWay = (n) => {
  return n >= 999 ? 18 : n >= 9 ? 9 : n;
};
console.log(mostFrequentDigitSum(88));
console.log(aBetterWay(88));
