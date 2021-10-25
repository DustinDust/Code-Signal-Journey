const rangeBitCount = (a, b) => {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum = sum + i.toString(2).split('').reduce((prev, val) => {
      if (val === '1') return prev + 1;
      else return prev;
    }, 0);
  }
  return sum;
};
