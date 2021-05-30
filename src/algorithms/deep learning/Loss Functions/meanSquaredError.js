function mse(prediction, target) {
	let sum = 0;
	let ans = 0;
	let targetLength = target.length;

	for (let i = 0; i < targetLength; i++) {
		let y = target[i];
		let yHat = prediction[i];
		sum += Math.pow(y - yHat,2);
	}

	ans = sum / targetLength;
	return ans;
}
