// First solution
// Time: O(n), space: O(1)
 function reverseString(s: string[]): void {
  let temp = "";
  let right = s.length - 1;
  let left = 0;

  while (left < right) {
      temp = s[left];
      s[left] = s[right];
      s[right] = temp;

      left += 1;
      right -= 1;
  }
};
