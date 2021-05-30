function max(array) {
	let record = 0;
	let arrayLength = array.length;

	for (let i = 0; i < arrayLength; i++) {
		if (array[i] > record) {
			record = array[i];
		}
	}

	return record;
}

module.exports = max;
