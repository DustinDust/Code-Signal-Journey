const solution = (king, amazon) => {
  const kingPos = [];
  kingPos[0] = king[0].charCodeAt(0) - 96;
  kingPos[1] = king[1].charCodeAt(0) - 48;
  const amazonPos = [];
  amazonPos[0] = amazon[0].charCodeAt(0) - 96;
  amazonPos[1] = amazon[1].charCodeAt(0) - 48;
  // console.log(kingPos, amazonPos);

  const isValid = (pos) => {
    if (
      Math.abs(kingPos[0] - pos[0]) <= 1 &&
      Math.abs(kingPos[1] - pos[1]) <= 1
    ) {
      return false;
    }
    return true;
  };

  const isSafe = (pos) => {
    const knightMoves = [
      { hor: 1, ver: 2 },
      { hor: 2, ver: 1 },
      { hor: -2, ver: 1 },
      { hor: -1, ver: 2 },
      { hor: -2, ver: -1 },
      { hor: -1, ver: -2 },
      { hor: 1, ver: -2 },
      { hor: 2, ver: -1 },
    ];
    // making sure the king is not in the way
    if (amazonPos[1] === pos[1]) {
      let tempos = pos[0];
      let dir = amazonPos[0] - tempos > 0 ? 1 : -1;
      while (tempos >= 1 && tempos <= 8) {
        tempos += dir;
        if (tempos === amazonPos[0]) return false;
        if (tempos === kingPos[0] && pos[1] === kingPos[1]) return true;
      }
      return false;
    }

    if (amazonPos[0] === pos[0]) {
      let tempos = pos[1];
      let dir = amazonPos[1] - tempos > 0 ? 1 : -1;
      while (tempos >= 1 && tempos <= 8) {
        tempos += dir;
        if (tempos === amazonPos[1]) return false;
        if (tempos === kingPos[1] && pos[0] === kingPos[0]) return true;
      }
      return false;
    }

    let tempaz = [...amazonPos];
    while (
      tempaz[0] >= 1 &&
      tempaz[0] <= 8 &&
      tempaz[1] >= 1 &&
      tempaz[1] <= 8
    ) {
      tempaz[0] += 1;
      tempaz[1] += 1;
      if (tempaz[0] === kingPos[0] && tempaz[1] === kingPos[1]) break;
      if (tempaz[0] === pos[0] && tempaz[1] === pos[1]) return false;
    }

    tempaz = [...amazonPos];
    while (
      tempaz[0] >= 1 &&
      tempaz[0] <= 8 &&
      tempaz[1] >= 1 &&
      tempaz[1] <= 8
    ) {
      tempaz[0] -= 1;
      tempaz[1] -= 1;
      if (tempaz[0] === kingPos[0] && tempaz[1] === kingPos[1]) break;
      if (tempaz[0] === pos[0] && tempaz[1] === pos[1]) return false;
    }

    tempaz = [...amazonPos];
    while (
      tempaz[0] >= 1 &&
      tempaz[0] <= 8 &&
      tempaz[1] >= 1 &&
      tempaz[1] <= 8
    ) {
      tempaz[0] += 1;
      tempaz[1] -= 1;
      if (tempaz[0] === kingPos[0] && tempaz[1] === kingPos[1]) break;
      if (tempaz[0] === pos[0] && tempaz[1] === pos[1]) return false;
    }

    tempaz = [...amazonPos];
    while (
      tempaz[0] >= 1 &&
      tempaz[0] <= 8 &&
      tempaz[1] >= 1 &&
      tempaz[1] <= 8
    ) {
      tempaz[0] -= 1;
      tempaz[1] += 1;
      if (tempaz[0] === kingPos[0] && tempaz[1] === kingPos[1]) break;
      if (tempaz[0] === pos[0] && tempaz[1] === pos[1]) return false;
    }

    for (let i = 0; i < knightMoves.length; i++) {
      if (
        amazonPos[1] + knightMoves[i].ver === pos[1] &&
        amazonPos[0] + knightMoves[i].hor === pos[0]
      ) {
        return false;
      }
    }
    if (
      Math.abs(kingPos[0] - pos[0]) <= 1 &&
      Math.abs(kingPos[1] - pos[1]) <= 1
    ) {
      return false;
    }
    return true;
  };

  const movement = (pos) => {
    let res = 0;
    if (isSafe([pos[0] + 1, pos[1] + 1]) && isValid([pos[0] + 1, pos[1] + 1]))
      res++;
    if (isSafe([pos[0] - 1, pos[1] - 1]) && isValid([pos[0] - 1, pos[1] - 1]))
      res++;
    if (isSafe([pos[0] + 1, pos[1] - 1]) && isValid([pos[0] + 1, pos[1] - 1]))
      res++;
    if (isSafe([pos[0] - 1, pos[1] + 1]) && isValid([pos[0] - 1, pos[1] + 1]))
      res++;
    if (isSafe([pos[0], pos[1] + 1]) && isValid([pos[0], pos[1] + 1])) res++;
    if (isSafe([pos[0], pos[1] - 1]) && isValid([pos[0], pos[1] - 1])) res++;
    if (isSafe([pos[0] + 1, pos[1]]) && isValid([pos[0] + 1, pos[1]])) res++;
    if (isSafe([pos[0] - 1, pos[1]]) && isValid([pos[0] - 1, pos[1]])) res++;
    return res;
  };

  let stalemate = 0;
  let check = 0;
  let checkmate = 0;
  let safe = 0;
  for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
      // console.log([i, j]);
      if (kingPos[0] === i && kingPos[1] == j) continue;
      if (amazonPos[0] === i && amazonPos[1] === j) continue;
      if (!isValid([i, j])) continue;
      if (!isSafe([i, j]) && movement([i, j]) === 0) checkmate++;
      if (!isSafe([i, j]) && movement([i, j]) > 0) check++;
      if (isSafe([i, j]) && movement([i, j]) > 0) safe++;
      if (isSafe([i, j]) && movement([i, j]) === 0) stalemate++;
    }
  }
  return [checkmate, check, stalemate, safe];
};

console.log(solution('d3', 'e4'));
