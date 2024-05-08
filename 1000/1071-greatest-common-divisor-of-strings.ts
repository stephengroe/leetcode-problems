// First solution
function gcdOfStrings(str1: string, str2: string): string {
  const minLength = Math.min(str1.length, str2.length);

  for (let i=minLength; i>0; i--) {
      const slice = str1.slice(0, i);

      if (str1.length % slice.length !== 0 || str2.length % slice.length !== 0) {
          // Can't divide evenly into both strings
          continue;
      }
      
      const slice1 = slice.repeat(str1.length / slice.length);
      const slice2 = slice.repeat(str2.length / slice.length);
      if (slice1 === str1 && slice2 === str2) {
          return slice;
      }
  }

  return "";
};
