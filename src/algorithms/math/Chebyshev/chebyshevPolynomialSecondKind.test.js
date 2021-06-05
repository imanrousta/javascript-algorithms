const chebyshevPolynomialSecondKind = require('./chebyshevPolynomialSecondKind');

describe("chebyshevPolynomialSecondKind", () => {
	it("should calculate chebyshevPolynomialSecondKind", () => {
		expect(chebyshevPolynomialSecondKind(0,1)).toBe(1);
		expect(chebyshevPolynomialSecondKind(1,1)).toBe(2);
		expect(chebyshevPolynomialSecondKind(2,1)).toBe(3);
	});
});