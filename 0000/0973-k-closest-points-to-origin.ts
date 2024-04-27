function kClosest(points: number[][], k: number): number[][] {
  const sortedPoints = points.slice().sort((point1, point2) => {
      const a = getDistance(point1[0], point1[1]);
      const b = getDistance(point2[0], point2[1]);

      return a - b;
  });
  return sortedPoints.slice(0, k);
};

function getDistance(x: number, y: number): number {
  // Pythagorean theorem
  return Math.sqrt(Math.abs(x)**2 + Math.abs(y)**2);
}
