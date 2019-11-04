<img height="128px" width="128px" align="right" />

# Rosetta's Node

> Interesting problems. Quickly described.

<table>
	<thead>
		<tr>
			<th align="center"><strong>Contents</strong></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<ol>
					<li><a href="#obligatory">Obligatory</a></li>
					<li><a href="#interesting">Interesting</a></li>
					<li><a href="#involved">Involved</a></li>
					<li><a href="#acknowledgements">Acknowledgements</a></li>
					<li><a href="#license">License</a></li>
				</ol>
			</td>
		</tr>
	</tbody>
</table>

<hr>

### Obligatory

These are the problems that have been "done to death". Anything that was once interesting about these problems has since been squashed by their repetition. With that said, this collection wouldn't be complete without them.

<table>
	<thead>
		<tr>
			<th align="center"><strong>Contents</strong></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<ol>
					<li><a href="#fizzbuzz">FizzBuzz</a></li>
					<li><a href="#fibonacci-iterative">Fibonacci (Iterative)</a></li>
					<li><a href="#fibonacci-recursive">Fibonacci (Recursive)</a></li>
					<li><a href="#palindrome-checker">Palindrome Checker</a></li>
					<li><a href="#leap-year-checker">Leap Year Checker</a></li>
				</ol>
			</td>
		</tr>
	</tbody>
</table>

#### FizzBuzz

-   Print the integers from 1 to 100 (inclusive), but:
    -   for multiples of three, print `"Fizz"` (instead of the number)
    -   for multiples of five, print `"Buzz"` (instead of the number)
    -   for multiples of both three and five, print `"FizzBuzz"` (instead of the number)

**Solution:**

```typescript
for (let i = 1; i <= 100; i++) {
	if (i % 15 === 0) {
		console.log("FizzBuzz");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}
```

**Sample Output:**

```
1⏎ 2⏎ Fizz⏎ 4⏎ Buzz⏎ Fizz⏎ 7⏎ 8⏎ Fizz⏎ Buzz⏎ 11⏎ Fizz⏎ 13⏎ 14⏎ FizzBuzz⏎ 16⏎ 17⏎ Fizz⏎ 19⏎ Buzz⏎ Fizz⏎ 22⏎ 23⏎ Fizz⏎ Buzz⏎ 26⏎ Fizz⏎ 28⏎ 29⏎ FizzBuzz⏎ 31⏎ 32⏎ Fizz⏎ 34⏎ Buzz⏎ Fizz⏎ 37⏎ 38⏎ Fizz⏎ Buzz⏎ 41⏎ Fizz⏎ 43⏎ 44⏎ FizzBuzz⏎ 46⏎ 47⏎ Fizz⏎ 49⏎ Buzz⏎ Fizz⏎ 52⏎ 53⏎ Fizz⏎ Buzz⏎ 56⏎ Fizz⏎ 58⏎ 59⏎ FizzBuzz⏎ 61⏎ 62⏎ Fizz⏎ 64⏎ Buzz⏎ Fizz⏎ 67⏎ 68⏎ Fizz⏎ Buzz⏎ 71⏎ Fizz⏎ 73⏎ 74⏎ FizzBuzz⏎ 76⏎ 77⏎ Fizz⏎ 79⏎ Buzz⏎ Fizz⏎ 82⏎ 83⏎ Fizz⏎ Buzz⏎ 86⏎ Fizz⏎ 88⏎ 89⏎ FizzBuzz⏎ 91⏎ 92⏎ Fizz⏎ 94⏎ Buzz⏎ Fizz⏎ 97⏎ 98⏎ Fizz⏎ Buzz
```

**References:**

-   <http://rosettacode.org/wiki/FizzBuzz>
-   <https://en.wikipedia.org/wiki/Fizz_buzz>

#

#### Fibonacci (Iterative)

-   Print out the `n`th number of the Fibonacci sequence.
    -   The Fibonacci sequence is the sequence of numbers where each element is the sum of the two previous elements.

**Solution:**

```typescript
function fibonacci(n) {
	const array = [0, 1];

	for (let i = 2; i <= n; i++) {
		array.push(array[i - 2] + array[i - 1]);
	}

	return array[n];
}

console.log(fibonacci(10));
```

**Sample Output:**

```
55
```

**References:**

-   <http://rosettacode.org/wiki/Fibonacci_sequence>
-   <https://en.wikipedia.org/wiki/Fibonacci_number>

#

#### Fibonacci (Recursive)

-   Print out the `n`th number of the [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_number).
    -   The Fibonacci sequence is the sequence of numbers where each element is the sum of the two previous elements.

**Solution:**

```typescript
function fibonacci(n) {
	if (n < 2) {
		return n;
	}

	return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));
```

**Sample Output:**

```
55
```

**References:**

-   <http://rosettacode.org/wiki/Fibonacci_sequence>
-   <https://en.wikipedia.org/wiki/Fibonacci_number>

#

#### Palindrome Checker

-   Write a function that checks whether a given string is a [palindrome](https://en.wikipedia.org/wiki/Palindrome).
    -   A palindrome is a word or phrase which reads the same backward and forward.

**Solution:**

```typescript
const potentialPalindromes = [
	"Able was I ere I saw Elba.",
	"A man, a plan, a canal – Panama.",
	"Madam, I'm Adam.",
	"Never odd or even.",
	"The quick brown fox jumps over the lazy dog.",
	"Sphinx of black quartz, judge my vow.",
	"How vexingly quick daft zebras jump!",
	"The five boxing wizards jump quickly."
];

function isPalindrome(string) {
	const normalizedString = string.replace(/\W/g, "").toLowerCase();

	return normalizedString === normalizedString.split("").reverse().join("");
}

for (const potentialPalindrome of potentialPalindromes) {
	if (isPalindrome(potentialPalindrome)) {
		console.log("\"" + potentialPalindrome + "\" is a palindrome.");
	} else {
		console.log("\"" + potentialPalindrome + "\" is NOT a palindrome.");
	}
}
```

**Sample Output:**

```
"Able was I ere I saw Elba." is a palindrome.
"A man, a plan, a canal – Panama." is a palindrome.
"Madam, I'm Adam." is a palindrome.
"Never odd or even." is a palindrome.
"The quick brown fox jumps over the lazy dog." is NOT a palindrome.
"Sphinx of black quartz, judge my vow." is NOT a palindrome.
"How vexingly quick daft zebras jump!" is NOT a palindrome.
"The five boxing wizards jump quickly." is NOT a palindrome.
```

**References:**

-   http://rosettacode.org/wiki/Palindrome
-   https://en.wikipedia.org/wiki/Palindrome

#

#### Leap Year Checker

-   Write a function that checks whether a given year is a [leap year](https://en.wikipedia.org/wiki/Leap_year).
    -   A leap year is a year divisible by 4 but not 100 and is not divisible by 400.

**Solution:**

```typescript
function isLeapYear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
};

for (let x = 2010; x <= 2020; x++) {
    if (isLeapYear(x)) {
        console.log(x + " is a leap year.");
    } else {
        console.log(x + " is NOT a leap year.");
    }
}
```

**Sample Output:**

```
2010 is NOT a leap year.
2011 is NOT a leap year.
2012 is a leap year.
2013 is NOT a leap year.
2014 is NOT a leap year.
2015 is NOT a leap year.
2016 is a leap year.
2017 is NOT a leap year.
2018 is NOT a leap year.
2019 is NOT a leap year.
2020 is a leap year.
```

**References:**

-   http://rosettacode.org/wiki/Leap_year
-   https://en.wikipedia.org/wiki/Leap_year

<hr>

### Interesting

<table>
	<thead>
		<tr>
			<th align="center"><strong>Contents</strong></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<ol>
					<li><a href="#abbreviations">Abbreviations</a></li>
					<li><a href="#letter-blocks">Letter Blocks</a></li>
					<li><a href="#align-columns">Align Columns</a></li>
					<li><a href="#almost-prime">Almost Prime</a></li>
					<li><a href="#balanced-brackets">Balanced Brackets</a></li>
					<li><a href="#caesar-cipher">Caesar Cipher</a></li>
					<li><a href="#calendar">Calendar</a></li>
					<li><a href="#catalan-numbers">Catalan Numbers</a></li>
					<li><a href="#chaocipher">Chaocipher</a></li>
					<li><a href="#recursion-limit">Recursion Limit</a></li>
					<li><a href="#history-variables">History Variables</a></li>
					<li><a href="#last-letter-first-letter">Last Letter-First Letter</a></li>
					<li><a href="#linear-congruential-generator">Linear Congruential Generator</a></li>
					<li><a href="#ordered-words">Ordered Words</a></li>
					<li><a href="#pangram-checker">Pangram Checker</a></li>
					<li><a href="#pascals-triangle">Pascal's Triangle</a></li>
					<li><a href="#pascals-triangle-puzzle">Pascal's Triangle Puzzle</a></li>
					<li><a href="#international-bank-account-number-iban-validator">International Bank Account Number (IBAN) Validator</a></li>
					<li><a href="#luhn-algorithm">Luhn Algorithm</a></li>
					<li><a href="#maximum-triangle-path-sum">Maximum Triangle Path Sum</a></li>
				</ol>
			</td>
		</tr>
	</tbody>
</table>

#### Abbreviations

-   Write a function to find the minimum, _fixed-length_ abbreviation for an array that would preserve each element's uniqueness.

**Solution:**

```typescript
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
```

**Sample Output:**

```
["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] can be abbreviated to ["We", "Th", "Sa", "Tu", "Su", "Mo", "Fr"]
["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"] can be abbreviated to ["Mi", "Do", "Vi", "Ma", "Ju", "Sá", "Lu"]
["dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"] can be abbreviated to ["di", "Me", "Ve", "Sa", "Lu", "Ma", "Je"]
["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"] can be abbreviated to ["me", "do", "ma", "gi", "ve", "lu", "sa"]
["duminica", "luni", "marti", "miercuri", "joi", "vineri", "sambata"] can be abbreviated to ["du", "mi", "sa", "vi", "ma", "lu", "jo"]
```

**Variants:**

-   Produce an array of minimal-length strings instead of fixed-length strings.

**References:**

-   <http://rosettacode.org/wiki/Abbreviations,_automatic>

#

#### Letter Blocks

-   Write a function that determines whether a word can be spelled with a given collection of blocks.
-   Blocks are guaranteed to have the same letter pairs on them.

**Solution:**

```typescript
const blocks = [
	["B", "O"],
	["X", "K"],
	["D", "Q"],
	["C", "P"],
	["N", "A"],
	["G", "T"],
	["R", "E"],
	["T", "G"],
	["Q", "D"],
	["F", "S"],
	["J", "W"],
	["H", "U"],
	["V", "I"],
	["A", "N"],
	["O", "B"],
	["E", "R"],
	["F", "S"],
	["L", "Y"],
	["P", "C"],
	["Z", "M"]
];

const words = [
	"A",
	"BARK",
	"BOOK",
	"TREAT",
	"COMMON",
	"SQUAD",
	"CONFUSE"
];

function isWordSpellableWithBlocks(word, blocks) {
	for (const letter of word) {
		let letterFound = false;

		for (const [index, block] of blocks.entries()) {
			if (block[0] === letter || block[1] === letter) {
				blocks[index] = ["", ""];
				letterFound = true;
				break;
			}
		}

		if (letterFound === false) {
			return false;
		}
	}

	return true;
}

for (const word of words) {
	if (isWordSpellableWithBlocks(word, [...blocks])) {
		console.log("The word \"" + word + "\" can be spelled with these blocks.");
	} else {
		console.log("The word \"" + word + "\" can NOT be spelled with these blocks.");
	}
}
```

**Sample Output:**

```
The word "A" can be spelled with these blocks.
The word "BARK" can be spelled with these blocks.
The word "BOOK" can NOT be spelled with these blocks.
The word "TREAT" can be spelled with these blocks.
The word "COMMON" can NOT be spelled with these blocks.
The word "SQUAD" can be spelled with these blocks.
The word "CONFUSE" can be spelled with these blocks.
```

**Variants:**

-   Blocks are not guaranteed to have the same letter pairs on them.

**References:**

-   http://rosettacode.org/wiki/ABC_Problem

#

#### Align Columns

-

**Solution:**

```typescript
//@import "./alignColumns.ts";
```

**Sample Output:**

```
```

**References:**

-

#### Almost Prime

-

**Solution:**

```typescript
//@import "./almostPrime.ts";
```

**Sample Output:**

```
```

**References:**

-

#### Balanced Brackets

-

**Solution:**

```typescript
//@import "./balancedBrackets.ts";
```

**Sample Output:**

```
```

**References:**

-

#### Caesar Cipher

-

**Solution:**

```typescript
//@import "./caesarCipher.ts";
```

**Sample Output:**

```
```

**References:**

-

#### Calendar

-

**Solution:**

```typescript
//@import "./calendar.ts";
```

**Sample Output:**

```
```

**References:**

-

#### Catalan Numbers

-

**Solution:**

```typescript
//@import "./catalanNumber.ts";
```

**Sample Output:**

```
```

**References:**

-

#### Chaocipher

-

**Solution:**

```typescript
//@import "./chaocipher.ts";
```

**Sample Output:**

```
```

**References:**

-

#### Recursion Limit

-

**Solution:**

```typescript
//@import "./recursionLimit.ts";
```

**Sample Output:**

```
```

**References:**

-

#### History Variables

-

**Solution:**

```typescript
//@import "./historyVariables.ts";
```

**Sample Output:**

```
```

**References:**

-

#### Last Letter-First Letter

-

**Solution:**

```typescript
//@import "./lastLetterFirstLetter.ts";
```

**Sample Output:**

```
```

**References:**

-

#### Linear Congruential Generator

-

**Solution:**

```typescript
//@import "./linearCongruentialGenerator.ts";
```

**Sample Output:**

```
```

**References:**

-

#### Ordered Words

-

**Solution:**

```typescript
//@import "./orderedWords.ts";
```

**Sample Output:**

```
```

**References:**

-

#### Pangram Checker

-

**Solution:**

```typescript
//@import "./pangramChecker.ts";
```

**Sample Output:**

```
```

**References:**

-

#### Pascal's Triangle

-

**Solution:**

```typescript
//@import "./pangramChecker.ts";
```

**Sample Output:**

```
```

**References:**

-

#### Pascal's Triangle Puzzle

-

**Solution:**

```typescript
//@import "./pangramChecker.ts";
```

**Sample Output:**

```
```

**References:**

-

#### International Bank Account Number (IBAN) Validator

-

**Solution:**

```typescript
//@import "./ibanValidator.ts";
```

**Sample Output:**

```
```

**References:**

-

#### Luhn Algorithm

-

**Solution:**

```typescript
//@import "./luhnAlgorithm.ts";
```

**Sample Output:**

```
```

**References:**

-

#### Maximum Triangle Path Sum

-

**Solution:**

```typescript
//@import "./maximumTrianglePathSum.ts";
```

**Sample Output:**

```
```

**References:**

-

<hr>

### Involved

//@import "../involved/README.md";

<hr>

### Acknowledgements

-   [Rosetta Code](http://rosettacode.org/wiki/Rosetta_Code)

### License

`Rosettas-Node` is licensed under the [MIT License](https://github.com/brianjenkins94/Rosettas-Node/blob/master/LICENSE).

All files located in the `node_modules` directory are externally maintained libraries used by this software which have their own licenses; it is recommend that you read them, as their terms may differ from the terms in the MIT License.
