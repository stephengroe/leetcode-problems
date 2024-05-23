// First solution, iterative
function plusOne(digits: number[]): number[] {
  let result: number[] = digits.slice();

  for (let i=result.length-1; i>=0; i--) {
      if (result[i] < 9) {
          result[i] += 1;
          return result;
      } else {
          result[i] = 0;
          if (i === 0) {
              result.unshift(1);
              return result;
          }
      }
  }

  return result;
};
