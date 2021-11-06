
const isSumOfConsecutive2 = (n) => {
  let cnt = 0;
  for (let L = 1; L * (L + 1) < 2 * n; L++) {
    const a = (n - L * (L+1) / 2)/(L+1);
    if (Number.isInteger(a)) {
      cnt++;
    }
  }
  return cnt;
};
