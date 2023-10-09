import { pluck } from "../..";



describe('pluck', () => {
  it('pluck all the values that match the key into an array', () => {
    expect(pluck([{
	name: 'john'
	}, {
	name: 'bob'
	}], 'name')).toStrictEqual(['john', 'bob'])
  });
  it('Throw an Error when an empty array is passed in', () => {
		expect(() => pluck([], '')).toThrowError('Input array is empty')
  });

})
