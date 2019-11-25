export function expandableOutputBlock(readStream) {
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
				resolve("<table><tbody><tr></tr><tr><td><strong>Sample Output:" + "&nbsp;".repeat(209) + "</strong>\n\n```\n" + aboveTheFold.join("\n") + "\n```\n</td></tr></tbody></table>\n");
			} else {
				if (aboveTheFold[aboveTheFold.length - 1] === "") {
					aboveTheFold.pop();
				}

				resolve("<table><tbody><tr></tr><tr><td><details><summary><strong>Sample Output:" + "&nbsp;".repeat(204) + "</strong>\n\n```\n" + aboveTheFold.join("\n") + "\n```\n</summary>\n\n```\n" + belowTheFold.join("\n") + "\n```\n</details></td></tr></tbody></table>\n");
			}

			resolve();
		});
	});
}
