const doubleFactorial = require('./doubleFactorial');

describe("factorial", () => {
	it("should calculate factorial", () => {
		expect(doubleFactorial(0)).toBe(1);
		expect(doubleFactorial(1)).toBe(1);
		expect(doubleFactorial(2)).toBe(2);
		expect(doubleFactorial(5)).toBe(15);
		expect(doubleFactorial(8)).toBe(384);
		expect(doubleFactorial(9)).toBe(945);
		expect(doubleFactorial(10)).toBe(3840);
	});
});