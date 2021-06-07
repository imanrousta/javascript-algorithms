function pascalTriangle(lineNummber) {
	if (lineNummber === 0) {
		return [1];
	}

	const currentLineSize = lineNummber + 1;
	const previousLineSize = currentLineSize - 1;

	const currentLine = [];

	const previousLine = pascalTriangle(lineNummber - 1);

	for (let numberIndex = 0; numberIndex < currentLineSize; numberIndex += 1) {
		const leftCoefficient =
			numberIndex - 1 >= 0 ? previousLine[numberIndex - 1] : 0;
		const rightCoefficient =
			numberIndex < previousLineSize ? previousLine[numberIndex] : 0;

		currentLine[numberIndex] = leftCoefficient + rightCoefficient;	
	}

	return currentLine;
}

module.exports = pascalTriangle;
