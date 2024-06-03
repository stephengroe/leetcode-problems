// First solution (solved 2024-05-03)
// Time: O(n), space: O(1)
function appendCharacters1(s: string, t: string): number {
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

// Second solution (solved 2024-06-02)
// Time: O(n), space: O(1)
function appendCharacters2(s: string, t: string): number {
  let maxLength = 0;
  let currentLength = 0;
  let tMarker = 0;

  for (let i=0; i<s.length; i++) {
      if (s[i] === t[tMarker]) {
          currentLength += 1;
          maxLength = Math.max(maxLength, currentLength);
          tMarker += 1;
      }
  }

  return t.length - maxLength;
};
