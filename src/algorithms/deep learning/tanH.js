function tanH(x) {
	let top = Math.exp(x) - Math.exp(-x);
	let bottom = Math.exp(x) + Math.exp(-x);
	return top / bottom;
}

function tanHDerivative(x) {
	return 1 - Math.exp(tanH(x), 2);
}
