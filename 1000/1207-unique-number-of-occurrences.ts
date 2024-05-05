// First solution
function uniqueOccurrences(arr: number[]): boolean {
  let tally = new Map<number, number>();

  for (let i=0; i<arr.length; i++) {
      if (!tally.has(arr[i])) {
          tally.set(arr[i], 1);
      } else {
          const num = tally.get(arr[i]) + 1;
          tally.set(arr[i], num);
      }
  }

  let unique = new Set<number>(Array.from(tally.values()));   
  return tally.size === unique.size;
};