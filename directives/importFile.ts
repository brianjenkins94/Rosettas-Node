import { readLine } from "..";

export function importFile(readStream) {
	readStream.on("line", function(line) {
		readLine(line, readStream);
	});

	return new Promise(function(resolve, reject) {
		readStream.on("close", function() {
			resolve();
		});
	});
}
