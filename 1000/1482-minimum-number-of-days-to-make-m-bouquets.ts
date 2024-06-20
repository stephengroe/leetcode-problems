// First solution, solved 2024-06-19 (with lots of help)
// Time: O(n log m), space: O(1)
function minDays(bloomDay: number[], m: number, k: number): number {
  if (m * k > bloomDay.length) {
      return -1; // Not enough flowers to form the required bouquets
  }
  
  let low = Math.min(...bloomDay);
  let high = Math.max(...bloomDay);
  
  while (low < high) {
      let mid = Math.floor((low + high) / 2);
      if (canMakeBouquets(bloomDay, m, k, mid)) {
          high = mid; // Try to find a smaller valid number of days
      } else {
          low = mid + 1; // Increase the number of days
      }
  }
  
  return low; // This is the smallest number of days where m bouquets can be made
}

function canMakeBouquets(bloomDay: number[], m: number, k: number, days: number): boolean {
  let bouquets = 0;
  let countConsecutive = 0;
  
  for (let i = 0; i < bloomDay.length; i++) {
      if (bloomDay[i] <= days) {
          countConsecutive++;
          if (countConsecutive === k) {
              bouquets++;
              countConsecutive = 0;
          }
      } else {
          countConsecutive = 0;
      }
  }
  
  return bouquets >= m;
}
