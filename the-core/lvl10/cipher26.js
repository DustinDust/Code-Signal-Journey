const _ = require('underscore');
const solution = (message) => {
  const charToNum = {};
  const numToChar = {};
  for (const i of _.range(97, 123)) {
    numToChar[i - 97] = String.fromCharCode(i);
    charToNum[String.fromCharCode(i)] = i - 97;
  }
  let res = '';
  let curr = 0;
  for (const ch of message) {
    const currentChar = charToNum[ch];
    if (currentChar >= curr % 26) {
      // for debugging
      // console.log('the character to be entered', currentChar - (curr % 26));
      res += numToChar[currentChar - (curr % 26)];
      curr += currentChar - (curr % 26);
    } else {
      // for debugging
      // console.log(
      //     'the character to be entered',
      //     26 + currentChar - (curr % 26)
      // );
      res += numToChar[26 + currentChar - (curr % 26)];
      curr += currentChar - (curr % 26);
    }
  }
  console.log(res);
  return res;
};

solution('taiaiaertkixquxjnfxxdh');
