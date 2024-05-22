// First solution
function partition(s: string): string[][] {
  let result: string[][] = [];
  let partition: string[] = []

  function testPalindromes(index: number) {
      if (index >= s.length) {
          result.push(partition.slice());
          return;
      } else {
          for (let j=index; j<s.length; j++) {
              if (isPalindrome(index, j)) {
                  partition.push(s.slice(index, j + 1));
                  testPalindromes(j + 1);
                  partition.pop();
              }
          }
      }
  }

  function isPalindrome(left: number, right: number): boolean {
      while (left < right) {
          if (s[left] !== s[right]) {
              return false;
          } else {
              left += 1;
              right -= 1;
          }
      }
      return true;
  }

  testPalindromes(0);

  return result;
};
