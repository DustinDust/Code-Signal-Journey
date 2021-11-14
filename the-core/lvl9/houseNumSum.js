const houseNumbersSum = (inputArray) => {
  let sum = 0;
  for (let i of inputArray) {
    if (i == 0) break;
    sum += i;
  }
  return sum;
};

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
