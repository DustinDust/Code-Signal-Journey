const countBlackCells = (n, m) => {
  const gcd = (a, b) => {
    if (a === 0) return b;
    else return gcd(b % a, a);
  };

  return n + m - 2 + gcd(n, m);
};

console.log(countBlackCells(3, 3));
