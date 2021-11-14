const _ = require('underscore');
const constructSquare = (s) => {
  // construct some test data:
  const list = _.range(1, 100000)
      .map((v) => v * v)
      .reverse();

  // find some questionable stuff
  const getFreq = (str) => {
    const map = {};
    str.split('').forEach((ch) => {
      map[ch] = (map[ch] || 0) + 1;
    });
    return _.values(map).sort().join('');
  };

  // function that test;
  const test = (str, number) => {
    const testAttr = getFreq(str);
    const nbrAttr = getFreq(number.toString());

    if (testAttr === nbrAttr) {
      console.log(testAttr);
      return true;
    } else return false;
  };

  for (const testcase of list) {
    if (testcase.toString().length !== s.length) continue;
    if (test(s, testcase)) {
      return testcase;
    }
  }
  return -1;
};

constructSquare('hello');
