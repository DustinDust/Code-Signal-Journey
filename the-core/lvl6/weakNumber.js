const _ = require('underscore');
const weakNumbers = (n) => {
  const divs = (a) => {
    let div = 2;
    for (let i = 2; i <= a/2; i++) {
      if (a % i === 0) div++;
    }
    return div;
  };
  const weak = (a) => {
    const diva = divs(a);
    let weakness = 0;
    for (let i = 1; i < a; i++) {
      if (divs(i) > diva) weakness++;
    }
    return weakness;
  };

  const weaknesses = _.range(1, n+1).map((value, index) => {
    return weak(value);
  });
  console.log(weaknesses);
  const weakest = weaknesses.sort((a, b) => a - b)[weaknesses.length - 1];
  const weakestNumber = weaknesses.filter((v) => v === weakest).length;
  return [weakest, weakestNumber];
};
