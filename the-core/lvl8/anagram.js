const createAnagram = (s, t) => {
  let count = 0;
  const freq = (str) => {
    return str.split('').reduce((ans, value, index) => {
      if (!ans.hasOwnProperty(value)) {
        ans[value] = 1;
      } else {
        ans[value]++;
      }
      return ans;
    }, {});
  };

  const sF = freq(s);
  const tF = freq(t);
  console.log(sF);
  console.log(tF);
  for (const ch in tF) {
    if (Object.prototype.hasOwnProperty.call(sF, ch)) {
      if (tF[ch] > sF[ch]) {
        count += tF[ch] - sF[ch];
      }
      if (tF[ch] <= sF[ch]) {
        continue;
      }
    } else {
      count += tF[ch];
    }
  }
  return count;
};

console.log(createAnagram('KJDMDLEEKALIJB', 'AFDJGDCGHMIGHB'));
