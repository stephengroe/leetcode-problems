// First solution, solved 2024-07-14 (with lots of help)
// Time: O(n), space: O(n)
function countOfAtoms(formula: string): string {
  const stack: Map<string, number>[] = [];
  let i = 0;
  const n = formula.length;

  // Helper function to parse an atom name
  const parseAtom = (): string => {
      let atom = formula[i++];
      while (i < n && formula[i] >= 'a' && formula[i] <= 'z') {
          atom += formula[i++];
      }
      return atom;
  };

  // Helper function to parse a number
  const parseNumber = (): number => {
      if (i >= n || isNaN(Number(formula[i]))) {
          return 1;
      }
      let num = 0;
      while (i < n && !isNaN(Number(formula[i]))) {
          num = num * 10 + Number(formula[i++]);
      }
      return num;
  };

  stack.push(new Map());

  while (i < n) {
      if (formula[i] === '(') {
          i++;
          stack.push(new Map());
      } else if (formula[i] === ')') {
          i++;
          const num = parseNumber();
          const top = stack.pop()!;
          const current = stack[stack.length - 1];

          for (const [atom, count] of top.entries()) {
              current.set(atom, (current.get(atom) || 0) + count * num);
          }
      } else {
          const atom = parseAtom();
          const num = parseNumber();
          const current = stack[stack.length - 1];
          current.set(atom, (current.get(atom) || 0) + num);
      }
  }

  const finalCounts = stack.pop()!;
  const sortedAtoms = Array.from(finalCounts.entries()).sort(([a], [b]) => a.localeCompare(b));

  return sortedAtoms.map(([atom, count]) => count > 1 ? atom + count : atom).join('');
}
