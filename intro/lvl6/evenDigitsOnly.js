const evenDigitsOnly = (n) => {
  return n.toString()
      .split('')
      .every((val) => {
        return val % 2 === 0;
      });
};

console.log(evenDigitsOnly(248662));
