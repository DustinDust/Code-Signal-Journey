const appleBoxes = (k ) => {
  let diff = 0;
  for (let i = 1; i <= k; i++) {
    if (i%2 ==0 ) {
      diff += i**2;
    } else {
      diff -= i**2;
    }
  }
  return diff;
};
