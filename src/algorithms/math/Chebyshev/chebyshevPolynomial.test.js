const chebyshevPolynomial = require('./chebyshevPolynomial');

describe("chebyshevPolynomial", () => {
	it("should calculate chebyshevPolynomial", () => {
		expect(chebyshevPolynomial(0,1)).toBe(1);
		expect(chebyshevPolynomial(1,1)).toBe(1);
		expect(chebyshevPolynomial(2,1)).toBe(1);
		expect(chebyshevPolynomial(0,2)).toBe(1);
		expect(chebyshevPolynomial(1,2)).toBe(2);
		expect(chebyshevPolynomial(2,2)).toBe(7);
		expect(chebyshevPolynomial(4,2)).toBe(97);
	});
});