// First solution (bubble sort), solved 2024-06-11 in 08:18
// Time: O(n^2), space: O(1)
/**
 Do not return anything, modify nums in-place instead.
 */
 function sortColors(nums: number[]): void {
  let sorted = false;

  while (sorted === false) {
      sorted = true;
      for (let i=1; i<nums.length; i++) {
          if (nums[i] < nums[i - 1]) {
              sorted = false;
              let temp = nums[i - 1];
              nums[i - 1] = nums[i];
              nums[i] = temp;
          };
      };
  };
};