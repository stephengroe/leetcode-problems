// First solution, 2024-06-03 in 08:09
// Time: O(n), space: O(1)
function longestPalindrome(s: string): number {
  let tally = new Map<string, number>();
  let longest = 0;
  let arr = s.split("");

  for (let i=0; i<arr.length; i++) {
      if (tally.has(arr[i])) {
          let count = tally.get(arr[i]) + 1;
          // If there's an even number, add to longest count
          if (count  % 2 === 0) longest += 2;
          tally.set(arr[i], count);
      // Otherwise, add to tally
      } else { 
          tally.set(arr[i], 1);
      }
  }

  // If there's at least one char left over
  // we can add it to the middle of the palindrome
  if (longest < s.length) longest += 1;

  return longest;
};
