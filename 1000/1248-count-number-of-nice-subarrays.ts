// First solution, solved 2024-06-22 (with help)
// Time: O(n), space: O(n)
function numberOfSubarrays(nums: number[], k: number): number {
  // Convert array to 1 and 0
  let array = nums.map(n => n % 2);
  
  // Create map of remainder count
  let oddCount = new Map<number, number>();
  oddCount.set(0, 1);
  let count = 0;
  let currentSum = 0;

  for (let i=0; i<array.length; i++) {
      currentSum += array[i];
      let diff = currentSum - k;

      count += oddCount.get(diff) ?? 0;
      oddCount.set(currentSum, (oddCount.get(currentSum) ?? 0) + 1);
  }

  return count;
};
