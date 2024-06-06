// First solution, solved 2024-06-05 in 09:36
// Time: O(n), space: O(n)
function minNumber(nums1: number[], nums2: number[]): number {
  let sorted1 = nums1.slice().sort();
  let sorted2 = nums2.slice().sort();
  let set2 = new Set([...nums2]);

  // If they have a digit in common, return that
  for (let i=0; i<sorted1.length; i++) {
      if (set2.has(sorted1[i])) return sorted1[i];
  }

  // Otherwise, return the lowest and second-lowest in order
  let lowest1 = sorted1[0];
  let lowest2 = sorted2[0];

  if (lowest1 < lowest2) {
      return (lowest1 * 10) + lowest2; 
  } else {
      return (lowest2 * 10) + lowest1; 
  }
};
