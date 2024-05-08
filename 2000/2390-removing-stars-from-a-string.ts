// First solution
function removeStars(s: string): string {
  let arr = s.split("");
  let result: string[] = [];
  let stars = 0;

  for (let i=arr.length; i>=0; i--) {
      if (arr[i] === "*") {
          stars += 1;
      } else if (stars > 0) {
          stars -= 1;
      } else {
          result.push(arr[i]);
      }
  }

  return result.reverse().join('');
};
