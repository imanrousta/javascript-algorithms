function leakyReLU(x) {
	if (x >= 0) {
		return x;
	} else {
		return 0.01 * x;
	}
}

function leakyReLUDerivative(x) {
	if (x >= 0) {
		return 1;
	} else {
		return 0.01;
	}
}
