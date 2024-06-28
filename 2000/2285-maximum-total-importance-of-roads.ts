// First solution, solved 2024-06-27 in 19:18
// Time: O(n log n), space: O(n)
function maximumImportance(n: number, roads: number[][]): number {
	let roadMap = new Map<number, number>();
	
  // Iterate over each city, add the total count
	for (let road of roads) {
		for (let city of road) {
			let count = roadMap.get(city) ?? 0;
			roadMap.set(city, count + 1);
		}
	}

	let counter = 0;
	let importance = n;
	let cities = Array.from(roadMap.values()).sort((a, b) => b - a);

  // Multiply decrementing N by most frequent city
	for (let city of cities) {
		counter += (importance * city);
		importance -= 1;
	}
	
	return counter;
};
