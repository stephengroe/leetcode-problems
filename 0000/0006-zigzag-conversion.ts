// First solution
function convert(s: string, numRows: number): string {
  let letters = Array.from(s);
  let matrix = new Array();
  let currentRow = 0;
  let increasing = true;

  for (let i=0; i<letters.length; i++) {
      if (i < numRows) { // Add new row
          matrix.push([]);
      }

      matrix[currentRow].push(letters[i]);

      // If there's just one row, keep going
      if (numRows === 1) continue;

      // Move up or down the rows
      if (increasing) {
          currentRow += 1;
      } else {
          currentRow -= 1;
      }

      // Move up if we hit bottom, down if we hit top
      if (currentRow === 0) {
          increasing = true;
      } else if (currentRow === numRows - 1) {
          increasing = false;
      }
  }

  return matrix.flat().join("");
};
