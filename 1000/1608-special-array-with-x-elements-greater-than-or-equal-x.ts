// First solution, brute force
// Time: O(n^2), space: O(n)
function specialArray(nums: number[]): number {

  for (let i=nums.length; i>=0; i--) {
      if (nums.filter(n => n >= i).length === i) {
          return i;
      };
  }

  return -1;
};
