const solution = (bishop1, bishop2) => {
  const bishop = [bishop1, bishop2].sort(
      (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
  );
  const b1Pos = bishop[0].split('').map((str) => str.charCodeAt(0));
  const b2Pos = bishop[1].split('').map((str) => str.charCodeAt(0));
  if (Math.abs(b1Pos[0] - b2Pos[0]) !== Math.abs(b1Pos[1] - b2Pos[1])) {
    // not on the same diagonal
    return bishop;
  } else {
    const i = 1;
    let j = 1;
    if ((b1Pos[0] - b2Pos[0]) * (b1Pos[1] - b2Pos[1]) < 0) {
      j = -1;
    }
    // on the same diagonal, start moving
    while (b1Pos[0] < 104 && b1Pos[0] > 97 && b1Pos[1] < 56 && b1Pos[1] > 49) {
      b1Pos[0] = b1Pos[0] - i;
      b1Pos[1] = b1Pos[1] - j;
    }
    while (b2Pos[0] < 104 && b2Pos[0] > 97 && b2Pos[1] < 56 && b2Pos[1] > 49) {
      b2Pos[0] = b2Pos[0] + i;
      b2Pos[1] = b2Pos[1] + j;
    }
    return [
      b1Pos.map((val) => String.fromCharCode(val)).join(''),
      b2Pos.map((val) => String.fromCharCode(val)).join(''),
    ].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  }
};

console.log(solution('d8', 'g5'));
