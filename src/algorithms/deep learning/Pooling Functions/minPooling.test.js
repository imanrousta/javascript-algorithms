const min = require('./minPooling');

describe("min", () => {
	it("should find minimum of an array", () => {
		expect(min([1,2,3])).toBe(1);
		expect(min([-1,-2,0])).toBe(-2);
		expect(min([-525588,852,963])).toBe(-525588);
	});
});