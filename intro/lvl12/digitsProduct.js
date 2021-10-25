const digitsProduct = (product) => {
  if (product === 0) return 10;
  if (product === 1) return 1;
  const result = [];
  let i = 10;
  while (product > 1) {
    if (--i === 1) return -1;
    else {
      while (product % i === 0) {
        product /= i;
        result.push(i);
      }
    }
  }
  return Number(result.reverse().join(''));
};

console.log(digitsProduct(450));
