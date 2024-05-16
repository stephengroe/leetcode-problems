// First solution
function isHappy(n: number): boolean {
  let result = n;
  let previous = new Set<number>();

  do {
      let splitNumber = Array.from(result.toString().split(""));
      result = 0;
      for (let num of splitNumber) {
          result += parseFloat(num) ** 2;
      }

      if (previous.has(result)) {
          return false;
      } else {
          previous.add(result);
      }

  } while (result !== 1)

  return true;
};
