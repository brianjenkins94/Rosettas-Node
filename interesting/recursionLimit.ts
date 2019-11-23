function computeMaximumCallStackSize() {
	try {
		return 1 + computeMaximumCallStackSize();
	} catch (error) {
		return 1;
	}
}

console.log("The recursion limit is: " + computeMaximumCallStackSize());
