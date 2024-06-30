// First solution, solved 2024-06-29 in 21:02
// Time: O(n), space: O(n)
function mostFrequentEven(nums: number[]): number {
	let evenCount = new Map<number, number>();
	
	for (const num of nums) {
		if (num % 2 === 0) {
			const count = evenCount.get(num) ?? 0;
			evenCount.set(num, count + 1);
		}
	}

	if (evenCount.size === 0) return -1;

	let maxCount = -Infinity;
	let mostFrequent = Infinity;

	for (const [key, value] of evenCount) {
		if (value > maxCount) {
			maxCount = value;
			mostFrequent = key;
		} else if (value === maxCount) {
			mostFrequent = Math.min(key, mostFrequent);
		}
	}

	return mostFrequent;
}
