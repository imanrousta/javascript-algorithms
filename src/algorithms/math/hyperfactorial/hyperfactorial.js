function hyperfactorial(n) {
	let result = 1;

	if (n === 0 || n === 1) {
		return result;
	} else {
		for (let i = 2; i <= n; i += 1) {
			result *= Math.pow(i,i);
		}

		return result;
	}
};
