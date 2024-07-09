// First solution, solved 2024-07-08 in 25:44
// Time: O(n), space: O(1)
function averageWaitingTime(customers: number[][]):number {
  let totalWaitTime = 0;
  let currentTime = 0;

  for (const [arrival, time] of customers) {
      if (arrival <= currentTime) {
          currentTime += time;
          totalWaitTime += currentTime - arrival;
      } else {
          totalWaitTime += time;
          currentTime = arrival + time;
      }
  }

  return (totalWaitTime / customers.length) * 1.00000;
}
