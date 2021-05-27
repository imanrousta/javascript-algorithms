const isPrime = require('./isPrime');

describe("isPrime", () => {
	it("should calculate isPrime", () => {
		expect(isPrime(2)).toBeTruthy();
		expect(isPrime(3)).toBeTruthy();
		expect(isPrime(4)).toBeFalsy();
		expect(isPrime(5)).toBeTruthy();
		expect(isPrime(7)).toBeTruthy();
		expect(isPrime(10)).toBeFalsy();
		expect(isPrime(11)).toBeTruthy();
	});
});
