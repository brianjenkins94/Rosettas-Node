function fibonacci(n) {
	const array = [0, 1];

	for (let x = 2; x <= n; x++) {
		array.push(array[x - 2] + array[x - 1]);
	}

	return array[n];
}

console.log(fibonacci(10));
