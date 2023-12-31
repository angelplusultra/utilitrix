/**
 * Calculates the total sum of a variable number of numeric values.
 *
 * @param {...number} nums - The numeric values to be summed.
 * @returns {number} The total sum of the input values.
 *
 * @example
 * const result = totalize(1, 2, 3); // Result: 6
 */
export type TotalizeOpts = PrecisionMode | WholeMode | NormalMode

export interface PrecisionMode {
	mode: 'precision'
	precision: number
}
export interface WholeMode {
	mode: 'whole';
	round: 'floor' | 'ceil' | 'round'
}
export interface NormalMode {
	mode: 'normal'
}
export function totalize(nums: number[], opts: TotalizeOpts = {
	mode: 'normal'
}): number {
  const sum = nums.reduce((acc, curr) => acc + curr, 0);
	if(opts.mode === 'precision'){
		return parseFloat(sum.toFixed(opts.precision))

	} else if(opts.mode === 'whole'){
		return Math[opts.round](sum)

	} 
  
  return sum;
}
