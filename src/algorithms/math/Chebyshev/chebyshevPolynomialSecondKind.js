// calculates chebyshev polynomial of the second kind

function chebyshevPolynomialSecondKind(n, x) {
	let chebyshev = [1, 2*x];

	if (n === 0) {
		return 1;
	} else if (n === 1) {
		return 2*x;
	} else {
		for (let i = 2; i <= n; i++) {
			chebyshev[i] = 2 * x * chebyshev[i - 1] - chebyshev[i - 2];
		}

		return chebyshev[n];
	}
}

module.exports = chebyshevPolynomialSecondKind;;
