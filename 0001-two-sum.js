/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (i = 0; i < nums.length; i++){
    let j = nums.indexOf(target - nums[i]);
    if (j >=0 && i !== j) return Array(i, j);
  }
};