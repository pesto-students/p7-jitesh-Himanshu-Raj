const maxProfit = (prices) => {
  // Edge case: prices array has fewer than 2 elements
  if (prices.length < 2) {
    return 0;
  }

  // Initialize variables to track minimum price and maximum profit
  let minPrice = prices[0];
  let maxProfit = 0;

  // Iterate over the stock prices and update minPrice and maxProfit as necessary
  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];
    // Update minPrice if necessary
    if (price < minPrice) {
      minPrice = price;
    }
    // Update maxProfit if necessary
    else {
      maxProfit = Math.max(maxProfit, price - minPrice);
    }
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
