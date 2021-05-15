function hyperfactorialRecursive(n) {
	return n > 1 ? Math.pow(n,n) * hyperfactorialRecursive(n - 1) : 1;
};
