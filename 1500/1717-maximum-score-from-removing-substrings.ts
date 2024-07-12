// First solution, solved 2024-07-12 in 18:36 (with help)
// Time: O(n), space: O(n)
function maximumGain(s: string, x: number, y: number): number {
  // Helper function to remove a specified pattern from the string and count points
  const removePattern = (str: string, pattern: string, points: number): [string, number] => {
      const stack: string[] = [];
      let score = 0;
      for (const char of str) {
          if (stack.length > 0 && stack[stack.length - 1] + char === pattern) {
              stack.pop();
              score += points;
          } else {
              stack.push(char);
          }
      }
      return [stack.join(''), score];
  };

  let totalPoints = 0;

  if (x >= y) {
      // First remove "ab" if x >= y
      const [afterFirstPass, pointsFirstPass] = removePattern(s, 'ab', x);
      totalPoints += pointsFirstPass;

      // Then remove "ba"
      const [, pointsSecondPass] = removePattern(afterFirstPass, 'ba', y);
      totalPoints += pointsSecondPass;
  } else {
      // First remove "ba" if y > x
      const [afterFirstPass, pointsFirstPass] = removePattern(s, 'ba', y);
      totalPoints += pointsFirstPass;

      // Then remove "ab"
      const [, pointsSecondPass] = removePattern(afterFirstPass, 'ab', x);
      totalPoints += pointsSecondPass;
  }

  return totalPoints;
}
