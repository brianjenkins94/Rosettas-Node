export function expandableCodeBlock(language, readStream) {
	let lineCount = 0;

	const aboveTheFold = [];
	const belowTheFold = [];

	readStream.on("line", function(line) {
		if (lineCount < 12) {
			aboveTheFold.push(line);
		} else {
			belowTheFold.push(line);
		}

		lineCount += 1;
	});

	return new Promise(function(resolve, reject) {
		readStream.on("close", function() {
			// 2016 13" MacBook Pro (2560x1600)
			//  - Static: 223
			//  - Expandable: 218
			//
			// Windows Desktop (1920x1080, 2560x1440)
			//  - Static: 179
			//  - Expandable: 175

			if (belowTheFold.length === 0) {
				resolve("<table><tbody><tr></tr><tr><td><strong>Solution:" + "&nbsp;".repeat(223) + "</strong>\n\n```" + language + "\n" + aboveTheFold.join("\n") + "\n```\n</td></tr></tbody></table>\n");
			} else {
				resolve("<table><tbody><tr></tr><tr><td><details><summary><strong>Solution:" + "&nbsp;".repeat(218) + "</strong>\n\n```" + language + "\n" + aboveTheFold.join("\n") + "\n```\n</summary>\n\n```" + language + "\n" + belowTheFold.join("\n") + "\n```\n</details></td></tr></tbody></table>\n");
			}
		});
	});
}
