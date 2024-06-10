// First solution, solved 2024-06-09 (with a lot of help)
// Time: O(n), space: O(n)
function subarraysDivByK(nums: number[], k: number) {
  let prefixSum = 0;
  let subarrayMap = new Map<number, number>([[0, 1]]);
  let subarrayCount = 0;

  for (let i=0; i<nums.length; i++) {
      prefixSum += nums[i];
      let remainder = ((prefixSum % k) + k) % k;

      if (subarrayMap.has(remainder)) {
          subarrayCount += subarrayMap.get(remainder)!;
          subarrayMap.set(remainder, subarrayMap.get(remainder)! + 1);
      } else {
          subarrayMap.set(remainder, 1);
      }
  }

  return subarrayCount;
}
