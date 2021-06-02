const triangleArea = require('./triangleArea');

describe("triangleArea", () => {
	it("should calculate triangle area (Heron's formula)", () => {
		expect(triangleArea(24,18,30)).toBe(216);
		expect(triangleArea(3,4,5)).toBe(6);
	});
});