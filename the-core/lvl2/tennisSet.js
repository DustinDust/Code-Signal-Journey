const tennisSet = (score1, score2) => {
  if (
    [score1, score2].some((a) => a >= 5 && a < 7) &&
    [score1, score2].some((a) => a === 7)
  ) {
    return true;
  }
  if (
    [score1, score2].some((a) => a === 6) &&
    [score1, score2].some((a) => a < 5)
  ) {
    return true;
  }
  return false;
};
