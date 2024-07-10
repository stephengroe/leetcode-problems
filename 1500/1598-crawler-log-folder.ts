// First solution, solved 2024-07-09 in 12:12
// Time: O(n), space: O(1)
function minOperations(logs: string[]): number {
	let movesFromMainFolder = 0;

	for (const log of logs) {
		if (log === './') {
			continue;
		} else if (log === '../') {
			if (movesFromMainFolder > 0) {
				movesFromMainFolder -= 1;
			} else {
				continue;
			}
		} else {
			movesFromMainFolder += 1;
		}
	}

	return movesFromMainFolder;
}