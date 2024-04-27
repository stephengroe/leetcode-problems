/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  matrix = matrix.flat();

  while (matrix.length > 1){
      let center = Math.floor(matrix.length / 2);
      if (target === matrix[center]){return true;}
      else if (target < matrix[center]){matrix.splice(center);}
      else if (target > matrix[center]){matrix.splice(0, center);}
  }
  if (target === matrix[0]){return true;}
  return false;
};