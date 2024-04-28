function fullJustify(words: string[], maxWidth: number): string[] {
  let justifiedText: string[] = [];
  let currentLine: string[] = [];
  let lineLength = 0;

  // Iterate over set of words
  for (let i=0; i<words.length; i++) {
      const wordLength = words[i].length;
      const lineWords = currentLine.length;

      // If the word will fit, add it
      if (lineLength + wordLength + lineWords <= maxWidth) {
          currentLine.push(words[i]);
          lineLength += wordLength;
      } else { // Won't fit on this line
          // Add formatted line to result
          justifiedText.push(formatLine(currentLine, maxWidth));
          currentLine = [words[i]];
          lineLength = wordLength;
      }
      // If it's the last word, finish the line
      if (i === words.length - 1) {
          // Separate with one space
          let finalLine = currentLine.join(" ");

          // Calculate all remaining spaces and add to the end
          const spacesRequired = (maxWidth - finalLine.length);
          finalLine += " ".repeat(spacesRequired);
          justifiedText.push(finalLine);
      }
  }

  return justifiedText;
};

function formatLine(words: string[], maxWidth: number): string {
  const numberOfWords = words.length;
  const numberOfSpaces = numberOfWords - 1;
  const numberOfCharacters: number = words.reduce(
      (acc, current) => acc += current.length,
      0);
  const spacesRequired = maxWidth - numberOfCharacters;
  let generatedLine = words[0]; // Add first word

  // If there's only one word, add all spaces to the end
  if (numberOfWords === 1) {
      generatedLine += " ".repeat(spacesRequired);
  // If there's only two words, add all spaces to the middle
  } else if (numberOfWords === 2) {
      generatedLine += " ".repeat(spacesRequired);
      generatedLine += words[1];
  // If there's more than two words, divide spacing
  } else {
      // Calculate leftover spaces
      let extraSpaces = spacesRequired % numberOfSpaces;
      const spacesPer = (spacesRequired - extraSpaces) / numberOfSpaces;

      // Iterate through each word and add spaces, starting at second word
      for (let i=1; i<numberOfWords; i++) {
          // Add extra space
          if (extraSpaces > 0) {
              generatedLine += " ";
              extraSpaces -= 1;
          }
          // Add spacing and word
          generatedLine += " ".repeat(spacesPer);
          generatedLine += words[i];
      }
  }

  return generatedLine;
}
