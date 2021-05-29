function SELU(x) {
	const lambda = 1.0507;
	const alpha = 1.67326;

	if (x >= 0) {
		return lambda * x;
	} else {
		return lambda * alpha * (Math.exp(x) - 1);
	}
}

function seluDerivative(x) {
	const lambda = 1.0507;
	const alpha = 1.67326;

	if ( x>= 0) {
		return lambda;
	} else {
		return lambda * alpha * Math.exp(x);
	}
}
