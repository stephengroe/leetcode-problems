// First solution, solved 2024-07-31 in 07:22
// Time: O(n), space: O(1)

function judgeCircle1(moves: string): boolean {
	let x = 0;
	let y = 0;

	for (let move of moves) {
		if (move === 'R') x += 1;
		else if (move === 'L') x -= 1;
		else if (move === 'U') y += 1;
		else if (move === 'D') y -= 1;
	}

	if (x === 0 && y === 0) {
		return true;
	} else {
		return false;
	}
}

// Second solution, optimized
function judgeCircle2(moves: string): boolean {
	let x = 0;
	let y = 0;

	for (let move of moves) {
		if (move === 'R') x += 1;
		else if (move === 'L') x -= 1;
		else if (move === 'U') y += 1;
		else if (move === 'D') y -= 1;
	}

    return (x === 0 && y === 0);
}

// Third solution, optimized again
function judgeCircle3(moves: string): boolean {
  if (moves.length % 2 !== 0) return false;

let x = 0, y = 0;

for (let move of moves) {
  if (move === 'R') x += 1;
  else if (move === 'L') x -= 1;
  else if (move === 'U') y += 1;
  else if (move === 'D') y -= 1;
}

  return (x === 0 && y === 0);
}
