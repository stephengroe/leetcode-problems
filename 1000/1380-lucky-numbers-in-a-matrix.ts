// First solution, solved 2024-07-18 in 32:00 (with some help)
// Time: O(n * m), space: O(n + m)
function luckyNumbers(matrix: number[][]): number[] {
	// Create row set
	let rowSet = new Set<number>();

	// Create column map
	let columnMap: Record<number, number> = {};
	
	// Iterate over matrix
	for (const row of matrix) {
		let rowMin = Infinity;
		for (let i=0; i<row.length; i++) {
			rowMin = Math.min(rowMin, row[i]);

			if (columnMap[i]) {
				columnMap[i] = Math.max(columnMap[i], row[i]);
			} else {
				columnMap[i] = row[i];
			}
		}
		
		// Add row min to row set
		rowSet.add(rowMin);
	}

	let result: number[] = [];

	// Iterate over map
	for (const columnMax of Object.values(columnMap)) {
		if (rowSet.has(columnMax)) {
			result.push(columnMax);
		}
	}
	
	// Return result
	return result;
}
