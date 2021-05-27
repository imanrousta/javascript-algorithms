const superfactorialRecursive = require('./superfactorialRecursive');

describe("superfactorialRecursive", () => {
	it("should calculate Recursive superfactorial", () => {
		expect(superfactorialRecursive(0)).toBe(1);
		expect(superfactorialRecursive(1)).toBe(1);
		expect(superfactorialRecursive(2)).toBe(2);
		expect(superfactorialRecursive(3)).toBe(12);
		expect(superfactorialRecursive(4)).toBe(288);
		expect(superfactorialRecursive(5)).toBe(34560);
		
	});
});