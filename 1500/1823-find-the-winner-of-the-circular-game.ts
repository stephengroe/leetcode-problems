// First (naive) solution, solved 2024-07-07 in 48:06 (with some help)
// Time: O(n), space: O(n)
function findTheWinner(n: number, k: number): number {
  let friendQueue: number[] = [];
  for (let i=1; i<=n; i++) {
      friendQueue.push(i);
  };

  let current = 1;

  while (friendQueue.length > 1) {
      if (current === k) {
          friendQueue.shift();
          current = 1;
      } else { // Rotate to next
          friendQueue.push(friendQueue.shift()!);
          current += 1;
      }
  };

  return friendQueue[0];
}
