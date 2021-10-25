const _ = require('underscore');

const differentSquare = (matrix) => {
  const fromSquareToString = (i, j) => {
    return (
      matrix[i][j].toString() +
      matrix[i][j + 1].toString() +
      matrix[i + 1][j] +
      matrix[i + 1][j + 1]
    );
  };

  const result = {};

  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[0].length - 1; j++) {
      const sqstr = fromSquareToString(i, j);
      result[sqstr] = result[sqstr] === undefined ? 0 : result[sqstr] + 1;
    }
  }
  return _.keys(result).length;
};

differentSquare([]);
