const isSmooth = (arr) => {
  let middle;
  if (arr.length % 2 === 0) {
    middle = arr[(arr.length / 2) - 1] + arr[arr.length / 2 ];
  } else {
    middle = arr[(arr.length - 1) / 2];
  }
  return middle === arr[0] && middle === arr[arr.length - 1];
};
