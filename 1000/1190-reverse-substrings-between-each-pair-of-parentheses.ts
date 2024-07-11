// First solution, solved 2024-07-11 in 35:57 (with help)
// Time: O(n * m), space: O(n)
function reverseParentheses(s: string): string {
  const stack: string[] = [];
  let currentString = '';

  for (let char of s) {
      if (char === '(') {
          stack.push(currentString);
          currentString = '';
      } else if (char === ')') {
          currentString = stack.pop() + currentString.split('').reverse().join('');
      } else {
          currentString += char;
      }
  }

  return currentString;
}
