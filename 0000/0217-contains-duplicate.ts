// Solved 2025-08-07
function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
}
