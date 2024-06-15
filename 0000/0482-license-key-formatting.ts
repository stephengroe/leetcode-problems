// First solution, solved 2024-06-14 in 07:28
// Time: O(n), space: O(n)
function licenseKeyFormatting(s: string, k: number): string {
  let key = s.split("");
  let result: string[] = [];
  let count = 0;

  for (let i=key.length - 1; i>=0; i--) {
      let char = key[i];

      if (char === "-") {
          continue;
      } else {
          result.push(char.toUpperCase());
          count += 1;

          if (count === k) {
              result.push("-");
              count = 0;
          }
      }
  }

  if (result[result.length - 1] === "-") result = result.slice(0, -1);

  return result.reverse().join("");
};
