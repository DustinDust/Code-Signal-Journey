const firstDigit = (inputString) => {
  return inputString.split('').find((value) => {
    if (Number.isInteger(Number.parseInt(value))) return true;
  });
};

console.log(firstDigit('q2q-q'));
