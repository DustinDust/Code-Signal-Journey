const minimalNumberOfCoins = (coins, price) => {
  let priceLeft = price;
  let total = 0;
  for (let i = coins.length - 1; i >= 0; i--) {
    if (priceLeft <= 0) {
      break;
    }
    total += Math.floor(priceLeft / coins[i]);
    priceLeft = priceLeft % coins[i];
  }
  return total;
};

console.log(minimalNumberOfCoins([1, 2, 10], 28));
