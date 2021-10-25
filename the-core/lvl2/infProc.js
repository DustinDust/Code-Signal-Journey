const isInfiniteProcess = (a, b) => {
  if (a === b) return false;
  if (a < b && (a + b)%2 ===0) return false;
  return true;
};
