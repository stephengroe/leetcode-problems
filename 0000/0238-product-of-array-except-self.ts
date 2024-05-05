// Naive solution with O(n^2) time complexity
// (Exceeds time limit on LeetCode, but still gives the correct answer)
function productExceptSelf1(nums: number[]): number[] {
  let result = Array(nums.length).fill(1);
  for (let i=0; i<nums.length; i++) {
      for (let j=0; j<nums.length; j++) {
          if (j===i) continue;
          result[j] *= nums[i];
      }
  }

  return result;
};
