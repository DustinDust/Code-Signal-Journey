const mirrorBits = (a) => {
  return Number.parseInt(a.toString(2).split('').reverse().join(''), 2);
};
