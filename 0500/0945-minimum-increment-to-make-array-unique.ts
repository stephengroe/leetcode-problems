// Brute force solution, solved 2024-06-13
// Time: O(n^2), space: O(n)
function minIncrementForUnique1(nums: number[]): number {
  let uniqueNums = new Set<number>();
  let sortedNums = nums.sort((a, b) => a - b);
  let moves = 0;

  for (let i=0; i<sortedNums.length; i++) {
      while (uniqueNums.has(sortedNums[i])) {
          sortedNums[i] += 1;
          moves += 1;
      }
      uniqueNums.add(sortedNums[i]);
  }

  return moves;    
};

// Second solution, optimized
// Time: O(n log n), space: O(n)
function minIncrementForUnique2(nums: number[]): number {
  let uniqueNums = new Set<number>();
  let sortedNums = nums.sort((a, b) => a - b);
  let moves = 0;
  let nextAvailable = -Infinity;

  for (let i=0; i<sortedNums.length; i++) {
      let num = sortedNums[i];

      if (uniqueNums.has(num)) {
          moves += (nextAvailable - num);
          uniqueNums.add(nextAvailable);
          nextAvailable += 1;
      } else {
          uniqueNums.add(num);
          nextAvailable = num + 1;
      }
  }

  return moves;
};
