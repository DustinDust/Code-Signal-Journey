const numberOfClans = (divisors, k) => {
  const clans = new Set();
  for (let i = 1; i <= k; i += 1) {
    clans.add(divisors.map((elm) => (i % elm === 0 ? 0 : 1)).toString());
  }
  console.log(clans);
  return clans.size;
};

numberOfClans([2, 3, 4], 6);
