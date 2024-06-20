// First solution, solved 2024-06-19 (with lots of help)
// Time: O(n log m), space: O(1)
function maxDistance(position: number[], m: number): number {
  let baskets = position.sort((a, b) => a - b);
  let min = 1;
  let max = baskets[baskets.length - 1] - baskets[0];

  let force = 1;
  
  while (min <= max) {
      let mid = Math.floor((min + max) / 2);
      if (canPlace(baskets, m, mid)) {
          force = mid;
          min = mid + 1;
      } else {
          max = mid - 1;
      }
  }

  return force;
};

function canPlace(sortedPosition: number[], m: number, force: number): boolean {
  let nextSpace = sortedPosition[0] + force;
  let placed = 1;
  for (let i=1; i<=sortedPosition.length; i++) {
      // If we can fit something here, keep going
      if (sortedPosition[i] >= nextSpace) {
          nextSpace = sortedPosition[i] + force;
          placed += 1;
          
          // Return true if we've placed them all
          if (placed === m) return true;
      // Otherwise, move to the next space
      } else {
          continue;
      }
  }

  return false;
}
