export function discussThisProblem(line) {
	const [username, repository, problemName] = JSON.parse("[" + line.substring(line.indexOf("(") + 1, line.length - 2) + "]");

	return "<p align=\"right\"><em><sup><a href=\"https://github.com/" + username + "/" + repository + "/issues/new?title=[Discussion] " + problemName + "\">Discuss this problem</a></sup></em></p>\n";
}
