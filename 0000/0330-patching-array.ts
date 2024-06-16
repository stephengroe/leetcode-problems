// First solution, solved 2024-06-16 (with help)
// Time: O(n), space: O(1)

function minPatches(nums: number[], n: number): number {
  let count = 0;
  let currentSum = 0;
  let pointer = 0;

  while (currentSum < n) {
      if (pointer < nums.length) {
          if (nums[pointer] === currentSum + 1) {
              currentSum += nums[pointer];
          } else {
              currentSum += currentSum + 1;
              count += 1;
          }
          pointer += 1;
      } else {
          currentSum += currentSum + 1;
          count += 1;
      }
  }

  return count;
};