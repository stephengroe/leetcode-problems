// First attempt (one-liner!)
function reverseWords1(s: string): string {
  return s.split(" ").filter(word => word.length > 0).reverse().join(" ");
};

// Version two, using filter(Boolean) trick
function reverseWords2(s: string): string {
  return s.split(" ").filter(Boolean).reverse().join(" ");
};