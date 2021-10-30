const countSumOfTwoRepresentations2 = (n, l, r) => {
  let count = 0;
  const found = [];
  for (let i = l; i <= r; i++) {
    if (found[0]) {
      found.pop();
      continue;
    }
    const j = n - i;
    if (j <= r && j >= l) {
      count++;
      found.push(j);
    }
  }
  return count;
};

const bestWayToDo = (n, l, r) => {
  return Math.max(Math.min(Math.floor(n / 2) - l, r - Math.ceil(n / 2)) + 1, 0);
};

