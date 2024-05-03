// First attempt, not efficient enough to pass
function maxVowels(s: string, k: number): number {
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
