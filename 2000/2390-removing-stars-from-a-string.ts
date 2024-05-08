// First solution
function removeStars1(s: string): string {
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

// Second solution, with simpler stack logic
function removeStars2(s: string): string {
  let arr = s.split("");
  let result: string[] = [];

  for (let i=0; i<arr.length; i++) {
      if (arr[i] === "*") {
          result.pop();
      } else {
          result.push(arr[i]);
      }
  }

  return result.join('');
};
