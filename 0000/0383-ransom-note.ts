// First solution
function canConstruct(ransomNote: string, magazine: string): boolean {
  let letterCount = new Map<string, number>();

  for (let i=0; i<magazine.length; i++) {
      const letter = magazine[i];
      if (letterCount.has(letter)) {
          letterCount.set(letter, letterCount.get(letter) + 1);
      } else {
          letterCount.set(letter, 1);
      }
  }

  for (let i=0; i<ransomNote.length; i++) {
      const letter = ransomNote[i];
      if (!letterCount.has(letter)) {
          return false;
      } else if (letterCount.get(letter) === 0) {
          return false;
      } else if (letterCount.get(letter) > 0) {
          letterCount.set(letter, letterCount.get(letter) - 1);
      }
  }

  return true;    
};
