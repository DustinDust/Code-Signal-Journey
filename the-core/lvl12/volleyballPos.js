const solution = (formation, k) => {
  console.log(formation);
  const positions = [
    { row: 3, col: 2 },
    { row: 1, col: 2 },
    { row: 0, col: 1 },
    { row: 1, col: 0 },
    { row: 3, col: 0 },
    { row: 2, col: 1 },
  ];
  const playerAt = [];
  for (let pos of positions) {
    playerAt.push(formation[pos.row][pos.col]);
  }
  let newPlayerPos = playerAt.slice();
  for (let i = 0; i < playerAt.length; i++) {
    let newpos = (i + k) % playerAt.length;
    newPlayerPos[newpos] = playerAt[i];
  }
  for (let i = 0; i < positions.length; i++) {
    formation[positions[i].row][positions[i].col] = newPlayerPos[i];
  }
  console.log(playerAt);
  console.log(newPlayerPos);
  console.log(formation);
  return formation;
};

solution(
  [
    ['empty', 'Player5', 'empty'],
    ['Player4', 'empty', 'Player2'],
    ['empty', 'Player3', 'empty'],
    ['Player6', 'empty', 'Player1'],
  ],
  2
);
