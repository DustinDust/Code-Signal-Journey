const sudoku = (grid) => {
  const checkrow = new Array(10).fill(0);
  const checkcol = new Array(10).fill(0);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (checkrow[grid[i][j]] !== 0) {
        return false;
      } else {
        checkrow[grid[i][j]] = 1;
      }
      if (checkcol[grid[j][i]] !== 0) {
        return false;
      } else {
        checkcol[grid[j][i]] = 1;
      }
    }
    checkcol.fill(0);
    checkrow.fill(0);
  }
  console.log('hang cot done');

  const checkSquare = (row, col) => {
    const endRow = row + 3;
    const endCol = col + 3;
    const check = new Array(10).fill(0);
    for (let i = row; i < endRow; i++) {
      for (let j = col; j < endCol; j++) {
        if (check[grid[i][j]] !== 0) {
          return false;
        } else {
          check[grid[i][j]] = 1;
        }
      }
    }
    return true;
  };
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      if (checkSquare(i, j) === false) return false;
    }
  }
  console.log('Square done');
  return true;
};

sudoku([
  [1, 3, 2, 5, 4, 6, 9, 8, 7],
  [4, 6, 5, 8, 7, 9, 3, 2, 1],
  [7, 9, 8, 2, 1, 3, 6, 5, 4],
  [9, 2, 1, 4, 3, 5, 8, 7, 6],
  [3, 5, 4, 7, 6, 8, 2, 1, 9],
  [6, 8, 7, 1, 9, 2, 5, 4, 3],
  [5, 7, 6, 9, 8, 1, 4, 3, 2],
  [2, 4, 3, 6, 5, 7, 1, 9, 8],
  [8, 1, 9, 3, 2, 4, 7, 6, 5],
]);
