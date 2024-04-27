function canThreePartsEqualSum(arr: number[]): boolean {
  const sum: number = arr.reduce((acc, cur) => acc += cur);
  if (sum % 3 !== 0) return false;

  const result: number = sum/3;
  let temp: number = 0;
  let solved: number = 0;
  for (let i: number=0; i<arr.length; i++) {
      temp += arr[i];
      if (temp === result) {
          temp = 0;
          solved++;
      }
  }

  if (solved >= 3) {
      return true;
  } else {
      return false;
  }
};