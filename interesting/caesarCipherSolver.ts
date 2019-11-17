// [!] This problem has external dependencies on `/usr/share/dict/words` and `./caesarCipher.ts`.
// Windows users will need to bring their own dictionary.

import { createInterface } from "readline";
import * as fs from "fs";
import * as path from "path";

import { secret, ALPHABET_LENGTH, encode, decode } from "./caesarCipher";

function loadDictionary() {
	return new Promise(function(resolve, reject) {
		const inputFileReadStream = createInterface({
			"input": fs.createReadStream(path.join("/", "usr", "share", "dict", "words"))
		});

		const dictionary = [];

		inputFileReadStream.on("line", function(line) {
			dictionary.push(line);
		});

		inputFileReadStream.on("close", function() {
			resolve(dictionary);
		});
	});
}

let dictionary;

function getNumberOfMatches(string, key) {
	let matches = 0;

	for (const word of string.split(" ")) {
		if (dictionary.indexOf(decode(word, key)) !== -1) {
			matches += 1;
		}
	}

	return matches;
}

(async function() {
	dictionary = await loadDictionary();

	const encodedSecret = encode(secret, 10);

	for (let x = 0; x < ALPHABET_LENGTH; x++) {
		const matchCount = getNumberOfMatches(encodedSecret, x);

		if (matchCount !== 0) {
			const encodedWords = encodedSecret.split(" ");
			const decodedWords = decode(encodedSecret, x).split(" ");

			console.log("\n" + (((matchCount / encodedWords.length) * 100) + "% match with a shift of " + x + "."));

			for (let y = 0; y < encodedWords.length; y++) {
				console.log("\t" + encodedWords[y] + " -> " + decodedWords[y]);
			}
		}
	}
})();
