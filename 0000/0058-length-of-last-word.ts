// First solution
function lengthOfLastWord1(s: string): number {
  const wordArray = s.trim().split(" ");
  return wordArray[wordArray.length - 1].length;    
};

// Second solution, simplified to a single line!
function lengthOfLastWord2(s: string): number {
  return s.trim().split(" ").pop().length;
};
