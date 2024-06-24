// First solution, solved 2024-06-24 (with some help)
// Time: O(n * k), space: O(n)
// (Hits Time Limit Exceeded)
function minKBitFlips(nums: number[], k: number): number {
  let bits = nums.slice();
  let count = 0;

  // Greedy approach, flip first zero
  for (let i=0; i<bits.length; i++) {
      if (bits[i] === 0 && (i + k) <= bits.length ) {
          count += 1;
          let flippedBits = bits.slice(i, i + k).map(n => {
              if (n === 0) {
                  return 1;
              } else {
                  return 0;
              }});
          bits.splice(i, k, ...flippedBits);
      }
      console.log(bits);
  }

  // If we were unable to flip any
  if (bits.includes(0)) {
      return -1;
  } else {
      return count;
  }
};
