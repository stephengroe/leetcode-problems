// First solution
function isSubsequence(s: string, t: string): boolean {
  let pointerT = 0;

  for (let pointerS = 0; pointerS<s.length; pointerS++) {

      while (t[pointerT] !== s[pointerS]) {
          pointerT += 1;

          if (pointerT >= t.length) {
              return false;
          }
      }

      pointerT += 1;
  }
  
  return true;
};
