class HistoryVariable {
	private readonly history = [];

	public constructor(initialValue?) {
		this.history.push(initialValue);
	}

	public setValue(value) {
		this.history.push(value);
	}

	public getValue(index?) {
		if (index !== undefined) {
			if (index < 0) {
				// A negative index starts from the end
				return this.history[(this.history.length - 1) + index];
			} else {
				// A positive index or zero starts from the beginning
				return this.history[index];
			}
		} else {
			// No index returns the current value
			return this.history[this.history.length - 1];
		}
	}

	public getHistory() {
		return this.history;
	}

	public rollback() {
		if (this.history.length > 0) {
			this.history.pop();
		}

		return this;
	}
}

const historyVariable = new HistoryVariable("uno");

historyVariable.setValue("dos");
historyVariable.setValue("tres");
historyVariable.setValue("cuatro");
historyVariable.setValue("cinco");
historyVariable.setValue("cinco");
historyVariable.setValue("seis");

console.log("> Print the history");
console.log(historyVariable.getHistory());

console.log("\n> Print the previous value");
console.log(historyVariable.getValue(-1));

console.log("\n> Rollback twice");
historyVariable.rollback().rollback();

console.log("\n> Set the value to \"seis\"");
historyVariable.setValue("seis");

console.log("\n> Get the value we just added");
console.log(historyVariable.getValue());

console.log("\n> Print the history");
console.log(historyVariable.getHistory());
