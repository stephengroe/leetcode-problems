/**
 Do not return anything, modify nums in-place instead.
 */

 // First attempt
 function moveZeroes1(nums: number[]): void {
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

// Second attempt, using for loop
function moveZeroes2(nums: number[]): void {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
      if (nums[right] !== 0) {
          const temp = nums[right];
          nums[right] = nums[left];
          nums[left] = temp;
          left += 1;
      }
  }
};
