const solution = (matrix, width, center, t) => {
  for (let k = 0; k < t % 8; k++) {
    let startX = center[0] - (width - 1) /2;
    let startY = center[1] - (width - 1) / 2;
    const midX = center[0];
    const midY = center[1];
    let endX = center[0] + (width -1)/2;
    let endY = center[1] + (width - 1)/2;
    for (let i = 0; i < (width - 1) /2; i++) {
      const temp = matrix[startX][startY];
      matrix[startX][startY] = matrix[midX][startY];
      matrix[midX][startY] = matrix[endX][startY];
      matrix[endX][startY] = matrix[endX][midY];
      matrix[endX][midY] = matrix[endX][endY];
      matrix[endX][endY] = matrix[midX][endY];
      matrix[midX][endY] = matrix[startX][endY];
      matrix[startX][endY] = matrix[startX][midY];
      matrix[startX][midY] = temp;
      endX--; endY--;
      startX++; startY++;
    }
  }
  return matrix;
};
