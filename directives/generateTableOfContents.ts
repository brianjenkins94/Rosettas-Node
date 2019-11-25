export function generateTableOfContents(readStream) {
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

	return new Promise(function(resolve, reject) {
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

			resolve("<table>\n\t<thead>\n\t\t<tr>\n\t\t\t<th align=\"center\"><strong>Contents</strong></th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<ol>\n" + orderedList + "\t\t\t\t</ol>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>\n");
		});
	});
}
