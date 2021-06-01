function bce(prediction, target) {
	let sum = 0;
	let ans = 0;
	let targetLength = target.length;

	for (let i = 0; i < targetLength; i++) {
		let y = target[i];
		let yHat = prediction[i];
		sum += y * Math.log(yHat) + (1 - y) * Math.log(1 - yHat);
	}

	ans = -sum / targetLength;
	return ans;
}
