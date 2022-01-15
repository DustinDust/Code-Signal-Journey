const solution = (table, coords) => {
  // find the row and col of the table
  colNums = table[0]
      .match(/-+/g)
      .map((c) => c.length)
      .map((r) => ((y = j), (j += r + 1), y), (j = 0));
  colNums.push(table[0].length - 1);
  rowNums = table.map((r) => r[0]).join``
      .match(/\|+/g)
      .map((c) => c.length)
      .map((r) => ((y = j), (j += r + 1), y), (j = 0));
  rowNums.push(table.length - 1);

  // row from to, col from to
  rft = rowNums.slice(coords[1][0], coords[0][0] + 2);
  cft = colNums.slice(coords[0][1], coords[1][1] + 2);

  // convert the table into 2D arrays
  T = table.map((r) => r.split``);

  // console.table(T);

  let row = 0; let col = 0;

  for (row = rft.slice(-1)[0]; --row > rft[0]; ) {
    for (col = cft.length - 1; --col > 0; ) {
      T[row][cft[col]] = ' ';
    }

    // if the current cells is at the border, change the wall to '|'
    // instead of '+'
    if (cft[0] == colNums[0]) {
      T[row][cft[0]] = '|';
    }
    if (cft[cft.length-1] == colNums[colNums.length-1]) {
      T[row][cft[cft.length-1]] = '|';
    }
  }

  for (col = cft.slice(-1)[0]; --col > cft[0]; ) {
    for (row = rft.length - 1; --row > 0; ) {
      T[rft[row]][col] = ' ';
    }


    // if the current cells is at the border, change the wall to '-'
    // instead of '+'
    if (rft[0] == rowNums[0]) {
      T[rft[0]][col] = '-';
    }
    if (rft[rft.length - 1] == rowNums[rowNums.length - 1]) {
      T[rft[rft.length - 1]][col] = '-';
    }
  }


  // console.table(T);
  // join it back
  return T.map((r) => r.join(''));
};

const table = [
  '+----+--+-----+----+',
  '|abcd|56|!@#$%|qwer|',
  '|1234|78|^&=()|tyui|',
  '+----+--+-----+----+',
  '|zxcv|90|77777|stop|',
  '+----+--+-----+----+',
  '|asdf|~~|ghjkl|100$|',
  '+----+--+-----+----+',
];

const coords = [
  [2, 0],
  [1, 1],
];

solution(table, coords);
