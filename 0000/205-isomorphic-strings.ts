// First solution
function isIsomorphic(s: string, t: string): boolean {
  let sCipher = new Map<string, string>();
  let tCipher = new Map<string, string>();

  for (let i=0; i< s.length; i++) {
      let sLetter = s[i];
      let tLetter = t[i];

      if (sCipher.has(sLetter) && sCipher.get(sLetter) !== tLetter) {
          return false;
      } else if (!sCipher.has(sLetter)) {
          sCipher.set(sLetter, tLetter);
      }

      if (tCipher.has(tLetter) && tCipher.get(tLetter) !== sLetter) {
          return false;
      } else if (!tCipher.has(tLetter)) {
          tCipher.set(tLetter, sLetter);
      }
  }

  return true;    
};
