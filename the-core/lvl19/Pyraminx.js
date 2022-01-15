const solution = (faceColors, move) => {
  const initstate = (fc) => {
    const [front, bottom, left, right] = fc;

    return [
      front.repeat(9).split(''),
      bottom.repeat(9).split(''),
      left.repeat(9).split(''),
      right.repeat(9).split(''),
    ];
  };

  const track = (move, currstate) => {
    const st = currstate.map((r) => r.map((c) => c));
    const isVertex = /[A-Z]/.test(move);
    const left = [4, 6, 5, 1, 8, 7, 3, 2, 0];
  };

  const state = initstate(faceColors);
};
