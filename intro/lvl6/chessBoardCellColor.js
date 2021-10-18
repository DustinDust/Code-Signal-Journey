const chessBoardCellColor = (cell1, cell2) => {
  const posA = cell1.split('').map((value, index) => {
    if (index === 0) {
      return value.charCodeAt(0);
    }
    return Number.parseInt(value);
  });
  const posB = cell2.split('').map((value, index) => {
    if (index === 0) {
      return value.charCodeAt(0);
    }
    return Number.parseInt(value);
  });
  let colorA;
  let colorB;
  if (posA[0] % 2 === posA[1] % 2) {
    colorA = 0;
  } else colorA = 1;
  if (posB[0] % 2 === posB[1] % 2) {
    colorB = 0;
  } else colorB = 1;
  return colorA === colorB;
};

console.log(chessBoardCellColor('A1', 'H3'));
