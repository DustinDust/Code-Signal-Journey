const isPower = (n) => {
  if (n === 1) return true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let j = 2; Math.pow(i, j) <= n; j++) {
      if (Math.pow(i, j) === n) return true;
    }
  }
  return false;
};

console.log(isPower(72));
