const solution = (matrix) => {
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;
  while (left < right && top < bottom) {
    const a = [];
    for (let i = left; i <= right; i++) {
      a.push(matrix[top][i]);
    }
    for (let i = top + 1; i <= bottom; i++) {
      a.push(matrix[i][right]);
    }
    for (let i = right - 1; i >= left; i--) {
      a.push(matrix[bottom][i]);
    }
    for (let i = bottom - 1; i >= top + 1; i--) {
      a.push(matrix[i][left]);
    }
    console.log(a);
    if (left % 2 == 0) {
      const tem = a[a.length - 1];
      for (let i = a.length - 1; i >= 1; i--) {
        a[i] = a[i - 1];
      }
      a[0] = tem;
    } else {
      const tem = a[0];
      for (let i = 0; i < a.length - 1; i++) {
        a[i] = a[i + 1];
      }
      a[a.length - 1] = tem;
    }
    console.log(a);
    for (let i = left; i <= right; i++) {
      matrix[top][i] = a.shift();
    }
    for (let i = top + 1; i <= bottom; i++) {
      matrix[i][right] = a.shift();
    }
    for (let i = right - 1; i >= left; i--) {
      matrix[bottom][i] = a.shift();
    }
    for (let i = bottom - 1; i >= top + 1; i--) {
      matrix[i][left] = a.shift();
    }
    left++;
    right--;
    top++;
    bottom--;
  }
  if (top == bottom && left < right) {
    if (top % 2 == 0) {
      const tem = matrix[top][right];
      for (let i = right; i > left; i--) {
        matrix[top][i] = matrix[top][i - 1];
      }
      matrix[top][left] = tem;
    } else {
      const tem = matrix[top][left];
      for (let i = left; i < right; i++) {
        matrix[top][i] = matrix[top][i + 1];
      }
      matrix[top][right] = tem;
    }
  }
  if (left == right && top < bottom) {
    if (top % 2 == 0) {
      const tem = matrix[bottom][left];
      for (let i = bottom; i > top; i--) {
        matrix[i][left] = matrix[i - 1][left];
      }
      matrix[top][left] = tem;
    } else {
      const tem = matrix[top][left];
      for (let i = top; i < bottom; i++) {
        matrix[i][left] = matrix[i + 1][left];
      }
      matrix[bottom][left] = tem;
    }
  }
  return matrix;
};
