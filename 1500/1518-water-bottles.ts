// First solution, solved 2024-07-06 in 20:13
// Time: O(n), space: O(1)
function numWaterBottles1(numBottles: number, numExchange: number): number {
  let maxBottles = numBottles;
  let bottlesRemaining = numBottles;
  let extraBottles = 0;

  // If we have enough bottles to exchange
  while ((bottlesRemaining + extraBottles) >= numExchange) {
    let exchangedBottles = Math.floor((bottlesRemaining + extraBottles) / numExchange);

    // Save extra bottles to exchange on the next round
    extraBottles = (bottlesRemaining + extraBottles) % numExchange;
    maxBottles += exchangedBottles;
    bottlesRemaining = exchangedBottles;
  }

  return maxBottles;
}

// Second solution, solved 2024-07-06
// Mathematical one-liner with optimized time
// Time: O(1), space: O(1)
function numWaterBottles2(numBottles: number, numExchange: number): number {
  return numBottles + (numBottles - 1) / (numExchange - 1) | 0;
}