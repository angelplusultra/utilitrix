type Dict = {
	[key: string]: any
}

/**
 * Returns an array of values based on the key of an array of common objects
 *
 * 
 * */
/**
 * Plucks a specific property from an array of objects and returns an array
 * containing the values of that property.
 *
 * @template T - The type of objects in the input array.
 * @template K - The type of property key to pluck from the objects.
 *
 * @param {T[]} arr - The input array of objects.
 * @param {K} key - The property key to pluck from each object.
 *
 * @throws {Error} If the input array is empty.
 * @throws {Error} If the first object in the array has no keys.
 * @throws {Error} If the specified key does not exist in an object.
 *
 * @example
 * // Example usage:
 * const data = [
 *   { id: 1, name: 'Alice' },
 *   { id: 2, name: 'Bob' },
 *   { id: 3, name: 'Charlie' },
 * ];
 *
 * const ids = pluck(data, 'id');
 * // Result: [1, 2, 3]
 *
 * const names = pluck(data, 'name');
 * // Result: ['Alice', 'Bob', 'Charlie']
 *
 * @returns {T[K][]} An array containing the values of the specified property
 * from each object in the input array.
 *
 */
export function pluck<T extends Dict, K extends keyof T>(arr: T[], key: K): T[K][] {
if (arr.length === 0) {
    throw new Error("Input array is empty");
  }

  if (Object.keys(arr[0]).length === 0) {
    throw new Error("The first object in the array has no keys");
  }

  return arr.map(obj => {
    if (!obj.hasOwnProperty(key)) {
      throw new Error(`Key '${key.toString()}' does not exist in an object`);
    }
    return obj[key];
  });
}


