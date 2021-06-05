// calculates chebyshev polynomial of first kind

function chebyshevPolynomial(n, x) {
	let chebyshev = [1, x];

	if (n === 0) {
		return 1;
	} else if (n === 1) {
		return x;
	} else {
		for (let i = 2; i <= n; i++) {
			chebyshev[i] = 2 * x * chebyshev[i - 1] - chebyshev[i - 2];
		}

		return chebyshev[n];
	}
}

module.exports = chebyshevPolynomial;
