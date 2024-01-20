function findJudge(n: number, trust: number[][]): number {
  if (n === 1) return 1;
  if (trust.length === 0) return -1;

  const judges = new Map<number, number[]>();
  const notJudges = new Set<number>();

  for (let i: number = 0; i < trust.length; i += 1) {
      const person: number = trust[i][0];
      const possibleJudge: number = trust[i][1];
      notJudges.add(person);
      if (judges.has(possibleJudge)) {
          judges.get(possibleJudge).push(person);
      } else {
          judges.set(possibleJudge, [person]);
      }
  }

  for (const [key, value] of judges) {
      if (value.length === (n - 1) && !notJudges.has(key)) {
          return key;
      }
  }
  return -1;
};