function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let totalSpaces = 0;
  let canAdd = true;

  // Iterate over array
  for (let i=0; i<flowerbed.length; i++) {
      const plot = flowerbed[i];
      const nextPlot: number = flowerbed[i + 1];

      // Add a flower if this plot and next are empty
      // (Using `!== 1` lets us count undefined at end of array)
      if (plot !== 1 && nextPlot !== 1) {
          if (canAdd) {
              totalSpaces += 1;
              canAdd = false;
          } else {
              canAdd = true;
          }
      } else {
          canAdd = false;
      }
  }

  return totalSpaces >= n;
};
