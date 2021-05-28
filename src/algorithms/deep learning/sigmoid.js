function sigmoid(x) {
	return 1 / (1 + Math.exp(-x));
}

function sigmoidDerivative(x) {
	let x1 = sigmoid(x);
	return x1 * (1 - x1);
}
