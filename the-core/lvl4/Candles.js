const candles = (cnum, makenew) => {
  let leftover = cnum;
  let candles = 0;
  let burnt = cnum;
  while (leftover/makenew >= 1) {
    candles = Math.floor(leftover/makenew);
    leftover = candles + leftover % makenew;
    burnt += candles;
  }
  return burnt;
};

candles(5, 2);
