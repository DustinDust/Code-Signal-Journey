const solution = (evidences) => {
  for (let c = 0; c < evidences[0].length; c++) {
    let info = evidences[0][c];
    for (let r = 0; r < evidences.length; r++) {
      if (info === 0) {
        info = evidences[r][c];
        continue;
      }
      if (evidences[r][c] !== info && evidences[r][c] !== 0) {
        return false;
      }
    }
  }
  return true;
};

console.log(
  solution([
    [1, 0],
    [-1, 0],
    [1, 1],
    [1, 1],
  ])
);
