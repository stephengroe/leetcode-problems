// First solution (with a lot of help!)
// Time: O(n), space: O(1)
function singleNumber(nums: number[]): number[] {
  // Get XOR result of entire list of numbers
  let xorResult = nums.reduce((a, b) => a ^= b);

  // Get difference
  xorResult &= -xorResult;

  let result = [0, 0];

   for (let i=0; i<nums.length; i++) {
      // If it has that bit, goes in group 1
      if ((nums[i] & xorResult) === 0) {
          result[0] ^= nums[i];
      // Otherwise, goes in group 2
      } else {
          result[1] ^= nums[i];
      }
   }

  return result;
};
