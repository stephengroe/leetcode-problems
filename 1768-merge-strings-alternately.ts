function mergeAlternately(word1: string, word2: string): string {
  let result = '';
  let currentIndex = 0;
  const minLength = Math.min(word1.length, word2.length);

  while (currentIndex < minLength) {
      result += word1[currentIndex];
      result += word2[currentIndex];
      currentIndex += 1;
  }

  result += word1.slice(currentIndex);
  result += word2.slice(currentIndex);

  return result;
};