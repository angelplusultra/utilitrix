/**
 * Checks if the code is running in a browser environment (e.g., a web browser) by
 * examining the global `window` object. If not, it throws an error indicating that
 * the function cannot be executed outside of a browser environment.
 *
 * @throws {Error} Throws an error if not running in a browser environment.
 */
function envCheck() {
  if (typeof window === 'undefined') {
    throw new Error(
      "Cannot run this function outside of a browser environment (e.g., Node.js)"
    );
  }
}

/**
 * Sets a key-value pair in the browser's local storage.
 *
 * @template T - The type of the value being stored.
 * @param {string} key - The key to use for storage.
 * @param {T} value - The value to be stored in local storage.
 * @returns {void}
 * @throws {Error} Throws an error if not running in a browser environment.
 */
export function set<T>(key: string, value: T): void {
  /**
   * Check if the code is running in a browser environment.
   * If not, an error will be thrown by the envCheck function.
   */
  envCheck();
  
  /**
   * Store the provided value as a JSON string in local storage
   * with the specified key.
   */
  localStorage.setItem(key, JSON.stringify(value));
}
export function get<ReturnValue>(key: string): ReturnValue {
  envCheck();
  const item = localStorage.getItem(key);

  if (!item) {
    throw new Error("Key does not exist in Local Storage");
  }

  return JSON.parse(item);
}

export function remove(key: string) {
  envCheck();
  localStorage.removeItem(key);
}

export function clear() {
  envCheck();
  localStorage.clear();
}
