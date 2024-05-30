// First solution, brute force
// Time: O(n), space: O(n)
function subtractProductAndSum1(n: number): number {
  let numArray = n.toString().split("").map(n => Number(n));
  return numArray.reduce((x, y) => x * y) - numArray.reduce((x, y) => x + y);
};

// Second solution, single loop
// Time: O(n), space: O(1)
function subtractProductAndSum2(n: number): number {
  const length = n.toString().length;
  let int = n;
  let product = 1;
  let sum = 0;

  for (let i=0; i<length; i++) {
      let currentNum = int % 10;
      product *= currentNum;
      sum += currentNum;
      int = Math.floor(int / 10);
  }

  return product - sum;
};
