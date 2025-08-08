// Solved 2025-08-07 in 00:06:06

function groupAnagrams(strs: string[]): string[][] {
  const anagrams: Record<string, string[]> = {};

  for (const word of strs) {
    const sorted = word.split("").sort().join("");

    if (!anagrams[sorted]) {
      anagrams[sorted] = [];
    }
    anagrams[sorted].push(word);
  }

  return Object.values(anagrams);
}
