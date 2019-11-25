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

<hr>

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
```
</summary>

```
Fizz
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
```
</summary>

```typescript
function isPalindrome(string) {
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
```
</summary>

```
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
</details></td></tr></tbody></table>

**References:**

-   <http://rosettacode.org/wiki/Leap_year>
-   <https://en.wikipedia.org/wiki/Leap_year>

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
					<li><a href="#balanced-brackets">Balanced Brackets</a></li>
					<li><a href="#caesar-cipher">Caesar Cipher</a></li>
					<li><a href="#caesar-cipher-solver">Caesar Cipher Solver</a></li>
					<li><a href="#recursion-limit">Recursion Limit</a></li>
					<li><a href="#history-variables">History Variables</a></li>
					<li><a href="#last-letter-first-letter">Last Letter-First Letter</a></li>
					<li><a href="#ordered-words">Ordered Words</a></li>
					<li><a href="#pangram-checker">Pangram Checker</a></li>
					<li><a href="#pascals-triangle">Pascal's Triangle</a></li>
					<li><a href="#quine">Quine</a></li>
					<li><a href="#remove-duplicate-elements">Remove Duplicate Elements</a></li>
					<li><a href="#semordnilap">Semordnilap</a></li>
					<li><a href="#sparkline">Sparkline</a></li>
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
					<li><a href="#birthday-problem">Birthday Problem</a></li>
					<li><a href="#substitution-cipher">Substitution Cipher</a></li>
					<li><a href="#suffix-tree-generator">Suffix Tree Generator</a></li>
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
```
</summary>

```typescript
	})[0].length;

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
```
</summary>

```typescript
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
```
</summary>

```
     are separated        by     at      least     one     space. 
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
```
</summary>

```typescript
];

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
```
</summary>

```
^
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
```
</summary>

```typescript
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
```
</summary>

```typescript
		const readStream = createInterface({
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
The recursion limit is: 12551
```
</td></tr></tbody></table>

**References:**

-   <http://rosettacode.org/wiki/Find_limit_of_recursion>
-   <https://en.wikipedia.org/wiki/Recursion_(computer_science)>

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
```
</summary>

```typescript
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
```
</summary>

```
> Rollback twice

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
```
</summary>

```typescript
	}
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
```
</summary>

```
Electabuzz
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
Porygon
Machoke
Machamp
Magnemite
Magneton
Muk
Marowak
Mr. Mime
Magmar
Magikarp
Moltres
Mewtwo
Mew
Dugtrio
Doduo
Dodrio
Dewgong
Drowzee
Ditto
Dratini
Ivysaur
Dragonair
Dragonite
Farfetch'd
Flareon
Zapdos
```
</details></td></tr></tbody></table>

**References:**

-   <http://rosettacode.org/wiki/Last_letter-first_letter>

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
```
</summary>

```typescript
readStream.on("line", function(word) {
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
```
</summary>

```
ablow
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
an
ansu
ant
Antu
antu
any
Ao
apt
ar
Art
art
arty
aru
arx
ary
As
as
ast
at
aw
ax
Ay
ay
B
b
be
befist
befit
befop
beg
begin
bego
behint
behn
beknow
Bel
bel
below
belt
bely
Ben
ben
beno
bent
benty
Benu
ber
Bert
bes
best
bet
bevy
bey
Bhil
bhoy
bijou
bijoux
bilo
Bim
bin
bino
bint
biopsy
bios
birsy
bis
bit
biz
blo
blot
blow
blowy
bo
bop
bor
bort
borty
bortz
Bos
bot
bouw
bow
boxy
boy
Bu
bu
buy
by
C
c
ce
ceil
Celt
celt
cent
cep
ceps
certy
cest
chi
chil
Chimu
Chin
chin
chino
chint
chintz
Chiot
Chip
chip
chips
chit
chlor
cho
chop
chort
Chou
chow
cist
cit
city
clop
clot
clow
cloy
cly
cop
copr
copsy
Copt
copy
cor
Cory
cos
cost
cosy
cot
cow
cowy
cox
coxy
coy
coz
crux
cry
cuvy
D
d
de
deft
defy
deg
degu
dehors
dehort
Deimos
Deino
deinos
deist
deity
Del
demos
demy
den
dent
denty
deny
dev
dew
dewy
dey
dhow
dhu
di
dilo
dim
dimps
dimpsy
din
dint
dioxy
dip
dirt
dirty
dis
dit
div
dixy
do
dop
Dor
dor
dorty
Dory
dory
dos
Dot
dot
doty
dow
doxy
druxy
dry
dux
E
e
Efik
eft
egilops
ego
eh
el
elm
elmy
elops
els
elt
Em
em
empt
empty
emu
en
Enos
enow
ens
envy
er
ers
es
eu
ex
ey
F
f
fi
film
filmy
filo
fils
Fin
fin
Fiot
fip
fir
first
fist
fisty
fit
fix
Flo
flop
flory
flot
flow
flu
flux
fly
Fo
fop
For
for
Forst
fort
forty
fot
fou
fow
fox
foxy
foy
fry
fu
G
g
ghost
ghosty
Ghuz
Gi
Gil
gilo
gilpy
gilt
gim
gimp
gin
gio
gip
girt
gist
git
glop
glor
glory
glost
glow
gloy
gnu
go
Gor
gor
gorsy
gory
gos
got
goy
Guy
guy
guz
H
h
hi
hilt
him
himp
hin
hint
hip
his
hist
hit
Ho
ho
hop
Horst
horst
horsy
hory
host
hot
how
hox
hoy
Hu
Hy
I
i
Ijo
ilot
imp
impy
imu
in
Ino
Io
io
is
ist
it
ivy
J
j
Jo
jo
Jos
jot
jow
joy
Ju
K
k
klop
klops
knop
knot
know
Ko
ko
kop
kor
Kory
kos
kou
Kru
L
l
Lo
lo
lop
lors
lory
lost
Lot
lot
Lou
low
lowy
lox
loy
Lu
lux
ly
M
m
Mo
mo
mop
mopsy
mor
mort
most
mot
mou
mow
moy
Mr
Mrs
Mru
mu
mux
my
N
n
No
no
nor
Nosu
nosy
not
Nou
now
nowy
noy
nu
O
o
opsy
opt
or
ort
ory
Os
os
ow
ox
oxy
P
p
pry
pst
pu
puxy
Q
q
R
r
rux
S
s
st
Stu
sty
suz
T
t
tu
tux
U
u
V
v
W
w
wy
X
x
Y
y
Z
z
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
```
</summary>

```typescript
function isPangram(string) {
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
```
</summary>

```typescript
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
```
</summary>

```typescript
readStream.on("line", function(word) {
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
```
</summary>

```
aga
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
lemel
level
M
m
maam
madam
Malayalam
Mam
mem
mesem
mim
minim
mum
murdrum
N
n
Nan
nan
non
noon
nun
O
o
Ofo
oho
Oto
Otto
otto
P
p
pap
peep
pep
pip
poop
Pop
pop
pup
Q
q
R
r
radar
redder
refer
repaper
retter
rever
reviver
rotator
rotor
S
s
Samas
Senones
Seres
siris
Sis
sis
sooloos
Sus
T
t
Tat
tat
tebbet
Tebet
teet
tenet
terret
tit
toot
tot
tst
tut
tyt
U
u
ulu
ululu
umu
Uru
utu
V
v
W
w
waw
wow
X
x
Y
y
yaray
yoy
Z
z
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
```
</summary>

```typescript
	const max = Math.max(...dataset);
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
```
</summary>

```typescript
const textonyms = {};

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
```
</summary>

```
25 spells the words: ak, Al, al
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
287 spells the words: Aus, bur, bus, cup, cur
288 spells the words: but, cut
293 spells the words: awd, awe, axe, aye, bye
296 spells the words: awn, azo, cwm
322 spells the words: dab, ebb
323 spells the words: dad, dae, fad, fae
324 spells the words: dag, dah, fag
325 spells the words: dak, dal
326 spells the words: dam, Dan, dan, dao, ean, fam, Fan, fan
327 spells the words: dap, dar, das, ear, far
328 spells the words: eat, fat
329 spells the words: daw, day, Fay, fay
332 spells the words: Deb, deb
333 spells the words: dee, fed, fee
334 spells the words: deg, edh, fei
335 spells the words: Del, eel
336 spells the words: den, Edo, fen
338 spells the words: dev, eft, fet, feu
339 spells the words: dew, dey, few, fey, fez
342 spells the words: dha, dib, fib
343 spells the words: did, die, fid, fie
344 spells the words: dig, egg, fig
346 spells the words: dim, din, ego, Fin, fin
347 spells the words: dip, dis, fip, fir
348 spells the words: dhu, dit, div, fit
353 spells the words: eke, eld, elf
355 spells the words: elk, ell
356 spells the words: elm, Flo
358 spells the words: elt, flu
362 spells the words: Dob, dob, doc, fob
363 spells the words: dod, doe, eme, end, fod, foe
364 spells the words: dog, fog
366 spells the words: dom, Don, don, Emm, eon, Fon, foo
367 spells the words: dop, Dor, dor, dos, ens, fop, For, for
368 spells the words: Dot, dot, emu, fot, fou
369 spells the words: dow, fow, fox, foy
372 spells the words: era, fra
373 spells the words: erd, ere
377 spells the words: err, ers, ess
379 spells the words: dry, fry
382 spells the words: dub, eta, Eva, fub
383 spells the words: dud, due, Eve, eve, fud
386 spells the words: dum, dun, duo, fum, fun
387 spells the words: dup, Fur, fur
393 spells the words: dye, Ewe, ewe, eye
422 spells the words: gab, iba
423 spells the words: Gad, gad, had, ice
424 spells the words: gag, hag, hah, ich
425 spells the words: gaj, gal, hak, Hal
426 spells the words: gam, gan, ham, han, hao, Ian, iao, Ibo
427 spells the words: gap, gar, gas, hap
428 spells the words: gat, gau, hat, hau
429 spells the words: gaw, gay, gaz, haw, hay, icy
433 spells the words: Ged, ged, Gee, gee, ide, ife
436 spells the words: gem, gen, geo, hem, hen, Ido
437 spells the words: ger, Ges, hep, her
438 spells the words: get, het
439 spells the words: gey, gez, hew, hex, hey
442 spells the words: Gib, gib, hia, hic
443 spells the words: gid, gie, gif, hie
444 spells the words: gig, ihi
446 spells the words: gim, gin, gio, him, hin
447 spells the words: gip, hip, his
448 spells the words: git, hit
455 spells the words: ilk, ill
462 spells the words: goa, gob, hob, Ima
463 spells the words: God, god, hod, hoe, Ind
464 spells the words: gog, goi, hog, hoi, imi, Ing, ing
465 spells the words: gol, ink
466 spells the words: gon, goo, Hon, inn, Ino, ion
467 spells the words: Gor, gor, gos, hop, imp
468 spells the words: gnu, got, hot, imu
469 spells the words: goy, how, hox, hoy
472 spells the words: gra, Ira
476 spells the words: ism, iso
482 spells the words: hub, Ita, iva
483 spells the words: gud, gue, hud, hue
484 spells the words: hug, huh, Hui
485 spells the words: gul, Huk
486 spells the words: Gum, gum, gun, hum, Hun, Ito
487 spells the words: gup, gur, Gus, hup, its
488 spells the words: gut, hut
489 spells the words: Guy, guy, guz, ivy
492 spells the words: Hwa, iwa
496 spells the words: gym, gyn, iyo
497 spells the words: gyp, hyp
522 spells the words: jab, lab, lac
523 spells the words: Kaf, lad
524 spells the words: jag, kai, lag, Lai, lai
525 spells the words: Kaj, Lak, lak
526 spells the words: Jam, jam, Jan, kan, lam, lan, Lao
527 spells the words: Jap, jap, jar, lap, Lar, lar, las
528 spells the words: Jat, kat, lat
529 spells the words: jaw, Jay, jay, Kaw, Kay, kay, law, lax, lay, Laz
532 spells the words: kea, keb, Lea, lea
533 spells the words: jed, Jef, ked, Kee, kef, led, Lee, lee
534 spells the words: keg, leg, lei
536 spells the words: Jem, Ken, ken, Len, Leo
537 spells the words: kep, Ker, Ler, Les
538 spells the words: jet, ket, let, leu, lev
539 spells the words: Jew, kex, key, Lew, lew, Lex, ley
542 spells the words: jib, Kha
543 spells the words: lid, lie, Lif
546 spells the words: Jim, Jin, Kim, kim, kin, lim, Lin, lin
547 spells the words: kip, lip, lis
548 spells the words: khu, Kit, kit, lit, Liv
562 spells the words: Job, job, koa, kob, Loa, loa, lob
563 spells the words: Joe, joe, lod, lof
564 spells the words: jog, koi, log
566 spells the words: Jon, kon, loo
567 spells the words: Jos, kop, kor, kos, lop
568 spells the words: jot, kou, Lot, lot, Lou
569 spells the words: jow, joy, low, lox, loy
572 spells the words: Kra, kra
582 spells the words: Kua, Luc
583 spells the words: jud, lue
584 spells the words: jug, Kui, Lug, lug, Lui
586 spells the words: Jun, Lum, lum, Luo
587 spells the words: Jur, Lur
588 spells the words: jut, lut
622 spells the words: Mab, Mac, mac, naa, nab
623 spells the words: mad, mae, nae, oaf, obe
624 spells the words: mag, Mah, nag, obi, och
625 spells the words: mal, nak, oak, ock
626 spells the words: Mam, man, mao, nam, Nan, nan, oam
627 spells the words: map, Mar, mar, mas, nap, nar, oar
628 spells the words: Mat, mat, mau, nat, oat
629 spells the words: maw, Max, May, may, naw, nay
632 spells the words: nea, neb, oda
633 spells the words: Ned, nee, nef, odd, ode, off
634 spells the words: Meg, nei
636 spells the words: mem, men, Meo, neo, Ofo
637 spells the words: Mer, Mes, Nep, nep, Ods, oer, oes
638 spells the words: met, Mev, Net, net, oft
639 spells the words: mew, new, Odz
642 spells the words: mib, nib
643 spells the words: mid, nid
644 spells the words: mig, nig, oii
645 spells the words: Mil, mil, nil, oil
646 spells the words: mho, mim, min, nim, ohm, oho
647 spells the words: mir, Nip, nip
649 spells the words: mix, nix
653 spells the words: Old, old, Ole
662 spells the words: mob, noa, nob, Ona, ona
663 spells the words: Mod, Moe, nod, one
664 spells the words: mog, Moi, nog
666 spells the words: Mon, mon, moo, non
667 spells the words: mop, mor, nor, ons
668 spells the words: mot, mou, not, Nou
669 spells the words: mow, moy, now, noy
672 spells the words: ora, orb, orc, Osc
673 spells the words: ope, ore, orf, ose
678 spells the words: Mru, opt, ort
682 spells the words: nub, Ova, ova
683 spells the words: mud, ouf
684 spells the words: mug, nth
686 spells the words: mum, mun, nun, Oto
687 spells the words: Mus, our
688 spells the words: nut, out
692 spells the words: Mwa, Mya
693 spells the words: nye, owd, owe
695 spells the words: owk, owl
722 spells the words: pac, Rab, rab, saa, sab, Sac, sac
723 spells the words: pad, rad, sad
724 spells the words: pah, rag, rah, sag, sah, sai
725 spells the words: pal, Raj, raj, saj, Sak, Sal, sal
726 spells the words: Pam, pam, Pan, pan, Ram, ram, Ran, ran, Sam, sam, San, san, sao
727 spells the words: pap, par, rap, ras, sap, sar
728 spells the words: Pat, pat, pau, rat, sat
729 spells the words: paw, pax, pay, raw, rax, Ray, ray, saw, sax, say
732 spells the words: pea, rea, reb, sea, sec
733 spells the words: ped, pee, Red, red, Ree, ree, ref, see
734 spells the words: Peg, peg, reg, reh, seg
736 spells the words: pen, sen
737 spells the words: pep, Per, per, pes, rep, ser
738 spells the words: pet, ret, rev, set
739 spells the words: pew, Rex, rex, sew, sex, sey
742 spells the words: Pia, pia, pic, ria, rib, Ric, sha, Sia, sib, sic
743 spells the words: pie, rhe, rid, rie, she, Sid, sie
744 spells the words: phi, pig, rig, shi, sig
745 spells the words: pik, Rik, sil
746 spells the words: pho, Pim, pin, rho, rim, Rio, rio, Sho, sho, Sim, sin
747 spells the words: pip, pir, rip, sip, Sir, sir, Sis, sis
748 spells the words: phu, pit, rit, Shu, sit
749 spells the words: pix, rix, shy, six
759 spells the words: ply, sky, sly
762 spells the words: Poa, pob, Rob, rob, roc, sma, sob, soc
763 spells the words: pod, poe, Rod, rod, roe, sod, soe
764 spells the words: poh, poi, rog, roi, sog, soh
765 spells the words: pol, Rok, sok, Sol, sol
766 spells the words: pom, pon, Ron, Son, son
767 spells the words: Pop, pop, sop
768 spells the words: pot, rot, sot, sou, sov
769 spells the words: pow, pox, poy, row, rox, Roy, sny, sow, soy
774 spells the words: psi, Sri, sri, Ssi
778 spells the words: pst, ssu
779 spells the words: pry, Spy, spy
782 spells the words: pua, pub, qua, Rua, rub, sub
783 spells the words: pud, rud, rue, sud, Sue, sue
784 spells the words: pug, rug, Sui
785 spells the words: pul, Suk
786 spells the words: pun, quo, Rum, rum, run, sum, sun
787 spells the words: pup, pur, pus, Rus, sup, sur, Sus
788 spells the words: put, rut, Stu, Suu
789 spells the words: rux, sty, suz
792 spells the words: pya, swa
793 spells the words: rye, Syd, sye
822 spells the words: taa, Tab, tab, Uca
823 spells the words: Tad, tad, tae
824 spells the words: tag, Tai, tai, tch, ubi, vag, Vai
825 spells the words: taj, Tal, tal, tck, Val
826 spells the words: tam, tan, Tao, tao, Van, van
827 spells the words: tap, tar, vas
828 spells the words: Tat, tat, tau, tav, vat, vau
829 spells the words: taw, tax, tay
832 spells the words: tea, tec
833 spells the words: Ted, ted, tee, vee
834 spells the words: teg, Udi, vei
836 spells the words: ten, udo
839 spells the words: tew, tez, vex
842 spells the words: tha, tib, tic, via, Vic
843 spells the words: The, the, tid, tie, vie
844 spells the words: tig, ugh
846 spells the words: Tho, tho, Tim, tin, vim
847 spells the words: tip, Vip, vis
853 spells the words: uke, ule
854 spells the words: tji, uji
862 spells the words: toa, Una
863 spells the words: Tod, tod, toe, ume, Vod, voe
864 spells the words: tog, toi, vog
865 spells the words: tol, vol
866 spells the words: Tom, ton, too
867 spells the words: top, Tor, tor, ump
868 spells the words: tot, tou, umu
869 spells the words: tow, tox, toy, vow
872 spells the words: tra, ura
873 spells the words: urd, ure, urf, use
874 spells the words: tri, Uri, ush
876 spells the words: upo, urn, Uro
878 spells the words: tst, Uru, ust
882 spells the words: tua, tub, Uta, uta, uva
883 spells the words: tue, Ute
884 spells the words: tug, tui, vug
886 spells the words: tum, tun, vum
887 spells the words: tup, tur
888 spells the words: tut, utu
894 spells the words: Twi, tyg
922 spells the words: wab, Wac, zac
923 spells the words: wad, wae, Waf, yad, zad
924 spells the words: wag, wah, yah, zag
925 spells the words: yak, zak
926 spells the words: wan, yam, yan, Yao, Zan
927 spells the words: wap, war, was, yap, yar, yas, zar
928 spells the words: Wat, wat, yat, zat
929 spells the words: waw, wax, way, yaw, zax
932 spells the words: Wea, web, yea, Zea
933 spells the words: wed, wee, yed, yee, zed, zee
936 spells the words: wem, wen, yen, yeo, Zen
937 spells the words: wer, Wes, yep, yer, yes, Zep, zer
938 spells the words: wet, yet
939 spells the words: wey, yew, yex, yez
943 spells the words: wid, Yid
944 spells the words: wig, zig
946 spells the words: who, wim, Win, win, Yin, yin
947 spells the words: wir, wis, yip, yis, zip
949 spells the words: why, wiz
962 spells the words: wob, Zoa, zoa
963 spells the words: wod, woe, yoe
964 spells the words: wog, yoi
966 spells the words: won, woo, yom, yon, zoo
967 spells the words: wop, yor
968 spells the words: wot, yot, you
969 spells the words: wow, woy, yow, yox, yoy
986 spells the words: wun, Yun
987 spells the words: wup, wur, yus
2222 spells the words: abac, Abba, acca, baba, caba, Caca
2224 spells the words: Babi, bach
2225 spells the words: Baal, baal, back, cack
2227 spells the words: abas, baar, Babs
2229 spells the words: Abby, baby
2233 spells the words: abed, bade, baff, cade
2234 spells the words: cadi, cafh
2238 spells the words: abet, baft
2243 spells the words: Abie, ache, acid, cage, caid
2246 spells the words: bago, baho, bain, Cagn, Cain, cain
2247 spells the words: abir, Acis, Bais
2248 spells the words: baht, bait
2252 spells the words: baka, Bala
2253 spells the words: able, acle, bake, bald, bale, cake, calf
2254 spells the words: Bali, bali
2255 spells the words: balk, ball, calk, call
2256 spells the words: balm, calm
2258 spells the words: Baku, baku, Balt, balu
2259 spells the words: ably, caky, calx
2262 spells the words: Bana, banc, camb, Cana
2263 spells the words: acme, acne, band, bane, Came, came, cand, cane
2264 spells the words: Aani, bang, bani
2265 spells the words: bank, cank
2267 spells the words: acor, camp
2268 spells the words: bant, cant
2269 spells the words: abox, cany
2272 spells the words: bara, barb, Cara
2273 spells the words: acre, bard, Bare, bare, base, Cape, cape, card, care, Case, case
2274 spells the words: Absi, Bari, bari, bash, Caph, caph, cash
2275 spells the words: bark, bask, cark, Carl, carl, cask
2276 spells the words: barm, barn, Caro
2277 spells the words: bass, carp, carr, cass
2278 spells the words: Aaru, Bart, baru, Bast, bast, cart, cast
2282 spells the words: acta, cava
2283 spells the words: bate, baud, cate, cave
2284 spells the words: Bath, bath
2285 spells the words: baul, cauk, caul
2286 spells the words: baun, caum
2287 spells the words: Acts, bats, caup
2288 spells the words: abut, actu, batt
2289 spells the words: batz, cavy
2292 spells the words: Baya, baya, caza
2293 spells the words: bawd, baze
2295 spells the words: acyl, bawl, cawk
2323 spells the words: Adad, adad, bead
2325 spells the words: beak, beal, Beck, beck
2326 spells the words: Adam, beam, bean
2327 spells the words: Adar, Afar, afar, bear
2328 spells the words: adat, beat, beau
2329 spells the words: adaw, aday
2332 spells the words: Adda, adda, affa
2333 spells the words: beef, cede
2337 spells the words: beer, bees
2338 spells the words: Addu, adet, beet
2339 spells the words: Addy, affy
2346 spells the words: Adin, bego, behn
2352 spells the words: Beja, bela
2355 spells the words: bell, cell
2358 spells the words: belt, Celt, celt
2362 spells the words: bema, bena
2363 spells the words: bend, bene
2364 spells the words: admi, beng, Beni, beni
2366 spells the words: aeon, benn, beno
2368 spells the words: bent, Benu, cent
2372 spells the words: besa, cepa
2373 spells the words: bere, cepe, cere
2374 spells the words: berg, Beri
2376 spells the words: aero, berm, Bern, cern, cero
2377 spells the words: Bess, ceps, cess
2378 spells the words: Bert, best, cest
2379 spells the words: adry, aery
2382 spells the words: Beta, beta
2384 spells the words: Beth, beth, ceti
2422 spells the words: bibb, chaa, chab, Chac
2423 spells the words: Bice, bice, chad
2424 spells the words: Agag, bibi, chai
2425 spells the words: agal, bick, chal
2426 spells the words: Agao, Cham, cham, chao
2427 spells the words: agar, Aias, Bhar, bias, chap, char
2428 spells the words: Agau, bhat, chat
2429 spells the words: Agaz, chaw, chay
2433 spells the words: aged, agee, aide, bide, biff, chee, chef
2436 spells the words: agen, ahem, bien, Chen
2437 spells the words: ager, bier
2438 spells the words: Ahet, Chet
2439 spells the words: ahey, chew
2442 spells the words: agha, Agib, biga, chia, chic
2444 spells the words: bigg, chih
2445 spells the words: Bhil, chil
2446 spells the words: agio, Chin, chin
2447 spells the words: Ahir, Chip, chip
2452 spells the words: agla, bija
2453 spells the words: aile, bike, bile
2455 spells the words: bilk, Bill, bill
2463 spells the words: bind, bine, biod, cine
2464 spells the words: agog, bing, binh, Bini
2465 spells the words: bink, Chol, chol
2466 spells the words: agon, Ahom, aion, bino, bion, cion
2467 spells the words: bios, chop
2468 spells the words: aint, Ainu, bint, Chou
2469 spells the words: ahoy, bhoy, chow
2472 spells the words: Agra, Aira
2473 spells the words: agre, aire, bird, cise
2475 spells the words: birk, birl
2476 spells the words: birn, cipo
2478 spells the words: airt, cist
2482 spells the words: agua, chub
2483 spells the words: ague, bite, Chud, cite, cive
2484 spells the words: biti, chug
2486 spells the words: ahum, bito, chum, Chun, chun
2488 spells the words: bhut, bitt, chut
2492 spells the words: biwa, Bixa
2522 spells the words: alba, Alca, blab
2523 spells the words: albe, blad, blae, clad
2524 spells the words: Albi, blah, clag
2526 spells the words: Akan, Alan, alan, alco, blan, clam, clan
2527 spells the words: ajar, alar, alas, blas, clap
2528 spells the words: blat, clat
2529 spells the words: blaw, blay, claw, Clay, clay
2532 spells the words: Alea, alec, alfa, bleb
2533 spells the words: akee, alee, alef, blee, cled, clee, clef
2536 spells the words: alem, alen, bleo, Clem, clem
2539 spells the words: akey, Alex, clew
2542 spells the words: Akha, akia, alga
2546 spells the words: Akim, akin, alin, Clio
2547 spells the words: blip, clip
2548 spells the words: alit, clit
2549 spells the words: Algy, Alix
2559 spells the words: alky, Ally, ally
2562 spells the words: Alma, alma, blob, bloc
2563 spells the words: alme, alod, aloe, clod
2564 spells the words: ajog, clog
2567 spells the words: alms, alop, clop
2568 spells the words: akov, blot, clot
2569 spells the words: alow, blow, clow, cloy
2572 spells the words: Akra, akra
2582 spells the words: blub, club
2583 spells the words: blue, clue
2586 spells the words: alto, alum
2587 spells the words: Alur, blup, blur
2622 spells the words: amba, anba, boba, coca
2625 spells the words: anal, bock, coak, coal, cock
2626 spells the words: ambo, Anam, anam, anan, bobo, Coan, coco
2627 spells the words: amar, Anas, boar
2628 spells the words: Anat, boat, coat
2629 spells the words: Anax, anay, coax
2632 spells the words: anda, coda
2633 spells the words: Ande, bode, code, coed, coff
2636 spells the words: Amen, amen, Bodo, codo
2637 spells the words: anes, Boer
2639 spells the words: Amex, Andy, anew, body
2642 spells the words: Amia, amic, boga
2643 spells the words: amid, boid, coif
2645 spells the words: amil, anil, boil, coil
2646 spells the words: amin, ango, Bogo, bogo, boho, coho, coin
2647 spells the words: Amir, amir, anis, Bois, coir
2649 spells the words: bogy, Coix
2652 spells the words: amla, bola, Cola, cola
2653 spells the words: boke, bold, bole, coke, cold, Cole, cole
2654 spells the words: amli, ankh, coli
2655 spells the words: bolk, boll, colk, coll
2656 spells the words: bojo, Bolo, bolo
2658 spells the words: bolt, Colt, colt
2659 spells the words: coky, coly
2662 spells the words: Amma, amma, Anna, anna, anoa, boma, bomb, boob, coma, comb
2663 spells the words: Anne, bond, bone, bood, boof, come, cond, cone, coof
2664 spells the words: Ammi, bong, Boni
2665 spells the words: amok, bonk, book, bool, conk, cook, cool
2666 spells the words: ammo, anon, boom, boon, conn, coom, coon
2667 spells the words: amor, Amos, boor, coop, Coos
2668 spells the words: ammu, boot, coot
2669 spells the words: Amoy, bony, cony
2672 spells the words: amra, ansa, bora, Bosc, copa, Cora, cora
2673 spells the words: bord, bore, bose, cope, cord, core, corf
2674 spells the words: borg, borh, bosh, cosh
2675 spells the words: bosk, cork
2676 spells the words: born, Boro, boro, bosn, corm, corn
2677 spells the words: boss, copr, corp, coss
2678 spells the words: ansu, bort, Copt, cost
2679 spells the words: copy, Cory, cosy
2682 spells the words: Anta, anta, bota
2683 spells the words: ante, bote, boud, cote, coue, cove
2684 spells the words: Anti, anti, both, coth
2685 spells the words: Aoul, bouk, coul
2686 spells the words: boun, coto
2687 spells the words: anus, coup
2688 spells the words: Antu, antu, bott, bout
2692 spells the words: boza, coxa
2693 spells the words: Boyd, coze
2695 spells the words: amyl, bowk, bowl, cowl
2696 spells the words: bozo, coyo
2699 spells the words: boxy, cowy, coxy, cozy
2722 spells the words: Arab, arba, arca, brab, crab
2723 spells the words: arad, Brad, brad, brae
2724 spells the words: arch, asci, brag, crag
2726 spells the words: Bram, bran, cram, cran
2727 spells the words: apar, arar, crap
2729 spells the words: braw, bray, craw, Crax
2732 spells the words: area, crea
2733 spells the words: ared, bred, bree, Cree, cree
2738 spells the words: ardu, Bret, bret
2739 spells the words: apex, brew, brey, crew, Crex
2742 spells the words: aria, Asha, crib, cric
2744 spells the words: apii, brig, crig
2746 spells the words: apio, Argo, argo, brim, brin, crin
2747 spells the words: Apis, Cris
2762 spells the words: arna, brob, croc
2763 spells the words: apod, Arne, brod
2764 spells the words: arni, brog
2766 spells the words: broo, Crom
2767 spells the words: arms, asop, asor, crop
2769 spells the words: army, arow, brow, crow, croy
2773 spells the words: apse, arse, asse
2782 spells the words: aqua, asta
2786 spells the words: aquo, Arum, crum
2787 spells the words: Apus, crus
2789 spells the words: arty, crux
2822 spells the words: Auca, auca, buba, Cuba
2823 spells the words: aube, Bube, cube
2825 spells the words: aval, bual, buck, cuck
2826 spells the words: Bubo, bubo
2827 spells the words: atap, Avar
2833 spells the words: atef, buff, cuff
2836 spells the words: Aten, bufo
2837 spells the words: ates, aver, Aves
2843 spells the words: auge, avid
2844 spells the words: augh, Bugi
2845 spells the words: Atik, buhl
2847 spells the words: atip, atis, Avis, buhr, cuir
2852 spells the words: Atka, aula, bulb
2853 spells the words: atle, auld, cuke
2855 spells the words: bulk, bull, cull
2858 spells the words: aulu, bult, cult
2862 spells the words: atma, Buna, buna, Cuna
2863 spells the words: aune, bund
2866 spells the words: atmo, atom, Cuon
2867 spells the words: atop, bump, cump
2868 spells the words: aunt, bunt
2869 spells the words: avow, buoy
2872 spells the words: aura, curb
2873 spells the words: burd, bure, curd, cure
2874 spells the words: burg, Buri, buri, bush, cush
2875 spells the words: burl, busk, curl, cusk
2876 spells the words: burn, buro, curn
2877 spells the words: burp, burr, buss, curr, cusp, cuss
2878 spells the words: ausu, burt, bust, Curt, curt
2879 spells the words: atry, bury, busy
2882 spells the words: Atta, atta
2883 spells the words: aute, Bute, cute
2924 spells the words: awag, ayah
2926 spells the words: Awan, cyan
2933 spells the words: awee, axed, byee
2946 spells the words: awin, ayin, bygo
2947 spells the words: Axis, axis
2953 spells the words: axle, cyke
2966 spells the words: axon, azon, byon
2969 spells the words: awny, azox
3222 spells the words: dabb, Ecca, Faba
3223 spells the words: dace, ecad, face
3232 spells the words: Dada, dada
3233 spells the words: dade, daff, fade, faff
3236 spells the words: dado, Eben
3238 spells the words: Dadu, daft
3243 spells the words: eche, fage
3245 spells the words: Dail, fail
3246 spells the words: Dago, dain, echo, fain
3247 spells the words: dags, dais, fair
3253 spells the words: Dale, dale, fake
3255 spells the words: dalk, fall
3259 spells the words: faky, falx
3262 spells the words: dama, Dana, Fama, fana
3263 spells the words: dame, dand, Dane, Eboe, eboe, fame, fand
3264 spells the words: dang, Dani, fang
3266 spells the words: damn, ebon, faon
3273 spells the words: Dard, dare, ease, fare
3274 spells the words: darg, dari, dash, dasi, fash
3275 spells the words: dark, Earl, earl, farl
3276 spells the words: darn, earn, farm, faro
3277 spells the words: darr, fass
3278 spells the words: dart, east, ecru, fast
3282 spells the words: data, daub
3283 spells the words: date, daud, Dave, eave, fate
3286 spells the words: faun, favn
3287 spells the words: Daur, eats
3289 spells the words: dauw, Davy, davy
3293 spells the words: daze, faze
3296 spells the words: Dawn, dawn, fawn
3323 spells the words: dead, deaf
3325 spells the words: deal, deck, feak, feal, feck
3326 spells the words: Dean, dean
3327 spells the words: dear, fear
3328 spells the words: debt, feat
3332 spells the words: Edda, edea
3333 spells the words: deed, feed
3336 spells the words: dedo, deem, eddo, Eden
3337 spells the words: deep, deer, feer
3339 spells the words: defy, Eddy, eddy
3343 spells the words: edge, feif
3345 spells the words: Efik, feil
3348 spells the words: degu, edit
3353 spells the words: dele, delf
3355 spells the words: dell, fell
3363 spells the words: deme, Dene, dene, Feme, feme, fend, feod
3368 spells the words: dent, fent
3369 spells the words: demy, deny
3375 spells the words: desk, ferk
3376 spells the words: derm, dern, fern
3377 spells the words: dess, fess
3378 spells the words: feru, fest
3423 spells the words: dice, egad, fice
3424 spells the words: dhai, dich
3425 spells the words: dhak, dial, Dick, dick
3426 spells the words: dhan, Dian, dian, Egbo, fico
3427 spells the words: dibs, fiar
3428 spells the words: Diau, fiat
3433 spells the words: fide, Fife, fife
3436 spells the words: Dido, diem, Fido, fifo
3438 spells the words: diet, eheu
3453 spells the words: Dike, dike, fike, file
3455 spells the words: dill, fill
3456 spells the words: dilo, film, filo
3463 spells the words: dime, dine, find, fine
3465 spells the words: dink, diol, egol, fink
3466 spells the words: Dion, Finn
3468 spells the words: dint, Fiot
3472 spells the words: Disa, disc, fisc
3473 spells the words: dird, dire, fire, fise
3474 spells the words: dish, fish
3475 spells the words: Dirk, dirk, dirl, disk, firk
3476 spells the words: firm, firn
3478 spells the words: dirt, fist
3482 spells the words: dita, diva
3483 spells the words: dite, dive, five
3499 spells the words: dixy, fizz
3526 spells the words: Ejam, flam, flan
3529 spells the words: flaw, flax, flay
3533 spells the words: fled, flee
3539 spells the words: flew, flex, fley
3552 spells the words: ekka, Ella
3562 spells the words: flob, floc
3563 spells the words: elod, floe
3564 spells the words: Ekoi, flog
3566 spells the words: ejoo, Elon
3569 spells the words: elmy, flow
3625 spells the words: dock, foal
3626 spells the words: enam, eoan, foam
3633 spells the words: dodd, Dode, doff
3637 spells the words: doer, does
3643 spells the words: doge, Enid, Enif
3645 spells the words: Emil, foil
3646 spells the words: Emim, fogo
3647 spells the words: dogs, emir
3648 spells the words: doit, emit
3649 spells the words: dogy, fogy
3653 spells the words: doke, dole, fold, fole
3654 spells the words: doli, Enki
3655 spells the words: doll, folk
3662 spells the words: doob, Emma, emma
3663 spells the words: dome, done, food
3665 spells the words: dook, dool, enol, fool
3666 spells the words: domn, Donn, doom, doon, fono
3667 spells the words: door, Enos, fons
3668 spells the words: dont, font, foot
3669 spells the words: domy, enow
3672 spells the words: dopa, Dora, dosa, fora, forb
3673 spells the words: dope, dose, ense, ford, fore
3674 spells the words: Dori, fosh
3676 spells the words: dorm, dorn, form
3677 spells the words: dorp, doss
3678 spells the words: empt, fort
3679 spells the words: Dory, dory
3683 spells the words: dote, dove, foud
3686 spells the words: Doto, doum, foun
3687 spells the words: doup, dour, four
3689 spells the words: doty, envy
3693 spells the words: dowd, dowf, doze, emyd
3695 spells the words: dowl, fowk, fowl
3697 spells the words: dowp, Emys
3699 spells the words: doxy, dozy, foxy, fozy
3722 spells the words: drab, esca, frab
3726 spells the words: dram, Fram
3728 spells the words: drat, frat
3729 spells the words: draw, dray, fray
3733 spells the words: dree, epee, Fred, free
3739 spells the words: Drew, drew
3742 spells the words: drib, epha, epic, eria, Eric, eric, frib
3763 spells the words: erne, esne, froe
3767 spells the words: drop, epos, Eros, eros
3769 spells the words: drow, Esox, frow
3779 spells the words: Eppy, espy
3782 spells the words: drub, eruc
3784 spells the words: drug, erth, Esth
3824 spells the words: etch, fuci
3825 spells the words: dual, duck
3826 spells the words: Duco, Evan
3833 spells the words: dude, duff, fuff
3835 spells the words: duel, fuel
3837 spells the words: duer, ever
3848 spells the words: Duit, duit, fugu
3853 spells the words: Duke, duke
3855 spells the words: dull, fulk, full
3862 spells the words: duma, dumb, etna
3863 spells the words: dune, evoe, fume, fund
3865 spells the words: dunk, funk
3867 spells the words: dump, Duns
3868 spells the words: dunt, funt
3869 spells the words: duny, fumy
3872 spells the words: dura, fusc
3873 spells the words: dupe, dure, fuse
3875 spells the words: dusk, furl
3876 spells the words: durn, duro
3878 spells the words: dust, fust
3882 spells the words: Etta, etua
3893 spells the words: fuye, fuze
3923 spells the words: dyad, dyce
3927 spells the words: Dyas, eyas
3937 spells the words: dyer, ewer, exes, eyer
3953 spells the words: dyke, fyke
3963 spells the words: dyne, eyne
3966 spells the words: Exon, exon
3972 spells the words: eyra, Ezra
3973 spells the words: eyre, fyrd
4223 spells the words: Gabe, haaf, Habe, Ibad
4233 spells the words: gade, gaff, hade, haff, iced
4235 spells the words: Gael, hadj
4236 spells the words: gaen, haem
4238 spells the words: gaet, haet, haft
4243 spells the words: gage, ibid
4245 spells the words: Gail, haik, hail
4246 spells the words: gain, hain, icho
4247 spells the words: gair, hair, ibis
4248 spells the words: gait, ichu
4252 spells the words: gala, hala
4253 spells the words: Gale, gale, haje, hake, hale, half
4255 spells the words: gall, hall
4256 spells the words: hako, halo
4257 spells the words: galp, hals
4258 spells the words: galt, haku, halt
4262 spells the words: gamb, iamb
4263 spells the words: game, gane, hame, hand
4264 spells the words: gang, hami
4265 spells the words: gaol, Hank, hank
4266 spells the words: Gaon, Hano, icon
4267 spells the words: gamp, Hans
4268 spells the words: gant, hant
4272 spells the words: Gapa, gapa, gara, garb, Harb
4273 spells the words: gape, gare, hard, hare
4274 spells the words: gash, Hapi, hash
4275 spells the words: hark, harl, hask
4276 spells the words: gapo, garn, Garo, harm, harn
4277 spells the words: gasp, harp, harr, hasp
4278 spells the words: gast, hapu, hart, Harv
4279 spells the words: gapy, Gary
4282 spells the words: gata, gaub
4283 spells the words: gate, gaud, gave, hate, have
4284 spells the words: hath, Hati
4285 spells the words: Gaul, haul
4286 spells the words: gaum, gaun
4287 spells the words: gaup, gaur, gaus
4288 spells the words: gaut, hatt
4293 spells the words: gaze, haze
4295 spells the words: gawk, hawk
4296 spells the words: gawm, gawn, hawm
4299 spells the words: gazy, hayz, hazy
4323 spells the words: head, heaf
4325 spells the words: geal, geck, heal, heck
4327 spells the words: gear, heap, hear
4328 spells the words: Geat, geat, heat
4335 spells the words: geek, heel
4337 spells the words: heer, ides
4338 spells the words: geet, heft
4339 spells the words: Geez, iffy
4344 spells the words: gegg, heii
4346 spells the words: gein, Hein
4353 spells the words: geld, hele, idle
4355 spells the words: gell, hell
4363 spells the words: Gene, gene, heme, hend
4365 spells the words: heml, idol
4367 spells the words: gens, hemp
4368 spells the words: gent, genu, hent
4372 spells the words: gerb, Herb, herb
4373 spells the words: herd, here
4376 spells the words: germ, hern, hero
4377 spells the words: gers, hers
4378 spells the words: gest, hest
4386 spells the words: Geum, geum
4433 spells the words: ghee, gied, hide
4444 spells the words: Gigi, high
4453 spells the words: gild, hike
4455 spells the words: Gill, gill, hill
4458 spells the words: gilt, hilt
4464 spells the words: ging, hing
4467 spells the words: gimp, himp
4473 spells the words: gird, hipe, hire
4474 spells the words: gish, hish
4476 spells the words: girn, giro, hiro, hisn
4477 spells the words: girr, hiss
4478 spells the words: girt, gist, hist
4483 spells the words: give, hive
4499 spells the words: gizz, hizz
4536 spells the words: Glen, glen
4539 spells the words: ikey, ilex
4542 spells the words: glia, glib, ilia
4567 spells the words: glop, glor
4569 spells the words: glow, gloy
4623 spells the words: goad, goaf, imbe, inbe
4624 spells the words: gobi, inch
4625 spells the words: goal, hock
4626 spells the words: Goan, gobo, hobo, imam
4627 spells the words: gnar, hoar
4628 spells the words: gnat, goat
4629 spells the words: gnaw, goby, hoax, inby
4633 spells the words: gode, goff, inde
4637 spells the words: goer, goes, hoer, Imer
4639 spells the words: indy, Inez
4642 spells the words: hoga, Inga, Inia
4646 spells the words: Gogo, gogo, Hohn, hoin
4653 spells the words: Gold, gold, golf, hold, hole
4655 spells the words: Goll, holl
4656 spells the words: Golo, holm
4658 spells the words: hoju, holt
4659 spells the words: holy, inky, inly
4662 spells the words: Goma, Gona
4663 spells the words: Gond, gone, good, goof, home, hone, hood, hoof, Ione
4664 spells the words: gong, hong, immi, Ioni
4665 spells the words: gook, gool, honk, hook
4666 spells the words: goon, homo, hoon
4667 spells the words: Goop, hoop
4669 spells the words: gony, homy
4672 spells the words: gora, gorb, hora
4673 spells the words: gore, hope, hose
4674 spells the words: gosh, Hopi, hopi, impi
4676 spells the words: horn, inro
4679 spells the words: gory, hory, impy
4682 spells the words: Hova, iota
4683 spells the words: gote, gove, hove
4684 spells the words: Goth, hoti
4687 spells the words: goup, hour
4692 spells the words: Hoya, Iowa
4693 spells the words: gowf, howe
4695 spells the words: gowk, gowl, howk, howl
4722 spells the words: grab, isba
4726 spells the words: gram, Iran
4739 spells the words: grew, grey
4743 spells the words: grid, ipid, irid
4746 spells the words: grim, grin
4747 spells the words: grip, gris, iris, Isis
4769 spells the words: grow, ismy
4786 spells the words: grum, grun
4826 spells the words: guan, guao, Ivan
4832 spells the words: gufa, Itea
4833 spells the words: gude, guff, hued, huff
4836 spells the words: item, Iten
4837 spells the words: huer, iter
4842 spells the words: Guha, guib, huia
4846 spells the words: Hugo, ivin
4852 spells the words: gula, hula
4853 spells the words: gule, Gulf, gulf, huke
4855 spells the words: gull, hulk, hull
4862 spells the words: guna, Huma
4864 spells the words: hung, hunh
4865 spells the words: gunj, gunk, gunl, hunk
4867 spells the words: gump, hump
4872 spells the words: Hupa, Hura, hura
4873 spells the words: hure, Hurf, huse
4874 spells the words: gush, hush
4875 spells the words: gurk, gurl, hurl, husk
4877 spells the words: gurr, guss, hurr, huss
4878 spells the words: gurt, guru, gust, hurt
4927 spells the words: Izar, izar
4953 spells the words: gyle, hyke, hyle, izle
4963 spells the words: gyne, hyne
4973 spells the words: gype, gyre
4976 spells the words: gyro, hypo
4977 spells the words: Gyps, gyps
4983 spells the words: gyte, gyve
5225 spells the words: Jack, jack, lack
5233 spells the words: jade, lade
5238 spells the words: Kadu, laet
5239 spells the words: jady, lady
5242 spells the words: Jaga, kaha, laic
5243 spells the words: kaid, laid
5245 spells the words: jail, kaik, kail
5246 spells the words: Jain, kago, lain
5248 spells the words: kagu, kahu
5252 spells the words: kaka, kala
5253 spells the words: Jake, jake, kale, lake
5254 spells the words: kaki, kali
5256 spells the words: jako, kalo, lalo
5262 spells the words: jama, jamb, jaob, kana, lama, lamb, Lana
5263 spells the words: Jane, jane, kame, lame, land, lane
5264 spells the words: jami, kang
5265 spells the words: jank, lank
5267 spells the words: kans, lamp
5272 spells the words: jara, kapa, kasa, lasa
5273 spells the words: jape, lard
5274 spells the words: jarg, Kari, Lari, lari, lash, Lasi
5275 spells the words: Jarl, jarl, Karl, lark, lask
5276 spells the words: karo, kasm
5277 spells the words: jass, kapp, Lapp, Lars, lass
5282 spells the words: Java, kava, lata, lava
5283 spells the words: Kate, late, laud, lave
5284 spells the words: jati, kath, Kavi, lath
5286 spells the words: jato, jaun, laun
5287 spells the words: jaup, laur
5296 spells the words: kayo, lawn
5299 spells the words: jawy, jazz, lazy
5323 spells the words: Lead, lead, leaf
5324 spells the words: Leah, lech
5325 spells the words: keck, leak, leal, leck
5326 spells the words: Jean, jean, leam, lean
5327 spells the words: leap, Lear, lear
5333 spells the words: Jeff, jeff, lede, leed
5335 spells the words: jeel, keek, keel, leek
5337 spells the words: jeep, jeer, keep, Kees, leep, leer, lees
5338 spells the words: keet, leet, left
5343 spells the words: Keid, Leif
5353 spells the words: keld, Kele, kele
5355 spells the words: jell, kelk, kell
5362 spells the words: kemb, Lena
5363 spells the words: kend, lend, lene
5366 spells the words: Kenn, keno, leno, Leon
5367 spells the words: kemp, lens
5368 spells the words: Kent, kent, Lent, lent
5375 spells the words: jerk, jerl
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

-

**Solution:**

```typescript
//@import "./ulamSpiral.ts";
```

**Sample Output:**

```
```

**References:**

-

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

<hr>

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
					<li><a href="#conways-game-of-life">Conway's Game of Life</a></li>
					<li><a href="#dijkstras-algorithm">Dijkstra's Algorithm</a></li>
					<li><a href="#dinesmans-multiple-dwelling-problem">Dinesman's Multiple-dwelling Problem</a></li>
					<li><a href="#dining-philosophers">Dining Philosophers</a></li>
					<li><a href="#discordian-date">Discordian Date</a></li>
					<li><a href="#egyptian-division">Egyptian Division</a></li>
					<li><a href="#egyptian-fractions">Egyptian Fractions</a></li>
					<li><a href="#evolutionary-algorithm">Evolutionary Algorithm</a></li>
					<li><a href="#markov-algorithm">Markov Algorithm</a></li>
					<li><a href="#forest-fire">Forest Fire</a></li>
					<li><a href="#galton-box-animation">Galton Box Animation</a></li>
					<li><a href="#chess960-starting-positions">Chess960 Starting Positions</a></li>
					<li><a href="#random-chess-positions">Random Chess Positions</a></li>
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
					<li><a href="#rpn-calculator-algorithm">RPN Calculator Algorithm</a></li>
					<li><a href="#rpn-to-infix-converter">RPN to Infix Converter</a></li>
					<li><a href="#shunting-yard-algorithm">Shunting Yard Algorithm</a></li>
					<li><a href="#password-generator">Password Generator</a></li>
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

<hr>

### Acknowledgements

-   [Rosetta Code](http://rosettacode.org/wiki/Rosetta_Code)

### License

`Rosettas-Node` is licensed under the [MIT License](https://github.com/brianjenkins94/Rosettas-Node/blob/master/LICENSE).

All files located in the `node_modules` directory are externally maintained libraries used by this software which have their own licenses; it is recommend that you read them, as their terms may differ from the terms in the MIT License.
