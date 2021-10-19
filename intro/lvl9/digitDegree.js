const digitDegree = (n) => {
  let p = n.toString();
  let i = 0;
  while (p.length !== 1) {
    i++;
    p = p
        .split('')
        .reduce((prev, value) => {
          return prev + Number.parseInt(value);
        }, 0)
        .toString();
  }
  return i;
};

console.log(digitDegree(91));
