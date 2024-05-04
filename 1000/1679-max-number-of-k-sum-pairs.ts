// First solution: too inefficient to pass but correct nonetheless!
function maxOperations1(nums: number[], k: number): number {
  let total = 0;
  let pairs: number[] = [];

  for (let i=0; i<nums.length; i++) {
      const num = nums[i];
      const numIndex = pairs.indexOf(num);

      if (numIndex >= 0) {
          pairs.splice(numIndex, 1);
          total += 1;
      } else {
          pairs.push(k - num);
      }
  }

  return total;
};
