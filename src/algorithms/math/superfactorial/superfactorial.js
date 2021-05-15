const factorial = require('../factorial/factorial');

function superfactorial(n) {
	let result = 1;

	if (n === 0 || n === 1) {
		return result;
	} else {
		for (let i = 2; i <= n; i += 1) {
			result *= factorial(i);
		}

		return result;
	}
};
