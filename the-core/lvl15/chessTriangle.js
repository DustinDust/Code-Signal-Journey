const solution = (n, m) => {
  const knightMoves = [
    {hor: 1, ver: 2},
    {hor: 2, ver: 1},
    {hor: -2, ver: 1},
    {hor: -1, ver: 2},
    {hor: -2, ver: -1},
    {hor: -1, ver: -2},
    {hor: 1, ver: -2},
    {hor: 2, ver: -1},
  ];

  const bishopCanTake = (bishop, p) => {
    if (Math.abs(bishop[0] - p[0]) === Math.abs(bishop[1] - p[1])) {
      return true;
    } else return false;
  };

  let count = 0;
  if (n <= 1 || m <= 1) return 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const knightPos = [i, j];
      for (let k = 0; k < knightMoves.length; k++) {
        const rookPos = [
          knightPos[0] + knightMoves[k].hor,
          knightPos[1] + knightMoves[k].ver,
        ];
        if (rookPos[0] < 0 || rookPos[0] >= n) continue;
        if (rookPos[1] < 0 || rookPos[1] >= m) continue;
        // console.log(knightPos, rookPos);

        for (let r = 0; r < n; r++) {
          const bishopPos = [r, rookPos[1]];
          if (bishopCanTake(bishopPos, knightPos)) {
            count++;
          }
        }

        for (let c = 0; c < m; c++) {
          const bishopPos = [rookPos[0], c];
          if (bishopCanTake(bishopPos, knightPos)) {
            count++;
          }
        }
      }

      for (let k = 0; k < knightMoves.length; k++) {
        const bishopPos = [
          knightPos[0] + knightMoves[k].hor,
          knightPos[1] + knightMoves[k].ver,
        ];

        if (bishopPos[0] < 0 || bishopPos[0] >= n) continue;
        if (bishopPos[1] < 0 || bishopPos[1] >= m) continue;

        for (let r = 0; r < n; r++) {
          const rookPos = [r, knightPos[1]];
          if (bishopCanTake(bishopPos, rookPos)) {
            count++;
          }
        }

        for (let c = 0; c < m; c++) {
          const rookPos = [knightPos[0], c];
          if (bishopCanTake(bishopPos, rookPos)) {
            count++;
          }
        }
      }
    }
  }
  return count;
};

console.log(solution(2, 3));
