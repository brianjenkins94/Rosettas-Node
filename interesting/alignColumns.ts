const input = [
	["Write", "a", "program,", "that", "aligns", "words", "into", "columns,"],
	["ensuring", "that", "the", "words", "in", "each", "column"],
	["are", "separated", "by", "at", "least", "one", "space."],
	["Further,", "allow", "for", "each", "word", "in", "a", "column"],
	["to", "be", "either", "left", "justified,", "right", "justified,"],
	["or", "center", "justified", "within", "its", "column."]
];

function getLongestRow(input) {
	let longestRow = 0;

	for (const row of input) {
		if (row.length > longestRow) {
			longestRow = row.length;
		}
	}

	return longestRow;
}

function getColumnWidths(input) {
	const longestRow = getLongestRow(input);

	const columnWidths = [];

	for (let x = 0; x < longestRow; x++) {
		let columnWidth = 0;

		for (let y = 0; y < input.length; y++) {
			if ((input[y][x] || "").length > columnWidth) {
				columnWidth = (input[y][x] || "").length;
			}
		}

		columnWidths.push(columnWidth);
	}

	return columnWidths;
}

function align(alignment, input) {
	const columnWidths = getColumnWidths(input);

	let output = "";

	for (let x = 0; x < input.length; x++) {
		for (let y = 0; y < input[x].length; y++) {
			const word = input[x][y] || "";
			let padding;

			switch (alignment) {
				case "left":
					padding = columnWidths[y] - (word.length);

					output += word + " ".repeat(padding + 1);
					break;
				case "right":
					padding = columnWidths[y] - word.length;

					output += " ".repeat(padding) + word + " ";
					break;
				case "center":
					padding = Math.floor(columnWidths[y] - word.length) / 2;

					if (((columnWidths[y] - word.length) / 2) % 1) {
						output += " ".repeat(padding) + word + " ".repeat(padding + 2);
					} else {
						output += " ".repeat(padding) + word + " ".repeat(padding + 1);
					}
					break;
				default:
					throw new Error("Invalid option for `alignment`.");
			}
		}

		output += "\n";
	}

	return output;
}

console.log("Left:");
console.log(align("left", input));

console.log("Right:");
console.log(align("right", input));

console.log("Center:");
console.log(align("center", input));
