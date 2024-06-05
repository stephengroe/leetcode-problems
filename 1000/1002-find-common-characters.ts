// First solution, 2024-06-04 in 41:35
// Time: O(a * b) (a = words, b = chars), space: O(n)
function commonChars(words: string[]): string[] {
  let totalChars = new Map<string, number>();

  for (let i=0; i<words.length; i++) {
      const word = words[i].split("");
      let currentChars = new Map<string, number>();

      // Create tally of current word
      for (let j=0; j<word.length; j++) {
          const char = word[j];
          if (currentChars.has(char)) {
              currentChars.set(char, currentChars.get(char)! + 1);
          } else {
              currentChars.set(char, 1);
          }
      }

      // Populate totalChars first time around
      if (i===0) {
          totalChars = currentChars;

          // Get union of tallies
      } else {
          for (let [key, value] of totalChars.entries()) {
              if (currentChars.has(key)) {
                  let minNumber = Math.min(currentChars.get(key)!, value);
                  totalChars.set(key, minNumber);
              } else {
                  totalChars.delete(key);
              }
          }
      }
  }

  let result: string[] = [];

  totalChars.forEach((value, key) => {
      for (let i=0; i<value; i++){
          result.push(key);
      }
  })

  return result;
};
