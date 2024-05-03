// First attempt, not efficient enough to pass
function maxVowels1(s: string, k: number): number {
  const letters = s.split('');
  const vowels = new Set<string>(['a', 'e', 'i', 'o', 'u']);
  let window: number[] = [];
  let max = 0;

  for (let letter of letters) {
      if (vowels.has(letter)) {
          window.push(1);
      } else {
          window.push(0);
      }

      if (window.length > k) {
          window.shift();
      }

      const current = window.reduce((a, b) => a + b);
      max = Math.max(max, current);

      if (max === k) {
          return max;
      }
  }

  return max;    
};

// Second attempt, real version of sliding window this time!

function maxVowels2(s: string, k: number): number {
  const letters = s.split('');
  const vowels = new Set<string>(['a', 'e', 'i', 'o', 'u']);

  let left = 0;
  let currentCount = 0;
  let maxCount = 0;

  for (let right=0; right<letters.length; right++) {
      // Increment if window contains vowel
      if (vowels.has(letters[right])) {
          currentCount += 1;
      }

      // Decrement if vowel leaves window
      if ((right - left) >= k) {
          if (vowels.has(letters[left])) {
              currentCount -= 1;
          }
          left += 1;
      }

      maxCount = Math.max(maxCount, currentCount);
  }

  return maxCount;    
};
