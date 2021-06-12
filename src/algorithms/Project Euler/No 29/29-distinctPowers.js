let upperLimit = 10;
let lowerLimit = 2;

numberOfPowers = Math.pow(upperLimit - lowerLimit + 1, 2);
console.log(`Powers: ${numberOfPowers}`);

let powers = [];

for (i = lowerLimit; i < upperLimit + 1; i++) {
	for (j = lowerLimit; j < upperLimit + 1; j++) {
		powers.push(Math.pow(i, j));
	}
}

let distinctPowers = [...new Set(powers)];

let numOfDistinctPowers = distinctPowers.length;
console.log(`Distinct Powers: ${numOfDistinctPowers}`);
