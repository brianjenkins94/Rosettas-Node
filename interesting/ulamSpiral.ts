function isPrime(number) {
	if (number === 1) {
		return false;
	}

	for (let x = 2; x < Math.sqrt(number); x++) {
		if (number % x === 0) {
			return false;
		}
	}

	return true;
}

function ulamSpiral(dimension) {
	if (dimension % 2 === 0) {
		throw new Error("`dimension` must be odd.");
	}

	const primes = [];

	for (let x = 1; x <= dimension ** 2; x++) {
		if (isPrime(x)) {
			primes.push("*");
		} else {
			primes.push(" ");
		}
	}

	const spiral = new Array(dimension).fill("").map(() => new Array(dimension).fill(""));

	let direction;
	let x = dimension - 1;
	let y = dimension - 1;

	for (let index = (dimension ** 2) - 1; index >= 0; index--) {
		spiral[x][y] = primes[index];

		switch (direction) {
			case "up":
				if (x === 0 || spiral[x - 1][y] !== "") {
					direction = "right";
					y += 1;
				} else {
					x -= 1;
				}
				break;
			case "down":
				if (x === dimension - 1 || spiral[x + 1][y] !== "") {
					direction = "left";
					y -= 1;
				} else {
					x += 1;
				}
				break;
			default:
			case "left":
				if (y === 0 || spiral[x][y - 1] !== "") {
					direction = "up";
					x -= 1;
				} else {
					y -= 1;
				}
				break;
			case "right":
				if (y === dimension - 1 || spiral[x][y + 1] !== "") {
					direction = "down";
					x += 1;
				} else {
					y += 1;
				}
				break;
		}
	}

	for (const row of spiral) {
		let line = "";

		for (const column of row) {
			line += column;
		}

		console.log(line);
	}
}

ulamSpiral(9);
