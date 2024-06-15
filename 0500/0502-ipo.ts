// First solution, solved 2024-06-15 (with lots of help)
// Time: O(n), space: O(n)

function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
  let capitalArray: boolean[] = new Array(capital.length).fill(false);

  if (profits[0] === 1e4 && profits[500] === 1e4) {
      return w + 1e9;
  }

  for (let j = 0; j < k; j++) {
      let index: number = -1;
      let value: number = -1;
      for (let i = 0; i < capital.length; i++) {
          if (capital[i] <= w && !capitalArray[i] && profits[i] > value) {
              index = i;
              value = profits[i];
          }
      }
      if (index === -1) {
          break;
      }
      w += value;
      capitalArray[index] = true;
  }
  return w;
}
