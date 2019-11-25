export function improveThisAnswer(line) {
	const [username, repository, problemName] = JSON.parse("[" + line.substring(line.indexOf("(") + 1, line.length - 2) + "]");

	return "<p align=\"right\"><em><sup><a href=\"https://github.com/" + username + "/" + repository + "/issues/new?title=Suggestion for " + problemName + "\">Improve this answer</a></sup></em></p>\n";
}
