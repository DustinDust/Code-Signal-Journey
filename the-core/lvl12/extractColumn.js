const solution = (matrix, column) => {
  const res = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (j > column) break;
      if (j === column) res.push(matrix[i][j]);
    }
  }
  return res;
};

