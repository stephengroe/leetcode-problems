// First solution, solved 2024-06-26
// Time: O(n * m) (words + letters), space: O(n)

function shortestCompletingWord(licensePlate: string, words: string[]): string {
  // Create map of license plate characters
  let letterMap = new Map<string, number>();
  let lowerPlate = licensePlate.toLowerCase();

  for (let i=0; i<lowerPlate.length; i++) {
      let regex = /[a-z]/;
      if (lowerPlate[i].match(regex)) {
          const count = letterMap.get(lowerPlate[i]) ?? 0;
          letterMap.set(lowerPlate[i], count + 1);
      }
  }

  let shortestWord = "";
  let min = Infinity;

  // Iterate through each word
  for (let word of words) {
      // Skip entirely if it's not shorter
      if (word.length < min) {
          let copiedMap = new Map<string, number>();
          
          // Iterate over each letter
          for (let letter of word.split("")) {
              let result = copiedMap.get(letter) || 0;
              copiedMap.set(letter, result + 1);
          }

          // Compare letter count of original and test word
          let keys = Array.from(letterMap.keys());
          let valid = true;

          for (let key of keys) {
              if (letterMap.get(key)! > (copiedMap.get(key) || 0)) {
                  valid = false;
              }
          }

          if (valid) {
              shortestWord = word;
              min = word.length;
          }
      }
  }

  return shortestWord;
};
