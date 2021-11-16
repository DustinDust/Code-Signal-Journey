const _ = require('underscore');
const solution = (number) => {
  const charToNum = {};
  const numToChar = {};
  for (const i of _.range(65, 91)) {
    numToChar[i - 65] = String.fromCharCode(i);
    charToNum[String.fromCharCode(i)] = i - 65;
  }
  const res = [];
  for (let i = 0; i <= Math.floor(charToNum[number] / 2); i++) {
    res.push(numToChar[i] + ' + ' + numToChar[charToNum[number] - i]);
  }
  console.log(res);
  return res;
};

solution('G');
