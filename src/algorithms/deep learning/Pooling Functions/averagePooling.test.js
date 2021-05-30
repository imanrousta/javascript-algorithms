const average = require('./averagePooling');

describe("average", () => {
	it("should find minimum of an array", () => {
		expect(average([1,2,3])).toBe(2);
		expect(average([-1,-2,0])).toBe(-1);
	});
});