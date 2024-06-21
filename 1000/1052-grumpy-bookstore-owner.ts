// First solution, solved 2024-06-20 (with help)
// Time: O(n), space: O(1)
function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
  let alwaysSatisfied = 0;
  let maxExtraSatisfied = 0;
  let currentExtraSatisfied = 0;

  for (let i = 0; i < customers.length; i++) {
      if (grumpy[i] === 0) {
          alwaysSatisfied += customers[i];
      }
  }

  for (let i = 0; i < customers.length; i++) {
      if (grumpy[i] === 1) {
          currentExtraSatisfied += customers[i];
      }

      if (i >= minutes) {
          if (grumpy[i - minutes] === 1) {
              currentExtraSatisfied -= customers[i - minutes];
          }
      }

      maxExtraSatisfied = Math.max(maxExtraSatisfied, currentExtraSatisfied);
  }

  return alwaysSatisfied + maxExtraSatisfied;
}
