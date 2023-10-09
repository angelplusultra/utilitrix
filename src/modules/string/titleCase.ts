/**
 * Capitalizes the first letter of each word in a string, except for specified minor words.
 *
 * @param {string} str - The input string to be title-cased.
 * @returns {string} The input string title-cased
 * @example
 * const input = "the lord of the rings";
 * const result = titleCase(input); // Returns "The Lord of the Rings"
 */
export function titleCase(str: string): string {
  const minorWords = ["the", "of", "and", "to"];
  const wordArr = str.toLowerCase().split(" ");

  return wordArr
    .map((word, i) => {
      if (minorWords.includes(word) && i !== 0) {
        return word;
      }

      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}
