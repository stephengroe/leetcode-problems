// First solution
function longestOnes(nums: number[], k: number): number {
  let max = -Infinity;
  let currentMax = 0;
  let kRemaining = k;
  let left = 0;

  for (let right=0; right<nums.length; right++) {
      if (nums[right] === 1) {
          currentMax += 1;
      } else {
          if (kRemaining > 0) {
              currentMax += 1;
              kRemaining -= 1;
          } else {
              while (nums[left] !== 0 && left <= right) {
                  left += 1;
                  currentMax -= 1;
              }
              left += 1;
              kRemaining -= 1;
          }
      }
      max = Math.max(currentMax, max);
  }

  return max;
};
