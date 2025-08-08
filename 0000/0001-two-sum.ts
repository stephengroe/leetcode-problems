// Solved 2025-08-07
function twoSum(nums: number[], target: number): number[] | undefined {
  const matchingPairs: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num in matchingPairs) {
      return [matchingPairs[num], i];
    }
    const match = target - num;
    matchingPairs[match] = i;
  }
}
