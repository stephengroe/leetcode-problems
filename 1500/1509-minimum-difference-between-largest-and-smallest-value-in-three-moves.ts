// First solution, solved 2024-07-02 (with help)
// Time: O(n log n), space: O(n)
function minDifference(nums: number[]): number {
	if (nums.length <= 4) return 0;

	let values = nums.slice().sort((a, b) => a - b);
    let minDiff = Infinity;

    // Iterate over possible options
    minDiff = Math.min(minDiff, Math.abs(values[0] - values[values.length - 4]));
    minDiff = Math.min(minDiff, Math.abs(values[1] - values[values.length - 3]));
    minDiff = Math.min(minDiff, Math.abs(values[2] - values[values.length - 2]));
    minDiff = Math.min(minDiff, Math.abs(values[3] - values[values.length - 1]));

    return minDiff;
}
