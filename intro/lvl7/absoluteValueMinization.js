const absoluteValuesSumMinimization = (a) => {
  let min = Number.MAX_SAFE_INTEGER;
  let minIndex = -1;
  for (let i = 0; i < a.length; i++) {
    let Sum = 0;
    for (let j = 0; j < a.length; j++) {
      Sum += Math.abs(a[i] - a[j]);
    }
    if (Sum < min) {
      min = Sum;
      minIndex = i;
    }
  }
  return a[minIndex];
};

const bestPractices = (a) => {
  return a[Math.floor((a.length - 1)/2)];
};

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(bestPractices([1, 1, 3, 4]));
