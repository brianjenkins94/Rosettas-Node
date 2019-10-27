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

inputFileReadStream.on("line", function readLine(line, parentReadStream = inputFileReadStream, cwd = path.dirname(inputFile)) {
	if (line.startsWith("@import") === true) {
		parentReadStream.pause();

		const parsedPath = path.parse(line.substring(line.indexOf("\"") + 1, line.lastIndexOf("\"")));
		const pathFragment = parsedPath.dir;
		const fileName = parsedPath.base;
		const filePath = path.join(cwd, pathFragment);

		const readStream = createInterface({
			"input": fs.createReadStream(path.join(filePath, fileName), { "highWaterMark": 1 })
		});

		readStream.on("line", function(line) {
			readLine(line, readStream, filePath);
		});

		readStream.on("close", function() {
			parentReadStream.resume();
		});
	} else {
		writeStream.write(line + "\n");
	}
});
