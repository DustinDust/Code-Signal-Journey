const areSimilar = (a, b) => {
  let diffNum = 0;
  let diffVal = 0;
  if (
    [...a].sort((m, n) => m - n).join('') !==
    [...b].sort((m, n) => m - n).join('')
  ) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    const dif = a[i] - b[i];
    if (dif !== 0) {
      diffNum++;
      diffVal += dif;
    }
    if (diffNum > 2) return false;
  }
  return diffVal === 0;
};

console.log(areSimilar([4, 6, 3], [3, 4, 6]));
