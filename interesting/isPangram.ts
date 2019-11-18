const potentialPangrams = [
	"The quick brown fox jumps over the lazy dog.",
	"Sphinx of black quartz, judge my vow.",
	"How vexingly quick daft zebras jump!",
	"The five boxing wizards jump quickly.",
	"Able was I ere I saw Elba.",
	"A man, a plan, a canal – Panama.",
	"Madam, I'm Adam.",
	"Never odd or even."
];

function isPangram(string) {
	const sanitizedString = string.replace(/\W/g, "").toLowerCase();

	const letters = { "a": false, "b": false, "c": false, "d": false, "e": false, "f": false, "g": false, "h": false, "i": false, "j": false, "k": false, "l": false, "m": false, "n": false, "o": false, "p": false, "q": false, "r": false, "s": false, "t": false, "u": false, "v": false, "w": false, "x": false, "y": false, "z": false };

	for (const character of sanitizedString) {
		letters[character] = true;
	}

	for (const letter of Object.keys(letters)) {
		if (letters[letter] === false) {
			return false;
		}
	}

	return true;
}

for (const potentialPangram of potentialPangrams) {
	if (isPangram(potentialPangram)) {
		console.log("\"" + potentialPangram + "\" is a pangram.");
	} else {
		console.log("\"" + potentialPangram + "\" is NOT a pangram.");
	}
}
