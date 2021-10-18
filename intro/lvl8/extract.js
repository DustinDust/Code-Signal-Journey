const extractEachKth = (inputArray, k) => {
  return inputArray.filter((value, index) => {
    if ((index + 1) % k === 0) return false;
    else return true;
  });
};

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
