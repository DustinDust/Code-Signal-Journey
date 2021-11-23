const solution = (matrix, width, center, t) => {
  const boundaries = {
    rowStart: center[0] - (width - 1) / 2,
    rowEnd: center[0] + (width - 1) / 2,
    colStart: center[1] - (width - 1) / 2,
    colEnd: center[1] + (width - 1) / 2,
  };

  const topleft = [];
  const topmid = [];
  const topright = [];
  let midright = [];
  const bottomright = [];
  const bottommid = [];
  const bottomleft = [];
  let midleft = [];
  for (
    let i = boundaries.rowStart, j = boundaries.colStart;
    i < center[0], j < center[1];
    i++, j++
  ) {
    const k = width - 1 - 2 * (j - boundaries.colStart);
    topleft.push(matrix[i][j]);
    topmid.push(matrix[i][center[1]]);
    topright.push(matrix[i][j + k]);
  }
  midleft = matrix[center[0]].slice(boundaries.colStart, center[1]);
  midright = matrix[center[0]].slice(center[1] + 1, boundaries.colEnd + 1);
  for (
    let i = center[0] + 1, j = center[1] + 1;
    i <= boundaries.rowEnd, j <= boundaries.colEnd;
    i++, j++
  ) {
    const k = width - 1 - 2 * (boundaries.colEnd - j);
    bottomright.push(matrix[i][j]);
    bottommid.push(matrix[i][center[1]]);
    bottomleft.push(matrix[i][j - k]);
  }

  const star = [
    topleft,
    topmid,
    topright,
    midright,
    bottomright,
    bottommid,
    bottomleft,
    midleft,
  ];

  const newstar = star.slice();
  for (let i = 0; i < star.length; i++) {
    const nextpos = (i + t) % star.length;
    newstar[nextpos] = star[i];
  }

  for (
    let i = boundaries.rowStart, j = boundaries.colStart;
    i < center[0], j < center[1];
    i++, j++
  ) {
    const k = width - 1 - 2 * (j - boundaries.colStart);
    matrix[i][j] = newstar[0][i - boundaries.rowStart];
    matrix[i][center[1]] = newstar[1][i - boundaries.rowStart];
    matrix[i][j + k] = newstar[2][i - boundaries.rowStart];
  }

  for (let i = boundaries.colStart; i < center[1]; i++) {
    matrix[center[0]][i] = newstar[7][i - boundaries.colStart];
  }

  for (
    let i = center[0] + 1, j = center[1] + 1;
    i <= boundaries.rowEnd, j <= boundaries.colEnd;
    i++, j++
  ) {
    const k = width - 1 - 2 * (boundaries.colEnd - j);
    matrix[i][j] = newstar[4][i - center[0] - 1];
    matrix[i][center[1]] = newstar[5][i - center[0] - 1];
    matrix[i][j - k] = newstar[6][i - center[0] - 1];
  }

  for (let i = center[1] + 1; i <= boundaries.colEnd; i++) {
    matrix[center[0]][i] = newstar[3][i - center[1] - 1];
  }

  return matrix;
};

solution(
    [
      [1, 0, 0, 2, 0, 7, 3, 1, 24, 0, 2, 0, 0, 3, 4],
      [1, 0, 0, 2, 0, 7, 3, 1, 25, 0, 2, 0, 0, 3, 4],
      [1, 0, 0, 2, 0, 99, 3, 1, 0, 0, 2, 0, 0, 3, 4],
      [1, 0, 0, 2, 0, 8, 3, 1, 0, 54, 2, 0, 0, 3, 4],
      [1, 0, 0, 2, 0, 7, 3, 1, 0, 88, 2, 0, 0, 3, 4],
      [1, 0, 0, 2, 0, 88, 3, 1, 0, 0, 2, 0, 0, 3, 4],
      [1, 0, 0, 2, 0, 99, 3, 1, 0, 0, 2, 0, 0, 3, 4],
    ],
    5,
    [3, 4],
    1
);
