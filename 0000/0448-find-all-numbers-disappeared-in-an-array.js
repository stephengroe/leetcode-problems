/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  // Start with an empty array (we'll return this)
  const notIncluded = [];

  // Create set (all unique values)
  const set = new Set(nums);

  // Iterate through 1-n
  for (let i=1; i <= nums.length; i+=1) {
      // If the set doesn't include i, push to array
      if (!(set.has(i))) {
          notIncluded.push(i);
      }
  }

  // Return array
  return notIncluded;
};