import {totalize} from '../../'


describe('totalize', () => {
	it('should add all the floats together and round up to the nearest whole', () => {
		const nums = [1.5, 2.6, 1.8]
		expect(totalize(nums, {
			mode: 'whole',
			round: 'ceil'
			})).toEqual(6)
	})
	it('should add all the floats together and round down to the nearest whole', () => {
		const nums = [1.5, 2.6, 1.8]
		expect(totalize(nums, {
			mode: 'whole',
			round: 'floor'
			})).toEqual(5)
	})
})
