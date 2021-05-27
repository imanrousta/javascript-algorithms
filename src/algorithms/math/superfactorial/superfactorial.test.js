const superfactorial = require('./superfactorial');

describe("superfactorial", () => {
	it("should calculate superfactorial", () => {
		expect(superfactorial(0)).toBe(1);
		expect(superfactorial(1)).toBe(1);
		expect(superfactorial(2)).toBe(2);
		expect(superfactorial(3)).toBe(12);
		expect(superfactorial(4)).toBe(288);
		expect(superfactorial(5)).toBe(34560);
		
	});
});
