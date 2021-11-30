const solution = (white, black, toMove) => {
  const whitePos = white.split('').map((c) => c.charCodeAt(0));
  const blackPos = black.split('').map((c) => c.charCodeAt(0));

  const pawnTake = (black, white) => {
    if (white[0] - black[0] === 1 && white[1] - black[1] === -1) return true;
    if (white[0] - black[0] === -1 && white[1] - black[1] === -1) return true;
    return false;
  };

  if (whitePos[0] === blackPos[0] && whitePos[1] < blackPos[1]) return 'draw';

  while (whitePos[1] < '8'.charCodeAt(0) && blackPos[1] > '1'.charCodeAt(0)) {
    if (toMove === 'w') {
      if (pawnTake(blackPos, whitePos)) return 'white';
      if (whitePos[1] === '2'.charCodeAt(0)) {
        whitePos[1] += 2;
        if (pawnTake(blackPos, whitePos)) whitePos[1] -= 1;
      } else whitePos[1] += 1;
      toMove = 'b';
      continue;
    }
    if (toMove === 'b') {
      if (pawnTake(blackPos, whitePos)) return 'black';
      if (blackPos[1] === '7'.charCodeAt(0)) {
        blackPos[1] -= 2;
        if (pawnTake(blackPos, whitePos)) blackPos[1] += 1;
      } else blackPos[1] -= 1;
      toMove = 'w';
      continue;
    }
  }
  return whitePos[1] === '8'.charCodeAt(0) ? 'white' : 'black';
};

solution('f2', 'e5', 'w');
