const maxMultiple = (divisor, bond) => {
  let ans = 1;
  let mul = 1;
  while (1) {
    ans = divisor * mul;
    mul++;
    if (ans == bond) return ans;
    else if (ans > bond) return ans-divisor;
  }
};
