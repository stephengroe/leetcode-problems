// First solution, solved 2024-07-04 in 39:56 (with help)
// Time: O(n), space: O(1)
function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
  if (!head || !head.next || !head.next.next) {
      return [-1, -1];
  }
  
  let criticalPoints: number[] = [];
  let current = head.next;
  let prev = head;
  let index = 1;

  // Traverse the list to find critical points
  while (current.next !== null) {
      if (isCriticalPoint(prev.val, current.val, current.next.val)) {
          criticalPoints.push(index);
      }
      prev = current;
      current = current.next;
      index++;
  }

  if (criticalPoints.length < 2) {
      return [-1, -1];
  }

  let minDistance = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < criticalPoints.length; i++) {
      minDistance = Math.min(minDistance, criticalPoints[i] - criticalPoints[i - 1]);
  }
  let maxDistance = criticalPoints[criticalPoints.length - 1] - criticalPoints[0];

  return [minDistance, maxDistance];
}

function isCriticalPoint(prev: number, current: number, next: number): boolean {
  return (prev < current && current > next) || (prev > current && current < next);
}
