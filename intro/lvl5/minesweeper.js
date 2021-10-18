const minesweeper = (matrix) => {
  const getEmptyRow = function(num) {
    return '0'
        .repeat(num)
        .split('')
        .map((val) => {
          return Number.parseInt(val);
        });
  };
  const res = [];
  for (let i = 0; i < matrix.length + 2; i++) {
    res.push(getEmptyRow(matrix[0].length + 2));
  }

  matrix.forEach((row, rowIndex) => {
    row.forEach((val, index) => {
      if (val) {
        const rowIndexRes = rowIndex + 1;
        const indexRes = index + 1;
        res[rowIndexRes + 1][indexRes + 1]++;
        res[rowIndexRes + 1][indexRes]++;
        res[rowIndexRes - 1][indexRes]++;
        res[rowIndexRes][indexRes + 1]++;
        res[rowIndexRes][indexRes - 1]++;
        res[rowIndexRes - 1][indexRes - 1]++;
        res[rowIndexRes - 1][indexRes + 1]++;
        res[rowIndexRes + 1][indexRes - 1]++;
      } else return;
    });
  });
  res.shift();
  res.pop();
  res.forEach((row) => {
    row.shift();
    row.pop();
  });
  return res;
};

console.log(
    minesweeper([
      [true, false, false],
      [false, true, false],
      [false, false, false],
    ])
);
