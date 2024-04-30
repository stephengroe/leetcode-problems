// First attempt (one-liner!)
function reverseWords(s: string): string {
  return s.split(" ").filter(word => word.length > 0).reverse().join(" ");
};