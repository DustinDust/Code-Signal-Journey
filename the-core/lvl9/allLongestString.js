const allLongestStrings = (inputArray) => {
  let maxLength = inputArray
    .map((value) => value.length)
    .sort((a, b) => a - b)
    .pop();
  return inputArray.filter((value) => value.length == maxLength);
};

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));
