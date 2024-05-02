// First attempt, O(n^2)—time limit exceeded
function maxArea1(height: number[]): number {
  let maxVolume = 0;

  for (let i=0; i<height.length; i++) {
      const start = height[i];

      for (let j=i+1; j<height.length; j++) {
          const end = height[j];

          const currentVolume = (j - i) * Math.min(start, end);
          if (currentVolume > maxVolume) {
              maxVolume = currentVolume;
          }
      }
  }

  return maxVolume;
};

// Second attempt with two pointers (beats 99.63%!)

function maxArea2(height: number[]): number {
  let maxVolume = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
      const lHeight = height[left];
      const rHeight = height[right];

      const volume = Math.min(rHeight, lHeight) * (right - left);

      if (volume > maxVolume) maxVolume = volume;

      if (lHeight < rHeight) {
          left += 1
      } else {
          right -= 1;
      }
  }

  return maxVolume;
};
