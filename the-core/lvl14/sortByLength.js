const solution = (inputArray) => {
  return inputArray.sort((a, b) => a.length - b.length);
};

console.log(solution(['abc', '', 'aaa', 'a', 'zz']));
