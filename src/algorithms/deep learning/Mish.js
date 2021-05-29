function Mish(x) {
	return x * Math.tanh(Math.log(1 + Math.exp(x)));
}

function MishDerivative(x) {
	let top =
		Math.exp(x) *
		(4 * Math.exp(2 * x) +
			Math.exp(3 * x) +
			4(1 + x) +
			Math.exp(x) * (6 + 4 * x));
	let bottom = Math.pow(2 + 2 * Math.exp(x) + Math.exp(2 * x));

	return top / bottom;
}
