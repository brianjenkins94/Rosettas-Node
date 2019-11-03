const arrays = [
	["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
	["dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
	["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"],
	["duminica", "luni", "marti", "miercuri", "joi", "vineri", "sambata"]
];

function getMinimumLengthUniqueAbbreviations(array) {
	const longestStringLength = array.sort(function(a, b) { return b.length - a.length; })[0].length;

	for (let x = longestStringLength; x >= 1; x--) {
		let tempObject = {};

		for (let string of array) {
			tempObject[string.substring(0, x)] = undefined;
		}

		if (Object.keys(tempObject).length === array.length) {
			array = Object.keys(tempObject);
		}
	}

	return array;
}

for (const array of arrays) {
	console.log("[\"" + array.join("\", \"") + "\"] can be abbreviated to [\"" + getMinimumLengthUniqueAbbreviations(array).join("\", \"") + "\"]");
}
