import { createInterface } from "readline";
import * as fs from "fs";
import * as path from "path";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

const inputFile = path.resolve(argv._[0]);
const outputFile = path.resolve(argv._[1]);

const readStream = createInterface({
	"input": fs.createReadStream(inputFile)
});

const writeStream = fs.createWriteStream(outputFile);

readStream.on("line", function readLine(line) {
	if (line.startsWith("@import")) {
		writeStream.write(fs.readFileSync(path.resolve(path.dirname(inputFile), line.substring(line.indexOf("\"") + 1, line.lastIndexOf("\""))), "utf8").trim() + "\n");
	} else {
		writeStream.write(line + "\n");
	}
});

