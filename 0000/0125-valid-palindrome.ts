// First solution using two pointers
function isPalindrome(s: string): boolean {
  // Make lowercase and remove non-alphanumeric
  const input = s.toLowerCase().replace(/[^0-9a-z]/g, '');
  let left = 0;
  let right = input.length - 1;

  while (left < right) {
      if (input[left] !== input[right]) return false;
      left += 1;
      right -= 1;
  }

  return true;
};
