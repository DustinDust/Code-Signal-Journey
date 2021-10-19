
const longestDigitsPrefix = (inputString) => {
  return inputString.match(/^\d*/)[0];
};

console.log(longestDigitsPrefix('123123aa1'));
