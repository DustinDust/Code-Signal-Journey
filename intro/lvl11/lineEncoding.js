const lineEncoding = (s) => {
  const reducedS = [...s[0]];

  for (let i = 1; i < s.length; i++) {
    if (s[i] === reducedS[reducedS.length - 1][0]) {
      reducedS.push(reducedS.pop() + s[i]);
    } else reducedS.push(s[i]);
  }

  //  console.log(reducedS);

  const ans = reducedS
      .map((value) => {
        if (value.length > 1) {
          return value.length.toString() + value[0];
        } else return value;
      })
      .join('');
  return ans;
};

console.log(lineEncoding('aaabbcc'));

// but harder to understand;
const bestApproach = (s) => {
  s.replace(/(.)\1*/g, (e, i) => (i === e ? i : e.lengthi));
};

console.log(bestApproach('aaabbcc'));
