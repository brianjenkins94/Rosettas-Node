import { Interface } from "readline";
import * as fs from "fs";

import { createReadStream } from "..";

function objectify(array) {
	const object = {};

	for (const element of array) {
		object[element[0]] = element;
	}

	return object;
}

function reorderSections(sections) {
	const lines = sections[0];

	sections = objectify(sections.slice(1));

	for (const section of Object.keys(sections).sort()) {
		lines.push(...sections[section]);
	}

	return lines;
}

export function alphabetize(parentReadStream): Promise<Interface> {
	const sections = [["@invoke alphabetize();"]];

	parentReadStream.on("line", function(line) {
		if (/^##+/.test(line)) {
			sections.push([]);
		}

		sections[sections.length - 1].push(line);
	});

	parentReadStream.resume();

	return new Promise(function(resolve, reject) {
		parentReadStream.on("close", async function() {
			fs.writeFileSync(parentReadStream.input.path, reorderSections(sections).join("\n"));

			const readStream = createReadStream(parentReadStream.input.path);

			let shouldPause = false;

			resolve(await new Promise(function(resolve, reject) {
				readStream.on("line", function(line) {
					if (line === "@invoke alphabetize();") {
						shouldPause = true;
					} else if (shouldPause === true) {
						readStream.pause();

						resolve(readStream);
					}
				});
			}));
		});
	});
}
