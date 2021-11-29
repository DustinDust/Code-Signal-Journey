const solution = (size, field) => {
  const validate = (sol) => {
    const sets = [];
    let index = 0;
    for (index; index < sol.length; index++) {
      if (sol[index] === '#' || sol[index] === '.') break;
      sets.push(Number(sol[index]));
    }
    const bnw = sol
        .slice(index)
        .join('')
        .split('.')
        .filter((val) => val !== '')
        .map((val) => val.length);
    if (bnw.length !== sets.length) return false;
    for (let i = 0; i < bnw.length; i++) {
      if (bnw[i] !== sets[i]) return false;
    }
    return true;
  };

  // find all the rows solution
  let rows = [];
  for (let i = 0; i < field.length; i++) {
    rows.push(field[i].filter((value) => value !== '-'));
  }
  rows = rows.filter((row) =>
    row.some((item) => {
      return item === '#' || item === '.';
    })
  );

  // find all columns solution
  let cols = [];
  for (let c = Math.floor((size + 1) / 2); c < field[0].length; c++) {
    cols.push([]);
    const index = cols.length - 1;
    for (let r = 0; r < field.length; r++) {
      cols[index].push(field[r][c]);
    }
  }
  cols = cols.map((col) => col.filter((val) => val !== '-'));

  // console.log(rows);
  // console.log(cols);
  for (const row of rows) {
    if (!validate(row)) return false;
  }
  for (const col of cols) {
    if (!validate(col)) return false;
  }
  return true;
};

const foo = solution(5, [
  ['-', '-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '2', '2', '1', '-', '1'],
  ['-', '-', '-', '2', '1', '1', '3', '3'],
  ['-', '3', '1', '#', '#', '#', '.', '#'],
  ['-', '-', '2', '#', '#', '.', '.', '.'],
  ['-', '-', '2', '.', '.', '.', '#', '#'],
  ['-', '1', '2', '#', '.', '.', '#', '#'],
  ['-', '-', '5', '#', '#', '#', '#', '#'],
]);

console.log(foo);
