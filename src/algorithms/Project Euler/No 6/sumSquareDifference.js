function sumSquareDifference(number) {
	let sumOfNumbers = (number * (number + 1)) / 2;
	let sumOfSquares = (number * (number + 1) * (2 * number + 1)) / 6;

	let sumSquareDifference = (Math.pow(sumOfNumbers,2)) - sumOfSquares;

	return sumSquareDifference;
}

console.log(sumSquareDifference(100));
