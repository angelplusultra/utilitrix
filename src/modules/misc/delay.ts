/**
 * Delays the execution of code by a specified number of milliseconds.
 *
 * @param {number} ms - The delay time in milliseconds.
 * @returns {Promise<void>} 
 *
 * @example
 * async function delayedFunction() {
 *   console.log("Start");
 *   await delay(2000); // Wait for 2 seconds
 *   console.log("End"); // This will be executed after the delay
 * }
 *
 * delayedFunction();
 */
export function delay(ms: number): Promise<void>{
	return new Promise(res => {
		setTimeout(res, ms)
	})
}
