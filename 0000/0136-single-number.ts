// First solution with hash set
// Time: O(n), Space: O(n)
function singleNumber1(nums: number[]): number {
  let set = new Set<number>();

  for (let i=0; i<nums.length; i++) {
      if (set.has(nums[i])) {
          set.delete(nums[i]);
      } else {
          set.add(nums[i]);
      }
  }

  return set.values().next().value;  
};

// Second solution, bit manipulation with XOR
// Time: 0(n), Space: O(1)
function singleNumber2(nums: number[]): number {
  let result = 0;

  for (let i=0; i<nums.length; i++) {
      result = result ^ nums[i];
  }

  return result;  
};
