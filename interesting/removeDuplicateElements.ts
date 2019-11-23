function removeDuplicates(array) {
	return [...new Set(array)];
}

console.log(removeDuplicates([1, 2, 3, 4, 1, 2, 3, 4]));
