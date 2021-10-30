const additionWithoutCarrying = (a, b) => {
  const ans = [];
  const reverseA = a.toString().split('').reverse();
  const reverseB = b.toString().split('').reverse();
  const length = Math.max(reverseA.length, reverseB.length);
  for (let i = 0; i < length; i++) {
    if (i >= reverseA.length) {
      ans.unshift(parseInt(reverseB[i]));
      continue;
    }
    if (i >= reverseB.length) {
      ans.unshift(parseInt(reverseA[i]));
      continue;
    }
    ans.unshift((parseInt(reverseA[i]) + parseInt(reverseB[i]))%10);
  }
  return parseInt(ans.join(''));
};
