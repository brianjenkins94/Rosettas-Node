const input = [
	"[[]][[]]]]",
	"][]][[][][",
	"[][]]][[[]",
	"][][[[][[]",
	"[[[][]]][]",
	"][][]][[[[",
	"][][[[[]][",
	"][[][]][[]",
	"[[]][[]][]",
	"[][]]][]]]"
];

function isBalanced(input) {
	let leftStack = 0;
	let rightStack = 0;

	for (const [index, character] of Object.entries(input)) {
		if (character === "[") {
			leftStack += 1;
		} else if (leftStack > rightStack) {
			rightStack += 1;
		} else {
			return parseInt(index, 10);
		}
	}

	return true;
}

for (const string of input) {
	const balanced = isBalanced(string);

	if (balanced === true) {
		console.log(string + " is balanced.");
		console.log();
	} else {
		console.log(string + " is NOT balanced.");
		console.log(" ".repeat(balanced) + "^");
	}
}
