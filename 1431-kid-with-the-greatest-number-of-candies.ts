function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const maxCandies = Math.max(...candies);
  return candies.map((n) => n + extraCandies >= maxCandies);
};
