const lateRide = (n) => {
  const HH = Math.floor(n/60);
  const mm = n%60;
  return Math.floor(HH/10) + HH%10 + Math.floor(mm/10) + mm%10;
};
