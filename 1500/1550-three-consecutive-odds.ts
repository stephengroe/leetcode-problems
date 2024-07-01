// First solution, solved 2024-06-30 in 01:18
// Time: O(n), space: O(1)
function threeConsecutiveOdds(arr: number[]): boolean {
  let oddCount = 0;

  for (const number of arr) {
      if (number % 2 === 1) {
          oddCount += 1;
      } else {
          oddCount = 0;
      }

      if (oddCount >= 3) {
          return true;
      }
  }

  return false;    
};
