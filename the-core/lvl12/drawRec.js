const solution = (canvas, rectangle) => {
  let topleft = { x: rectangle[1], y: rectangle[0] };
  let bottomright = { x: rectangle[3], y: rectangle[2] };
  canvas[topleft.x][topleft.y] = '*';
  canvas[bottomright.x][bottomright.y] = '*';
  canvas[topleft.x][bottomright.y] = '*';
  canvas[bottomright.x][topleft.y] = '*';
  for (let i = topleft.y + 1; i < bottomright.y; i++) {
    canvas[topleft.x][i] = '-';
    canvas[bottomright.x][i] = '-';
  }
  for (let i = topleft.x + 1; i < bottomright.x; i++) {
    canvas[i][topleft.y] = '|';
    canvas[i][bottomright.y] = '|';
  }
  console.log(canvas);
  return canvas;
};

solution(
  [
    ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
    ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
    ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
  ],
  [1, 1, 4, 3]
);
