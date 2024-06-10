// First solution
// Time: O(n) [n = seconds], space: O(1)
function memLeak(memory1: number, memory2: number): number[] {
  let mem1 = memory1;
  let mem2 = memory2;
  let second = 1;

  while (mem1 >= second || mem2 >= second) {
      if (mem2 > mem1) {
          mem2 -= second;
      } else {
          mem1 -= second;
      }

      second += 1;
  }
  
  return [second, mem1, mem2];
};
