// First solution, solved 2024-07-19 in 41:36 (with lots of help)
// Time: O(n * m), space: O(n * m)
function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
  let rowRemaining = rowSum.slice();
  let colRemaining = colSum.slice();
  let result = Array.from({ length: rowSum.length }, () => Array(colSum.length).fill(0));

  for (let i=0; i<rowSum.length; i++) {
      for (let j=0; j<colSum.length; j++) {
          const min = Math.min(rowRemaining[i], colRemaining[j]);

          result[i][j] = min;

          rowRemaining[i] -= min;
          colRemaining[j] -= min;
      }
  }

  return result;    
};
