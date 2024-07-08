// First (naive) solution, solved 2024-07-07 in 48:06 (with some help)
// Time: O(n * k), space: O(n)
function findTheWinner1(n: number, k: number): number {
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

// Second solution, solved 2024-07-07
// Optimized for space/time complexity
// Time: O(n), space: O(1)
function findTheWinner2(n: number, k: number): number {
  let remainingFriend = 0;
  let index = 1;

  while (index <= n) {
      remainingFriend = (remainingFriend + k) % index;
      index += 1;
  }

  return remainingFriend + 1;
}
