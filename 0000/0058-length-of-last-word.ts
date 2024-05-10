// First solution
function lengthOfLastWord(s: string): number {
  const wordArray = s.trim().split(" ");
  return wordArray[wordArray.length - 1].length;    
};
