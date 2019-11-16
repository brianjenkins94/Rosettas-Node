const input = [
	"Given a multiline input string, where the words within a line".split(" "),
	"are delineated by a single space character, write a program".split(" "),
	"that aligns each column of words by ensuring that the words in".split(" "),
	"each column are separated by at least one space.".split(" "),
	"Further, allow for each word in a column to be either left".split(" "),
	"justified, right justified, or center justified within its column.".split(" ")
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

function alignLeft(input) {
	const columnWidths = getColumnWidths(input);

	let output = "";

	for (let x = 0; x < input.length; x++) {
		for (let y = 0; y < input[x].length; y++) {
			const word = input[x][y] || "";
			const padding = columnWidths[y] - (word.length);

			output += word + " ".repeat(padding + 1);
		}

		output += "\n";
	}

	return output;
}

function alignRight(input) {
	const columnWidths = getColumnWidths(input);

	let output = "";

	for (let x = 0; x < input.length; x++) {
		for (let y = 0; y < input[x].length; y++) {
			const word = input[x][y] || "";
			const padding = columnWidths[y] - word.length;

			output += " ".repeat(padding) + word + " ";
		}

		output += "\n";
	}

	return output;
}

function alignCenter(input) {
	const columnWidths = getColumnWidths(input);

	let output = "";

	for (let x = 0; x < input.length; x++) {
		for (let y = 0; y < input[x].length; y++) {
			const word = input[x][y] || "";
			const padding = Math.floor(columnWidths[y] - word.length) / 2;

			if (((columnWidths[y] - word.length) / 2) % 1) {
				output += " ".repeat(padding) + word + " ".repeat(padding + 2);
			} else {
				output += " ".repeat(padding) + word + " ".repeat(padding + 1);
			}
		}

		output += "\n";
	}

	return output;
}

console.log("Left:");
console.log(alignLeft(input));

console.log("Right:");
console.log(alignRight(input));

console.log("Center:");
console.log(alignCenter(input));
