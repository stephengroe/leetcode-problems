// First solution, solved 2024-06-18 in 11:14
// Time: O(n log n * m), space: O(n)
function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
  let jobs = difficulty.map((n, i) => [profit[i], n]);
  jobs.sort((a, b) => b[0] - a[0]);

  let output = 0;
  
  for (let i=0; i<worker.length; i++) {
      // Iterate until we find a job that works
      for (let j=0; j<jobs.length; j++) {
          if (jobs[j][1] <= worker[i]) {
              output += jobs[j][0];
              break;
          }
      }
  }

  return output;
};
