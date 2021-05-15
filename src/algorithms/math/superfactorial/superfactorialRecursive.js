const factorial = require('../factorial/factorial');

function superfactorialRecursive(n) {
	return n > 1 ? factorial(n) * superfactorialRecursive(n - 1) : 1;
};
