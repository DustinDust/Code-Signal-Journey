const _ = require('underscore');
const solution = (inputString) => {
  const alpha = _.range(97, 123).map((val) => String.fromCharCode(val));
  const alphaReversed = _.range(97, 123)
      .reverse()
      .map((val) => String.fromCharCode(val));
  const reflect = {};
  for (let i = 0; i < alpha.length; i++) {
    reflect[alpha[i]] = alphaReversed[i];
  }
  let resultString = '';
  for (const char of inputString) {
    resultString += reflect[char];
  }
  return resultString;
};

console.log(solution('name'));

