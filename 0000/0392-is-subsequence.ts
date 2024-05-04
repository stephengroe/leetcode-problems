// First solution
function isSubsequence1(s: string, t: string): boolean {
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

// Second solution, alternate version
function isSubsequence2(s: string, t: string): boolean {
  let i = 0;
  let j = 0;
  let lengthS = s.length;
  let lengthT = t.length;

  while (i < lengthS && j < lengthT) {
      if (s[i] === t[j]) {
          i += 1;
      }

      j += 1;
  }

  if (i === lengthS) {
      return true;
  } else {
      return false;
  }
};

// Optimized version of second solution
function isSubsequence3(s: string, t: string): boolean {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
      if (s[i] === t[j]) {
          i += 1;
      }

      j += 1;
  }

  return i === s.length;
};
