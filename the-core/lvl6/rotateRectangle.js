const rectangleRotation = (a, b) => {
  const l = a / Math.sqrt(2) / 2;
  const s = b / Math.sqrt(2) / 2;
  rect1 = [Math.floor(l) * 2 + 1, Math.floor(s) * 2 + 1];
  rect2 = rect1.slice();

  if (l - Math.floor(l) < 0.5) {
    rect2[0] = rect1[0] - 1;
  } else {
    rect2[0] = rect1[0] + 1;
  }

  if (s - Math.floor(s) < 0.5) {
    rect2[1] = rect1[1] - 1;
  } else {
    rect2[1] = rect1[1] + 1;
  }

  console.log(rect1, rect2);

  return rect1[0] * rect1[1] + rect2[0] * rect2[1];
};

console.log(rectangleRotation(6, 4));
