// First attempt (one-liner!)
function reverseWords1(s: string): string {
  return s.split(" ").filter(word => word.length > 0).reverse().join(" ");
};

// Version two, using filter(Boolean) trick
function reverseWords2(s: string): string {
  return s.split(" ").filter(Boolean).reverse().join(" ");
};

// Version 3, using accumulated word string
function reverseWords(s: string): string {
  let currentWord = "";
  let result: string[] = [];

  for (let i=0; i<s.length; i++) {
      if (s[i] === " ") {
          if (currentWord) {
              result.push(currentWord);
              currentWord = "";
          } else {
              continue;
          }
      } else {
          currentWord += s[i];

          if (i === s.length - 1) {
              result.push(currentWord);
          }
      }
  }

  return result.reverse().join(" ");
}
