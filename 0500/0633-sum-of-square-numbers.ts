// First solution, solved 2024-06-17 (with help)
// Time: O(sqrt(N)), space: O(1)
function judgeSquareSum(c: number): boolean {
  let start = 0;
  let end = Math.floor(Math.sqrt(c));

  while (start <= end) {
      let sum = (start * start) + (end * end);
      if (sum === c) {
          return true;
      } else if (sum > c) {
          end -= 1;
      } else {
          start += 1;
      }
  }

  return false;
};