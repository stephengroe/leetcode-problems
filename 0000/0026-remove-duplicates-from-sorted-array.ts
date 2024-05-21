// First solution
function removeDuplicates(nums: number[]): number {
  let numSet = new Set<number>();
  let left = 0;

  for (let right=0; right<nums.length; right++) {
      let num = nums[right];
      if (!numSet.has(num)) {
          numSet.add(num);
          nums[left] = num;
          left += 1;
      }
  }

  return numSet.size;
};
