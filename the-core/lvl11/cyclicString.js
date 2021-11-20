const solution = (s) => {
  let charFreq = {};
  for (let char of s) {
    charFreq[char] = (charFreq[char] || 0) + 1;
  }
  console.log(charFreq);
  let cycL = Object.keys(charFreq).length;
  while (cycL <= s.length) {
    for (let i = 0; i < s.length - cycL; i++) {
      let cycS = s.substr(i, cycL);
      let dupS = cycS.repeat(15);
      if (dupS.search(s) !== -1) return cycL;
    }
    cycL++;
  }
  return cycL - 1;
};
