const solution = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    let j = matrix.length - i - 1;
    let l = matrix[i][i];
    matrix[i][i] = matrix[i][j];
    matrix[i][j] = l;
  }
  console.log(matrix);
  return matrix;
};

solution([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
