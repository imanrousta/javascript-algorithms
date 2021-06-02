function triangleArea(a, b, c) {
	halfPerimeter = (a + b + c) / 2;

	area = Math.sqrt(
		halfPerimeter *
			(halfPerimeter - a) *
			(halfPerimeter - b) *
			(halfPerimeter - c)
	);

	return area;
}

module.exports = triangleArea;
