// First solution, sliding window
// Time: O(n), space: O(1)
function equalSubstring(s: string, t: string, maxCost: number): number {
  let cost = maxCost;
  let maxCount = 0;
  let currentMax = 0;
  let left = 0;

  for (let right=0; right<s.length; right++) {
      let diff = Math.abs(s.charCodeAt(right) - t.charCodeAt(right));

      if ((cost - diff) < 0) {
          while ((cost - diff) < 0) {
              currentMax -= 1;
              cost += Math.abs(s.charCodeAt(left) - t.charCodeAt(left))
              left += 1;
          }
      }
      cost -= diff;
      currentMax += 1;

      maxCount = Math.max(maxCount, currentMax);
  }

  return maxCount;    
};
