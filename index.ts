import { createInterface } from "readline";
import * as fs from "fs";
import * as path from "path";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));

const inputFile = path.resolve(argv._[0]);
const outputFile = path.resolve(argv._[1]);

const readStream = createInterface({
	"input": fs.createReadStream(inputFile, { "highWaterMark": 1 })
});

const writeStream = fs.createWriteStream(outputFile);

function discussThisProblem(line) {
	const [username, repository, problemName] = JSON.parse("[" + line.substring(line.indexOf("(") + 1, line.length - 2) + "]");

	writeStream.write("<p align=\"right\"><em><sup><a href=\"https://github.com/" + username + "/" + repository + "/issues/new?title=[Discussion] " + problemName + "\">Discuss this problem</a></sup></em></p>\n");
}

function expandableCodeBlock(cwd, line) {
	const [language, unparsedPath] = JSON.parse("[" + line.substring(line.indexOf("(") + 1, line.length - 2) + "]");

	const parsedPath = path.parse(unparsedPath);
	const pathFragment = parsedPath.dir;
	const fileName = parsedPath.base;
	const filePath = path.join(path.dirname(cwd), pathFragment);

	const readStream = createInterface({
		"input": fs.createReadStream(path.join(filePath, fileName), { "highWaterMark": 1 })
	});

	let lineCount = 0;

	const aboveTheFold = [];
	const belowTheFold = [];

	readStream.on("line", function(line) {
		if (lineCount <= 10) {
			aboveTheFold.push(line);
		} else {
			belowTheFold.push(line);
		}

		lineCount += 1;
	});

	return new Promise(function(resolve, reject) {
		readStream.on("close", function() {
			if (belowTheFold.length === 0) {
				writeStream.write("<table><tbody><tr></tr><tr><td><strong>Solution:" + "&nbsp;".repeat(223) + "</strong>\n\n```" + language + "\n" + aboveTheFold.join("\n") + "\n```\n</td></tr></tbody></table>\n");
			} else {
				writeStream.write("<table><tbody><tr></tr><tr><td><details><summary><strong>Solution:" + "&nbsp;".repeat(218) + "</strong>\n\n```" + language + "\n" + aboveTheFold.join("\n") + "\n```\n</summary>\n\n```" + language + "\n" + belowTheFold.join("\n") + "\n```\n</details></td></tr></tbody></table>\n");
			}

			resolve();
		});
	});
}

function improveThisAnswer(line) {
	const [username, repository, problemName] = JSON.parse("[" + line.substring(line.indexOf("(") + 1, line.length - 2) + "]");

	writeStream.write("<p align=\"right\"><em><sup><a href=\"https://github.com/" + username + "/" + repository + "/issues/new?title=Suggestion for " + problemName + "\">Improve this answer</a></sup></em></p>\n");
}

readStream.on("line", async function readLine(line, parentReadStream = readStream) {
	switch (true) {
		case /^@import ".*";$/.test(line):
			parentReadStream.pause();

			const parsedPath = path.parse(line.substring(line.indexOf("\"") + 1, line.length - 2));
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
			break;
		case /^@insert/.test(line):
			switch (true) {
				case /^@insert toc\(.*\);$/.test(line):
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
							if (index === 0 || tableOfContents[index - 1].depth === depth) {
								orderedList += "\t".repeat(indentationLevel) + "<li><a href=\"#" + id + "\">" + name + "</a></li>\n";
							} else if (tableOfContents[index - 1].depth < depth) {
								orderedList += "\t".repeat(indentationLevel) + "<ol>\n" + "\t".repeat(indentationLevel += 1) + "<li><a href=\"#" + id + "\">" + name + "</a></li>\n";
							} else {
								orderedList += "\t".repeat(indentationLevel) + "<li><a href=\"#" + id + "\">" + name + "</a></li>\n" + "\t".repeat(indentationLevel -= 1) + "</ol>\n";
							}
						}

						writeStream.write("<table>\n\t<thead>\n\t\t<tr>\n\t\t\t<th align=\"center\"><strong>Contents</strong></th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<ol>\n" + orderedList + "\t\t\t\t</ol>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>\n");

						parentReadStream.resume();
					});
					break;
				case /^@insert discussThisProblem\(.*\);$/.test(line):
					discussThisProblem(line);
					break;
				case /^@insert expandableCodeBlock\(.*\);$/.test(line):
					parentReadStream.pause();

					await expandableCodeBlock(parentReadStream.input.path, line);

					parentReadStream.resume();
					break;
				case /^@insert improveThisAnswer\(.*\);$/.test(line):
					improveThisAnswer(line);
					break;
				default:
					throw new Error("Directive `" + line.substring(line.indexOf(" ") + 1, line.indexOf("(")) + "` unrecognized.");
			}
			break;
		case /^@invoke/.test(line):
			switch (true) {
				case /^@invoke alphabetize\(\);$/.test(line):
					console.warn("Not yet implemented.");
					break;
				default:
					throw new Error("Directive `" + line.substring(line.indexOf(" ") + 1, line.indexOf("(")) + "` unrecognized.");
			}
			break;
		default:
			writeStream.write(line + "\n");
	}
});
