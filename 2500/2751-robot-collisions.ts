// First solution, solved 2024-07-13 in 1:11:34 (with help)
// Time: O(n), space: O(n)
function survivedRobotsHealths(
  positions: number[],
  healths: number[],
  directions: string
): number[] {
  // Create an array of robots with their original indices
  const robots = positions.map((pos, index) => ({
    pos,
    health: healths[index],
    dir: directions[index],
    index
  }));

  // Sort robots by position
  robots.sort((a, b) => a.pos - b.pos);

  // Stack to keep track of robots moving to the right
  const stack: { pos: number; health: number; dir: string; index: number }[] = [];
  
  // List to keep track of surviving robots
  const survivors = new Array(robots.length).fill(true);

  for (const robot of robots) {
    if (robot.dir === 'R') {
      stack.push(robot);
    } else { // robot.dir === 'L'
      while (stack.length > 0) {
        const lastRight = stack[stack.length - 1];

        if (lastRight.health === robot.health) {
          // Both robots destroy each other
          survivors[lastRight.index] = false;
          survivors[robot.index] = false;
          stack.pop();
          break;
        } else if (lastRight.health > robot.health) {
          // Robot moving left is destroyed
          lastRight.health -= 1;
          survivors[robot.index] = false;
          break;
        } else {
          // Robot moving right is destroyed
          robot.health -= 1;
          survivors[lastRight.index] = false;
          stack.pop();
        }
      }
    }
  }

  // Collect health of surviving robots in original order
  return robots
    .filter((robot, index) => survivors[robot.index])
    .sort((a, b) => a.index - b.index)
    .map(robot => robot.health);
}
