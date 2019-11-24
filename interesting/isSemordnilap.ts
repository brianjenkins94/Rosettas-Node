// [!] This problem has an external dependency on `/usr/share/dict/words`.
// Windows users will need to bring their own dictionary.

import { createInterface } from "readline";
import * as fs from "fs";
import * as path from "path";

const readStream = createInterface({
	"input": fs.createReadStream(path.join("/", "usr", "share", "dict", "words"))
});

readStream.on("line", function(word) {
	const lowercaseWord = word.toLowerCase();

	if (lowercaseWord !== lowercaseWord.split("").reverse().join("")) {
		return;
	}

	console.log(word);
});
