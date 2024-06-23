// First solution, solved 2024-06-23 (with help)
// Time: O(n), space: O(n)
function longestSubarray(nums: number[], limit: number): number {
  let maxLen = 0;
  let left = 0;
  let minDeque: number[] = [];
  let maxDeque: number[] = [];
  
  for (let right = 0; right < nums.length; right++) {
      // Maintain the minimum deque
      while (minDeque.length > 0 && nums[right] < nums[minDeque[minDeque.length - 1]]) {
          minDeque.pop();
      }
      minDeque.push(right);
      
      // Maintain the maximum deque
      while (maxDeque.length > 0 && nums[right] > nums[maxDeque[maxDeque.length - 1]]) {
          maxDeque.pop();
      }
      maxDeque.push(right);
      
      // Check if the current window violates the condition
      while (nums[maxDeque[0]] - nums[minDeque[0]] > limit) {
          left++;
          if (minDeque[0] < left) minDeque.shift();
          if (maxDeque[0] < left) maxDeque.shift();
      }
      
      // Calculate the length of the current valid subarray
      maxLen = Math.max(maxLen, right - left + 1);
  }
  
  return maxLen;
}
