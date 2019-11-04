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

function alignLeft(input) {
	const longestRow = getLongestRow(input);

}

function alignRight(input) {
	const longestRow = getLongestRow(input);

}

function alignCenter(input) {
	const longestRow = getLongestRow(input);

}

console.log("Left:");
console.log(alignLeft(input));

console.log("Right:");
console.log(alignRight(input));

console.log("Center:");
console.log(alignCenter(input));
