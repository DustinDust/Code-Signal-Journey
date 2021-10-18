const depositProfit = (deposit, rate, threshold) => {
  let money = deposit;
  let loop = 0;
  while (money < threshold) {
    loop++;
    money = money * (100 + rate)/100;
  }
  return loop;
};

console.log(depositProfit(100, 20, 170));
