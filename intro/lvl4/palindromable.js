const palindromeRearranging = (inputString) => {
  if (inputString.split('').reverse().join('') === inputString) return true;

  const charCount = inputString.split('').reduce((prev, value, index) => {
    if (!(value in prev)) {
      prev[value] = 1;
    } else {
      prev[value]++;
    }
    return prev;
  }, {});
  let bad = 0;
  for (const i in charCount) {
    if (charCount[i] % 2 !== 0) {
      bad++;
      if (bad >= 2) return false;
    }
  }
  return true;
};

console.log(palindromeRearranging('aabb'));
