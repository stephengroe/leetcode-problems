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

// Optimized solution
function productExceptSelf(nums: number[]): number[] {
  let result = new Array(nums.length).fill(1);

  let prefix = 1;
  for (let i=0; i<nums.length; i++) {
      result[i] *= prefix;
      prefix *= nums[i];
  }

  let postfix = 1;
  for (let i=nums.length - 1; i>=0; i--) {
      result[i] *= postfix;
      postfix *= nums[i];
  }

  return result;
};
