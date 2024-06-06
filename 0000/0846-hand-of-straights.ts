// First solution, solved 2024-06-06 (with a lot of help)
// Time: O(n * log(n)), space: O(n)
function isNStraightHand(hand: number[], groupSize: number): boolean {
  // If we can't divide it into groupSize, just return false
  if (hand.length % groupSize) return false;

  // Tally cards
  let cardCount = new Map<number, number>();
  for (let i=0; i<hand.length; i++) {
      cardCount.set(hand[i], cardCount.get(hand[i]) + 1 || 1);
  }

  // Create hands
  let sortedCards = Array.from(cardCount.keys()).sort((a, b) => a - b);

  // Iterate over hands, starting with lowest number
  for (let card of sortedCards) {
      let count = cardCount.get(card) || 0;

      // Try to create a hand
      if (count > 0) {
          for (let j=0; j<groupSize; j++) {
              let next = card + j;
              let nextCardCount = cardCount.get(next) || 0;

              if (nextCardCount >= count) {
                  cardCount.set(next, nextCardCount - count);
              } else {
                  return false;
              }
          }
      }
  }

  return true;    
};
