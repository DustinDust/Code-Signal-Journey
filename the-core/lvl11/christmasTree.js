const solution = (lvlNum, lvlHeight) => {
  const level = [];
  for (let i = 0; i < lvlNum; i++) {
    level.push([]);
    const firstRow = 5 + i * 2;
    for (let j = 0; j < lvlHeight; j++) {
      level[i].push('*'.repeat(firstRow + j * 2));
    }
  }
  const longestRow = 5 + (lvlNum - 1) * 2 + (lvlHeight - 1) * 2;
  const crown = [
    '*'.padStart(Math.ceil(longestRow / 2), ' '),
    '*'.padStart(Math.ceil(longestRow / 2), ' '),
    '***'.padStart(Math.ceil(longestRow / 2) + 1, ' '),
  ];
  const foot = [];
  for (let i = 0; i < lvlNum; i++) {
    if (lvlHeight % 2 === 0) {
      foot.push('*'.repeat(lvlHeight + 1));
    } else {
      foot.push('*'.repeat(lvlHeight));
    }
  }
  const res = [...crown];
  for (const lvl of level) {
    for (const row of lvl) {
      res.push(
          row.padStart(
              Math.ceil(longestRow / 2) + Math.floor(row.length / 2),
              ' '
          )
      );
    }
  }
  for (const row of foot) {
    res.push(row.padStart(
        Math.ceil(longestRow/ 2) + Math.floor(row.length / 2),
        ' '
    ));
  }
  console.log(res);
  return res;
};

solution(2, 4);
