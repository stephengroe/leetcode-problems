// First solution, solved 2024-07-31 in 37:13
// Time: O(n^2), space: O(n^2)
function islandPerimeter(grid: number[][]): number {
	let adjacentEdges = new Set<string>();
	let total = 0;

	// Iterate over row
	for (let i=0; i<grid.length; i++) {
		// Iterate over cell
		for (let j=0; j<grid[i].length; j++) {
			// If one, add four
			if (grid[i][j] === 1) {
				total += 4;

                // Check adjacentEdges for left
                if (adjacentEdges.has(`${i},${j-1}`)) {
                    total -= 2;
                }
                // Check adjacentEdges for top
                if (adjacentEdges.has(`${i-1},${j}`)) {
                    total -= 2;
                }
                
                // Add self to adjacentEdges
                adjacentEdges.add(`${i},${j}`);
			}
		}
	}

	return total;
}
