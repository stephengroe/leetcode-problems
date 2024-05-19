// First solution

function removeElement(nums: number[], val: number): number {
  let k = nums.length;
  let left = 0;

  for (let right=0; right<nums.length; right++) {
      if (nums[right] !== val) {
          nums[left] = nums[right];
          left += 1;
      } else {
          k -= 1;
      }
  }

  return k;
};
