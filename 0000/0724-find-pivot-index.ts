// First solution
function pivotIndex(nums: number[]): number {
  let prefix = nums.slice();
  let postfix = nums.slice();

  for (let i=1; i<nums.length; i++) {
      prefix[i] += prefix[i - 1];
  }

  for (let i=nums.length-2; i>=0; i--) {
      postfix[i] += postfix[i + 1];
  }

  for (let i=0; i<nums.length; i++) {
      let left = prefix[i-1] || 0;
      let right = postfix[i+1] || 0;
      if (left === right) return i;
  }

  return -1;
};
