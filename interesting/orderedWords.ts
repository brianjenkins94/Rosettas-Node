// [!] This problem has external dependencies on `/usr/share/dict/words`.
// Windows users will need to bring their own dictionary.

import { createInterface } from "readline";
import * as fs from "fs";
import * as path from "path";

const inputFileReadStream = createInterface({
    "input": fs.createReadStream(path.join("/", "usr", "share", "dict", "words"))
});

inputFileReadStream.on("line", function(word) {
    const lowercaseWord = word.toLowerCase();

    for (let x = 1; x < lowercaseWord.length; x++) {
        if (lowercaseWord.charCodeAt(x - 1) >= lowercaseWord.charCodeAt(x)) {
            return;
        }
    }

    console.log(word);
});
