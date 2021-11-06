const _ = require('underscore');
const squareDigitsSequence = (a0) => {
  const res = {};
  res[a0.toString()] = 1;
  while (1) {
    const tisIt = a0.toString().split('').reduce((ans, val) => {
      return ans + Number.parseInt(val) ** 2;
    }, 0);
    console.log(tisIt);
    if (_.has(res, tisIt.toString())) {
      return Object.keys(res).length + 1;
    } else {
      res[tisIt.toString()] = 1;
      a0 = tisIt;
    }
  }
};
