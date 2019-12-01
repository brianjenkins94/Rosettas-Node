<img height="128px" width="128px" align="right" />

# Rosetta's Node

> Interesting problems. Quickly described.

The problems listed here are a hand-picked selection from the programming [chrestomathy](https://en.wikipedia.org/wiki/Chrestomathy) site, [Rosetta's Code](http://rosettacode.org/wiki/Rosetta_Code). I personally reviewed some 1,200 or so programming tasks, selecting the ones that didn't require a degree in advanced mathematics, weren't prescriptive about how to write the solution, and that were, above all, interesting.

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

### Obligatory

These are the problems that have been "done to death". Anything that was once interesting about these problems has since been nullified by their repetition. With that said, this collection wouldn't be complete without them.

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
					<li><a href="#fibonacci-iterative">Fibonacci (Iterative)</a></li>
					<li><a href="#fibonacci-recursive">Fibonacci (Recursive)</a></li>
					<li><a href="#fizzbuzz">FizzBuzz</a></li>
					<li><a href="#leap-year-checker">Leap Year Checker</a></li>
					<li><a href="#palindrome-checker">Palindrome Checker</a></li>
				</ol>
			</td>
		</tr>
	</tbody>
</table>

#### Fibonacci (Iterative)

-   Print out the `n`th number of the [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_number).
    -   The Fibonacci sequence is the sequence of numbers where each element is the sum of the two previous elements.

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=[Discussion] Fibonacci (Iterative)">Discuss this problem</a></sup></em></p>

<table><tbody><tr></tr><tr><td><strong>Solution:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```typescript
function fibonacci(n) {
	const array = [0, 1];

	for (let x = 2; x <= n; x++) {
		array.push(array[x - 2] + array[x - 1]);
	}

	return array[n];
}

console.log(fibonacci(10));
```
</td></tr></tbody></table>

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=Suggestion for Fibonacci (Iterative)">Improve this answer</a></sup></em></p>

<table><tbody><tr></tr><tr><td><strong>Sample Output:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```
55
```
</td></tr></tbody></table>

**References:**

-   <http://rosettacode.org/wiki/Fibonacci_sequence>
-   <https://en.wikipedia.org/wiki/Fibonacci_number>

#

#### Fibonacci (Recursive)

-   Print out the `n`th number of the [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_number).
    -   The Fibonacci sequence is the sequence of numbers where each element is the sum of the two previous elements.

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=[Discussion] Fibonacci (Recursive)">Discuss this problem</a></sup></em></p>

<table><tbody><tr></tr><tr><td><strong>Solution:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```typescript
function fibonacci(n) {
	if (n < 2) {
		return n;
	}

	return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));
```
</td></tr></tbody></table>

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=Suggestion for Fibonacci (Recursive)">Improve this answer</a></sup></em></p>

<table><tbody><tr></tr><tr><td><strong>Sample Output:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```
55
```
</td></tr></tbody></table>

**References:**

-   <http://rosettacode.org/wiki/Fibonacci_sequence>
-   <https://en.wikipedia.org/wiki/Fibonacci_number>

#

#### FizzBuzz

-   Print the integers from 1 to 100 (inclusive), but:
    -   for multiples of three, print `"Fizz"` (instead of the number)
    -   for multiples of five, print `"Buzz"` (instead of the number)
    -   for multiples of both three and five, print `"FizzBuzz"` (instead of the number)

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=[Discussion] FizzBuzz">Discuss this problem</a></sup></em></p>

<table><tbody><tr></tr><tr><td><strong>Solution:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```typescript
for (let x = 1; x <= 100; x++) {
	if (x % 15 === 0) {
		console.log("FizzBuzz");
	} else if (x % 3 === 0) {
		console.log("Fizz");
	} else if (x % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(x);
	}
}
```
</td></tr></tbody></table>

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=Suggestion for FizzBuzz">Improve this answer</a></sup></em></p>

<table><tbody><tr></tr><tr><td><details><summary><strong>Sample Output:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
```
</summary>

```
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
31
32
Fizz
34
Buzz
Fizz
37
38
Fizz
Buzz
41
Fizz
43
44
FizzBuzz
46
47
Fizz
49
Buzz
Fizz
52
53
Fizz
Buzz
56
Fizz
58
59
FizzBuzz
61
62
Fizz
64
Buzz
Fizz
67
68
Fizz
Buzz
71
Fizz
73
74
FizzBuzz
76
77
Fizz
79
Buzz
Fizz
82
83
Fizz
Buzz
86
Fizz
88
89
FizzBuzz
91
92
Fizz
94
Buzz
Fizz
97
98
Fizz
Buzz
```
</details></td></tr></tbody></table>

**References:**

-   <http://rosettacode.org/wiki/FizzBuzz>
-   <https://en.wikipedia.org/wiki/Fizz_buzz>

#

#### Leap Year Checker

-   Write a program that checks whether a given year is a [leap year](https://en.wikipedia.org/wiki/Leap_year).
    -   A leap year is a year divisible by 4 but not 100 and is not divisible by 400.

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=[Discussion] Leap Year Checker">Discuss this problem</a></sup></em></p>

<table><tbody><tr></tr><tr><td><strong>Solution:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```typescript
function isLeapYear(year) {
	return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

for (let x = 2000; x <= 2020; x++) {
	if (isLeapYear(x)) {
		console.log(x + " is a leap year.");
	} else {
		console.log(x + " is NOT a leap year.");
	}
}
```
</td></tr></tbody></table>

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=Suggestion for Leap Year Checker">Improve this answer</a></sup></em></p>

<table><tbody><tr></tr><tr><td><details><summary><strong>Sample Output:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```
2000 is a leap year.
2001 is NOT a leap year.
2002 is NOT a leap year.
2003 is NOT a leap year.
2004 is a leap year.
2005 is NOT a leap year.
2006 is NOT a leap year.
2007 is NOT a leap year.
2008 is a leap year.
2009 is NOT a leap year.
2010 is NOT a leap year.
2011 is NOT a leap year.
```
</summary>

```
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
</details></td></tr></tbody></table>

**References:**

-   <http://rosettacode.org/wiki/Leap_year>
-   <https://en.wikipedia.org/wiki/Leap_year>

#
#### Palindrome Checker

-   Write a program that checks whether a given string is a [palindrome](https://en.wikipedia.org/wiki/Palindrome).
    -   A palindrome is a word or phrase which reads the same backward and forward.

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=[Discussion] Palindrome Checker">Discuss this problem</a></sup></em></p>

<table><tbody><tr></tr><tr><td><details><summary><strong>Solution:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

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
```
</summary>

```typescript
	const sanitizedString = string.replace(/\W/g, "").toLowerCase();

	return sanitizedString === sanitizedString.split("").reverse().join("");
}

for (const potentialPalindrome of potentialPalindromes) {
	if (isPalindrome(potentialPalindrome)) {
		console.log("\"" + potentialPalindrome + "\" is a palindrome.");
	} else {
		console.log("\"" + potentialPalindrome + "\" is NOT a palindrome.");
	}
}
```
</details></td></tr></tbody></table>

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=Suggestion for Palindrome Checker">Improve this answer</a></sup></em></p>

<table><tbody><tr></tr><tr><td><strong>Sample Output:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

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
</td></tr></tbody></table>

**References:**

-   <http://rosettacode.org/wiki/Palindrome>
-   <https://en.wikipedia.org/wiki/Palindrome>

#

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
					<li><a href="#align-columns">Align Columns</a></li>
					<li><a href="#balanced-brackets">Balanced Brackets</a></li>
					<li><a href="#birthday-problem">Birthday Problem</a></li>
					<li><a href="#caesar-cipher">Caesar Cipher</a></li>
					<li><a href="#caesar-cipher-solver">Caesar Cipher Solver</a></li>
					<li><a href="#history-variables">History Variables</a></li>
					<li><a href="#last-letter-first-letter">Last Letter-First Letter</a></li>
					<li><a href="#letter-blocks">Letter Blocks</a></li>
					<li><a href="#ordered-words">Ordered Words</a></li>
					<li><a href="#pangram-checker">Pangram Checker</a></li>
					<li><a href="#pascals-triangle">Pascal's Triangle</a></li>
					<li><a href="#quine">Quine</a></li>
					<li><a href="#recursion-limit">Recursion Limit</a></li>
					<li><a href="#remove-duplicate-elements">Remove Duplicate Elements</a></li>
					<li><a href="#semordnilap">Semordnilap</a></li>
					<li><a href="#sparkline">Sparkline</a></li>
					<li><a href="#substitution-cipher">Substitution Cipher</a></li>
					<li><a href="#suffix-tree-generator">Suffix Tree Generator</a></li>
					<li><a href="#textonyms">Textonyms</a></li>
					<li><a href="#towers-of-hanoi">Towers of Hanoi</a></li>
					<li><a href="#truth-tables">Truth Tables</a></li>
					<li><a href="#ulam-spiral">Ulam spiral</a></li>
					<li><a href="#vigenre-cipher">Vigenère cipher</a></li>
					<li><a href="#visualize-a-tree">Visualize a Tree</a></li>
					<li><a href="#water-collected-between-towers">Water Collected Between Towers</a></li>
					<li><a href="#word-search-generator">Word Search Generator</a></li>
					<li><a href="#word-search-solver">Word Search Solver</a></li>
					<li><a href="#word-wrap">Word Wrap</a></li>
				</ol>
			</td>
		</tr>
	</tbody>
</table>

#### Abbreviations

-   Write a program to find the minimum, _same-length_ abbreviation for an array that would preserve each element's uniqueness.

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=[Discussion] Abbreviations">Discuss this problem</a></sup></em></p>

<table><tbody><tr></tr><tr><td><details><summary><strong>Solution:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```typescript
const arrays = [
	["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
	["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
	["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
	["Duminica", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"]
];

function getMinimumLengthUniqueAbbreviations(array) {
	const longestStringLength = array.sort(function(a, b) {
		return b.length - a.length;
	})[0].length;
```
</summary>

```typescript

	for (let x = longestStringLength; x >= 1; x--) {
		const tempObject = {};

		for (const string of array) {
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
</details></td></tr></tbody></table>

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=Suggestion for Abbreviations">Improve this answer</a></sup></em></p>

<table><tbody><tr></tr><tr><td><strong>Sample Output:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```
["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] can be abbreviated to ["We", "Th", "Sa", "Tu", "Su", "Mo", "Fr"]
["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"] can be abbreviated to ["Mi", "Do", "Vi", "Ma", "Ju", "Sá", "Lu"]
["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"] can be abbreviated to ["Di", "Me", "Ve", "Sa", "Lu", "Ma", "Je"]
["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"] can be abbreviated to ["Me", "Do", "Ma", "Gi", "Ve", "Lu", "Sa"]
["Duminica", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"] can be abbreviated to ["Du", "Mi", "Sa", "Vi", "Ma", "Lu", "Jo"]
```
</td></tr></tbody></table>

**Variants:**

-   Produce an array of minimal-length strings instead of same-length strings.

**References:**

-   <http://rosettacode.org/wiki/Abbreviations,_automatic>

#

#### Align Columns

-   Write a program that aligns words into columns, ensuring that the words in each column are separated by at least one space. Further, allow for each word in a column to be either left a justified, right justified, or center justified within its column.

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=[Discussion] Align Columns">Discuss this problem</a></sup></em></p>

<table><tbody><tr></tr><tr><td><details><summary><strong>Solution:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```typescript
const input = [
	["Write", "a", "program,", "that", "aligns", "words", "into", "columns,"],
	["ensuring", "that", "the", "words", "in", "each", "column"],
	["are", "separated", "by", "at", "least", "one", "space."],
	["Further,", "allow", "for", "each", "word", "in", "a", "column"],
	["to", "be", "either", "left", "justified,", "right", "justified,"],
	["or", "center", "justified", "within", "its", "column."]
];

function getLongestRow(input) {
	let longestRow = 0;

```
</summary>

```typescript
	for (const row of input) {
		if (row.length > longestRow) {
			longestRow = row.length;
		}
	}

	return longestRow;
}

function getColumnWidths(input) {
	const longestRow = getLongestRow(input);

	const columnWidths = [];

	for (let x = 0; x < longestRow; x++) {
		let columnWidth = 0;

		for (let y = 0; y < input.length; y++) {
			if ((input[y][x] || "").length > columnWidth) {
				columnWidth = (input[y][x] || "").length;
			}
		}

		columnWidths.push(columnWidth);
	}

	return columnWidths;
}

function align(alignment, input) {
	const columnWidths = getColumnWidths(input);

	let output = "";

	for (let x = 0; x < input.length; x++) {
		for (let y = 0; y < input[x].length; y++) {
			const word = input[x][y] || "";
			let padding;

			switch (alignment) {
				case "left":
					padding = columnWidths[y] - (word.length);

					output += word + " ".repeat(padding + 1);
					break;
				case "right":
					padding = columnWidths[y] - word.length;

					output += " ".repeat(padding) + word + " ";
					break;
				case "center":
					padding = Math.floor(columnWidths[y] - word.length) / 2;

					if (((columnWidths[y] - word.length) / 2) % 1) {
						output += " ".repeat(padding) + word + " ".repeat(padding + 2);
					} else {
						output += " ".repeat(padding) + word + " ".repeat(padding + 1);
					}
					break;
				default:
					throw new Error("Invalid option for `alignment`.");
			}
		}

		output += "\n";
	}

	return output;
}

console.log("Left:");
console.log(align("left", input));

console.log("Right:");
console.log(align("right", input));

console.log("Center:");
console.log(align("center", input));
```
</details></td></tr></tbody></table>

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=Suggestion for Align Columns">Improve this answer</a></sup></em></p>

<table><tbody><tr></tr><tr><td><details><summary><strong>Sample Output:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```
Left:
Write    a         program,  that   aligns     words   into       columns, 
ensuring that      the       words  in         each    column     
are      separated by        at     least      one     space.     
Further, allow     for       each   word       in      a          column   
to       be        either    left   justified, right   justified, 
or       center    justified within its        column. 

Right:
   Write         a  program,   that     aligns   words       into columns, 
ensuring      that       the  words         in    each     column 
     are separated        by     at      least     one     space. 
```
</summary>

```
Further,     allow       for   each       word      in          a   column 
      to        be    either   left justified,   right justified, 
      or    center justified within        its column. 

Center:
 Write       a     program,   that    aligns    words     into    columns, 
ensuring   that       the    words      in      each     column   
  are    separated    by       at     least      one     space.   
Further,   allow      for     each     word      in        a       column  
   to       be      either    left  justified,  right  justified, 
   or     center   justified within    its     column. 

```
</details></td></tr></tbody></table>

**Variants:**

-   [Word wrap](#word-wrap) to some number of columns.
-   Justify words to some number of columns.
-   Preserve punctuation, but don't align by it.

**References:**

-   <https://www.rosettacode.org/wiki/Align_columns>

#

#### Balanced Brackets

-   Determine whether a given string is balanced; that is, whether it consists entirely of pairs of opening/closing brackets (in that order), none of which mis-nest.

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=[Discussion] Balanced Brackets">Discuss this problem</a></sup></em></p>

<table><tbody><tr></tr><tr><td><details><summary><strong>Solution:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```typescript
const input = [
	"[[]][[]]]]",
	"][]][[][][",
	"[][]]][[[]",
	"][][[[][[]",
	"[[[][]]][]",
	"][][]][[[[",
	"][][[[[]][",
	"][[][]][[]",
	"[[]][[]][]",
	"[][]]][]]]"
];
```
</summary>

```typescript

function isBalanced(input) {
	let leftStack = 0;
	let rightStack = 0;

	for (const [index, character] of Object.entries(input)) {
		if (character === "[") {
			leftStack += 1;
		} else if (leftStack > rightStack) {
			rightStack += 1;
		} else {
			return parseInt(index, 10);
		}
	}

	return true;
}

for (const string of input) {
	const balanced = isBalanced(string);

	if (balanced === true) {
		console.log(string + " is balanced.");
		console.log();
	} else {
		console.log(string + " is NOT balanced.");
		console.log(" ".repeat(balanced) + "^");
	}
}
```
</details></td></tr></tbody></table>

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=Suggestion for Balanced Brackets">Improve this answer</a></sup></em></p>

<table><tbody><tr></tr><tr><td><details><summary><strong>Sample Output:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```
[[]][[]]]] is NOT balanced.
        ^
][]][[][][ is NOT balanced.
^
[][]]][[[] is NOT balanced.
    ^
][][[[][[] is NOT balanced.
^
[[[][]]][] is balanced.

][][]][[[[ is NOT balanced.
^
```
</summary>

```
][][[[[]][ is NOT balanced.
^
][[][]][[] is NOT balanced.
^
[[]][[]][] is balanced.

[][]]][]]] is NOT balanced.
    ^
```
</details></td></tr></tbody></table>

**References:**

-   <http://rosettacode.org/wiki/Balanced_brackets>

#

#### Birthday Problem

-

**Solution:**

```typescript
//@import "./birthdayProblem.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Caesar Cipher

-   Write a program that can encode and decode a string using the [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher), given a key (an integer from 1 to 25).
    -   The Caesar cipher is a type of [substitution cipher](https://en.wikipedia.org/wiki/Substitution_cipher) in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=[Discussion] Caesar Cipher">Discuss this problem</a></sup></em></p>

<table><tbody><tr></tr><tr><td><details><summary><strong>Solution:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```typescript
export const secret = "The secret lies with Charlotte.";

const ASCII_UPPERCASE_A = 65;
const ASCII_LOWERCASE_A = 97;

export const ALPHABET_LENGTH = 26;

export function encode(string, key) {
	return string.replace(/\w/g, function(a) {
		if (a.charCodeAt(0) < ASCII_LOWERCASE_A) {
			return String.fromCharCode(ASCII_UPPERCASE_A + ((a.charCodeAt(0) - ASCII_UPPERCASE_A + key) % ALPHABET_LENGTH));
		} else {
```
</summary>

```typescript
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
```
</details></td></tr></tbody></table>

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=Suggestion for Caesar Cipher">Improve this answer</a></sup></em></p>

<table><tbody><tr></tr><tr><td><strong>Sample Output:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```
Encoded:
Dro combod vsoc gsdr Mrkbvyddo.
Decoded:
The secret lies with Charlotte.
```
</td></tr></tbody></table>

**References:**

-   <http://rosettacode.org/wiki/Caesar_cipher>
-   <https://en.wikipedia.org/wiki/Caesar_cipher>
-   <https://en.wikipedia.org/wiki/Substitution_cipher>

#

#### Caesar Cipher Solver

-   Use a dictionary to attempt to decode the message encoded by your [Caesar cipher](#caesar-cipher).
-   Windows users must bring their own dictionary or match against a dictionary containing the decoded message.

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=[Discussion] Caesar Cipher Solver">Discuss this problem</a></sup></em></p>

<table><tbody><tr></tr><tr><td><details><summary><strong>Solution:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```typescript
// [!] This problem has external dependencies on `/usr/share/dict/words` and `./caesarCipher.ts`.
// Windows users will need to bring their own dictionary or match against a dictionary containing the decoded message.

import { createInterface } from "readline";
import * as fs from "fs";
import * as path from "path";

import { secret, ALPHABET_LENGTH, encode, decode } from "./caesarCipher";

function loadDictionary() {
	return new Promise(function(resolve, reject) {
		const readStream = createInterface({
```
</summary>

```typescript
			"input": fs.createReadStream(path.join("/", "usr", "share", "dict", "words"))
		});

		const dictionary = [];

		readStream.on("line", function(word) {
			dictionary.push(word);
		});

		readStream.on("close", function() {
			resolve(dictionary);
		});
	});
}

let dictionary;

function getNumberOfMatches(string, key) {
	let matches = 0;

	for (const word of string.split(" ")) {
		if (dictionary.indexOf(decode(word, key)) !== -1) {
			matches += 1;
		}
	}

	return matches;
}

(async function() {
	dictionary = await loadDictionary();

	const encodedSecret = encode(secret, 10);

	for (let x = 0; x < ALPHABET_LENGTH; x++) {
		const matchCount = getNumberOfMatches(encodedSecret, x);

		if (matchCount !== 0) {
			const encodedWords = encodedSecret.split(" ");
			const decodedWords = decode(encodedSecret, x).split(" ");

			console.log("\n" + (((matchCount / encodedWords.length) * 100) + "% match with a shift of " + x + "."));

			for (let y = 0; y < encodedWords.length; y++) {
				console.log("\t" + encodedWords[y] + " -> " + decodedWords[y]);
			}
		}
	}
})();
```
</details></td></tr></tbody></table>

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=Suggestion for Caesar Cipher Solver">Improve this answer</a></sup></em></p>

<table><tbody><tr></tr><tr><td><details><summary><strong>Sample Output:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```
Encoded:
Dro combod vsoc gsdr Mrkbvyddo.
Decoded:
The secret lies with Charlotte.

20% match with a shift of 4.
	Dro -> Znk
	combod -> ykixkz
	vsoc -> roky
	gsdr -> cozn
	Mrkbvyddo. -> Ingxruzzk.

```
</summary>

```
60% match with a shift of 10.
	Dro -> The
	combod -> secret
	vsoc -> lies
	gsdr -> with
	Mrkbvyddo. -> Charlotte.

20% match with a shift of 17.
	Dro -> Max
	combod -> lxvkxm
	vsoc -> ebxl
	gsdr -> pbma
	Mrkbvyddo. -> Vatkehmmx.
```
</details></td></tr></tbody></table>

**References:**

-   <http://rosettacode.org/wiki/Caesar_cipher>

#

#### History Variables

-   Implement history variables.
    -   History variables are variables which store not only their current value, but also the values they have contained in the past.

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=[Discussion] History Variables">Discuss this problem</a></sup></em></p>

<table><tbody><tr></tr><tr><td><details><summary><strong>Solution:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```typescript
class HistoryVariable {
	private readonly history = [];

	public constructor(initialValue?) {
		this.history.push(initialValue);
	}

	public setValue(value) {
		this.history.push(value);
	}

	public getValue(index?) {
```
</summary>

```typescript
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
```
</details></td></tr></tbody></table>

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=Suggestion for History Variables">Improve this answer</a></sup></em></p>

<table><tbody><tr></tr><tr><td><details><summary><strong>Sample Output:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```
> Print the history
[
  'uno',   'dos',
  'tres',  'cuatro',
  'cinco', 'cinco',
  'seis'
]

> Print the previous value
cinco

> Rollback twice
```
</summary>

```

> Set the value to "seis"

> Get the value we just added
seis

> Print the history
[ 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis' ]
```
</details></td></tr></tbody></table>

**References:**

-   <http://rosettacode.org/wiki/History_variables>

#

#### Last Letter-First Letter

-   Given a collection of words and a starting value, chain as many answers together that start with the last letter of the previous word without repeating.

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=[Discussion] Last Letter-First Letter">Discuss this problem</a></sup></em></p>

<table><tbody><tr></tr><tr><td><details><summary><strong>Solution:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```typescript
const pokemonNames = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"];

(function play(answer = "Bulbasaur") {
	console.log(answer);

	pokemonNames[pokemonNames.indexOf(answer)] = "";

	for (const name of pokemonNames) {
		if (name[0] === answer[answer.length - 1].toUpperCase()) {
			play(name);
		}
	}
```
</summary>

```typescript
})();
```
</details></td></tr></tbody></table>

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=Suggestion for Last Letter-First Letter">Improve this answer</a></sup></em></p>

<table><tbody><tr></tr><tr><td><details><summary><strong>Sample Output:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```
Bulbasaur
Rattata
Arbok
Kakuna
Arcanine
Ekans
Squirtle
Electrode
Exeggcute
Exeggutor
Raticate
Electabuzz
```
</summary>

```
Zubat
Tentacool
Lickitung
Golbat
Tentacruel
Lapras
Spearow
Wartortle
Eevee
Weedle
Wigglytuff
Fearow
Weepinbell
Weezing
Gloom
Metapod
Diglett
Tangela
Abra
Alakazam
Meowth
Haunter
Raichu
Rapidash
Hypno
Oddish
Hitmonlee
Hitmonchan
Nidoran
Nidorina
Aerodactyl
Articuno
Onix
Omanyte
Omastar
Rhyhorn
Nidoqueen
Nidorino
Nidoking
Golduck
Kadabra
Krabby
Kingler
Rhydon
Ninetales
Sandshrew
Sandslash
Horsea
Slowpoke
Slowbro
Seel
Shellder
Seadra
Seaking
Growlithe
Geodude
Graveler
Golem
Mankey
Machop
Pidgey
Pidgeotto
Pidgeot
Tauros
Staryu
Starmie
Scyther
Snorlax
Pikachu
Paras
Parasect
Persian
Psyduck
Koffing
Grimer
Gastly
Gengar
Goldeen
Gyarados
Kangaskhan
Kabuto
Kabutops
Primeape
Poliwag
Poliwhirl
Poliwrath
Ponyta
Pinsir
```
</details></td></tr></tbody></table>

**References:**

-   <http://rosettacode.org/wiki/Last_letter-first_letter>

#

#### Letter Blocks

-   Write a program that determines whether a word can be spelled with a given collection of blocks.
-   Blocks are guaranteed to have the same letter pairs on them.

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=[Discussion] Letter Blocks">Discuss this problem</a></sup></em></p>

<table><tbody><tr></tr><tr><td><details><summary><strong>Solution:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```typescript
const blocks = [["B", "O"], ["X", "K"], ["D", "Q"], ["C", "P"], ["N", "A"], ["G", "T"], ["R", "E"], ["T", "G"], ["Q", "D"], ["F", "S"], ["J", "W"], ["H", "U"], ["V", "I"], ["A", "N"], ["O", "B"], ["E", "R"], ["F", "S"], ["L", "Y"], ["P", "C"], ["Z", "M"]];

const words = ["A", "BARK", "BOOK", "TREAT", "COMMON", "SQUAD", "CONFUSE"];

function isWordSpellableWithBlocks(word, blocks) {
	for (const letter of word) {
		let letterFound = false;

		for (const [index, block] of blocks.entries()) {
			if (block[0] === letter || block[1] === letter) {
				blocks[index] = ["", ""];
				letterFound = true;
```
</summary>

```typescript
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
</details></td></tr></tbody></table>

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=Suggestion for Letter Blocks">Improve this answer</a></sup></em></p>

<table><tbody><tr></tr><tr><td><strong>Sample Output:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```
The word "A" can be spelled with these blocks.
The word "BARK" can be spelled with these blocks.
The word "BOOK" can NOT be spelled with these blocks.
The word "TREAT" can be spelled with these blocks.
The word "COMMON" can NOT be spelled with these blocks.
The word "SQUAD" can be spelled with these blocks.
The word "CONFUSE" can be spelled with these blocks.
```
</td></tr></tbody></table>

**References:**

-   <http://rosettacode.org/wiki/ABC_Problem>

#

#### Ordered Words

-   Write a program to find all the ordered words from a given dictionary.
    -   An ordered word is a word in which the letters appear in alphabetic order.
-   Windows users must bring their own dictionary.

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=[Discussion] Ordered Words">Discuss this problem</a></sup></em></p>

<table><tbody><tr></tr><tr><td><details><summary><strong>Solution:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```typescript
// [!] This problem has an external dependency on `/usr/share/dict/words`.
// Windows users will need to bring their own dictionary.

import { createInterface } from "readline";
import * as fs from "fs";
import * as path from "path";

const readStream = createInterface({
	"input": fs.createReadStream(path.join("/", "usr", "share", "dict", "words"))
});

readStream.on("line", function(word) {
```
</summary>

```typescript
	const lowercaseWord = word.toLowerCase();

	for (let x = 1; x < lowercaseWord.length; x++) {
		if (lowercaseWord.charCodeAt(x - 1) >= lowercaseWord.charCodeAt(x)) {
			return;
		}
	}

	console.log(word);
});
```
</details></td></tr></tbody></table>

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=Suggestion for Ordered Words">Improve this answer</a></sup></em></p>

<table><tbody><tr></tr><tr><td><details><summary><strong>Sample Output:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```
A
a
Ab
abdest
Abe
Abel
abet
abey
abhor
abilo
abir
ablow
```
</summary>

```
ably
Abo
abort
abox
Abu
abu
aby
ace
Acer
ach
achor
achy
Acis
acknow
acor
Acrux
act
actu
ad
Ade
ade
Adelops
adept
adet
adfix
Adin
adipsy
adit
ado
adopt
adoxy
adry
ady
adz
ae
aegis
aer
aery
aes
aflow
aft
agio
agist
aglow
agnosy
ago
agy
Ah
ah
ahint
Ahir
aho
ahoy
Aht
ahu
ai
ail
aim
aint
Ainu
air
airt
airy
ait
Aix
ak
ako
akov
aku
Al
al
almost
alms
aln
alo
alop
alow
alp
alt
aly
am
amor
amort
Amos
Amoy
amt
Amy
amy
```
</details></td></tr></tbody></table>

**References:**

-   <https://rosettacode.org/wiki/Ordered_words>

#

#### Pangram Checker

-   Write a program that checks whether a given string is a [pangram](https://en.wikipedia.org/wiki/Pangram).
    -   A pangram is a word or phrase that contains every letter of the alphabet.

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=[Discussion] Pangram Checker">Discuss this problem</a></sup></em></p>

<table><tbody><tr></tr><tr><td><details><summary><strong>Solution:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```typescript
const potentialPangrams = [
	"The quick brown fox jumps over the lazy dog.",
	"Sphinx of black quartz, judge my vow.",
	"How vexingly quick daft zebras jump!",
	"The five boxing wizards jump quickly.",
	"Able was I ere I saw Elba.",
	"A man, a plan, a canal – Panama.",
	"Madam, I'm Adam.",
	"Never odd or even."
];

function isPangram(string) {
```
</summary>

```typescript
	const sanitizedString = string.replace(/\W/g, "").toLowerCase();

	const letters = { "a": false, "b": false, "c": false, "d": false, "e": false, "f": false, "g": false, "h": false, "i": false, "j": false, "k": false, "l": false, "m": false, "n": false, "o": false, "p": false, "q": false, "r": false, "s": false, "t": false, "u": false, "v": false, "w": false, "x": false, "y": false, "z": false };

	for (const character of sanitizedString) {
		letters[character] = true;
	}

	for (const letter of Object.keys(letters)) {
		if (letters[letter] === false) {
			return false;
		}
	}

	return true;
}

for (const potentialPangram of potentialPangrams) {
	if (isPangram(potentialPangram)) {
		console.log("\"" + potentialPangram + "\" is a pangram.");
	} else {
		console.log("\"" + potentialPangram + "\" is NOT a pangram.");
	}
}
```
</details></td></tr></tbody></table>

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=Suggestion for Pangram Checker">Improve this answer</a></sup></em></p>

<table><tbody><tr></tr><tr><td><strong>Sample Output:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```
"The quick brown fox jumps over the lazy dog." is a pangram.
"Sphinx of black quartz, judge my vow." is a pangram.
"How vexingly quick daft zebras jump!" is a pangram.
"The five boxing wizards jump quickly." is a pangram.
"Able was I ere I saw Elba." is NOT a pangram.
"A man, a plan, a canal – Panama." is NOT a pangram.
"Madam, I'm Adam." is NOT a pangram.
"Never odd or even." is NOT a pangram.
```
</td></tr></tbody></table>

**References:**

-   <https://rosettacode.org/wiki/Pangram_checker>
-   <https://en.wikipedia.org/wiki/Pangram>

#

#### Pascal's Triangle

-   Print the first 10 rows of [Pascal's Triangle](https://en.wikipedia.org/wiki/Pascal%27s_triangle).
    -   Pascal's Triangle is a triangular array where each successive element is the sum of the two above it.

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=[Discussion] Pascal's Triangle">Discuss this problem</a></sup></em></p>

<table><tbody><tr></tr><tr><td><details><summary><strong>Solution:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```typescript
const TAB_SIZE = 4;

const triangle = [];

for (let x = 0; x < 10; x++) {
	for (let y = 0; y < x + 1; y++) {
		if (y === 0) {
			triangle.push(new Array(x + 1));

			triangle[x][y] = 1;
		} else if (y === (triangle[x].length - 1)) {
			triangle[x][y] = 1;
```
</summary>

```typescript
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
```
</details></td></tr></tbody></table>

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=Suggestion for Pascal's Triangle">Improve this answer</a></sup></em></p>

<table><tbody><tr></tr><tr><td><strong>Sample Output:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```
                     1
                   1   1
                 1   2   1
               1   3   3   1
             1   4   6   4   1
           1   5  10  10   5   1
         1   6  15  20  15   6   1
       1   7  21  35  35  21   7   1
     1   8  28  56  70  56  28   8   1
   1   9  36  84 126 126  84  36   9   1
```
</td></tr></tbody></table>

**References:**

-   <https://rosettacode.org/wiki/Pascal%27s_triangle>
-   <https://en.wikipedia.org/wiki/Pascal%27s_triangle>

#### Quine

-   Write a [quine](https://en.wikipedia.org/wiki/Quine_(computing)).
    -   A quine a computer program which takes no input and produces a copy of its own source code as its only output.

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=[Discussion] Quine">Discuss this problem</a></sup></em></p>

<table><tbody><tr></tr><tr><td><strong>Solution:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```typescript
(function quine() {
	console.log("(" + quine.toString() + ")();");
})();
```
</td></tr></tbody></table>

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=Suggestion for Quine">Improve this answer</a></sup></em></p>

<table><tbody><tr></tr><tr><td><strong>Sample Output:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```
(function quine() {
    console.log("(" + quine.toString() + ")();");
})();
```
</td></tr></tbody></table>

**References:**

-   <http://rosettacode.org/wiki/Quine>
-   <https://en.wikipedia.org/wiki/Quine_(computing)>

#

#### Recursion Limit

-   Find the limit of [recursion](https://en.wikipedia.org/wiki/Recursion_(computer_science)).

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=[Discussion] Recursion Limit">Discuss this problem</a></sup></em></p>

<table><tbody><tr></tr><tr><td><strong>Solution:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```typescript
function computeMaximumCallStackSize() {
	try {
		return 1 + computeMaximumCallStackSize();
	} catch (error) {
		return 1;
	}
}

console.log("The recursion limit is: " + computeMaximumCallStackSize());
```
</td></tr></tbody></table>

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=Suggestion for Recursion Limit">Improve this answer</a></sup></em></p>

<table><tbody><tr></tr><tr><td><strong>Sample Output:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```
The recursion limit is: 12550
```
</td></tr></tbody></table>

**References:**

-   <http://rosettacode.org/wiki/Find_limit_of_recursion>
-   <https://en.wikipedia.org/wiki/Recursion_(computer_science)>

#

#### Remove Duplicate Elements

-   Given an array with duplicates, remove the duplicates.

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=[Discussion] Remove Duplicate Elements">Discuss this problem</a></sup></em></p>

<table><tbody><tr></tr><tr><td><strong>Solution:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```typescript
function removeDuplicates(array) {
	return [...new Set(array)];
}

console.log(removeDuplicates([1, 2, 3, 4, 1, 2, 3, 4]));
```
</td></tr></tbody></table>

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=Suggestion for Remove Duplicate Elements">Improve this answer</a></sup></em></p>

<table><tbody><tr></tr><tr><td><strong>Sample Output:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```
[ 1, 2, 3, 4 ]
```
</td></tr></tbody></table>

**References:**

-   <https://www.rosettacode.org/wiki/Remove_duplicate_elements>

#

#### Semordnilap

-   Write a program that determines whether a word is a [semordnilap](https://en.wikipedia.org/wiki/Palindrome#Semordnilap).
    -   A semordnilap is a word that spells a different word in reverse.
-   Windows users must bring their own dictionary

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=[Discussion] Semordnilap">Discuss this problem</a></sup></em></p>

<table><tbody><tr></tr><tr><td><details><summary><strong>Solution:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```typescript
// [!] This problem has an external dependency on `/usr/share/dict/words`.
// Windows users will need to bring their own dictionary.

import { createInterface } from "readline";
import * as fs from "fs";
import * as path from "path";

const readStream = createInterface({
	"input": fs.createReadStream(path.join("/", "usr", "share", "dict", "words"))
});

readStream.on("line", function(word) {
```
</summary>

```typescript
	const lowercaseWord = word.toLowerCase();

	if (lowercaseWord !== lowercaseWord.split("").reverse().join("")) {
		return;
	}

	console.log(word);
});
```
</details></td></tr></tbody></table>

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=Suggestion for Semordnilap">Improve this answer</a></sup></em></p>

<table><tbody><tr></tr><tr><td><details><summary><strong>Sample Output:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```
A
a
aa
aba
Abba
acca
Ada
Adda
adda
Adinida
affa
aga
```
</summary>

```
aha
Ajaja
ajaja
Aka
aka
Akka
ala
Alala
alala
alula
ama
Amma
amma
Ana
ana
anana
Anna
anna
apa
ara
Arara
arara
Asa
Ata
Atta
atta
ava
awa
B
b
Bab
bib
Bob
bob
boob
bub
C
c
civic
D
d
dad
deed
deedeed
degged
did
dod
dud
E
e
eke
elle
eme
ere
Eve
eve
Ewe
ewe
eye
F
f
G
g
gag
gig
gog
H
h
hah
hallah
huh
I
i
ihi
imi
immi
J
j
K
k
kakkak
Kassak
kayak
Kazak
keek
kelek
L
l
```
</details></td></tr></tbody></table>

**References:**

-   <https://rosettacode.org/wiki/Semordnilap>
-   <https://en.wikipedia.org/wiki/Palindrome#Semordnilap>

#

#### Sparkline

-   Write a program to draw a [sparkline](https://en.wikipedia.org/wiki/Sparkline).
    -   A sparkline is a very small line chart that presents the general shape of a variation.

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=[Discussion] Sparkline">Discuss this problem</a></sup></em></p>

<table><tbody><tr></tr><tr><td><details><summary><strong>Solution:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```typescript
const input = [
	[1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1],
	[1.5, 0.5, 3.5, 2.5, 5.5, 4.5, 7.5, 6.5]
];

const barCharacters = "▁▂▃▄▅▆▇█";

function sparkline(dataset) {
	let line = "";

	const min = Math.min(...dataset);
	const max = Math.max(...dataset);
```
</summary>

```typescript
	const range = max - min;

	for (const datum of dataset) {
		line += barCharacters.charAt(Math.ceil((datum - min) / range * (barCharacters.length - 1)));
	}

	return line;
}

for (const dataset of input) {
	console.log("Input: " + dataset.join(", "));

	console.log(sparkline(dataset) + "\n");
}
```
</details></td></tr></tbody></table>

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=Suggestion for Sparkline">Improve this answer</a></sup></em></p>

<table><tbody><tr></tr><tr><td><strong>Sample Output:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```
Input: 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1
▁▂▃▄▅▆▇█▇▆▅▄▃▂▁

Input: 1.5, 0.5, 3.5, 2.5, 5.5, 4.5, 7.5, 6.5
▂▁▄▃▆▅█▇

```
</td></tr></tbody></table>

**References:**

-   <https://www.rosettacode.org/wiki/Sparkline_in_unicode>
-   <https://en.wikipedia.org/wiki/Sparkline>

#

#### Substitution Cipher

-

**Solution:**

```typescript
//@import "./subtitutionCipher.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Suffix Tree Generator

-

**Solution:**

```typescript
//@import "./suffixTreeGenerator.ts";
```

**Sample Output:**

```
```

**References:**

-

#
#### Textonyms

-   Use a dictionary to find all of the words that are [textonyms](https://en.wikipedia.org/wiki/Predictive_text#Textonyms).
    -   Textonyms are words produced by the same combination of keypresses on a phone keypad.

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=[Discussion] Textonyms">Discuss this problem</a></sup></em></p>

<table><tbody><tr></tr><tr><td><details><summary><strong>Solution:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```typescript
// [!] This problem has an external dependency on `/usr/share/dict/words`.
// Windows users will need to bring their own dictionary.

import { createInterface } from "readline";
import * as fs from "fs";
import * as path from "path";

const readStream = createInterface({
	"input": fs.createReadStream(path.join("/", "usr", "share", "dict", "words"))
});

const textonyms = {};
```
</summary>

```typescript

const keypad = {
	"a": 2, "b": 2, "c": 2,
	"d": 3, "e": 3, "f": 3,
	"g": 4, "h": 4, "i": 4,
	"j": 5, "k": 5, "l": 5,
	"m": 6, "n": 6, "o": 6,
	"p": 7, "q": 7, "r": 7, "s": 7,
	"t": 8, "u": 8, "v": 8,
	"w": 9, "x": 9, "y": 9, "z": 9
};

readStream.on("line", function(word) {
	const lowercaseWord = word.toLowerCase();

	let key = "";

	for (const letter of lowercaseWord) {
		key += keypad[letter];
	}

	if (textonyms[key] !== undefined) {
		textonyms[key].push(word);
	} else {
		textonyms[key] = [word];
	}
});

readStream.on("close", function() {
	for (const [key, value] of Object.entries(textonyms)) {
		if ((value as string[]).length > 1) {
			console.log(key + " spells the words: " + (value as string[]).join(", "));
		}
	}
});
```
</details></td></tr></tbody></table>

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=Suggestion for Textonyms">Improve this answer</a></sup></em></p>

<table><tbody><tr></tr><tr><td><details><summary><strong>Sample Output:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```
2 spells the words: A, a, B, b, C, c
3 spells the words: D, d, E, e, F, f
4 spells the words: G, g, H, h, I, i
5 spells the words: J, j, K, k, L, l
6 spells the words: M, m, N, n, O, o
7 spells the words: P, p, Q, q, R, r, S, s
8 spells the words: T, t, U, u, V, v
9 spells the words: W, w, X, x, Y, y, Z, z
22 spells the words: aa, Ab, ba, ca
23 spells the words: ad, ae, be, ce
24 spells the words: Ah, ah, ai
25 spells the words: ak, Al, al
```
</summary>

```
26 spells the words: am, an, Ao, bo
27 spells the words: ar, As, as
28 spells the words: at, Bu, bu
29 spells the words: aw, ax, Ay, ay, by
32 spells the words: da, ea, fa
33 spells the words: de, Ed, fe
34 spells the words: di, eh, fi
36 spells the words: do, Em, em, en, Fo
37 spells the words: er, es
38 spells the words: eu, fu
39 spells the words: ex, ey
42 spells the words: Ga, ga, ha
43 spells the words: Ge, ge, he, id, ie, if
44 spells the words: Gi, hi
46 spells the words: go, Ho, ho, in, Io, io
48 spells the words: Hu, it
52 spells the words: ka, la
54 spells the words: Ji, li
56 spells the words: Jo, jo, Ko, ko, Lo, lo
58 spells the words: Ju, Lu
62 spells the words: Ma, ma, na
63 spells the words: me, ne, Od, od, oe, of
64 spells the words: mi, ni, Og, oh
66 spells the words: Mo, mo, No, no, om, on
67 spells the words: Mr, or, Os, os
68 spells the words: mu, nu
69 spells the words: my, ow, ox
72 spells the words: pa, ra, sa
73 spells the words: re, se
74 spells the words: pi, sh, si
76 spells the words: Po, po, Ro, so
78 spells the words: pu, st
83 spells the words: Td, te, Ud
84 spells the words: th, Ti, ti, ug
86 spells the words: to, um, un
87 spells the words: up, ur, us
88 spells the words: tu, ut, Vu
92 spells the words: Wa, wa, ya, za
93 spells the words: we, ye
94 spells the words: wi, xi
96 spells the words: wo, ym, yn, yo, zo
222 spells the words: aba, abb, baa, Bab, bac, cab
223 spells the words: Abe, ace, bad, bae, cad
224 spells the words: ach, bag, bah, cag
225 spells the words: aal, Bal, bal, cal
226 spells the words: aam, Abo, bam, Ban, ban, cam, can
227 spells the words: bap, bar, bas, cap, car
228 spells the words: Abu, abu, act, Bat, bat, Cat, cat
229 spells the words: aby, baw, bay, caw, cay
232 spells the words: Ada, Bea
233 spells the words: add, Ade, ade, bed, Bee, bee, cee
235 spells the words: Bel, bel
236 spells the words: ado, Ben, ben
237 spells the words: aer, aes, ber, bes, cep
238 spells the words: aft, bet
239 spells the words: ady, adz, bey
242 spells the words: aga, aha, bib, cha
243 spells the words: age, aid, bid, che, Cid
244 spells the words: big, chi, cig
246 spells the words: ago, aho, aim, Bim, bin, cho
247 spells the words: air, bis
248 spells the words: Aht, ahu, ait, bit, cit
249 spells the words: agy, Aix, biz
252 spells the words: Aka, aka, ala, Alb, alb
253 spells the words: ake, ale, Alf, alf
255 spells the words: alk, all
256 spells the words: ako, aln, alo, blo
258 spells the words: aku, alt
259 spells the words: aly, cly
262 spells the words: ama, Ana, ana, boa, Bob, bob, cob
263 spells the words: ame, and, bod, cod, coe
264 spells the words: Ami, ami, ani, bog, cog
266 spells the words: Ann, ann, bom, Bon, bon, boo, con, coo
267 spells the words: bop, bor, Bos, cop, cor, cos
268 spells the words: amt, ant, bot, cot
269 spells the words: Amy, amy, any, bow, boy, cow, cox, coy, coz
272 spells the words: apa, ara, arc, Asa, bra
273 spells the words: ape, are, ase
275 spells the words: ark, ask
276 spells the words: arm, arn, Aro, cro
277 spells the words: asp, ass
278 spells the words: apt, Art, art, aru, ast
279 spells the words: arx, ary, cry
282 spells the words: Ata, ava, bub, cub
283 spells the words: ate, Ave, ave, Bud, bud, cud, cue
284 spells the words: Ati, auh, bug
285 spells the words: Auk, auk
286 spells the words: aum, avo, bum, bun, cum
```
</details></td></tr></tbody></table>

**References:**

-   <https://www.rosettacode.org/wiki/Textonyms>
-   <https://en.wikipedia.org/wiki/Predictive_text#Textonyms>

#

#### Towers of Hanoi

-

**Solution:**

```typescript
//@import "./towersOfHanoi.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Truth Tables

-

**Solution:**

```typescript
//@import "./truthTables.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Ulam spiral

- Write a program that, given a dimension, draws an [Ulam spiral](https://en.wikipedia.org/wiki/Ulam_spiral).
    -   An Ulam spiral is a graphical depiction of the set of prime numbers constructed by writing the positive integers in a square spiral and specially marking the prime numbers.

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=[Discussion] Ulam spiral">Discuss this problem</a></sup></em></p>

<table><tbody><tr></tr><tr><td><details><summary><strong>Solution:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```typescript
function isPrime(number) {
	if (number === 1) {
		return false;
	}

	for (let x = 2; x <= Math.sqrt(number); x++) {
		if (number % x === 0) {
			return false;
		}
	}

	return true;
```
</summary>

```typescript
}

function ulamSpiral(dimension) {
	if (dimension % 2 === 0) {
		throw new Error("`dimension` must be odd.");
	}

	const primes = [];

	for (let x = 1; x <= dimension * dimension; x++) {
		if (isPrime(x)) {
			primes.push("*");
		} else {
			primes.push(" ");
		}
	}

	const spiral = new Array(dimension).fill("").map(() => new Array(dimension).fill(""));

	let direction;
	let x = dimension - 1;
	let y = dimension - 1;

	for (let index = (dimension ** 2) - 1; index >= 0; index--) {
		spiral[x][y] = primes[index];

		switch (direction) {
			case "up":
				if (x === 0 || spiral[x - 1][y] !== "") {
					direction = "right";
					y += 1;
				} else {
					x -= 1;
				}
				break;
			case "down":
				if (x === dimension - 1 || spiral[x + 1][y] !== "") {
					direction = "left";
					y -= 1;
				} else {
					x += 1;
				}
				break;
			default:
			case "left":
				if (y === 0 || spiral[x][y - 1] !== "") {
					direction = "up";
					x -= 1;
				} else {
					y -= 1;
				}
				break;
			case "right":
				if (y === dimension - 1 || spiral[x][y + 1] !== "") {
					direction = "down";
					x += 1;
				} else {
					y += 1;
				}
				break;
		}
	}

	for (const row of spiral) {
		let line = "";

		for (const column of row) {
			line += column;
		}

		console.log(line);
	}
}

ulamSpiral(9);
```
</details></td></tr></tbody></table>

<p align="right"><em><sup><a href="https://github.com/brianjenkins94/Rosettas-Node/issues/new?title=Suggestion for Ulam spiral">Improve this answer</a></sup></em></p>

<table><tbody><tr></tr><tr><td><strong>Sample Output:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>

```
    * *  
 *     * 
* *   *  
   * * * 
  *  ** *
 * *     
*   *    
 *   *   
*     *  
```
</td></tr></tbody></table>

**References:**

-   <http://rosettacode.org/wiki/Ulam_spiral_(for_primes)>
-   <https://en.wikipedia.org/wiki/Ulam_spiral>

#

#### Vigenère cipher

-

**Solution:**

```typescript
//@import "./vigenereCipher.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Visualize a Tree

-

**Solution:**

```typescript
//@import "./visualizeATree.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Water Collected Between Towers

-

**Solution:**

```typescript
//@import "./visualizeATree.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Word Search Generator

-

**Solution:**

```typescript
//@import "./wordSearchGenerator.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Word Search Solver

-

**Solution:**

```typescript
//@import "./wordSearchSolver.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Word Wrap

-

**Solution:**

```typescript
//@import "./wordWrap.ts";
```

**Sample Output:**

```
```

**References:**

-

#

### Involved

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
					<li><a href="#abelian-sandpile-model">Abelian Sandpile Model</a></li>
					<li><a href="#chaocipher">Chaocipher</a></li>
					<li><a href="#chess960-starting-positions">Chess960 Starting Positions</a></li>
					<li><a href="#conways-game-of-life">Conway's Game of Life</a></li>
					<li><a href="#dijkstras-algorithm">Dijkstra's Algorithm</a></li>
					<li><a href="#dinesmans-multiple-dwelling-problem">Dinesman's Multiple-dwelling Problem</a></li>
					<li><a href="#dining-philosophers">Dining Philosophers</a></li>
					<li><a href="#discordian-date">Discordian Date</a></li>
					<li><a href="#egyptian-division">Egyptian Division</a></li>
					<li><a href="#egyptian-fractions">Egyptian Fractions</a></li>
					<li><a href="#evolutionary-algorithm">Evolutionary Algorithm</a></li>
					<li><a href="#forest-fire">Forest Fire</a></li>
					<li><a href="#galton-box-animation">Galton Box Animation</a></li>
					<li><a href="#huffman-encoding">Huffman Encoding</a></li>
					<li><a href="#hunt-the-wumpus">Hunt the Wumpus</a></li>
					<li><a href="#inverted-index">Inverted Index</a></li>
					<li><a href="#jaro-distance">Jaro Distance</a></li>
					<li><a href="#josephus-problem">Josephus Problem</a></li>
					<li><a href="#knapsack-problem">Knapsack Problem</a></li>
					<li><a href="#knights-tour">Knight's Tour</a></li>
					<li><a href="#langtons-ant">Langton's Ant</a></li>
					<li><a href="#levenshtein-distance">Levenshtein Distance</a></li>
					<li><a href="#longest-common-subsequence">Longest Common Subsequence</a></li>
					<li><a href="#longest-common-substring">Longest Common Substring</a></li>
					<li><a href="#markov-algorithm">Markov Algorithm</a></li>
					<li><a href="#mayan-numerals">Mayan Numerals</a></li>
					<li><a href="#maze-generator">Maze Generator</a></li>
					<li><a href="#maze-solver">Maze Solver</a></li>
					<li><a href="#metered-concurrency">Metered Concurrency</a></li>
					<li><a href="#mind-boggling-card-trick">Mind-Boggling Card Trick</a></li>
					<li><a href="#minesweeper">Minesweeper</a></li>
					<li><a href="#monte-carlo-method">Monte Carlo Method</a></li>
					<li><a href="#monte-hall-problem">Monte Hall Problem</a></li>
					<li><a href="#morse-code">Morse Code</a></li>
					<li><a href="#move-to-front-algorithm">Move-to-front Algorithm</a></li>
					<li><a href="#n-queens-problem">N-queens Problem</a></li>
					<li><a href="#password-generator">Password Generator</a></li>
					<li><a href="#rpn-calculator-algorithm">RPN Calculator Algorithm</a></li>
					<li><a href="#rpn-to-infix-converter">RPN to Infix Converter</a></li>
					<li><a href="#random-chess-positions">Random Chess Positions</a></li>
					<li><a href="#shunting-yard-algorithm">Shunting Yard Algorithm</a></li>
					<li><a href="#sokoban">Sokoban</a></li>
					<li><a href="#straddling-checkerboard">Straddling Checkerboard</a></li>
					<li><a href="#sudoku-generator">Sudoku Generator</a></li>
					<li><a href="#sudoku-solver">Sudoku Solver</a></li>
				</ol>
			</td>
		</tr>
	</tbody>
</table>

#### Abelian Sandpile Model

-

**Solution:**

```typescript
//@import "./abelianSandpile.ts";
```

**Sample Output:**

```
```

**References:**

-

#

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

-   http://www.rosettacode.org/wiki/Chaocipher

#

#### Chess960 Starting Positions

-

**Solution:**

```typescript
//@import "./chess960.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Conway's Game of Life

-

**Solution:**

```typescript
//@import "./gameOfLife.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Dijkstra's Algorithm

-

**Solution:**

```typescript
//@import "./dijkstrasAlgorithm.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Dinesman's Multiple-dwelling Problem

-

**Solution:**

```typescript
//@import "./dinemansProblem.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Dining Philosophers

-

**Solution:**

```typescript
//@import "./diningPhilosophers.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Discordian Date

-

**Solution:**

```typescript
//@import "./discordianDate.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Egyptian Division

-

**Solution:**

```typescript
//@import "./egyptianDivision.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Egyptian Fractions

-

**Solution:**

```typescript
//@import "./egyptianFractions.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Evolutionary Algorithm

-

**Solution:**

```typescript
//@import "./evolutionaryAlgorithm.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Forest Fire

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

#

#### Galton Box Animation

-

**Solution:**

```typescript
//@import "./galtonBox.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Huffman Encoding

-

**Solution:**

```typescript
//@import "./huffmanEncoding.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Hunt the Wumpus

-

**Solution:**

```typescript
//@import "./huntTheWumpus.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Inverted Index

-

**Solution:**

```typescript
//@import "./invertedIndex.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Jaro Distance

-

**Solution:**

```typescript
//@import "./jaroDistance.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Josephus Problem

-

**Solution:**

```typescript
//@import "./josephusProblem.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Knapsack Problem

-

**Solution:**

```typescript
//@import "./knapsackProblem.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Knight's Tour

-

**Solution:**

```typescript
//@import "./knightsTour.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Langton's Ant

-

**Solution:**

```typescript
//@import "./langtonsAnt.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Levenshtein Distance

-

**Solution:**

```typescript
//@import "./levenshteinDistance.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Longest Common Subsequence

-

**Solution:**

```typescript
//@import "./longestCommonSubsequence.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Longest Common Substring

-

**Solution:**

```typescript
//@import "./longestCommonSubstring.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Markov Algorithm

-

**Solution:**

```typescript
//@import "./markovAlgorithm.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Mayan Numerals

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

#

#### Maze Generator

-

**Solution:**

```typescript
//@import "./mazeGenerator.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Maze Solver

-

**Solution:**

```typescript
//@import "./mazeSolver.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Metered Concurrency

-

**Solution:**

```typescript
//@import "./meteredConcurrency.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Mind-Boggling Card Trick

-

**Solution:**

```typescript
//@import "./mindBogglingCardTrick.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Minesweeper

-

**Solution:**

```typescript
//@import "./minesweeper.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Monte Carlo Method

-

**Solution:**

```typescript
//@import "./monteCarloMethod.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Monte Hall Problem

-

**Solution:**

```typescript
//@import "./monteHallProblem.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Morse Code

-

**Solution:**

```typescript
//@import "./morseCode.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Move-to-front Algorithm

-

**Solution:**

```typescript
//@import "./moveToFrontAlgorithm.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### N-queens Problem

-

**Solution:**

```typescript
//@import "./nQueensProblem.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Password Generator

-

**Solution:**

```typescript
//@import "./passwordGenerator.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### RPN Calculator Algorithm

-

**Solution:**

```typescript
//@import "./rpnCalculatorAlgorithm.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### RPN to Infix Converter

-

**Solution:**

```typescript
//@import "./rpnToInfixConverter.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Random Chess Positions

-

**Solution:**

```typescript
//@import "./randomChessPositions.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Shunting Yard Algorithm

-

**Solution:**

```typescript
//@import "./shuntingYardAlgorithm.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Sokoban

-

**Solution:**

```typescript
//@import "./sokoban.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Straddling Checkerboard

-

**Solution:**

```typescript
//@import "./straddlingCheckerboard.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Sudoku Generator

-

**Solution:**

```typescript
//@import "./sudokuGenerator.ts";
```

**Sample Output:**

```
```

**References:**

-

#

#### Sudoku Solver

-

**Solution:**

```typescript
//@import "./sudokuSolver.ts";
```

**Sample Output:**

```
```

**References:**

-

#

### Acknowledgements

-   [Rosetta Code](http://rosettacode.org/wiki/Rosetta_Code)

### License

`Rosettas-Node` is licensed under the [MIT License](https://github.com/brianjenkins94/Rosettas-Node/blob/master/LICENSE).

All files located in the `node_modules` directory are externally maintained libraries used by this software which have their own licenses; it is recommend that you read them, as their terms may differ from the terms in the MIT License.
