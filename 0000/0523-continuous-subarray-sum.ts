// First solution, solved 2024-06-07 in 51:13 (with help)
// Time: O(n), space: O(n)
function checkSubarraySum(nums: number[], k: number): boolean {
  if (nums.length < 2) return false;

  let prefixSum = nums.slice();
  for (let i=1; i<prefixSum.length; i++) {
      prefixSum[i] += prefixSum[i - 1];
  }

  let prefixMap = new Map<number, number>();
  prefixMap.set(0, -1);

  for (let i=0; i<prefixSum.length; i++) {
      prefixSum[i] = prefixSum[i] % k;
      if (prefixMap.has(prefixSum[i])) {
          // If subarray of at least two
          if (Math.abs(prefixMap.get(prefixSum[i])! - i) > 1) {
              return true;
          }
      } else {
          prefixMap.set(prefixSum[i], i);
      }
  }

  return false;    
};
