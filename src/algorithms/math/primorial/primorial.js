function primorial(n) {
	let primeArray = [];

	for (let i = 2; i <= n; i++) {
		let flag = 0;

		for (let j = 2; j < i; j++) {
			if (i % j == 0) {
				flag = 1;
				break;
			}
		}

		if (i > 1 && flag == 0) {
			primeArray.push(i);
		}
	}

	return primeArray.reduce((a, b) => a * b);
};
