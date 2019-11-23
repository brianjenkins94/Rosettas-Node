const TAB_SIZE = 4;

const triangle = [];

for (let x = 0; x < 10; x++) {
	for (let y = 0; y < x + 1; y++) {
		if (y === 0) {
			triangle.push(new Array(x + 1));

			triangle[x][y] = 1;
		} else if (y === (triangle[x].length - 1)) {
			triangle[x][y] = 1;
		} else {
			triangle[x][y] = triangle[x - 1][y - 1] + triangle[x - 1][y];
		}
	}
}

const lastRowLength = triangle[triangle.length - 1].length;

for (let x = 0; x < triangle.length; x++) {
	let row = " ".repeat((lastRowLength - (x + 1)) * (TAB_SIZE / 2));

	for (const element of triangle[x]) {
		row += " ".repeat(TAB_SIZE - element.toString().length) + element;
	}

	console.log(row);
}
