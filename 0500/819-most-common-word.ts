// First solution, solved 2025-04-30 in ~15:00
// Time: O(n + m), space: O(n + m)
function mostCommonWord(paragraph: string, banned: string[]): string {
  // Split words
  const words = paragraph.toLowerCase().split(/\W/);
  // Build frequency map
  const frequencyMap = new Map<string, number>();
  // Iterate over words
  for (const word of words) {
      // Remove empty words
      if (!word.trim()) continue;
      // Update frequency map
      frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
  }
  // Establish max values
  let maxCount = -Infinity;
  let mostCommonWord = '';
  // Create set of banned words for O(1) lookup
  const bannedWords = new Set(banned);
  // Iterate over frequency map
  for (const [word, count] of frequencyMap) {
      // If banned, skip
      if (bannedWords.has(word)) continue;
      // Otherwise find max
      if (count > maxCount) {
          maxCount = count;
          mostCommonWord = word;
      }
  }
  // Return most common word
  return mostCommonWord;
};

// Second solution, optimized
function mostCommonWord2(paragraph: string, banned: string[]): string {
  const words = paragraph.toLowerCase().split(/[^a-z]+/);
  const frequencyMap = new Map<string, number>();
  let maxCount = -Infinity;
  let result = '';
  const bannedWords = new Set(banned); // For O(1) lookup

  for (const word of words) {
      // Skip empty and banned words
      if (!word.trim() || bannedWords.has(word)) continue;
      // Update frequency map
      const frequency = (frequencyMap.get(word) || 0) + 1;
      frequencyMap.set(word, frequency);

      // Find max
      if (frequency > maxCount) {
          maxCount = frequency;
          result = word;
      }
  }

  return result;
};