// First solution, brute force
// (Exceeds time limit on LeetCode)
function successfulPairs(spells: number[], potions: number[], success: number): number[] {
  let result: number[] = [];

  for (let i=0; i<spells.length; i++) {
      let count = 0;
      for (let j=0; j<potions.length; j++) {
          if (spells[i] * potions[j] >= success) count += 1;
      }
      result.push(count);
  }

  return result;
};
