// First solution, solved 2024-07-05 in 13:35
// Time: O(n), space: O(1)
function passThePillow(n: number, time: number):number {
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