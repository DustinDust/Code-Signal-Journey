const solution = (matrix) => {
  for (let i = 0; i < matrix.length / 2; i++) {
    let j = matrix.length - 1 - i;
    let l = matrix[i][i];
    let r = matrix[i][j];
    matrix[i][i] = matrix[j][j];
    matrix[i][j] = matrix[j][i];
    matrix[j][j] = l;
    matrix[j][i] = r;
  }
  console.log(matrix);
  return matrix;
};

solution([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
