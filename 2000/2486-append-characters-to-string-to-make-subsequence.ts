// First solution
function appendCharacters(s: string, t: string): number {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
      if (s[i] === t[j]) {
          j += 1;
      }
      i += 1;

  }

  return t.length - j;
};