const pythagoras = require('./pythagoras');

describe("pythagoras", () => {
	it("should calculate third number according to pythagoras theorem", () => {
		expect(pythagoras(3,4)).toBe(5);
		expect(pythagoras(6,8)).toBe(10);
		expect(pythagoras(8,15)).toBe(17);
		expect(pythagoras(12,16)).toBe(20);
		expect(pythagoras(7,24)).toBe(25);
		expect(pythagoras(21,28)).toBe(35);
	});
});
