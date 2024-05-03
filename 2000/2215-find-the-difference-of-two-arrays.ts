// First attempt
function findDifference1(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set<number>([...nums1]);
  const set2 = new Set<number>([...nums2]);

  const diff1 = Array.from(set1).filter(n => !set2.has(n));
  const diff2 = Array.from(set2).filter(n => !set1.has(n));

  return [diff1, diff2];
};

// Second attempt, using the brand-new .set() function
// (This is barely supported, but still fun to experiment!)
function findDifference2(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set<number>([...nums1]);
  const set2 = new Set<number>([...nums2]);
  
  return [set1.difference(set2), set2.difference(set1)];
};
