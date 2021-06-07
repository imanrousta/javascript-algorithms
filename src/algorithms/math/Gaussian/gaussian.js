// calculates gaussian for given sigma, mu and number
// sigma is variance 
// mu is mean 


function gaussian(sigma, mu, number) {
	return (
		(1 / (mu * Math.sqrt(2 * Math.PI))) *
		 Math.exp((-1 / 2) * (Math.pow(number - mu, 2) / (sigma * sigma)));
	);
}
