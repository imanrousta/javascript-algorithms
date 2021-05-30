const max = require('./maxPooling');

describe("max", () => {
	it("should find maximum of an array", () => {
		expect(max([1,2,3])).toBe(3);
		expect(max([-1,-2,0])).toBe(0);
		expect(max([-525588,852,963])).toBe(963);
	});
});