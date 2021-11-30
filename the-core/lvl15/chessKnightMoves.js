const solution = (cell) => {
  const moves = [
    {hor: 1, ver: 2},
    {hor: 2, ver: 1},
    {hor: -2, ver: 1},
    {hor: -1, ver: 2},
    {hor: -2, ver: -1},
    {hor: -1, ver: -2},
    {hor: 1, ver: -2},
    {hor: 2, ver: -1},
  ];

  return moves.reduce((ans, currentMove) => {
    if (
      cell.charCodeAt(0) + currentMove.hor >= 97 &&
      cell.charCodeAt(0) + currentMove.hor <= 104 &&
      cell.charCodeAt(1) + currentMove.ver >= 49 &&
      cell.charCodeAt(1) + currentMove.ver <= 56
    ) {
      return ans + 1;
    } else return ans;
  }, 0);
};

console.log(solution('c2'));
