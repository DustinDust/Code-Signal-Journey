const leastFactorial = (n) => {
  let k = 1;
  let i = 1;
  while (k < n) {
    k = k * i;
    i++;
  }
  return k;
};
