/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
  let left = 0;
  let right = 1;

  while (right < nums.length) {
      if (nums[left] !== 0) {
          left += 1;
          right += 1;
          continue;
      }

      if (nums[right] === 0) {
          right += 1;
          continue;
      }
      
      // Swap values
      const temp = nums[right];
      nums[right] = nums[left];
      nums[left] = temp;
      right += 1;
      left += 1;
  }
};
