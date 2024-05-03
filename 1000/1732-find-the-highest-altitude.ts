// First attempt
function largestAltitude(gain: number[]): number {
  let currentAltitude = 0;
  let maxAltitude = 0;

  for (let height of gain) {
      currentAltitude += height;
      maxAltitude = Math.max(maxAltitude, currentAltitude);
  }

  return maxAltitude;
};
