const solution = (matrix) => {
  matrix.sort((a, b) => a[0] - b[0]);
  console.log(matrix);
  for (let c = 0; c < matrix[0].length; c++) {
    for (let r = 1; r < matrix.length; r++) {
      if (matrix[r - 1][c] >= matrix[r][c]) return false;
    }
  }
  return true;
};

console.log(
    solution([
      [2, 7, 1],
      [0, 2, 0],
      [1, 3, 1],
    ])
);
