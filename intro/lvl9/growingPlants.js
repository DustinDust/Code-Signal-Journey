const growingPlant = (up, down, h) => {
  let n = 0;
  let currentHeight = 0;
  while (currentHeight < h) {
    n++;
    currentHeight += up;
    if (currentHeight >= h) break;
    currentHeight -= down;
  }
  return n;
};

const bestApproach = (up, down, h) => {
  return up >= h ? 1 : Math.ceil((h-up) / (up - down) + 1);
};

console.log(growingPlant(100, 10, 910));
console.log(bestApproach(100, 10, 910));
