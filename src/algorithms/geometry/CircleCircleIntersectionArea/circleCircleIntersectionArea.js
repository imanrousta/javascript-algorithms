// r1>=r2
// d is distance between center of two circles

function circleCircleIntersectionArea(r1, r2, d) {
	let d1 = ((Math.pow(r1, 2) - Math.pow(r2, 2) + Math.pow(d, 2)) / 2) * d;
	let d2 = d - d1;
	let intersectionArea;

	if (d >= r1 + r2) {
		intersectionArea = 0;
	} else if (d <= r1 - r2) {
		intersectionArea = Math.PI * Math.pow(r2, 2);
	} else {
		intersectionArea =
			Math.pow(r1, 2) * Math.acos(d1 / r1) -
			d1 * Math.sqrt(Math.pow(r1, 2) - Math.sqrt(d1, 2)) +
			Math.pow(r2, 2) * Math.acos(d2 / r2) -
			d2 * Math.sqrt(Math.pow(r2, 2) - Math.pow(d2, 2));
	}

	return intersectionArea;
}
