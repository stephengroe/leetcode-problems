// First solution, solved 2024-06-09 in 02:23
// Time: O(n), space: O(n)
function heightChecker(heights: number[]): number {
  let expected = heights.slice().sort((a, b) => a - b);
  let result = 0;

  for (let i=0; i<heights.length; i++) {
      if (expected[i] !== heights[i]) result += 1;
  }
  
  return result;
};
