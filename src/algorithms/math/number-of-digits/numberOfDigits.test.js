const numberOfDigits = require('./numberOfDigits');

describe("numberOfDigits", () => {
	it("should calculate number Of digits", () => {
		expect(numberOfDigits(0)).toBe(1);
		expect(numberOfDigits(11)).toBe(2);
		expect(numberOfDigits(22222)).toBe(5);
		expect(numberOfDigits(5785423)).toBe(7);
		expect(numberOfDigits(3214569874123)).toBe(13);
		expect(numberOfDigits(1000000000000000)).toBe(16);
	});
});
