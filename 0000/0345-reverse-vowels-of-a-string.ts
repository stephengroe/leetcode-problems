// First attempt
function reverseVowels1(s: string): string {
  const vowels = new Set<string>(['a', 'e', 'i', 'o', 'u']);
  let letters = s.split("");
  let reversedVowels: string[] = [];

  for (let i=0; i<letters.length; i++) {
      if (vowels.has(letters[i].toLowerCase())) {
          reversedVowels.push(letters[i]);
      }
  }

  let currentVowel = 0;
  for (let j=letters.length-1; j>=0; j--) {
      if (vowels.has(letters[j].toLowerCase())) {
          letters[j] = reversedVowels[currentVowel];
          currentVowel += 1;
      }
  }

  return letters.join("");
};

// Optimized attempt, using complete set and stack data structure
function reverseVowels2(s: string): string {
  const vowels = new Set<string>(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let letters = s.split("");
  let reversedVowels: string[] = [];

  for (let i=0; i<letters.length; i++) {
      if (vowels.has(letters[i])) {
          reversedVowels.push(letters[i]);
      }
  }

  for (let j=0; j<letters.length; j++) {
      if (vowels.has(letters[j])) {
        const vowel = reversedVowels.pop();
        if (vowel !== undefined) letters[j] = vowel;
      }
  }

  return letters.join("");
};

// Second attempt, using two pointers
function reverseVowels3(s: string): string {
  const vowels = new Set<string>(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let letters = s.split("");
  let left = 0;
  let right = letters.length - 1;

  while (left < right) {
      if (vowels.has(letters[left])) {
          if (vowels.has(letters[right])) {
              // Swap left and right
              const temp = letters[left];
              letters[left] = letters[right];
              letters[right] = temp;
              left += 1;
              right -= 1;
          } else {
              right -= 1;
          }
      } else {
          left += 1;
      }
  }

  return letters.join("");
};

// Optimized two-pointer solution
function reverseVowels4(s: string): string {
  const vowels = new Set<string>(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let letters = s.split("");
  let left = 0;
  let right = letters.length - 1;

  while (left < right) {
    if (!vowels.has(letters[left])) {
        left += 1;
        continue;
    }

    if (!vowels.has(letters[right])) {
        right -= 1;
        continue;
    }

    // Swap left and right
    const temp = letters[left];
    letters[left] = letters[right];
    letters[right] = temp;
    left += 1;
    right -= 1;
  }

  return letters.join("");
};
