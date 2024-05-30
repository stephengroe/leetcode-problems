// First solution (with a lot of help)
// Time: O(n^3), space: O(1)
function countTriplets(arr: number[]): number {
  let triplets = 0;

  for (let i=0; i<arr.length - 1; i++) {
      let a = 0;

      for (let j=i+1; j<arr.length; j++) {
          a = a ^ arr[j - 1];
          let b = 0;

          for (let k=j; k<arr.length; k++) {
              b = b ^ arr[k];

              if (a === b) {
                  triplets += 1;
              }
          }
      }
  }

  return triplets;
};
