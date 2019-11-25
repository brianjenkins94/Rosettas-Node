import { createInterface, Interface } from "readline";
import * as fs from "fs";
import * as path from "path";
import minimist from "minimist";

import { alphabetize, discussThisProblem, expandableCodeBlock, expandableOutputBlock, generateTableOfContents, importFile, improveThisAnswer } from "./directives";

// Monkey-patch `readline.d.ts`
declare module "readline" {
	interface Interface {
		input: fs.ReadStream;
	}
}

const argv = minimist(process.argv.slice(2));

const inputFile = path.resolve(argv._[0]);
const outputFile = path.resolve(argv._[1]);

export function createReadStream(unparsedPath, cwd?) {
	const parsedPath = path.parse(unparsedPath);
	const pathFragment = parsedPath.dir;
	const fileName = parsedPath.base;
	const filePath = cwd === undefined ? pathFragment : path.join(path.dirname(cwd), pathFragment);

	return createInterface({
		"input": fs.createReadStream(path.join(filePath, fileName), { "highWaterMark": 1 })
	});
}

const readStream = createReadStream(inputFile);

const writeStream = fs.createWriteStream(outputFile);

export async function readLine(line, parentReadStream = readStream) {
	parentReadStream.pause();

	switch (true) {
		case /^@import ".*";$/.test(line): {
			await importFile(createReadStream(line.substring(line.indexOf("\"") + 1, line.length - 2), parentReadStream.input.path));
			break;
		}
		case /^@insert/.test(line):
			switch (true) {
				case /^@insert toc\(.*\);$/.test(line): {
					writeStream.write(await generateTableOfContents(createReadStream(parentReadStream.input.path)));
					break;
				}
				case /^@insert discussThisProblem\(.*\);$/.test(line): {
					writeStream.write(discussThisProblem(line));
					break;
				}
				case /^@insert expandableCodeBlock\(.*\);$/.test(line): {
					const [language, unparsedPath] = JSON.parse("[" + line.substring(line.indexOf("(") + 1, line.length - 2) + "]");

					writeStream.write(await expandableCodeBlock(language, createReadStream(unparsedPath, parentReadStream.input.path)));
					break;
				}
				case /^@insert expandableOutputBlock\(.*\);$/.test(line): {
					const [unparsedPath] = JSON.parse("[" + line.substring(line.indexOf("(") + 1, line.length - 2) + "]");

					writeStream.write(await expandableOutputBlock(createReadStream(unparsedPath, parentReadStream.input.path)));
					break;
				}
				case /^@insert improveThisAnswer\(.*\);$/.test(line): {
					writeStream.write(improveThisAnswer(line));
					break;
				}
				default: {
					throw new Error("Directive `" + line.substring(line.indexOf(" ") + 1, line.indexOf("(")) + "` unrecognized.");
				}
			}
			break;
		case /^@invoke/.test(line): {
			switch (true) {
				case /^@invoke alphabetize\(\);$/.test(line): {
					parentReadStream = await alphabetize(parentReadStream);
					break;
				}
				default: {
					throw new Error("Directive `" + line.substring(line.indexOf(" ") + 1, line.indexOf("(")) + "` unrecognized.");
				}
			}
			break;
		}
		default: {
			writeStream.write(line + "\n");
		}
	}

	parentReadStream.resume();
}

readStream.on("line", readLine);
