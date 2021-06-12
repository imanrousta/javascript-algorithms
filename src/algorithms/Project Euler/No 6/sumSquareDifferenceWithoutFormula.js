function sumSquareDifference(number) {
	let sumOfNumbers = 0; 
	let sumOfSquares = 0 ; 

	for (let i =1; i <= number; i++) {
		sumOfSquares += i**2;
		sumOfNumbers += i;
	}

	return (sumOfNumbers**2) - sumOfSquares;
}

console.log(sumSquareDifference(100));