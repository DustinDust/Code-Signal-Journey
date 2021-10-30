const magicalWell = (a, b, n) => {
  let sum = 0;
  while (n > 0) {
    n--;
    sum += a * b;
    a++;
    b++;
  }
  return sum;
};
