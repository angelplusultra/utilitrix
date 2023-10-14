import { Dict } from "./pluck";

export interface ExistsReturn<T> {
  element: T | null;
  exists: boolean;
}

/**
 * Determines if an element with a specific key-value pair exists in an array of objects.
 *
 * @param array - The array of objects to search.
 * @param key - The key to match against the value.
 * @param value - The value to search for within the array.
 * @returns An `ExistsReturn` object containing information about the existence and the matching element.
 *
 * @example
 * ```typescript
 * const array = [
 *   { name: "Alice", age: 25 },
 *   { name: "Bob", age: 30 },
 *   { name: "Charlie", age: 35 },
 * ];
 *
 * // Check if an element with 'name' equal to 'Bob' exists in the array
 * const result = exists(array, "name", "Bob");
 * // result.exists is true, and result.element contains the matching object.
 * ```
 */
export function exists<ValueType extends Dict, K extends keyof ValueType, V>(
  array: ValueType[],
  key: K,
  value: V
): ExistsReturn<ValueType> {
  const returnPayload: ExistsReturn<ValueType> = {
    element: null,
    exists: false,
  };
  const element = array.find((el) => el[key] === value);
  if (element) {
    returnPayload.exists = true;
    returnPayload.element = element;
  }

  return returnPayload;
}
