const solution = (matrix, a, b) => {
  let rowSum = matrix[a].reduce((ans, val) => ans + val, 0);
  let colSum = -matrix[a][b];
  for (let i = 0; i < matrix.length; i++) {
    colSum += matrix[i][b];
  }
  return rowSum + colSum;
};

console.log(
  solution(
    [
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [3, 3, 3, 3],
    ],
    1,
    3
  )
);
