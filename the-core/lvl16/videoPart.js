const gcd = (a, b) => {
  if (!b) return a;
  return gcd(b, a % b);
};

const solution = (p, t) => {
  const getSec = (time) => {
    const [h, m, s] = time.split(':').map((v) => parseInt(v));
    return h * 3600 + m * 60 + s;
  };
  const partTime = getSec(p);
  const totalTime = getSec(t);
  const g = gcd(partTime, totalTime);
  return [partTime / g, totalTime / g];
};
