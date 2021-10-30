const rounders = (n) => {
  let divider = 1;
  while (n > 10) {
    n = Math.round(n/10);
    divider *= 10;
  }
  return n * divider;
};
