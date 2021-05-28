function SiLU(x) {
	return x / (1 + Math.exp(-x));
}

function SiLUDerivative(x) {
	let top = 1 + Math.exp(-x) + x * Math.exp(-x);
	let bottom = Math.pow(1 + Math.exp(-x), 2);
	return top / bottom;
}
