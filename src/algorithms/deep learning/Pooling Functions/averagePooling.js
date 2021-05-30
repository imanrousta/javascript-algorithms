function average(array) {
	let sum = 0;
	let arrayLength = array.length;

	for (let i = 0; i < arrayLength; i++) {
		sum += array[i];
	}

	return sum / arrayLength;
}

module.exports = average;
