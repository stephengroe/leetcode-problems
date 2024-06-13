// First solution, solved 2024-06-12 in 04:22
// Time: O(n log n), space: O(n)
function minMovesToSeat(seats: number[], students: number[]): number {
  let sortedSeats = seats.slice().sort((a, b) => a - b);
  let sortedStudents = students.slice().sort((a, b) => a - b);
  let totalMoves = 0;

  for (let i=0; i<sortedSeats.length; i++) {
      totalMoves += Math.abs(sortedSeats[i] - sortedStudents[i]);
  }
  
  return totalMoves;
};
