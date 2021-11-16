const _ = require('lodash');
const solution = (s1, s2) => {
  const findToken = (s) => {
    const tokens = [s[0]];
    s.split('').slice(1).forEach((val, index) => {
      if (!isNaN(val) && !isNaN(tokens[tokens.length - 1])) {
        tokens[tokens.length - 1] += val;
      } else {
        tokens.push(val);
      }
    });
    return tokens;
  };
  const dif = [];
  const tokensOne = findToken(s1);
  const tokensTwo = findToken(s2);
  console.log(tokensOne, tokensTwo);
  const length = Math.min(tokensOne.length, tokensTwo.length);
  for (let i = 0; i < length; i++) {
    if (isNaN(tokensOne[i]) || isNaN(tokensTwo[i])) {
      if (tokensOne[i] < tokensTwo[i]) return true;
      else if (tokensOne[i] > tokensTwo[i]) return false;
      else continue;
    } else {
      const ret = compare(tokensOne[i], tokensTwo[i]);
      if (ret === 1) return true;
      else if (ret === -1) return false;
      else {
        if (tokensOne[i].length !== tokensTwo[i].length) {
          dif.push({
            first: tokensOne[i],
            second: tokensTwo[i],
          });
        }
        continue;
      }
    }
  }
  if (dif.length !== 0) {
    for (const df of dif) {
      if (df.first.length > df.second.length) {
        return true;
      } else return false;
    }
  }
  if (tokensOne.length !== tokensTwo.length) {
    return tokensOne.length < tokensTwo.length ? true: false;
  } else return false;
};

const compare = (val1, val2) => {
  try {
    const num1 = BigInt(val1);
    const num2 = BigInt(val2);
    if (num1 < num2) return 1;
    else if (num1 > num2) return -1;
    else return 0;
  } catch (e) {
    const num1 = Number(val1);
    const num2 = Number(val2);
    if (num1 < num2) return 1;
    else if (num1 > num2) return -1;
    else return 0;
  }
};


console.log(solution('00', 'a2'));


const optimalSolution = (s1, s2) => {
  // fill numeric values to 20 chars with leading zeros
  x1 = s1.replace(/\d+/g, (a) => a.padStart(20, 0));
  x2 = s2.replace(/\d+/g, (a) => a.padStart(20, 0));
  console.log(x1, x2);
  // check which is larger
  if (x1 < x2) return true;
  if (x1 > x2) return false;
  // if they are equal, fill strings with Z's and check again.
  return s1.padEnd(20, 'Z') < s2.padEnd(20, 'Z');
};

