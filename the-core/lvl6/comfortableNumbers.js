const _ = require('underscore');
const comfortableNumbers = (l, r) => {
  const s = (a) => {
    let S = 0;
    while (a > 0) {
      S += a%10;
      a = parseInt(a / 10);
    }
    return S;
  };

  let res = 0;

  for (let i = l; i <= r; i++) {
    const si = s(i);
    for (let j = i + 1; j <= (i + si > r ? r : i + si); j++) {
      const sj = s(j);
      if (i <= j + sj && i >= j - sj) res++;
    }
  }
  return res;
};

console.log(comfortableNumbers(12, 108));
