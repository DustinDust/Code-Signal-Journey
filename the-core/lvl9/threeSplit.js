const threeSplit = (a) => {
  const thirdSum = a.reduce((ans, value) => ans + value, 0) / 3;
  // current is the current sum, technically its gonna go all
  // the way to 3 * thirdSum
  let current = 0;

  // part is actually partial solution; with each current = thirdsum
  // we know we will have one more potential solution
  let part = 0;

  // res is the actual solution found. If the current hit 2 * thirdSum, means
  // the guranteed thirdSum left is there, and we have the solution
  // written down
  // the only time where no solution is found is actually the thirdSum or
  // 2thirdSum cannot be hit by summing element of array
  // other than that, each time current = thirdSum, we have 1 more potential
  // solution, and each time that current = 2thirdSum, we have all the
  // potential solution become actual solution
  let res = 0;
  for (const el of a.slice(0, -1)) {
    current += el;
    if (current === 2 * thirdSum) res += part;
    if (current === thirdSum) part++;
  }
  return res;
};
