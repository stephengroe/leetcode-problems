function maxArea(height: number[]): number {
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
