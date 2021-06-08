const factors = require('./factors');

describe("factors", () => {
	it("should calculate factors of number", () => {
		expect(factors(1)).toEqual([1]);
		expect(factors(2)).toEqual([1,2]);
		expect(factors(3)).toEqual([1,3]);
		expect(factors(8)).toEqual([1,2,4,8]);
		expect(factors(17)).toEqual([1,17]);
		expect(factors(151)).toEqual([1,151]);
	});
});
