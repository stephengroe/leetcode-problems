// Solved 2025-08-07
function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false;
  const stack: string[] = [];
  const pairs: Record<string, string> = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const char of s.split("")) {
    if (char in pairs) {
      stack.push(pairs[char]);
    } else {
      const result = stack.pop();
      if (result !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
