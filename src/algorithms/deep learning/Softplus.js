function Softplus(x) {
	return Math.log(1 + Math.exp(x));
}

function SoftplusDerivative(x) {
	return 1/(1+Math.exp(-x));
}


