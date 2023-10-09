/**
 * Selects a random element from an array.
 *
 * @param arr - The array from which to select a random element.
 * @throws {Error} If the input array is empty.
 * @example
 * const colors = ["red", "blue", "green", "yellow"];
 * const randomColor = random(colors); // Returns a random color from the array.
 */
export function random<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}
