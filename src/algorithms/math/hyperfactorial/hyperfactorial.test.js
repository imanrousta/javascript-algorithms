const hyperfactorial = require('./hyperfactorial');

describe("hyperfactorial", () => {
	it("should calculate hyperfactorial", () => {
		expect(hyperfactorial(0)).toBe(1);
		expect(hyperfactorial(1)).toBe(1);
		expect(hyperfactorial(2)).toBe(4);
		expect(hyperfactorial(3)).toBe(108);
		expect(hyperfactorial(4)).toBe(27648);
		expect(hyperfactorial(5)).toBe(86400000);
	});
});
