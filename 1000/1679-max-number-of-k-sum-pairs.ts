// First solution: too inefficient to pass but correct nonetheless!
function maxOperations1(nums: number[], k: number): number {
  let total = 0;
  let pairs: number[] = [];

  for (let i=0; i<nums.length; i++) {
      const num = nums[i];
      const numIndex = pairs.indexOf(num);

      if (numIndex >= 0) {
          pairs.splice(numIndex, 1);
          total += 1;
      } else {
          pairs.push(k - num);
      }
  }

  return total;
};

// Second solution: Optimized with Map
function maxOperations2(nums: number[], k: number): number {
  let total = 0;
  let pairs = new Map<number, number>();

  for (let i=0; i<nums.length; i++) {
      const num = nums[i];

      if (pairs.has(num)) {
          total += 1;
          if (pairs.get(num) === 1) {
              pairs.delete(num);
          } else {
              pairs.set(num, pairs.get(num) - 1);
          }
      } else {
          const pair = k - num;
          if (pairs.has(pair)) {
              pairs.set(pair, pairs.get(pair) + 1);
          } else {
              pairs.set(pair, 1);
          }
      }
  }

  return total;
};
