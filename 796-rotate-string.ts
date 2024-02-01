function rotateString(s: string, goal: string): boolean {
  const sLength: number = s.length;
  const goalLength: number = goal.length;

  if (sLength !== goalLength) return false;
  for (let i: number=0; i<sLength; i++) {
      let shift: string = s.slice(i) + s.slice(0, i);
      if (shift === goal) {
          return true;
      }
  }
  return false;
};