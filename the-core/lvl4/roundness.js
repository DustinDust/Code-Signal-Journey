const increaseNumberRoundness = (n) => {
  const nstr = n.toString().split('').reverse();
  let first = true;
  let findex;
  for (let i = 0; i < nstr.length; i++) {
    if (nstr[i] !== '0' && first) {
      findex = i;
      first = false;
      break;
    }
  }
  if (!first) {
    return nstr.slice(findex).includes('0');
  }
  return false;
};

// simpler way
const solUsingRegex = (n) => {
  return /0[1-9]/.test(n);
};
