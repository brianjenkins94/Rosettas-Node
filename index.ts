import { createInterface } from "readline";
import * as fs from "fs";
import * as path from "path";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

const inputFile = path.resolve(argv._[0]);
const outputFile = path.resolve(argv._[1]);

const inputFileReadStream = createInterface({
	"input": fs.createReadStream(inputFile, { "highWaterMark": 1 })
});

const writeStream = fs.createWriteStream(outputFile);

inputFileReadStream.on("line", function readLine(line, readStream = inputFileReadStream) {
	if (line.startsWith("@import") === true) {
		readStream.pause();

		const childReadStream = createInterface({
			"input": fs.createReadStream(path.resolve(path.dirname(inputFile), line.substring(line.indexOf("\"") + 1, line.lastIndexOf("\""))), { "highWaterMark": 1 })
		});

		childReadStream.on("line", function(line) {
			readLine(line, childReadStream);
		});

		childReadStream.on("close", function() {
			readStream.resume();
		});
	} else {
		writeStream.write(line + "\n");
	}
});
