/**
 * Represents an object containing a key-value pair for logging purposes.
 *
 * @category Misc
 * @typeParam LogValue - The type of the log value.
 *
 * @property {string} key - The key for the log entry.
 * @property {LogValue} value - The value associated with the key.
 */
export interface LogOpts<LogValue> {
  key?: string;
  value: LogValue;
}
/**
 * Logs a key-value pair or a single value for debugging or logging purposes.
 *
 * @category Misc
 * @typeParam LogValue - The type of the log value.
 *
 * @param {LogOpts<LogValue> | LogValue} opts - An object with a key-value pair or a single value to log.
 * @param {string} [key="Key"] - The key to use for the log entry if `opts` is a single value.
 *
 * @example
 * // Logging a key-value pair
 * const logEntry = { key: "UserID", value: 123 };
 * gigalog(logEntry);
 *
 * // Logging a single value with a custom key
 * gigalog("Status", "StatusCode");
 */
export function gigalog<LogValue>(opts: LogOpts<LogValue> | LogValue, key: string = "Key"): void {
  let logKey = key;
  let logValue: LogValue

  if (typeof opts === "object" && opts !== null && "value" in opts) {
    if (opts.key) {
      logKey = opts.key;
    }
    logValue = opts.value;
  } else{
		logValue = opts
	}


	console.log({
		[logKey]: logValue
	})
}
