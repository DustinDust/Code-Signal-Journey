const solution = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].push(false);
    matrix[i].unshift(false);
  }
  matrix.unshift(new Array(matrix[0].length).fill(false));
  matrix.push(new Array(matrix[0].length).fill(false));
  // console.log(matrix);
  let peri = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        if (!matrix[i - 1][j]) peri++;
        if (!matrix[i][j - 1]) peri++;
        if (!matrix[i + 1][j]) peri++;
        if (!matrix[i][j + 1]) peri++;
      }
    }
  }
  return peri;
};

console.log(
  solution([
    [false, true, true],
    [true, true, false],
    [true, false, false],
  ])
);
