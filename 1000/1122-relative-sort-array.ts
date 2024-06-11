// First solution, solved 2024-06-10 in 12:32
// Time: O(n log n), space: O(n)
function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  let arrMap = new Map<number, number>();
  let arrSet = new Set<number>([...arr2]);
  let leftovers: number[] = [];

  for (let i=0; i<arr1.length; i++) {
      if (arrSet.has(arr1[i])) { // If it's in unique set
          arrMap.set(arr1[i], arrMap.get(arr1[i])! + 1 || 1);
      } else {
          leftovers.push(arr1[i]);
      }
  }

  let result: number[] = [];

  for (let i=0; i<arr2.length; i++) {
      for (let j=0; j<arrMap.get(arr2[i])!; j++) {
          result.push(arr2[i]);
      }
  }

  return [...result, ...leftovers.sort((a, b) => a - b)];
};
