const arrayChange = (a) => {
  let moves = 0;
  for (let i = 1; i < a.length; i++) {
    if (a[i] > a[i - 1]) continue;
    else {
      moves += a[i - 1] - a[i] + 1;
      a[i] = a[i - 1] + 1;
    }
  }
  return moves;
};

console.log(arrayChange([1, 1, 1]));
