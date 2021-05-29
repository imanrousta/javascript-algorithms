function Gaussian(x) {
	return Math.exp(-Math.pow(x, 2));
}

function GaussianDerivative(x) {
	return -2 * x * Math.exp(-Math.pow(x, 2));
}
