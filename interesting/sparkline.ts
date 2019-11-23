const input = [
	[1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1],
	[1.5, 0.5, 3.5, 2.5, 5.5, 4.5, 7.5, 6.5]
];

const barCharacters = "▁▂▃▄▅▆▇█";

function sparkline(dataset) {
	let line = "";

	const min = Math.min(...dataset);
	const max = Math.max(...dataset);
	const range = max - min;

	for (const datum of dataset) {
		line += barCharacters.charAt(Math.ceil((datum - min) / range * (barCharacters.length - 1)));
	}

	return line;
}

for (const dataset of input) {
	console.log("Input: " + dataset.join(", "));

	console.log(sparkline(dataset) + "\n");
}
