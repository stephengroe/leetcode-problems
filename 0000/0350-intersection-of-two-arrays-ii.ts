// First solution, solved 2024-07-01 in 11:05
// Time: O(n + m), space: O(n)
function intersect(nums1: number[], nums2: number[]): number[] {
	let tally: Record<number, number> = {};
  let result: number[] = [];

  // Tally numbers
  for (const num of nums1) {
      let count = tally[num] ?? 0;
      tally[num] = count + 1;
  }

    // Iterate over tally
	for (const num of nums2) {
		if (tally[num] > 0) {
			result.push(num);
            tally[num] = tally[num] - 1;
		}
	}

	return result;
}
