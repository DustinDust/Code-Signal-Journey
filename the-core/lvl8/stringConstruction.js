const stringsConstruction = (a, b) => {
  const map = b.split('').reduce((ans, value) => {
    if (!ans.hasOwnProperty(value)) {
      ans[value] = 1;
    } else ans[value]++;
    return ans;
  }, {});
  const min = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  while (1) {
    for (const ch of a) {
      if (!map.hasOwnProperty(ch)) return 0;
      else {
        map[ch]--;
        if (map[ch] < 0) {
          return sum;
        }
      }
    }
    sum++;
  }
};
