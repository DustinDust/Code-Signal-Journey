const _ = require('underscore');
const numbersGrouping = (a) => {
  let count = {};
  let arr = _.toArray(a).map((value) => value-1);
  for (let num of arr) {
    let index = Math.floor(num / 10000);
    count[Math.floor(index)] = (count[index] || 0) + 1;
  }
  return _.keys(count).length + arr.length;
};

console.log(numbersGrouping([20000, 239, 10001, 999999, 10000, 20566, 29999]));
