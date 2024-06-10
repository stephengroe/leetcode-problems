// First solution, solved 2024-06-06 in 08:50
// Time: O(n * m); space: O(n)
function replaceWords(dictionary: string[], sentence: string): string {
  let roots = new Set<string>([...dictionary]);
  let words = sentence.split(" ");
  let result: string[] = [];

  word: for (let word of words) {
      letter: for (let i=0; i<word.length; i++) {
          if (roots.has(word.slice(0, i))) {
              result.push(word.slice(0, i));
              continue word;
          }
      }

      result.push(word);
  }

  return result.join(" ");
};
