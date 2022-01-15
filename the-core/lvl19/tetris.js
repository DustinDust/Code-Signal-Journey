const solution = (pieces) => {
  // some basic data
  let map = Array.from({length: 20}, (_) => new Array(10).fill('.')); // screen
  let status = new Array(20).fill(0); // number of block at each row
  let points = 0;
  // A function that rotate a piece
  const rotate = (shape) =>
    Array.from({length: shape[0].length}, (_, i) =>
      Array.from(
          {length: shape.length},
          (_, j) => shape[shape.length - 1 - j][i]
      )
    );

  // clear full line(s) and increase the points
  const clearFullLine = (line) => {
    while ((line = status.indexOf(10)) !== -1) {
      points++;
      map.splice(line, 1);
      status.splice(line, 1);
      map.unshift(new Array(10).fill('.'));
      status.unshift(0);
    }
  };

  // place a piece at [x, y] coords if render is true
  // check if a piece can be placed at [x, y] coords if render is false
  // if placeable return true, else return false
  const placePieces = (x, y, shape, render) => {
    for (let i = 0; i < shape.length; i++) {
      for (let j = 0; j < shape[0].length; j++) {
        if (!render && shape[i][j] === '#' && map[x + i][y + j] === '#') {
          return false;
        }
        render && shape[i][j] === '#' && (map[x + i][y + j] = '#');
      }
    }
    return true;
  };

  // actual logic code
  pieces.map((piece) => {
    // the max total number of blocks in the rows this piece occupies
    let maxBlocks = -1;
    let pos; // [row, col, i-th rotated piece], the most efficient way
    // to place a block
    let rotations = [piece]; // all the rotation possible of curr piece
    for (let i = 0; i < 3; i++) {
      rotations.push(rotate(rotations[i]));
    }
    // try every rotations possible
    rotations.map((shape, type) => {
      // h an w is the height and width of the piece in question
      const h = shape.length;
      const w = shape[0].length;
      // start with each column
      for (let j = 0; j + w <= 10; j++) {
        let highestBase = 19;
        let i = 0;
        // find the lowest point of the current row
        while (status[highestBase]) {
          highestBase--;
        }
        for (; highestBase < 20; highestBase++) {
          // i is the row that is possible to place the current piece into
          i = highestBase + 1 - h;
          // update the maxBlocks, the greater the maxBlocks is, the more
          // efficent the placement is
          let totalBlock = shape.reduce((t, v, k) => (t += status[i + k]), 0);
          if (placePieces(i, j, shape, false)) {
            if (totalBlock > maxBlocks) {
              maxBlocks = totalBlock;
              pos = [i, j, type];
            }
          } else break;
        }
      }
    });
    const [x, y, type] = pos;
    // place the piece
    placePieces(x, y, rotations[type], true);
    // update the status after placing the piece
    rotations[type].map(
        (_, i) => (status[i + x] += _.filter((v) => v === '#').length)
    );
    // should there be any full line, clear them all
    clearFullLine();
  });
  return points;
};
