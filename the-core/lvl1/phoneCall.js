const phoneCall = (min1, min210, min11, s) => {
  if (s < min1) return 0;
  let totalTime = 1;
  s = s - min1;
  let temp = 2;
  while (temp <= 10) {
    if (s - min210 < 0) return totalTime;
    s -= min210;
    totalTime++;
    temp++;
  }
  totalTime += Math.floor(s / min11);
  return totalTime;
};
