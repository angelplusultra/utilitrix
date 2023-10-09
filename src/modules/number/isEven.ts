/**
 * Takes a number and returns true if the number is even and false if it is odd
 * @param number - The number to evaluate
 * @returns {boolean} boolean value on whether the number is even 
 *
 * @example
 *
 * const num = 8
 * isEven(num) -> true
 *
 * const num = 5
 * isEven(num) -> false
 */
export function isEven(number: number): boolean{
	return number % 2 === 0
}
