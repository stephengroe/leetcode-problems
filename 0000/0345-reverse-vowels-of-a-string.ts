function reverseVowels(s: string): string {
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
