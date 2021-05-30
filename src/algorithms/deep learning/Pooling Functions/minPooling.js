function min(array) {
	let record = Infinity;
	let arrayLength = array.length;

	for (let i = 0; i < arrayLength; i++) {
		if (array[i] < record) {
			record = array[i];
		}
	}

	return record;
}

module.exports = min;
