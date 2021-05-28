function ReLU(x) {
	if (x > 0) {
		return x * 1;
	} else {
		return 0;
	}
}

function ReLUDerivative(x) {
	if (x > 0) {
		return 1;
	} else {
		return 0;
	}
}
