// First solution, brute force
// Time: O(n), space: O(n)
function subtractProductAndSum(n: number): number {
  let numArray = n.toString().split("").map(n => Number(n));
  return numArray.reduce((x, y) => x * y) - numArray.reduce((x, y) => x + y);
};
