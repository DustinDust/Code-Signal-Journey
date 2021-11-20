const solution = (startPosition, speed) => {
  let meetUp = -1;
  const runners = startPosition.length;
  for (let i = 0; i < runners; i++) {
    for (let j = i + 1; j < runners; j++) {
      const speedDif = speed[i] - speed[j];
      const distDif = startPosition[j] - startPosition[i];
      let count = 0;
      if (speedDif === 0 && distDif !== 0) continue;

      for (let k = 0; k < runners; k++) {
        if (
          startPosition[k] * speedDif + speed[k] * distDif ===
          startPosition[i] * speedDif + speed[i] * distDif
        ) {
          count++;
        }
      }
      if (count == 0) continue;
      if (count > meetUp) meetUp = count;
    }
  }
  if (meetUp < 2) return -1;
  return meetUp;
};

console.log(solution([1, 4, 2], [27, 18, 24]));
