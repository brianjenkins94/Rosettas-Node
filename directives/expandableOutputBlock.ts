export function expandableOutputBlock(readStream) {
	let lineCount = 0;

	const aboveTheFold = [];
	const belowTheFold = [];

	readStream.on("line", function(line) {
		if (lineCount < 12) {
			aboveTheFold.push(line);
		} else if (lineCount < 100) {
			belowTheFold.push(line);
		} else {
			readStream.close();
		}

		lineCount += 1;
	});

	return new Promise(function(resolve, reject) {
		readStream.on("close", function() {
			// 2016 13" MacBook Pro (2560x1600)
			//  - Static: 209
			//  - Expandable: 204
			//
			// Windows Desktop (1920x1080, 2560x1440)
			//  - Static: 168
			//  - Expandable: 164

			if (belowTheFold.length === 0) {
				resolve("<table><tbody><tr></tr><tr><td><strong>Sample Output:" + "&nbsp;".repeat(209) + "</strong>\n\n```\n" + aboveTheFold.join("\n") + "\n```\n</td></tr></tbody></table>\n");
			} else {
				resolve("<table><tbody><tr></tr><tr><td><details><summary><strong>Sample Output:" + "&nbsp;".repeat(204) + "</strong>\n\n```\n" + aboveTheFold.join("\n") + "\n```\n</summary>\n\n```\n" + belowTheFold.join("\n") + "\n```\n</details></td></tr></tbody></table>\n");
			}

			resolve();
		});
	});
}
