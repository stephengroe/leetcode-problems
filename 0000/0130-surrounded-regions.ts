// First solution, solved 2024-08-28 in 58:32
// Space: O(n^2), time: O(n^2)

/**
 Do not return anything, modify board in-place instead.
 */
 function solve(board: string[][]): void {
  let edgeRegions = new Set<string>();
  const rows = board.length;
  const columns = board[0].length;

  // iterate over top and bottom
  for (let i=0; i<columns; i++) {
      if (board[0][i] === 'O') 
          findConnectedCells([0, i]);
      
      if (board[rows-1][i] === 'O') {
        findConnectedCells([rows-1, i]);
      }
  }

  // iterate over left and right
  for (let i=0; i<rows; i++) {
      if (board[i][0] === 'O') {
          findConnectedCells([i, 0]);
      }
      
      if (board[i][columns-1] === 'O') {
          findConnectedCells([i, columns-1]);
      }
  }

  function findConnectedCells(coords: number[]) {
      const coordString = coords.join();
      const [u, v] = coords;

      if (board[u][v] !== 'O') return;
      if (edgeRegions.has(coordString)) return;
      edgeRegions.add(coordString);

      // get top, right, left, bottom
      if (u > 0) findConnectedCells([u - 1, v]);
      if (u < rows - 1) findConnectedCells([u + 1, v]);
      if (v > 0) findConnectedCells([u, v - 1]);
      if (v < columns - 1) findConnectedCells([u, v + 1]);
  }

  // Iterate over entire board to replace
  for (let u=0; u<rows; u++) {
      for (let v=0; v<columns; v++) {
          // If not in set, make X
          const coord = [u, v].join();
          if (board[u][v] === 'O' && !edgeRegions.has(coord)) {
              board[u][v] = 'X';
          }
      }
  }
};
