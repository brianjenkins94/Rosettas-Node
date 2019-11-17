function computeMaxCallStackSize() {
	try {
		return 1 + computeMaxCallStackSize();
	} catch (error) {
		return 1;
	}
}

console.log("The recursion limit is: " + computeMaxCallStackSize());
