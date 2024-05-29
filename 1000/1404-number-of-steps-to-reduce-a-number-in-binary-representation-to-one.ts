// First solution, iterating over BigInt
// Time: O(log(n)), space: O(1)
function numSteps(s: string): number {
  let count = 0;
  let num = BigInt(`0b${s}`);

  while (num !== BigInt(1)) {
      if (num % BigInt(2) === BigInt(1)) {
          num += BigInt(1);
          count += 1;
      } else {
          num = num/BigInt(2);
          count += 1;
      }
  }

  return count;    
};
