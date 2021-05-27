const hyperfactorialRecursive = require('./hyperfactorialRecursive');

describe("hyperfactorialRecursive", () => {
	it("should calculate Recursive hyperfactorial", () => {
		expect(hyperfactorialRecursive(0)).toBe(1);
		expect(hyperfactorialRecursive(1)).toBe(1);
		expect(hyperfactorialRecursive(2)).toBe(4);
		expect(hyperfactorialRecursive(3)).toBe(108);
		expect(hyperfactorialRecursive(4)).toBe(27648);
		expect(hyperfactorialRecursive(5)).toBe(86400000);
	});
});
