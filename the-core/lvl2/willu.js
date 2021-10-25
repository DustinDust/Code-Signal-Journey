const willYou = (y, b, l) => {
  if (l) {
    if (y && b) return false;
    return true;
  } else {
    if (y && b) return true;
    return false;
  }
};
