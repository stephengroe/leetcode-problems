/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  let left = 0;
  let right = 0;

  for (let i=0; i<prices.length; i+=1) {
      if (prices[i] < prices[left]) left = i;
      else if ((prices[i] - prices[left]) > profit) {
          right = i;
          profit = prices[i] - prices[left];           
      }
  }

  return profit;
};