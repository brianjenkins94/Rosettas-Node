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

inputFileReadStream.on("line", function readLine(line, parentReadStream = inputFileReadStream) {
	if (/^@import "(.*)";$/.test(line)) {
		parentReadStream.pause();

		const parsedPath = path.parse(line.substring(line.indexOf("\"") + 1, line.lastIndexOf("\"")));
		const pathFragment = parsedPath.dir;
		const fileName = parsedPath.base;
		const filePath = path.join(path.dirname(parentReadStream.input.path), pathFragment);

		const readStream = createInterface({
			"input": fs.createReadStream(path.join(filePath, fileName), { "highWaterMark": 1 })
		});

		readStream.on("line", function(line) {
			readLine(line, readStream);
		});

		readStream.on("close", function() {
			parentReadStream.resume();
		});
	} else if (/^@invoke toc\((.*)\);$/.test(line)) {
		parentReadStream.pause();

		const readStream = createInterface({
			"input": fs.createReadStream(parentReadStream.input.path, { "highWaterMark": 1 })
		});

		const tableOfContents = [];

		readStream.on("line", function(line) {
			if (/^##+/.test(line)) {
				const captureGroups = /^(##+) (.*)$/.exec(line);

				tableOfContents.push({
					"depth": captureGroups[1].length,
					"id": captureGroups[2].toLowerCase().replace(/ /g, "-").replace(/[^\w-]/g, ""),
					"name": captureGroups[2]
				});
			}
		});

		readStream.on("close", function() {
			let orderedList = "";

			let indentationLevel = 5;

			for (const [index, { depth, id, name }] of tableOfContents.entries()) {
				if (index === 0 || depth === tableOfContents[index - 1].depth) {
					orderedList += "\t".repeat(indentationLevel) + "<li><a href=\"#" + id + "\">" + name + "</a></li>\n";
				} else if (depth > tableOfContents[index - 1].depth) {
					orderedList += "\t".repeat(indentationLevel) + "<ol>\n" + "\t".repeat(indentationLevel += 1) + "<li><a href=\"#" + id + "\">" + name + "</a></li>\n";
				} else {
					orderedList += "\t".repeat(indentationLevel) + "<li><a href=\"#" + id + "\">" + name + "</a></li>\n" + "\t".repeat(indentationLevel -= 1) + "</ol>\n";
				}
			}

			writeStream.write("<table>\n\t<thead>\n\t\t<tr>\n\t\t\t<th align=\"center\"><strong>Contents</strong></th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<ol>\n" + orderedList + "\t\t\t\t</ol>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>\n");

			parentReadStream.resume();
		});
	} else {
		writeStream.write(line + "\n");
	}
});
