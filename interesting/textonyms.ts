// [!] This problem has an external dependency on `/usr/share/dict/words`.
// Windows users will need to bring their own dictionary.

import { createInterface } from "readline";
import * as fs from "fs";
import * as path from "path";

const inputFileReadStream = createInterface({
	"input": fs.createReadStream(path.join("/", "usr", "share", "dict", "words"))
});

const textonyms = {};

const keypad = {
	"a": 2, "b": 2, "c": 2,
	"d": 3, "e": 3, "f": 3,
	"g": 4, "h": 4, "i": 4,
	"j": 5, "k": 5, "l": 5,
	"m": 6, "n": 6, "o": 6,
	"p": 7, "q": 7, "r": 7, "s": 7,
	"t": 8, "u": 8, "v": 8,
	"w": 9, "x": 9, "y": 9, "z": 9
};

inputFileReadStream.on("line", function(word) {
	const lowercaseWord = word.toLowerCase();

	let key = ""

	for (const letter of lowercaseWord) {
		key += keypad[letter];
	}

	if (textonyms[key] !== undefined) {
		textonyms[key].push(word);
	} else {
		textonyms[key] = [word];
	}
});

inputFileReadStream.on("close", function() {
	for (const [key, value] of Object.entries(textonyms)) {
		if ((value as string[]).length > 1) {
			console.log(key + " spells the words: " + (value as string[]).join(", "))
		}
	}
});
