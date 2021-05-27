const primorial = require('./primorial');

describe("primorial", () => {
	it("should calculate primorial", () => {
		expect(primorial(2)).toBe(2);
		expect(primorial(3)).toBe(6);
		expect(primorial(4)).toBe(6);
		expect(primorial(5)).toBe(30);
		expect(primorial(6)).toBe(30);
		expect(primorial(11)).toBe(2310);
	});
});
