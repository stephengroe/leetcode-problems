// First solution, solved 2024-02-28
function findMaxAverage(nums: number[], k: number): number {
  let current = nums.slice(0, k).reduce((acc, num) => {
      return acc + num;
      }, 0);
  let max = current;

  for (let i=0; i<nums.length; i++) {
      current = current - nums[i] + nums[i+k];
      
      if (current > max) {
          max = current;
      }
  }
  return max / k;
};
