const spiralNumbers = (n) => {
  const ans = [];
  for (let i = 0; i < n+2; i++) {
    ans.push(new Array(n+2).fill(0));
    ans[i][n+1] = 1;
    ans[i][0] = 1;
  }
  ans[0].fill(1);
  ans[n+1].fill(1);
  let source = 1;
  const fillHor = (row, col, flow) => {
    if (source > n * n) return;
    for (col; col < n + 1 && col >= 0; col += flow) {
      ans[row][col] = source;
      source++;
      if (ans[row][col + flow] !== 0) {
        break;
      }
    }
    fillVer(col, row+flow, flow);
  };
  const fillVer = (col, row, flow) => {
    if (source > n * n) return;
    for (row; row >= 0 && row < n + 1; row += flow) {
      ans[row][col] = source;
      source++;
      if (ans[row+flow][col] !== 0) {
        break;
      }
    }
    fillHor(row, col-flow, -flow);
  };
  fillHor(1, 1, 1);
  return ans.slice(1, ans.length - 1).map((row) => row.slice(1, row.length-1));
};

console.log(spiralNumbers(3));
