// First solution, solved 2024-07-05 in 13:35
// Time: O(n), space: O(1)
function passThePillow1(n: number, time: number):number {
  let index = 1;
  let decrement = false;

  for (let i=1; i<=time; i++) {
      if (decrement) {
          index -= 1;
      } else {
          index += 1;
      }

      if (index === 1) {
          decrement = false;
      } else if (index === n) {
          decrement = true;
      }
  }

  return index;
}

// Second solution, solved 2024-07-05
// Optimizes space/time complexity
// Time: O(1), space: O(1)
function passThePillow2(n: number, time: number):number {
  const trip = n - 1; // We can traverse the line in n-1 moves
  const trips = Math.ceil(time / trip); // Number of trips
  const leftoverSpaces = time % (trip); // Remaining spaces

  // If we're moving forward
  if (trips % 2 === 1) {
      // If we're at the end
      if (leftoverSpaces === 0) {
          return n;
      // Otherwise return the position
      } else {
          return leftoverSpaces + 1;
      }
  // Otherwise, we're moving backward
  } else {
      // If we're at the beginning
      if (leftoverSpaces === 0) {
          return 1;
      // Otherwise return the position
      } else {
          return n - leftoverSpaces;
      }
  }
}
