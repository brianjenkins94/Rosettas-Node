import { createInterface } from "readline";
import * as fs from "fs";
import * as path from "path";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

const inputFile = path.resolve(argv._[0]);
const outputFile = path.resolve(argv._[1]);

const inputFileReadStream = createInterface({
	"input": fs.createReadStream(inputFile)
});

const writeStream = fs.createWriteStream(outputFile);

inputFileReadStream.on("line", function readLine(line) {
	if (line.startsWith("@import") === true) {
		inputFileReadStream.pause();

		console.log(line.substring(line.indexOf("\"") + 1, line.lastIndexOf("\"")));

		const readStream = createInterface({
			"input": fs.createReadStream(path.resolve(path.dirname(inputFile), line.substring(line.indexOf("\"") + 1, line.lastIndexOf("\""))))
		});

		readStream.on("line", function(line) {
			readLine(line);
		});

		readStream.on("end", function() {
			inputFileReadStream.resume();
		});
	} else {
		writeStream.write(line + "\n");
	}
});
