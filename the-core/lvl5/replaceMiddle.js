const replaceMiddle = (arr) => {
  let middle;
  if (arr.length % 2 === 0) {
    middle = arr[arr.length / 2 - 1] + arr[arr.length / 2];
    arr.splice(arr.length / 2 - 1, 2, middle);
  }
  return arr;
};
