export const secret = "The secret lies with Charlotte.";

const ASCII_UPPERCASE_A = 65;
const ASCII_LOWERCASE_A = 97;
export const ALPHABET_LENGTH = 26;

export function encode(string, key) {
	return string.replace(/\w/g, function(a) {
		if (a.charCodeAt(0) < ASCII_LOWERCASE_A) {
			return String.fromCharCode(ASCII_UPPERCASE_A + ((a.charCodeAt(0) - ASCII_UPPERCASE_A + key) % ALPHABET_LENGTH));
		} else {
			return String.fromCharCode(ASCII_LOWERCASE_A + ((a.charCodeAt(0) - ASCII_LOWERCASE_A + key) % ALPHABET_LENGTH));
		}
	});
}

export function decode(string, key) {
	return encode(string, ALPHABET_LENGTH - key);
}

console.log("Encoded:");
console.log(encode(secret, 10));
console.log("Decoded:");
console.log(decode(encode(secret, 10), 10));
