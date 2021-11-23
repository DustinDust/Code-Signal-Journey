const solution = (rows) => {
  let state = rows.map((row) => row.split('')).reverse();
  let stop = [];
  while (true) {
    for (let c = 0; c < state[0].length; c++) {
      let movable = false;
      for (let r = 1; r < state.length; r++) {
        if (state[r][c] === '#' && state[r - 1][c] === '.') {
          movable = true;
          state[r][c] = '.';
          state[r - 1][c] = '#';
        }
      }
      if (!movable) {
        stop.push(c);
      }
    }
    if (stop.length > 0) break;
  }
  return stop;
};

console.log(solution(['#..##', '.##.#', '.#.##', '.....']));
