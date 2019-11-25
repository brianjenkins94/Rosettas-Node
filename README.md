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
5376 spells the words: jerm, kern
5377 spells the words: Jess, jess, lerp, less
5378 spells the words: jert, jest, Jesu, kept, lest
5383 spells the words: jete, lete, leud
5386 spells the words: keto, Leto, levo
5388 spells the words: Ketu, Lett
5399 spells the words: Jewy, kexy
5423 spells the words: jibe, kibe
5424 spells the words: jibi, lich
5425 spells the words: kick, lick
5427 spells the words: khar, liar, Lias
5433 spells the words: jiff, Lide, lied, lief, life
5436 spells the words: lien, lifo
5437 spells the words: Kids, kier, lier
5438 spells the words: khet, lieu, lift
5446 spells the words: Kiho, liin
5452 spells the words: lija, Lila
5453 spells the words: kike, like, lile
5454 spells the words: Kiki, kiki
5455 spells the words: Jill, kill, lill
5456 spells the words: kiln, kilo
5458 spells the words: jilt, kiku, kilt, lilt
5462 spells the words: jina, kina, Lima, limb, Lina, lina
5463 spells the words: kind, lime, line
5464 spells the words: jing, King, king, ling
5465 spells the words: jink, kink, link
5466 spells the words: jinn, kino, limn, linn, lino, lion
5467 spells the words: jimp, limp
5468 spells the words: khot, limu, lint
5469 spells the words: jhow, jinx, limy, liny
5472 spells the words: lipa, lira, Lisa
5473 spells the words: kipe, lire, Lise
5474 spells the words: Jiri, kiri, kish, lish
5475 spells the words: Kirk, kirk, lisk
5477 spells the words: kiss, lisp, liss
5478 spells the words: kist, List, list
5482 spells the words: jiva, kiva
5483 spells the words: jive, kite, lite, live
5484 spells the words: jiti, kith, lith
5494 spells the words: kiwi, kiyi
5526 spells the words: klam, Klan
5622 spells the words: knab, loca
5623 spells the words: koae, load, loaf, lobe
5624 spells the words: joch, knag, kobi, Koch, loch, loci
5625 spells the words: Jock, jock, lock
5626 spells the words: Joan, jobo, loam, loan, lobo, loco
5627 spells the words: knap, knar
5628 spells the words: jocu, kobu
5633 spells the words: knee, koff, lode
5635 spells the words: Joel, koel
5638 spells the words: kmet, knet, koft, loft
5639 spells the words: Joey, joey, knew, knez
5645 spells the words: Kohl, kohl, koil
5646 spells the words: John, join, loin
5647 spells the words: loir, Lois
5652 spells the words: kola, loka, Lola
5653 spells the words: joke, loke
5655 spells the words: joll, loll
5656 spells the words: Koko, koko, kolo, Lolo
5658 spells the words: jolt, koku
5662 spells the words: knob, kona, loma
5663 spells the words: Kome, lone, lood, loof
5664 spells the words: Jong, Joni, Komi, long
5665 spells the words: Lonk, look
5666 spells the words: joom, Joon, loom, loon
5667 spells the words: knop, loop
5668 spells the words: knot, loot
5672 spells the words: Kora, kora, Lora, lora
5673 spells the words: Jose, Kore, kore, lope, Lord, lord, lore, lose
5674 spells the words: Josh, josh, koph, kopi, kori, Lori, lori, losh
5676 spells the words: Koso, lorn, loro
5677 spells the words: joss, lors, loss
5679 spells the words: Kory, lory
5682 spells the words: jota, Jova, knub, Kota, Lota, lota
5683 spells the words: Jove, lote, loud, love
5685 spells the words: jouk, louk
5687 spells the words: knur, lots, Loup, loup, lour
5688 spells the words: Knut, knut, lout
5696 spells the words: kozo, lown
5699 spells the words: Jozy, lowy
5822 spells the words: juba, Kuba, kuba, Luba
5823 spells the words: jube, lube, luce
5825 spells the words: juck, luck
5826 spells the words: Juan, Kuan, kuan
5829 spells the words: Lucy, lucy
5833 spells the words: Jude, luff
5836 spells the words: judo, ludo
5842 spells the words: Juga, Juha
5843 spells the words: kuge, luge
5852 spells the words: kula, Lula
5853 spells the words: juke, Jule, Luke, luke
5854 spells the words: Kuki, Kuli
5858 spells the words: juju, kuku, Lulu, lulu
5863 spells the words: June, june, lune
5864 spells the words: kung, lung
5865 spells the words: junk, kunk
5866 spells the words: Juno, lunn
5867 spells the words: jump, lump
5868 spells the words: junt, lunt
5872 spells the words: Jura, kusa, lura
5873 spells the words: jupe, jure, Kurd, lupe, lure
5874 spells the words: Juri, Kuri, lurg, Luri, lush
5875 spells the words: lurk, lusk
5878 spells the words: just, Kurt, lust
5883 spells the words: Jute, jute, lute
5926 spells the words: kwan, lyam
5927 spells the words: kyar, Lyas
5953 spells the words: Kyle, kyle
5966 spells the words: Lynn, Lyon
5969 spells the words: Jynx, jynx, lynx
5973 spells the words: lyre, lyse
6223 spells the words: mace, nace
6224 spells the words: mabi, nach
6225 spells the words: mack, nabk
6226 spells the words: maam, maco, naam, oban
6239 spells the words: obex, obey
6242 spells the words: Maga, maha, Maia, Naga, naga
6243 spells the words: mage, maid, naid, naif
6244 spells the words: Magh, Magi, magi, Mahi, naig
6245 spells the words: mail, naik, nail
6246 spells the words: maim, main, Naim, nain, naio
6247 spells the words: Nair, nais
6248 spells the words: obit, ocht
6252 spells the words: Maja, mala, Naja
6253 spells the words: make, Male, male, nake
6254 spells the words: maki, mali
6256 spells the words: majo, mako, malm, malo, nako
6258 spells the words: Maku, malt
6262 spells the words: mana, Nama, Nana, nana
6263 spells the words: mand, mane, name, nane, oboe
6264 spells the words: mang, mani
6265 spells the words: mank, obol
6266 spells the words: mamo, Mann, mano
6267 spells the words: Mans, Naos, naos
6268 spells the words: mant, nant
6269 spells the words: Manx, many
6272 spells the words: Mara, Marc, marc, masa, napa
6273 spells the words: mare, nape, nard
6274 spells the words: Mari, mash, nash, nasi
6275 spells the words: Mark, mark, marl, mask, nark
6276 spells the words: mapo, marm, maro
6277 spells the words: Mars, Mass, mass, narr
6278 spells the words: Mart, mart, maru, mast, masu, napu, nast, oast
6279 spells the words: Mary, mary, nary, oary
6283 spells the words: mate, Maud, maud, Nate, nave
6284 spells the words: math, oath
6286 spells the words: Maun, maun
6287 spells the words: Mats, natr
6288 spells the words: Matt, Natt, naut
6289 spells the words: maty, maux, navy, oaty
6292 spells the words: Maya, maya, maza
6293 spells the words: maze, naze
6325 spells the words: meak, meal, Neal, neal, neck, odal
6328 spells the words: meat, neat
6333 spells the words: Mede, meed, need
6335 spells the words: meek, odel
6337 spells the words: neep, neer, Odds, odds, Ofer
6338 spells the words: meet, neet
6346 spells the words: mein, meio, Odin
6353 spells the words: meld, mele, Nejd
6355 spells the words: mell, Nell
6366 spells the words: memo, neon
6368 spells the words: Ment, menu
6372 spells the words: mesa, Nepa
6373 spells the words: mere, mese, nese
6374 spells the words: mesh, Neri, nesh
6375 spells the words: merk, merl
6376 spells the words: mero, meso, odso
6377 spells the words: mess, ness
6383 spells the words: mete, nete, neve
6384 spells the words: neth, neti
6386 spells the words: Meum, nevo, odum
6395 spells the words: mewl, odyl
6398 spells the words: newt, next
6423 spells the words: mice, Nice, nice
6424 spells the words: ngai, Nici
6425 spells the words: Mick, mick, Nick, nick
6426 spells the words: mian, Miao, mico, Nhan, ogam
6427 spells the words: mias, Nias, nibs
6433 spells the words: mide, miff, nide, nife, ogee
6453 spells the words: Mike, mike, mild, mile, Nile, ogle
6455 spells the words: mijl, milk, mill
6456 spells the words: Milo, milo
6462 spells the words: mima, Mina, mina, nimb, Nina
6463 spells the words: Mime, mime, mind, mine, nine, oime
6464 spells the words: Mimi, Ming, ming, Ning, niog
6467 spells the words: mimp, Ogor
6468 spells the words: mint, oint
6469 spells the words: minx, miny, ohoy
6472 spells the words: Mira, nipa
6473 spells the words: mird, mire, mise, ogre
6476 spells the words: Miro, miro
6478 spells the words: mist, Ogpu
6483 spells the words: mite, Niue
6486 spells the words: nito, ogum
6488 spells the words: mitt, Mitu
6499 spells the words: mixy, nizy
6542 spells the words: okia, Olga
6543 spells the words: Okie, olid
6625 spells the words: mock, nock
6626 spells the words: moan, Noam, Oman, omao, Onan
6627 spells the words: nobs, Omar
6633 spells the words: mode, Moed, moff, node
6635 spells the words: Noel, noel
6637 spells the words: omer, oner
6639 spells the words: ondy, oofy
6645 spells the words: moil, noil
6646 spells the words: mogo, moho, moio
6647 spells the words: mohr, noir
6648 spells the words: moit, omit
6652 spells the words: Mola, mola
6653 spells the words: moke, mold, Mole, mole
6655 spells the words: Moll, Noll, noll
6656 spells the words: Mojo, mojo, moko, nolo
6659 spells the words: moky, moly, only
6662 spells the words: mona, noma, Nona
6663 spells the words: mome, mone, mood, nome, none
6665 spells the words: monk, mool, nook
6666 spells the words: momo, Mono, mono, moon, noon
6667 spells the words: moop, Moor, moor, noop, oons
6668 spells the words: Mont, moot, oont
6672 spells the words: mora, Nora
6673 spells the words: mope, more, Mose, nope, nose, oord
6674 spells the words: moph, morg, nori
6676 spells the words: morn, Moro, moro, Norm, norm, Norn
6678 spells the words: mort, most, Nosu
6683 spells the words: mote, moud, move, note
6686 spells the words: noun, Novo, onto
6687 spells the words: moup, noup, nous, onus
6688 spells the words: Mott, mott, mout
6692 spells the words: moxa, noxa, onza
6696 spells the words: mown, Moxo, moyo, onym
6698 spells the words: mowt, nowt
6699 spells the words: nowy, onyx, oozy
6725 spells the words: opal, oral
6824 spells the words: much, ouch
6825 spells the words: muck, oval
6833 spells the words: mudd, muff, Nudd, nude
6842 spells the words: muga, otic
6844 spells the words: mugg, ough
6847 spells the words: muir, Otis, Ovis
6853 spells the words: mule, nuke
6855 spells the words: mulk, mull, null
6862 spells the words: Numa, numb
6872 spells the words: Mura, mura, Musa
6873 spells the words: mure, Muse, muse, Nupe
6875 spells the words: murk, musk
6877 spells the words: muss, ours
6878 spells the words: must, oust
6886 spells the words: Otto, otto, ovum
6926 spells the words: oxan, Ozan
6936 spells the words: Owen, oxen
6937 spells the words: ower, oxer, oyer
7222 spells the words: Paba, paca, Saba, scab
7223 spells the words: Pace, pace, raad, race, Saad, sabe, scad
7224 spells the words: Rabi, rach
7225 spells the words: paal, pack, rack, sack
7226 spells the words: paco, Saan, saco, scam, scan
7227 spells the words: paar, scap, scar
7228 spells the words: pact, scat
7229 spells the words: racy, scaw
7233 spells the words: Rafe, raff, sade, safe
7234 spells the words: sadh, Safi
7237 spells the words: Sadr, sadr
7238 spells the words: raft, saft
7242 spells the words: paga, paha, raga, Raia, raia, saga, saic
7243 spells the words: Page, page, rage, raid, Raif, sage, said
7244 spells the words: pahi, sahh
7245 spells the words: paik, pail, rail, sail
7246 spells the words: paho, pain, rain, sago, Saho, saim, sain, scho
7247 spells the words: paip, pair, pais, Rais, rais, saip, sair
7252 spells the words: Pala, Raja, raja, Saka
7253 spells the words: pale, rake, Ralf, sake, sale
7254 spells the words: Pali, pali, rakh, raki, saki
7256 spells the words: palm, Salm
7257 spells the words: palp, salp
7258 spells the words: palt, raku, salt
7262 spells the words: Rama, Rana, rana, scob
7263 spells the words: pand, pane, rame, Rand, rand, rane, same, sand, sane
7264 spells the words: pang, Pani, rami, rang, rani, samh, sang, scog
7265 spells the words: pank, rank, sank
7266 spells the words: paon, rann
7267 spells the words: ramp, samp, sans
7268 spells the words: pant, rant, sant, Scot, scot
7272 spells the words: papa, para, rasa, sapa, Sara, sasa
7273 spells the words: pape, pard, pare, rape, rare, rase, Sard, sard, sare
7274 spells the words: pari, pash, pasi, rash, sari, sash
7275 spells the words: park, sark
7277 spells the words: parr, pass, rasp
7278 spells the words: Part, part, past, rapt, Sart, sart
7282 spells the words: pata, rata
7283 spells the words: pate, pave, rate, rave, sate, sauf, save, scud
7284 spells the words: path, rath, Ravi, scug
7285 spells the words: Paul, rauk, Raul, Saul
7286 spells the words: pato, Pavo, raun, saum, scum, scun
7287 spells the words: paup, saur, scup, scur
7288 spells the words: patu, paut, saut, scut
7289 spells the words: paty, pavy
7292 spells the words: raya, saya
7293 spells the words: raze, Saxe, scye
7295 spells the words: pawk, pawl
7296 spells the words: pawn, sawn
7298 spells the words: sawt, scyt
7322 spells the words: Peba, peba, Seba
7324 spells the words: peag, peai, pech, seah, sech
7325 spells the words: peak, peal, peck, reak, Real, real, reck, seak, seal, seck
7326 spells the words: pean, ream, seam, Sean
7327 spells the words: pear, reap, rear, sear
7328 spells the words: peat, rect, seat, sect
7333 spells the words: peed, redd, rede, reed, reef, seed
7335 spells the words: peek, peel, reek, reel, seek, seel
7336 spells the words: peen, redo, reem, reen, seem, seen
7337 spells the words: peep, peer, Rees, seep, seer
7338 spells the words: reet, reft
7343 spells the words: Reid, reif, Seid
7346 spells the words: peho, reim, rein, sego
7348 spells the words: reit, seit
7353 spells the words: Pele, pelf, sele, self
7355 spells the words: pell, sell
7358 spells the words: pelt, pelu, selt
7363 spells the words: pend, rend, seme, send
7364 spells the words: Remi, semi
7365 spells the words: penk, renk
7368 spells the words: pent, rent, Renu, sent
7372 spells the words: pesa, sera, Serb
7373 spells the words: qere, Sere, sere, serf
7374 spells the words: peri, qeri, resh, Seri
7376 spells the words: pepo, perm, pern, peso, sero
7377 spells the words: pess, repp, reps, resp, seps, sess
7378 spells the words: pert, Peru, pest, rest, Sept, sept, sert
7382 spells the words: Reub, seta
7383 spells the words: Pete, pete, reve
7384 spells the words: pfui, Seth, seth
7399 spells the words: pewy, sexy
7422 spells the words: Pica, pica, shab
7423 spells the words: pice, ribe, rice, Sgad, shad, sice
7424 spells the words: Pici, Rich, rich, shag, shah, Shai
7425 spells the words: pial, pick, rial, Rick, rick, siak, sial, sick
7426 spells the words: pian, pico, Sham, sham, Shan, shan, Siam
7428 spells the words: Pict, pict, shat
7429 spells the words: Shaw, shaw, shay
7432 spells the words: Rhea, rhea, shea, Sida
7433 spells the words: pied, piff, ride, rife, Riff, riff, shed, shee, side, sife
7434 spells the words: Rifi, sidi
7436 spells the words: pien, riem, Shen
7437 spells the words: pier, rier, sher, sier
7438 spells the words: Piet, piet, rift, sift
7439 spells the words: phew, sidy
7444 spells the words: shih, sigh
7445 spells the words: Phil, Shik
7446 spells the words: shim, shin, sign
7448 spells the words: phit, shiv
7452 spells the words: pika, Sika, sika
7453 spells the words: pike, pile, rile, sike, sile
7454 spells the words: piki, pili, Sikh
7455 spells the words: pill, rikk, rill, silk, sill
7456 spells the words: pilm, silo
7458 spells the words: Shlu, silt
7459 spells the words: piky, pily
7462 spells the words: Pima, pina, rima, Shoa, sima, sina
7463 spells the words: pind, pine, rime, Rind, rind, rine, shod, shoe, sime, sind, sine
7464 spells the words: phoh, Ping, ping, ring, shog, sing, sinh
7465 spells the words: pink, rink, sink, siol
7466 spells the words: phon, phoo, pino, shoo, Sion, sion
7467 spells the words: phos, pimp, shop, shoq, Shor, shor, simp
7468 spells the words: phot, pint, rimu, riot, shot, shou
7469 spells the words: piny, rimy, show
7472 spells the words: pipa, ripa
7473 spells the words: pipe, pise, ripe, rise, sipe, sire, sise
7474 spells the words: pipi, pish, sish, sisi
7475 spells the words: pirl, pisk, risk
7476 spells the words: pirn, Piro, piso
7477 spells the words: pirr, piss, risp, Riss, siss
7478 spells the words: pist, rist, sist
7482 spells the words: pita, Rita, rita, riva, Sita, Siva, siva
7483 spells the words: rite, rive, site
7484 spells the words: pith, shug, sith
7486 spells the words: shun, Sium
7488 spells the words: phut, shut
7493 spells the words: pize, size
7499 spells the words: pixy, rixy, sizy, sizz
7523 spells the words: slad, slae
7524 spells the words: skag, slag
7525 spells the words: plak, skal
7526 spells the words: plan, slam
7527 spells the words: plap, slap
7528 spells the words: plat, Skat, skat, slat, Slav
7529 spells the words: play, skaw, slaw, slay
7532 spells the words: plea, pleb, Sleb
7533 spells the words: pled, skee, Skef, sled, slee
7536 spells the words: sken, skeo
7537 spells the words: skep, sker
7539 spells the words: plew, plex, skew, skey, slew, sley
7543 spells the words: skid, slid
7546 spells the words: plim, skim, skin, slim
7547 spells the words: Skip, skip, slip
7548 spells the words: skit, skiv, slit
7563 spells the words: plod, slod, sloe
7566 spells the words: skoo, slon, sloo
7567 spells the words: plop, slop
7568 spells the words: plot, slot
7569 spells the words: plow, ploy, slow
7582 spells the words: skua, slub
7583 spells the words: plud, slud, slue
7584 spells the words: plug, slug
7586 spells the words: plum, skun, slum
7587 spells the words: plup, plus, slur
7623 spells the words: road, robe, soce
7625 spells the words: pock, rock, soak, sock
7626 spells the words: poco, roam, roan, soam, soco
7627 spells the words: pobs, roar, snap, soap, soar
7632 spells the words: sneb, soda, sofa
7633 spells the words: rodd, rode, roed, smee, sned, snee
7638 spells the words: poet, soft
7639 spells the words: roey, smew, snew, sody
7642 spells the words: poha, snib, Soga
7645 spells the words: poil, roil, soil
7646 spells the words: Pogo, soho
7648 spells the words: roit, smit
7652 spells the words: roka, Soja, soja, soka, sola
7653 spells the words: poke, Pole, pole, roke, role, Rolf, soke, sold, sole
7655 spells the words: polk, Poll, poll, roll
7656 spells the words: polo, solo
7659 spells the words: poky, poly, roky
7662 spells the words: pooa, snob, soma
7663 spells the words: pome, pond, pone, poof, Rome, rond, rone, rood, roof, snod, some, sond
7664 spells the words: pong, pooh, Rong, smog, snog, song
7665 spells the words: pook, pool, rook, rool, sonk, sook, sool
7666 spells the words: Pomo, poon, room, roon, soon
7667 spells the words: pomp, poop, poor, romp, snop, sons
7668 spells the words: pont, poot, Root, root, snot, Soot, soot
7669 spells the words: pony, Snow, snow
7672 spells the words: Rosa, sora, Sorb, sorb
7673 spells the words: pope, pore, pose, rope, rose, sope, sore
7674 spells the words: posh, qoph, Rori, soph, sori, sosh
7676 spells the words: sorn, soso
7677 spells the words: porr, poss, ropp, Ross, ross, soss
7678 spells the words: port, post, sort
7679 spells the words: pory, posy, ropy, rory, rosy, sory
7682 spells the words: rota, roub, snub
7683 spells the words: pote, pouf, rote, roud, roue, rove, soud
7684 spells the words: smug, snug
7686 spells the words: roto, roun, snum, soum
7687 spells the words: pour, roup, smur, snup, snur, sots, soup, sour
7688 spells the words: pott, pout, rout, smut
7698 spells the words: royt, sowt
7699 spells the words: poxy, rowy, Roxy, roxy
7723 spells the words: prad, spad, spae
7726 spells the words: pram, span
7727 spells the words: Spar, spar
7728 spells the words: prat, prau, spat
7729 spells the words: pray, spay
7739 spells the words: prey, spew, spex
7742 spells the words: Pria, psha
7744 spells the words: prig, spig
7746 spells the words: prim, spin
7748 spells the words: spit, spiv
7762 spells the words: proa, prob
7763 spells the words: prod, prof
7767 spells the words: prop, spor
7783 spells the words: Prue, spud
7784 spells the words: pruh, spug
7788 spells the words: prut, sput
7822 spells the words: quab, stab
7823 spells the words: puce, quad, Rube
7824 spells the words: quag, stag, such
7825 spells the words: puck, ruck, suck
7826 spells the words: puan, quan, stam, Stan, Svan
7827 spells the words: quar, stap, Star, star
7829 spells the words: quaw, quay, ruby, staw, stay
7833 spells the words: puff, rudd, rude, ruff, sudd, suff
7834 spells the words: quei, steg, Sufi
7836 spells the words: ruen, stem, sten
7837 spells the words: ruer, step, suds, suer
7838 spells the words: Pudu, pudu, quet, stet, suet
7839 spells the words: quey, Rudy, stew, stey
7842 spells the words: quib, ruga, stib
7843 spells the words: quid, stid, suid
7844 spells the words: pugh, sugh, sugi
7846 spells the words: quin, ruin, stim
7847 spells the words: quip, quis, stir
7848 spells the words: quit, suit
7852 spells the words: puja, puka, Sula
7853 spells the words: puke, pule, rule, suld
7854 spells the words: puli, rukh, suji
7855 spells the words: pulk, pull, rull, sulk, sull
7858 spells the words: puku, pulu, Suku, Sulu
7859 spells the words: puky, puly
7862 spells the words: puma, puna, stoa, stob
7863 spells the words: Pume, quod, rune, stod, stof, sune
7864 spells the words: pung, Qung, rung, stog, Sung, sung
7865 spells the words: punk, sunk
7866 spells the words: Puno, Sumo, sunn
7867 spells the words: pump, quop, rump, stop, sump
7868 spells the words: punt, quot, runt, stot, sunt
7869 spells the words: puny, stow
7872 spells the words: pupa, rupa, Rusa, stra, supa, sura
7873 spells the words: pure, ruse, stre, supe, surd, sure, surf
7874 spells the words: push, rush, susi
7875 spells the words: purl, rusk
7877 spells the words: purr, puss, Russ
7878 spells the words: Puru, ruru, rust, Susu, susu
7882 spells the words: Ruta, stub
7883 spells the words: stud, stue
7884 spells the words: Ruth, ruth, stug
7886 spells the words: stum, stun, Suto, suum
7888 spells the words: putt, stut, Sutu
7899 spells the words: puxy, Styx, Suzy
7922 spells the words: Swab, swab
7923 spells the words: swad, syce
7925 spells the words: pyal, ryal
7926 spells the words: swam, swan
7928 spells the words: Swat, swat
7946 spells the words: pyin, swim
7962 spells the words: swob, sync
7963 spells the words: ryme, rynd, syne
7968 spells the words: rynt, ryot, swot
7973 spells the words: pyre, rype, syre
7986 spells the words: swum, Syun
8225 spells the words: Taal, tack, Ucal
8228 spells the words: tabu, tact
8233 spells the words: tade, vade
8243 spells the words: tche, vage
8244 spells the words: Tchi, Ubii
8245 spells the words: tail, vail
8246 spells the words: tain, vain
8247 spells the words: tahr, vair
8248 spells the words: Tait, tait, tchu
8252 spells the words: tala, talc
8253 spells the words: take, tald, tale, vale
8254 spells the words: tali, Vali, vali
8255 spells the words: talk, tall, vall
8258 spells the words: takt, Taku
8262 spells the words: Tama, tana
8263 spells the words: Tame, tame, tane, vane
8264 spells the words: Tang, tang, tanh, uang, vang
8267 spells the words: tamp, Taos, vamp
8272 spells the words: Tapa, tapa, tara, vara, Vasa, vasa
8273 spells the words: Tape, tape, tare, vare, vase
8274 spells the words: tari, tash, vari
8276 spells the words: tarn, taro
8277 spells the words: taps, tarp, tarr, tars, Tass, tass
8278 spells the words: tapu, tart, tasu, vast, vasu
8283 spells the words: tate, Tave, tave
8286 spells the words: taum, taun
8288 spells the words: Tatu, tatu, taut
8322 spells the words: Teca, teca
8324 spells the words: Tech, tech
8325 spells the words: teak, teal, teck, udal, veal
8326 spells the words: team, tean, Teco
8327 spells the words: teap, tear
8328 spells the words: teat, Tebu
8332 spells the words: Teda, Veda
8336 spells the words: teem, teen, veen
8337 spells the words: teer, veep, veer
8342 spells the words: Udic, Vega
8345 spells the words: teil, veil
8355 spells the words: tell, vell
8358 spells the words: teju, telt
8363 spells the words: tend, Vend, vend
8368 spells the words: tent, vent
8372 spells the words: tera, vera, verb
8374 spells the words: Teri, veri
8376 spells the words: term, tern, Vern
8377 spells the words: terp, Tess, Veps
8378 spells the words: test, vert, vest
8398 spells the words: text, vext
8423 spells the words: Thad, tice, Vice, vice
8425 spells the words: tick, vial, Vick
8426 spells the words: than, Tiam, tiao
8427 spells the words: thar, tiar
8432 spells the words: Thea, theb
8433 spells the words: thee, tide, tied, tiff
8436 spells the words: them, then, Theo, tien
8437 spells the words: tier, vier
8439 spells the words: thew, they, tidy, view
8446 spells the words: thin, thio
8447 spells the words: thir, this
8453 spells the words: tile, vile
8454 spells the words: Tiki, Vili
8455 spells the words: till, vill
8459 spells the words: ugly, uily
8462 spells the words: thob, Tina, vina
8463 spells the words: thof, time, tind, tine, vine
8464 spells the words: Ting, ting
8465 spells the words: tink, viol
8466 spells the words: thon, thoo, Timo, Tino, vino
8468 spells the words: thou, tint, Tiou, vint
8469 spells the words: thow, tiny, viny
8472 spells the words: Vira, visa
8473 spells the words: tipe, tire, vire, vise
8475 spells the words: tirl, virl
8482 spells the words: vita, viva
8483 spells the words: thud, tite, vive
8484 spells the words: thug, titi, Viti
8539 spells the words: Ulex, ulex
8582 spells the words: Ulua, ulua, Ulva
8622 spells the words: Toba, unca
8623 spells the words: toad, tobe, unbe
8624 spells the words: Toag, unci
8625 spells the words: tock, unal
8626 spells the words: toco, umbo, unco
8628 spells the words: toat, unau
8629 spells the words: Toby, toby
8633 spells the words: Todd, tode, toed, toff, unde
8638 spells the words: Toft, toft, tofu, voet
8639 spells the words: tody, undy
8643 spells the words: unie, void
8646 spells the words: toho, Unio, unio
8648 spells the words: togt, toit, unit
8653 spells the words: toke, told, tole, vole
8658 spells the words: tolt, tolu, volt
8662 spells the words: Toma, tomb
8663 spells the words: tome, tone
8665 spells the words: tonk, took, tool
8666 spells the words: toom, toon
8669 spells the words: Tony, tony
8672 spells the words: tora, torc
8673 spells the words: tope, tore
8674 spells the words: toph, topi, tosh, umph
8676 spells the words: topo, torn, toro
8677 spells the words: tops, toss
8678 spells the words: tort, toru, tost
8679 spells the words: Tory, tory, tosy
8683 spells the words: tote, Vote, vote
8686 spells the words: toto, unto
8687 spells the words: toup, tour
8689 spells the words: toty, untz
8693 spells the words: towd, toze, unze
8724 spells the words: trag, trah
8725 spells the words: Ural, ural
8726 spells the words: tram, Tran, Uran, uran, urao
8727 spells the words: trap, tsar, upas, usar
8733 spells the words: tree, tref, urde, used, usee
8738 spells the words: tret, Urdu
8739 spells the words: Trey, trey
8742 spells the words: tsia, Uria, uric
8744 spells the words: trig, Tshi
8746 spells the words: trim, trin, Trio, trio, upgo
8766 spells the words: tron, upon
8769 spells the words: trow, Troy, troy
8782 spells the words: trub, urva
8786 spells the words: trun, tsun, Usun
8822 spells the words: Tuba, tuba
8824 spells the words: Utah, utai, utch
8825 spells the words: tuck, uval
8826 spells the words: Tuan, tuan
8832 spells the words: tufa, uvea
8853 spells the words: tuke, tule
8862 spells the words: Tuna, tuna
8863 spells the words: tume, tund, tune
8873 spells the words: turd, turf
8874 spells the words: Tupi, Turi, Tush, tush
8875 spells the words: Turk, turk, tusk
8876 spells the words: turm, turn
8877 spells the words: turp, turr
8933 spells the words: twee, tyee
8973 spells the words: type, tyre
8976 spells the words: typo, tyro
8977 spells the words: typp, Tyrr
9222 spells the words: Waac, yaba
9223 spells the words: wabe, wace
9224 spells the words: waag, Wabi, Zach
9233 spells the words: Wade, wade, Wafd, waff, yade, yaff
9234 spells the words: wadi, waeg
9243 spells the words: wage, waif, ycie
9245 spells the words: waik, wail
9246 spells the words: wain, zain
9252 spells the words: waka, Yaka, yalb
9253 spells the words: wake, wakf, wale, yaje, Yale, yale
9254 spells the words: wali, yali
9255 spells the words: walk, wall
9258 spells the words: Walt, walt
9263 spells the words: wame, wand, wane
9264 spells the words: wang, yang
9267 spells the words: wamp, yamp
9268 spells the words: want, zant
9269 spells the words: wany, zany
9272 spells the words: yapa, yarb
9273 spells the words: ward, ware, warf, wase, yard, yare, zarf
9275 spells the words: wark, warl, yark, yarl
9276 spells the words: warm, warn, yarm, yarn
9277 spells the words: wapp, warp, Wasp, wasp, yapp, yarr, zarp
9278 spells the words: wart, wast, Yaru
9283 spells the words: wauf, Wave, wave, yate, yaud
9284 spells the words: wath, yati, zati
9287 spells the words: waup, waur
9292 spells the words: wawa, yaya
9297 spells the words: ways, yawp, yaws
9299 spells the words: waxy, yawy
9325 spells the words: weak, weal, zeal
9326 spells the words: weam, wean, yean
9327 spells the words: wear, year
9328 spells the words: yeat, zebu
9333 spells the words: wede, weed, yede, zeed
9335 spells the words: week, weel, yeel
9337 spells the words: weep, yees
9338 spells the words: weet, weft
9353 spells the words: weld, Welf, yeld, Zeke
9355 spells the words: welk, well, yelk, yell
9357 spells the words: wels, yelp
9358 spells the words: welt, yelt
9363 spells the words: Wend, wend, wene, Zend
9364 spells the words: yeni, zemi
9368 spells the words: went, zenu
9373 spells the words: were, werf, wese, yerd, yere, yese
9376 spells the words: yern, yeso, zero
9378 spells the words: wept, wert, west, yest, zest
9382 spells the words: weta, yeta, zeta
9426 spells the words: wham, whan
9427 spells the words: whap, whar
9428 spells the words: what, whau
9433 spells the words: whee, wide, wife
9438 spells the words: whet, widu
9439 spells the words: whew, whey
9444 spells the words: Whig, whig, yigh
9446 spells the words: whim, whin
9447 spells the words: whip, whir
9448 spells the words: Whit, whit
9453 spells the words: wild, wile
9455 spells the words: wilk, Will, will, yill
9458 spells the words: wilt, yilt
9462 spells the words: whoa, Xina, zimb, zinc
9463 spells the words: wime, Wind, wind, wine
9464 spells the words: wing, zing
9465 spells the words: wink, zink
9466 spells the words: whom, whoo, Zion
9472 spells the words: Zipa, zira
9473 spells the words: wipe, wird, wire, wise, Xipe, yird
9475 spells the words: wirl, yirk
9476 spells the words: yirm, yirn
9477 spells the words: wips, wirr, wisp, wiss, yirr, Zips
9483 spells the words: whud, wite, wive, yite
9625 spells the words: woak, yock
9626 spells the words: woan, zobo
9642 spells the words: yoga, zoic
9644 spells the words: yogh, yogi
9653 spells the words: woke, wold, Wolf, wolf, yoke
9655 spells the words: yolk, zoll
9663 spells the words: wone, wood, woof, yond, zone
9665 spells the words: wool, yook
9666 spells the words: woom, woon, zoom, zoon
9668 spells the words: wont, yont
9673 spells the words: word, wore, yore
9675 spells the words: work, york
9676 spells the words: worm, worn
9683 spells the words: wote, wouf, wove, yote, youd
9687 spells the words: wots, youp, your
9698 spells the words: wowt, yowt
9736 spells the words: Wren, wren
9826 spells the words: Yuan, yuan
9838 spells the words: wudu, yuft
9855 spells the words: wulk, wull
9877 spells the words: wusp, wuss
9878 spells the words: wust, yurt
9953 spells the words: wyke, wyle
9963 spells the words: wynd, wyne, zyme
22222 spells the words: abaca, bacca
22225 spells the words: aback, cabal
22226 spells the words: bacao, caban, cacam, Cacan, cacao
22227 spells the words: abbas, cabas
22229 spells the words: babby, cabby
22243 spells the words: Abbie, bache, cache
22246 spells the words: cabin, cabio
22262 spells the words: Abama, acana, caama, cabob
22266 spells the words: baboo, bacon
22268 spells the words: abbot, cabot
22274 spells the words: abash, acari
22283 spells the words: abate, abave, acate
22326 spells the words: abeam, badan
22338 spells the words: Cadet, cadet
22339 spells the words: acedy, baffy, caddy, cadew
22343 spells the words: badge, cadge
22349 spells the words: cadgy, cafiz
22382 spells the words: bafta, cadua
22426 spells the words: Baham, bahan
22427 spells the words: achar, bahar
22433 spells the words: abide, caged
22434 spells the words: abidi, Bagdi
22437 spells the words: Abies, acher, acier, cager
22449 spells the words: baggy, caggy, cahiz
22467 spells the words: abhor, achor
22473 spells the words: bagre, caird
22476 spells the words: bairn, cairn, Cairo
22525 spells the words: bakal, Balak
22526 spells the words: bajan, Balan, Balao, balao, Cajan
22527 spells the words: abkar, balas, Calas
22537 spells the words: abler, acker, baker, baler, caker
22539 spells the words: ackey, baldy, cakey
22543 spells the words: bakie, calid
22554 spells the words: bakli, balli, calli
22559 spells the words: balky, bally
22567 spells the words: Balor, calor
22569 spells the words: ablow, balmy, balow, calmy
22572 spells the words: bajra, balsa
22586 spells the words: Cajun, cajun
22622 spells the words: Banba, banca, caoba
22625 spells the words: acock, banak, banal, canal
22626 spells the words: banco, caman
22632 spells the words: Banda, banda
22633 spells the words: abode, bande, Banff
22635 spells the words: camel, canel
22636 spells the words: bando, cameo
22637 spells the words: Abner, caner
22639 spells the words: abody, bandy, candy
22642 spells the words: acmic, banga
22643 spells the words: bange, canid
22646 spells the words: abmho, abohm, acoin
22662 spells the words: aboma, Acoma, acoma, Canna, canna
22663 spells the words: acone, canoe
22666 spells the words: aboon, canon
22673 spells the words: abord, Campe
22676 spells the words: acorn, campo, canso
22686 spells the words: canto, canun
22688 spells the words: about, Bantu
22689 spells the words: banty, canty
22692 spells the words: banya, Ccoya
22723 spells the words: barad, barbe
22725 spells the words: basal, casal
22726 spells the words: Abram, carbo, casco
22733 spells the words: acred, barff, based, caped, cased
22735 spells the words: capel, Casel
22736 spells the words: bardo, cardo
22737 spells the words: barer, bases, caper, capes, carer, caser
22738 spells the words: abret, caret
22739 spells the words: bardy, Carex, Casey
22742 spells the words: baria, baric, basic, carga, Carib, casha
22743 spells the words: acrid, barge, barid, barie, carid
22745 spells the words: Basil, basil
22746 spells the words: abrim, abrin, basin, cargo
22747 spells the words: baris, basis
22748 spells the words: absit, barit
22762 spells the words: Acroa, caroa, carob
22765 spells the words: Carol, carol
22766 spells the words: Aaron, acron, baron, bason, capon, carom
22769 spells the words: barmy, barny
22772 spells the words: barra, Bassa, Capra, capsa
22773 spells the words: barse, carse, casse
22779 spells the words: Barry, barry, cappy, Carry, carry
22782 spells the words: basta, carua
22783 spells the words: baste, carte, carve, caste
22786 spells the words: basto, Carum
22789 spells the words: Acrux, carty
22795 spells the words: acryl, caryl
22823 spells the words: batad, cavae
22824 spells the words: batch, bauch, catch, cauch
22825 spells the words: Batak, caval
22826 spells the words: Acuan, Batan, Baubo, catan
22832 spells the words: batea, cauda
22835 spells the words: batel, cavel
22837 spells the words: bater, cater
22842 spells the words: Catha, Cavia
22843 spells the words: bathe, cavie
22845 spells the words: batik, cavil
22846 spells the words: actin, bavin
22862 spells the words: abuna, cauma
22866 spells the words: acton, baton, bauno
22873 spells the words: abuse, Baure, cause
22882 spells the words: Abuta, Batta, batta, bauta
22889 spells the words: batty, Catty, catty
22966 spells the words: bazoo, caxon
23227 spells the words: bebar, becap
23243 spells the words: adage, cebid
23245 spells the words: cebil, Cecil
23259 spells the words: beaky, Becky
23269 spells the words: beamy, beany
23272 spells the words: Adapa, afara
23273 spells the words: beard, cease
23278 spells the words: adapt, beast
23282 spells the words: Beata, beata
23284 spells the words: adati, beath
23287 spells the words: cebur, Cebus
23323 spells the words: adead, bedad
23327 spells the words: afear, cedar
23329 spells the words: addax, beday
23336 spells the words: adeem, beden
23337 spells the words: adder, adeep, Aedes, ceder
23339 spells the words: bedew, beefy
23346 spells the words: bedim, bedin
23349 spells the words: adfix, affix
23364 spells the words: bedog, befog
23378 spells the words: adept, beest
23379 spells the words: beery, cedry
23423 spells the words: begad, beice
23427 spells the words: begar, behap
23436 spells the words: begem, behen
23438 spells the words: adieu, beget
23453 spells the words: Aegle, ceile
23472 spells the words: beira, beisa
23486 spells the words: begum, begun
23524 spells the words: adjag, Adlai, bekah, belah, belch
23526 spells the words: bejan, belam
23529 spells the words: adlay, belay
23542 spells the words: belga, Celia
23552 spells the words: Bella, cella
23556 spells the words: bekko, cello
23569 spells the words: aflow, below
23622 spells the words: Bemba, benab
23623 spells the words: adobe, bemad
23626 spells the words: adman, afoam, beman
23639 spells the words: adnex, bendy
23649 spells the words: admix, bemix
23659 spells the words: Benjy, benjy
23669 spells the words: Benny, benny
23673 spells the words: adore, afore, cense
23696 spells the words: adown, benzo
23726 spells the words: adpao, besan
23728 spells the words: bepat, berat
23729 spells the words: bepaw, beray
23733 spells the words: besee, cered
23738 spells the words: afret, beret, beset
23742 spells the words: aeric, Afric, ceria, ceric
23746 spells the words: besin, cerin
23763 spells the words: berne, Beroe
23774 spells the words: berri, Bessi
23779 spells the words: berry, bespy, Bessy
23784 spells the words: Aequi, berth, cequi
23795 spells the words: beryl, ceryl
23835 spells the words: betel, bevel
23837 spells the words: after, bever
23842 spells the words: aevia, cetic
23889 spells the words: Betty, betty
24226 spells the words: biabo, Chaco
24233 spells the words: Agade, chafe, chaff
24242 spells the words: Bhaga, Chaga
24246 spells the words: again, Bibio, chain
24247 spells the words: chair, chais
24252 spells the words: chaja, chaka
24262 spells the words: Agama, agama, Chama
24264 spells the words: agami, bhang, Chang, chang
24265 spells the words: chank, cibol
24267 spells the words: champ, chaos
24272 spells the words: bhara, Chara
24273 spells the words: agape, chape, chard, chare, chase
24276 spells the words: charm, chasm
24277 spells the words: agasp, chaps, charr
24278 spells the words: chapt, chart
24283 spells the words: agate, Agave
24284 spells the words: chati, Chaui
24295 spells the words: chawk, chawl
24327 spells the words: aheap, bidar, cheap
24337 spells the words: aider, Aides, bider, bifer, cheep, cheer, cider
24338 spells the words: bidet, cheet
24339 spells the words: Biddy, biddy
24352 spells the words: Cheka, chela
24353 spells the words: bield, cheke
24362 spells the words: Agena, chena
24378 spells the words: chert, chest
24426 spells the words: Aghan, Biham, Chiam, Chian, Chico, chico
24433 spells the words: chide, chief
24436 spells the words: Chien, chien
24453 spells the words: agile, child, chile
24454 spells the words: Bhili, chili
24462 spells the words: Bhima, china
24463 spells the words: ahind, chime, chine
24464 spells the words: aging, ching
24465 spells the words: Chink, chink
24468 spells the words: ahint, bigot, Chimu, chint, Chiot
24476 spells the words: chirm, chiro
24477 spells the words: chips, chirp, chirr
24482 spells the words: Chita, cigua
24542 spells the words: bilic, cilia
24543 spells the words: Ailie, bilge
24546 spells the words: Bilin, bilio
24559 spells the words: Billy, billy
24625 spells the words: Aimak, binal, chock
24633 spells the words: Ahmed, Aimee
24635 spells the words: agnel, choel, cinel
24637 spells the words: Agnes, aimer, Choes
24639 spells the words: cimex, Cindy
24643 spells the words: agoge, binge
24646 spells the words: agoho, bingo
24652 spells the words: Chola, chola
24653 spells the words: choke, chold
24663 spells the words: agone, biome
24664 spells the words: ahong, ainoi
24667 spells the words: chomp, choop
24672 spells the words: agora, chopa, Chora
24673 spells the words: biose, chord, chore, chose
24682 spells the words: Biota, biota
24687 spells the words: agnus, choup, chous
24724 spells the words: agrah, birch
24726 spells the words: agsam, ahsan, airan, cisco
24733 spells the words: agree, biped
24742 spells the words: agria, chria
24753 spells the words: aisle, birle
24766 spells the words: agrom, Biron, bison
24784 spells the words: birth, bisti
24824 spells the words: aitch, bitch
24825 spells the words: Chuck, chuck
24833 spells the words: Chude, chuff, citee
24837 spells the words: biter, citer
24874 spells the words: agush, ahush
24876 spells the words: churm, churn
24889 spells the words: bitty, civvy
24925 spells the words: ahwal, chyak
24953 spells the words: aizle, chyle
25225 spells the words: alack, black, clack
25226 spells the words: Alban, alban
25233 spells the words: albee, blade, blaff
25246 spells the words: Alain, Albin, blain, claim
25247 spells the words: Blair, blair
25252 spells the words: Ajaja, ajaja, akala, Alala, alala
25253 spells the words: Blake, blake
25254 spells the words: Akali, Alaki
25262 spells the words: blanc, clamb
25263 spells the words: aland, blame, bland, clame
25264 spells the words: alani, clang
25265 spells the words: blank, clank
25267 spells the words: Alans, Alcor, clamp
25272 spells the words: akasa, Clara
25273 spells the words: blare, blase, Clare
25274 spells the words: ajari, blash, clash
25275 spells the words: Clark, clark
25276 spells the words: alarm, claro
25277 spells the words: clasp, class
25278 spells the words: blart, blast, clapt, clart
25279 spells the words: alary, clary
25282 spells the words: ajava, clava
25283 spells the words: alate, blate, clave
25325 spells the words: aleak, Aleck, bleak, bleck, cleck
25326 spells the words: cleam, clean
25327 spells the words: blear, clear
25328 spells the words: bleat, cleat
25338 spells the words: aleft, alfet, cleft
25378 spells the words: alert, blest
25387 spells the words: Aldus, Alfur
25423 spells the words: algae, Alice, blibe
25425 spells the words: algal, Alick, blick, click
25427 spells the words: ajhar, alias
25433 spells the words: Cliff, cliff
25442 spells the words: Algic, algic
25446 spells the words: algin, align
25462 spells the words: alima, clima, climb
25463 spells the words: Aline, blind, clime, cline
25465 spells the words: Algol, blink, clink
25467 spells the words: algor, blimp
25477 spells the words: alisp, bliss, clips
25478 spells the words: alist, clipt
25483 spells the words: alite, alive, blite, clite, clive
25526 spells the words: Allan, allan
25537 spells the words: Alkes, aller
25569 spells the words: allow, alloy
25595 spells the words: alkyl, allyl
25625 spells the words: block, cloak, clock
25626 spells the words: Alman, cloam
25633 spells the words: aknee, aloed, cloff
25662 spells the words: aloma, clomb
25663 spells the words: alone, aloof, blood, clone, cloof
25666 spells the words: Almon, almon, bloom
25667 spells the words: bloop, cloop
25673 spells the words: alose, blore, close
25683 spells the words: almud, aloud, clote, cloud, clove
25684 spells the words: almug, cloth
25687 spells the words: Alnus, clour
25688 spells the words: blout, clout
25696 spells the words: blown, clown
25826 spells the words: Aluco, Alvan
25827 spells the words: altar, alvar
25833 spells the words: bluff, cluff
25837 spells the words: alter, bluer, blues
25846 spells the words: altho, altin, Alvin
25865 spells the words: blunk, clunk
25973 spells the words: blype, clype
26222 spells the words: bobac, bocca
26224 spells the words: coach, cocci
26226 spells the words: amban, anabo, cocco
26227 spells the words: amaas, ambar
26229 spells the words: ambay, Bobby, bobby, cobby
26242 spells the words: amaga, Ancha, cobia
26243 spells the words: Boche, coaid
26253 spells the words: amble, coble, Cocle
26259 spells the words: coaly, cocky
26262 spells the words: anama, anana, cocoa
26264 spells the words: amang, amani
26266 spells the words: ambon, ancon
26267 spells the words: ambos, Cocos
26272 spells the words: amapa, Amara, Anasa, coarb, cobra
26278 spells the words: boast, coapt, coast
26284 spells the words: Amati, coati
26336 spells the words: ameen, boden
26337 spells the words: boder, coder
26353 spells the words: anele, bodle
26363 spells the words: amend, amene, anend
26368 spells the words: ament, anent
26423 spells the words: amice, Anice
26432 spells the words: bohea, cnida
26433 spells the words: amide, Aoife
26436 spells the words: amido, Cohen
26443 spells the words: Angie, bogie
26446 spells the words: Amigo, coign
26453 spells the words: angle, anile, bogle
26463 spells the words: amine, anime
26464 spells the words: amini, animi
26466 spells the words: amino, anion, cogon
26467 spells the words: angor, bohor
26478 spells the words: angst, boist
26482 spells the words: Amita, Anita
26483 spells the words: bogue, cogue
26487 spells the words: Angus, bogus
26526 spells the words: anjan, Colan
26533 spells the words: ankee, boled
26537 spells the words: anker, coker
26546 spells the words: Colin, colin
26559 spells the words: bolly, colly
26566 spells the words: bokom, colon
26568 spells the words: Anjou, Ankou
26587 spells the words: ankus, bolus
26625 spells the words: annal, comal, conal
26626 spells the words: amman, Annam, bombo, Bonbo, Coman
26629 spells the words: booby, comby
26633 spells the words: anode, boned, coned, cooee
26637 spells the words: ammer, boner, comer, comes, coner, cones, cooer
26638 spells the words: annet, comet
26639 spells the words: annex, Boney, boody, comfy
26642 spells the words: amnia, amnic, comic, conga, conic
26643 spells the words: Annie, Comid
26646 spells the words: Bongo, bongo, Congo, conin
26653 spells the words: amoke, amole, anole
26659 spells the words: booky, booly, conky, cooky, cooly
26662 spells the words: comma, coomb
26669 spells the words: annoy, anomy, Bonny, bonny, boomy, Comox, Conoy, coomy, coony
26678 spells the words: amort, boort, boost, coost
26683 spells the words: amove, conte
26687 spells the words: amour, Anous, bonus, boots, Comus, conus
26693 spells the words: bonze, booze
26724 spells the words: bosch, corah
26725 spells the words: Borak, borak, boral, copal, coral
26726 spells the words: Boran, coram
26733 spells the words: boree, cored, Coree
26735 spells the words: amsel, Ansel
26737 spells the words: amper, Anser, borer, boser, coper, corer
26739 spells the words: cordy, Corey
26744 spells the words: borgh, corgi
26747 spells the words: Boris, copis
26753 spells the words: ample, corke
26759 spells the words: amply, bosky, corky
26766 spells the words: boron, bosom
26773 spells the words: copse, corse, cosse
26779 spells the words: bossy, coppy, copsy
26782 spells the words: aorta, corta, costa
26789 spells the words: borty, bortz
26795 spells the words: boryl, coryl
26824 spells the words: botch, cotch, couch
26825 spells the words: amuck, antal
26833 spells the words: coude, coved
26837 spells the words: antes, Aotes, cover
26843 spells the words: bouge, bovid, cothe, covid
26844 spells the words: bough, cough
26849 spells the words: bothy, cothy
26853 spells the words: boule, could
26872 spells the words: antra, Anura, courb
26873 spells the words: amuse, antre, bourd, bouse, coupe
26879 spells the words: anury, bousy
26886 spells the words: Antum, bouto
26925 spells the words: bozal, cowal, coxal
26926 spells the words: Cowan, coyan
26936 spells the words: boxen, cozen
26937 spells the words: bower, Boxer, boxer, boyer, cower
26952 spells the words: bowla, boyla
26959 spells the words: bowly, coyly
27222 spells the words: araba, araca, braca
27223 spells the words: apace, brace
27225 spells the words: brack, crack
27243 spells the words: apaid, arche, braid
27244 spells the words: ascii, Bragi, Craig
27246 spells the words: arain, Brahm, brain, crain
27249 spells the words: Archy, archy
27253 spells the words: arake, asale, brake, crake
27262 spells the words: Apama, asana
27263 spells the words: brand, crane
27265 spells the words: brank, crank
27267 spells the words: arbor, Arcos, cramp
27268 spells the words: Aramu, Ascot, ascot, brant
27272 spells the words: Arara, arara
27273 spells the words: crape, crare
27274 spells the words: Asaph, Asarh, brash, crash
27277 spells the words: brass, craps, crass
27279 spells the words: ascry, crapy
27282 spells the words: Araua, Brava
27283 spells the words: brave, crate, crave
27286 spells the words: bravo, cravo
27292 spells the words: Arawa, braza
27293 spells the words: braze, craze
27295 spells the words: brawl, crawl
27296 spells the words: brawn, crawm
27299 spells the words: braxy, crazy
27322 spells the words: Areca, breba
27323 spells the words: aread, bread
27325 spells the words: apeak, areal, break, breck, creak
27326 spells the words: Arean, bream, cream
27332 spells the words: Ardea, ardeb
27333 spells the words: brede, breed, creed
27335 spells the words: areek, areel, breek, Creek, creek, creel
27336 spells the words: Credo, creem, creen
27362 spells the words: arena, crena
27363 spells the words: arend, breme
27368 spells the words: arent, Brent, brent
27378 spells the words: apert, Aperu, crept, crest
27379 spells the words: apery, crepy
27382 spells the words: breva, creta
27383 spells the words: arete, breve, Crete
27388 spells the words: Brett, brett
27425 spells the words: argal, brick, crick
27426 spells the words: apian, Arian, Asian, Brian, cribo
27427 spells the words: Argas, arhar, briar
27433 spells the words: aside, Bride, bride, brief, cried
27435 spells the words: argel, Ariel, ariel
27437 spells the words: Aries, Asher, ashes, brier, crier
27443 spells the words: aphid, Argid
27447 spells the words: Aphis, Ashir
27463 spells the words: brine, crime, crine
27464 spells the words: aping, Arioi, bring
27465 spells the words: argol, brink, crink
27466 spells the words: argon, Arion
27467 spells the words: Apios, crimp
27468 spells the words: argot, ariot
27477 spells the words: briss, crisp, criss
27483 spells the words: argue, arite
27484 spells the words: brith, crith
27487 spells the words: Argus, Arius, Ashur, ashur
27537 spells the words: arles, asker
27567 spells the words: askos, aslop
27624 spells the words: broch, croci
27625 spells the words: arock, asoak, brock, croak, crock
27632 spells the words: apnea, Apoda, Arneb
27633 spells the words: armed, arnee
27638 spells the words: armet, croft
27645 spells the words: armil, broil
27662 spells the words: aroma, broma, bronc
27663 spells the words: brome, brood, crome, crone, crood
27665 spells the words: bronk, brook, brool, cronk, crook, crool
27666 spells the words: aroon, broom, broon, croon
27667 spells the words: apoop, armor
27669 spells the words: Bronx, crony
27673 spells the words: arose, brose, crore
27688 spells the words: apout, arnut, crout
27693 spells the words: crowd, croze
27696 spells the words: brown, crown
27724 spells the words: arrah, assai
27727 spells the words: Arras, arras
27729 spells the words: appay, array, assay
27736 spells the words: arpen, aspen
27737 spells the words: arses, asper
27738 spells the words: appet, asset
27747 spells the words: apsis, arris, arsis, assis
27753 spells the words: apple, arsle
27766 spells the words: apron, arson
27823 spells the words: Bruce, cruce
27825 spells the words: Aptal, artal, arval, cruck
27835 spells the words: artel, arvel, cruel
27853 spells the words: aruke, bruke, Brule
27867 spells the words: astor, crump, cruor
27868 spells the words: brunt, crunt
27872 spells the words: arupa, arusa
27874 spells the words: Asuri, brush, crush
27926 spells the words: Aryan, arzan, Bryan
27986 spells the words: arzun, Bryum
28226 spells the words: Aucan, Bucco, Cuban
28229 spells the words: bubby, cubby
28248 spells the words: buchu, cubit
28259 spells the words: Bucky, bucky
28322 spells the words: Ateba, cueca
28339 spells the words: buddy, buffy, Cuddy, cuddy, cuffy
28426 spells the words: avian, bugan
28453 spells the words: bugle, build
28458 spells the words: atilt, built
28527 spells the words: Atlas, atlas
28552 spells the words: bulla, culla
28559 spells the words: bulky, bully, cully
28624 spells the words: Atnah, bunch
28626 spells the words: atman, bumbo, Cunan
28627 spells the words: Cumar, Cunas
28642 spells the words: Bunga, cumic
28643 spells the words: atmid, avoid
28646 spells the words: bungo, cumin
28669 spells the words: atomy, atony, bunny
28679 spells the words: atopy, bumpy
28692 spells the words: bunya, Cunza
28726 spells the words: buran, burao
28729 spells the words: busby, cupay, curby
28735 spells the words: burel, cupel
28742 spells the words: atria, auric
28743 spells the words: Cupid, curie, cusie
28744 spells the words: burgh, bushi
28746 spells the words: aurin, burin, curin, curio
28747 spells the words: atrip, aurir
28749 spells the words: bushy, cushy
28759 spells the words: burly, busky, curly
28772 spells the words: bursa, Cursa
28773 spells the words: burse, curse
28776 spells the words: burro, cusso
28778 spells the words: burst, bussu, curst
28779 spells the words: burry, cuppy, curry
28824 spells the words: butch, cutch
28836 spells the words: autem, Buteo
28842 spells the words: Attic, attic, butic
28843 spells the words: attid, cutie
28889 spells the words: butty, cutty
28946 spells the words: atwin, auxin
29253 spells the words: awake, awald, cycle
29273 spells the words: award, aware
29335 spells the words: aweek, aweel
29433 spells the words: awide, azide
29463 spells the words: axine, azine
29466 spells the words: axiom, axion
29642 spells the words: azoic, cynic
29653 spells the words: awoke, azole
29687 spells the words: ayous, byous
29787 spells the words: Cyrus, cyrus
32237 spells the words: fabes, facer
32339 spells the words: daddy, daffy, faddy, faffy
32437 spells the words: eager, fager
32468 spells the words: fagot, faint
32472 spells the words: Daira, daira
32479 spells the words: dairy, daisy, fairy
32537 spells the words: daker, daler, faker
32547 spells the words: dakir, fakir
32559 spells the words: dally, fally
32626 spells the words: daman, fanam
32642 spells the words: Damia, Danic
32643 spells the words: damie, ecoid
32666 spells the words: Damon, fanon
32669 spells the words: Danny, ebony, Fanny
32723 spells the words: daraf, farad, farce
32729 spells the words: darby, farcy
32733 spells the words: eared, farde
32736 spells the words: Daren, fardo
32737 spells the words: darer, Dares, easer, farer
32746 spells the words: Dargo, Darin
32759 spells the words: darky, early
32823 spells the words: daube, ectad
32825 spells the words: ectal, fatal
32833 spells the words: eaved, fated
32836 spells the words: daven, eaten
32837 spells the words: dater, daver, eater, eaver, eaves
32845 spells the words: datil, fatil
32925 spells the words: dayal, Fayal
32969 spells the words: dawny, fawny
33225 spells the words: decal, fecal
33227 spells the words: debar, decap
33229 spells the words: Debby, debby, decay
33279 spells the words: deary, decry
33287 spells the words: debus, decus
33337 spells the words: defer, edder
33339 spells the words: deedy, feedy
33342 spells the words: Eddic, Fedia
33343 spells the words: Eddie, Effie
33427 spells the words: degas, Edgar
33439 spells the words: deify, edify
33446 spells the words: deign, feign
33478 spells the words: deist, feist
33582 spells the words: Delta, delta
33632 spells the words: denda, Deneb
33666 spells the words: Demon, demon
33729 spells the words: deray, Derby, derby
33742 spells the words: deric, feria
33743 spells the words: eerie, ferie
33762 spells the words: derma, desma
33779 spells the words: derry, ferry
33823 spells the words: deuce, educe
33827 spells the words: detar, feuar
33837 spells the words: deter, fever
33887 spells the words: detur, fetus
34237 spells the words: dicer, Fiber, fiber
34262 spells the words: diamb, Diana
34279 spells the words: diary, fibry
34282 spells the words: dhava, dicta
34337 spells the words: eider, Fides, fifer
34343 spells the words: didie, fidge, fifie
34353 spells the words: didle, field
34363 spells the words: diene, fiend
34368 spells the words: didnt, fient
34374 spells the words: dheri, Dieri
34378 spells the words: didst, egest
34448 spells the words: dight, digit, eight, fight
34537 spells the words: diker, filer
34559 spells the words: dilly, filly
34624 spells the words: dhobi, Dinah, finch
34625 spells the words: Eimak, final
34637 spells the words: dimer, diner, eimer, finer
34648 spells the words: dimit, Fingu
34659 spells the words: dimly, dinky
34666 spells the words: dhoon, Dioon
34673 spells the words: diose, fiord
34722 spells the words: Dirca, firca
34789 spells the words: dirty, fisty
34824 spells the words: ditch, fitch
34837 spells the words: diter, diver, fiver, fives
34889 spells the words: ditty, divvy, fitty
34943 spells the words: Dixie, dixie
34999 spells the words: dizzy, fizzy
35263 spells the words: eland, flame, flane
35269 spells the words: elbow, flamy
35283 spells the words: djave, elate
35299 spells the words: flawy, flaxy
35326 spells the words: Elean, fleam
35328 spells the words: eject, elect
35337 spells the words: elder, fleer
35346 spells the words: eldin, elfin
35464 spells the words: eking, fling
35468 spells the words: Eliot, flint
35483 spells the words: elite, flite
35672 spells the words: Flora, flora
35677 spells the words: elops, floss
35833 spells the words: elude, flued, fluff
35837 spells the words: elver, elves, fluer
35867 spells the words: flump, fluor
35883 spells the words: elute, flute
36229 spells the words: dobby, embay
36233 spells the words: embed, emcee
36269 spells the words: embow, embox, foamy
36287 spells the words: embus, encup, focus
36337 spells the words: emeer, ender, foder
36339 spells the words: doddy, endew
36343 spells the words: dodge, fodge
36369 spells the words: endow, enemy
36379 spells the words: Emery, emery
36428 spells the words: enhat, fohat
36449 spells the words: doggy, foggy
36459 spells the words: dogly, doily, Emily
36462 spells the words: dogma, doina
36478 spells the words: Foist, foist
36542 spells the words: dolia, folia
36559 spells the words: dolly, folky, folly
36625 spells the words: domal, Donal
36637 spells the words: domer, emmer, fomes
36638 spells the words: Donet, emmet, fondu
36639 spells the words: doney, foody
36642 spells the words: domic, donga, Donia
36659 spells the words: dooly, fonly
36662 spells the words: Donna, donna
36667 spells the words: donor, dooms
36723 spells the words: dorad, force
36729 spells the words: enray, foray, forby
36736 spells the words: Empeo, fordo
36737 spells the words: doper, doser
36739 spells the words: dopey, fordy
36742 spells the words: doria, Doric, enrib
36743 spells the words: forge, fosie
36746 spells the words: eosin, forgo
36747 spells the words: Doris, dosis
36759 spells the words: ensky, forky
36769 spells the words: dormy, formy
36783 spells the words: ensue, forte
36789 spells the words: dorty, empty, forty
36823 spells the words: douce, entad
36825 spells the words: dotal, ental
36837 spells the words: doter, dover, enter
36873 spells the words: douse, enure
36884 spells the words: fotui, fouth
36889 spells the words: Dotty, dotty
36933 spells the words: dowed, dozed
36937 spells the words: dower, dozer, foxer, foyer
37233 spells the words: draff, erade
37245 spells the words: drail, fraik, frail
37246 spells the words: drago, drain
37262 spells the words: drama, franc
37265 spells the words: drank, Frank, frank
37273 spells the words: drape, erase, frase
37283 spells the words: drate, fraud
37295 spells the words: drawk, drawl
37296 spells the words: drawn, frawn, frayn
37325 spells the words: freak, freck
37326 spells the words: dream, fream
37337 spells the words: dreep, freer
37347 spells the words: dregs, freir
37378 spells the words: drest, erept
37425 spells the words: ergal, Erick
37427 spells the words: drias, friar
37433 spells the words: dried, fried
37437 spells the words: drier, frier
37452 spells the words: erika, Frija
37455 spells the words: drill, frill
37466 spells the words: drinn, ergon
37475 spells the words: drisk, frisk
37633 spells the words: epode, erode
37663 spells the words: drome, drone, frond
37673 spells the words: erose, frore
37678 spells the words: dropt, epopt, Ernst, frost
37683 spells the words: droud, drove
37696 spells the words: drown, frown
37743 spells the words: Eppie, Essie
37822 spells the words: Eruca, eruca
37843 spells the words: druid, equid
37867 spells the words: estop, frump
37873 spells the words: drupe, Druse, druse, estre
37887 spells the words: Equus, estus
38229 spells the words: dubby, fubby
38425 spells the words: dugal, ethal, fugal
38428 spells the words: duhat, evict
38435 spells the words: Ethel, ethel
38559 spells the words: dully, fully
38637 spells the words: fumer, funds
38653 spells the words: duole, evoke, Funje
38669 spells the words: dummy, dunny, funny
38725 spells the words: dural, fural
38733 spells the words: fused, fusee
38745 spells the words: furil, fusil
38746 spells the words: Durio, dusio
38779 spells the words: duppy, durry, furry, fussy
38787 spells the words: Eurus, Fusus
38789 spells the words: dusty, fusty
38795 spells the words: duryl, furyl
38824 spells the words: Dutch, dutch
39464 spells the words: dying, eying
42334 spells the words: Gaddi, gaddi
42343 spells the words: gadge, gadid
42459 spells the words: gaily, haily, icily
42463 spells the words: gaine, haine
42467 spells the words: gagor, gains, ichor
42524 spells the words: galah, halch
42532 spells the words: galea, Hakea
42542 spells the words: Galga, hajib
42552 spells the words: Galla, galla, Hakka
42562 spells the words: halma, Haloa
42623 spells the words: hance, Iambe
42624 spells the words: ganch, hanch, iambi
42625 spells the words: Hamal, hamal
42642 spells the words: gamic, Ganga, ganga
42643 spells the words: gange, hange, hanif
42662 spells the words: gamma, hanna, haoma
42669 spells the words: gammy, hammy
42672 spells the words: hamsa, hansa
42673 spells the words: Hanse, hanse
42682 spells the words: ganta, ibota
42687 spells the words: hamus, Ianus
42692 spells the words: ganza, hamza
42723 spells the words: garad, garce
42726 spells the words: Gasan, hasan
42737 spells the words: gaper, gapes
42739 spells the words: gardy, hardy
42749 spells the words: gashy, hashy
42759 spells the words: haply, hasky
42779 spells the words: gappy, gaspy, gassy, happy, Harpy, Harry, harry
42824 spells the words: gatch, hatch
42835 spells the words: gavel, havel
42837 spells the words: gater, hater, haver
42842 spells the words: Gatha, Gavia, ictic
42844 spells the words: hathi, haugh
42858 spells the words: Gault, gault
42868 spells the words: gaunt, haunt
42872 spells the words: Gaura, Hausa
42889 spells the words: Hatty, hatty
42935 spells the words: gazel, Hazel, hazel
42937 spells the words: gazer, hawer, hazer
42959 spells the words: gawky, hawky
43283 spells the words: heave, hecte
43543 spells the words: gelid, Helge
43556 spells the words: Gekko, hello
43559 spells the words: gelly, helly
43623 spells the words: hemad, henad, hence
43625 spells the words: genal, hemal
43633 spells the words: geode, Geoff
43642 spells the words: genic, hemic
43643 spells the words: genie, geoid
43646 spells the words: genin, hemin
43662 spells the words: Gemma, gemma, Genoa, henna
43669 spells the words: gemmy, Genny, henny
43673 spells the words: genre, idose
43679 spells the words: hempy, Henry, henry
43689 spells the words: genty, geoty
43763 spells the words: herne, Ierne
43766 spells the words: Hermo, heron
43783 spells the words: geste, Herve
43937 spells the words: hewer, hexer
44268 spells the words: giant, hiant
44537 spells the words: Giles, hiker
44542 spells the words: Gilia, gilia
44559 spells the words: gilly, hilly
44669 spells the words: Ginny, ginny, hinny
44726 spells the words: Hiram, ihram
44737 spells the words: hiper, hirer
44772 spells the words: Hippa, Hispa
44773 spells the words: girse, hirse
44779 spells the words: Gippy, hippy
44837 spells the words: giver, hiver, hives
45322 spells the words: gleba, ileac
45326 spells the words: gleam, glean
45333 spells the words: glede, gleed
45366 spells the words: Glenn, ileon
45422 spells the words: Iliac, iliac
45425 spells the words: glial, ilial
45433 spells the words: glide, gliff
45673 spells the words: glore, Ijore
46226 spells the words: goban, hocco, imban, Incan
46229 spells the words: gobby, hobby
46246 spells the words: Gobio, imago
46252 spells the words: Goala, inaja
46278 spells the words: hoast, inapt
46283 spells the words: goave, imbue
46287 spells the words: hocus, incur, incus
46339 spells the words: hoddy, index
46342 spells the words: India, Indic, indic, iodic
46372 spells the words: Indra, infra
46374 spells the words: indri, Ineri
46378 spells the words: inept, inert
46425 spells the words: hoick, inial
46464 spells the words: going, Hogni
46466 spells the words: imino, inion
46529 spells the words: inlaw, inlay
46536 spells the words: golem, inken
46537 spells the words: holer, inker
46538 spells the words: inket, inlet
46539 spells the words: Goldy, goldy, hokey, holey
46559 spells the words: golly, Holly, holly
46586 spells the words: hokum, Injun
46637 spells the words: gomer, goner, goods, Homer, homer, hoofs, inner
46639 spells the words: goody, goofy, homey, honey, hooey, hoofy, immew
46642 spells the words: gonia, Ionic, ionic
46659 spells the words: hooky, hooly
46662 spells the words: gooma, inoma
46663 spells the words: gnome, gonne, inone
46673 spells the words: goose, hoose
46725 spells the words: goral, horal
46733 spells the words: hoped, horde, hosed, insee
46735 spells the words: hosel, impel
46737 spells the words: gorer, hoper
46773 spells the words: gorse, horse
46778 spells the words: Horst, horst
46779 spells the words: gorry, gorsy, gossy, hoppy, horsy
46782 spells the words: Hosta, inrub
46824 spells the words: gotch, hotch
46835 spells the words: hotel, hovel
46837 spells the words: hover, inter
46872 spells the words: gotra, Goura
46873 spells the words: gourd, house, inure
46926 spells the words: gowan, Iowan
46946 spells the words: goyim, goyin
46953 spells the words: goyle, hoyle
47223 spells the words: Grace, grace
47233 spells the words: grade, graff, irade
47263 spells the words: grame, grand, grane
47268 spells the words: Grant, grant
47274 spells the words: graph, Iraqi
47277 spells the words: grasp, grass
47283 spells the words: grate, grave, irate
47323 spells the words: grebe, grece
47326 spells the words: Grebo, Irfan
47346 spells the words: grego, grein
47363 spells the words: Irene, irene
47433 spells the words: gride, grief, Griff, griff
47463 spells the words: grime, grind
47683 spells the words: grouf, grove
48222 spells the words: guaba, huaca, hubba
48226 spells the words: guaco, gubbo, huaco
48252 spells the words: guaka, Itala
48254 spells the words: gucki, Itali
48262 spells the words: guama, Guana, guana
48272 spells the words: guara, guasa
48339 spells the words: guffy, huffy
48433 spells the words: guide, ivied
48453 spells the words: guild, guile
48527 spells the words: Gujar, gular
48559 spells the words: gully, hulky
48626 spells the words: gumbo, human, humbo
48634 spells the words: gundi, hundi
48643 spells the words: gunge, humid
48659 spells the words: gumly, hunky
48669 spells the words: gummy, gunny
48679 spells the words: humpy, ivory
48759 spells the words: gurly, hurly, Husky, husky
48766 spells the words: Huron, huron
48779 spells the words: guppy, gurry, hurry, hussy
48789 spells the words: gusty, hurty
49742 spells the words: gyric, hypha
49766 spells the words: gyron, hyson
49779 spells the words: Gypsy, gypsy
52222 spells the words: labba, lacca
52235 spells the words: kabel, label
52242 spells the words: jabia, labia
52247 spells the words: labis, lacis
52347 spells the words: Kafir, kafir
52428 spells the words: jagat, kahau
52437 spells the words: jager, lager
52462 spells the words: Jaina, lagna
52463 spells the words: Jaime, laine
52527 spells the words: jalap, Kajar, kakar
52537 spells the words: jakes, laker
52622 spells the words: Kamba, Lamba, lamba
52623 spells the words: kanae, Lance, lance
52626 spells the words: jaman, jambo, kamao, Lanao
52627 spells the words: kamas, kanap, lanas
52629 spells the words: lamby, lanaz
52635 spells the words: Kamel, lamel
52642 spells the words: kanga, lamia
52646 spells the words: lamin, Lango
52669 spells the words: jammy, lammy, Lanny
52687 spells the words: Janus, Lamus
52688 spells the words: jantu, Lamut
52724 spells the words: kapai, karbi, karch, larch
52726 spells the words: Japan, japan
52735 spells the words: Karel, lapel
52737 spells the words: japer, laser
52739 spells the words: jasey, lardy
52742 spells the words: Kasha, Laria
52743 spells the words: large, larid
52746 spells the words: largo, larin
52766 spells the words: Jarmo, Jason, lapon
52772 spells the words: jarra, kappa, Lappa
52773 spells the words: kappe, lapse
52774 spells the words: karri, lapsi
52778 spells the words: Karst, karst, kassu
52779 spells the words: jarry, Larry, larry
52787 spells the words: kapur, Larus
52824 spells the words: latah, latch
52826 spells the words: Javan, lauan
52837 spells the words: javer, later, laver
52842 spells the words: jatha, Katha, katha, lauia, lavic
52843 spells the words: Katie, lathe
52849 spells the words: Kathy, lathy
52872 spells the words: Laura, laura
52925 spells the words: kayak, Kazak
52999 spells the words: jazzy, lawzy
53224 spells the words: keach, leach
53239 spells the words: leady, leafy
53259 spells the words: kecky, leaky
53278 spells the words: leapt, least
53324 spells the words: keech, leech
53343 spells the words: kedge, ledge
53379 spells the words: jeery, leery
53437 spells the words: leger, leges
53482 spells the words: keita, legua, lehua
53484 spells the words: Keith, Leith
53542 spells the words: lekha, Lelia
53559 spells the words: jelly, Kelly, kelly
53623 spells the words: kenaf, lenad
53624 spells the words: Kenai, kench, lench
53662 spells the words: jenna, lemma, Lemna
53666 spells the words: kenno, lemon
53669 spells the words: Jemmy, jemmy, Jenny, jenny, Lenny
53737 spells the words: Keres, leper
53779 spells the words: Jerry, jerry, Kerry, kerry
53787 spells the words: Jesus, Lepus
53824 spells the words: ketch, letch, leuch
53826 spells the words: Kevan, leuco
53835 spells the words: kevel, level
53846 spells the words: Kevin, levin
53847 spells the words: levir, Levis
53889 spells the words: jetty, ketty, Letty
53947 spells the words: Lewis, lewis
54229 spells the words: jibby, Libby
54234 spells the words: khadi, kibei
54237 spells the words: Liber, liber
54254 spells the words: khaki, kiaki
54262 spells the words: jiboa, liana
54264 spells the words: Khami, kiang, liang
54272 spells the words: Khasa, Libra, libra
54339 spells the words: jiffy, kiddy, lifey
54383 spells the words: lieue, lieve
54546 spells the words: kilim, likin
54624 spells the words: kinah, Kinch, kinch, linch
54626 spells the words: liman, limbo
54629 spells the words: Limax, limby
54632 spells the words: kioea, Linda, linea
54636 spells the words: limen, lindo, linen
54637 spells the words: Khmer, limer, limes, liner
54642 spells the words: linga, linha
54643 spells the words: linge, linie
54646 spells the words: jingo, lingo, linin
54648 spells the words: Kingu, limit
54652 spells the words: jinja, Khoja, khoja, khoka, linja
54657 spells the words: jinks, links
54659 spells the words: kinky, linky
54663 spells the words: Khond, Linne
54666 spells the words: Kimmo, linon
54669 spells the words: Jimmy, jimmy, Jinny, jinny
54679 spells the words: limpy, limsy
54753 spells the words: Lisle, lisle
54779 spells the words: kippy, kissy, lippy
54824 spells the words: Khuai, litch
54827 spells the words: kitar, litas
54837 spells the words: kiver, liter, liver
54843 spells the words: kithe, lithe, livid
54889 spells the words: Kitty, kitty
56225 spells the words: knack, lobal, local
56283 spells the words: knave, loave
56286 spells the words: jocum, locum
56287 spells the words: Kobus, locus
56325 spells the words: Kodak, kodak
56335 spells the words: jodel, kneel
56426 spells the words: Johan, lohan
56442 spells the words: Kogia, logia, logic
56463 spells the words: Koine, koine
56526 spells the words: kokam, kokan, lokao
56559 spells the words: jolly, lolly
56625 spells the words: knock, konak
56642 spells the words: Konia, longa
56652 spells the words: joola, kooka
56726 spells the words: Koran, loran
56733 spells the words: joree, lored
56737 spells the words: loper, loser
56743 spells the words: Jorge, josie
56746 spells the words: korin, kosin
56747 spells the words: Josip, loris
56779 spells the words: loppy, lorry
56786 spells the words: jorum, lorum
56844 spells the words: jough, lough
56873 spells the words: loupe, louse
56883 spells the words: Knute, Lotte
56889 spells the words: jotty, louty
56926 spells the words: koyan, lowan
56937 spells the words: jower, lower
56942 spells the words: loxia, loxic
56959 spells the words: jowly, lowly
57262 spells the words: Krama, krama
57663 spells the words: krome, krone
58343 spells the words: Judge, judge
58437 spells the words: juger, luger
58524 spells the words: Kulah, kulah
58537 spells the words: julep, Jules
58543 spells the words: julid, Julie
58624 spells the words: kumbi, kunai, Kunbi, lunch
58626 spells the words: jumbo, Junco, Kuman
58679 spells the words: jumpy, lumpy
58725 spells the words: jural, lural
58726 spells the words: kusam, Kusan
58743 spells the words: Lupid, lurid
58759 spells the words: lurky, lusky
58786 spells the words: justo, Kusum, kusum
58787 spells the words: kurus, lupus
58842 spells the words: Jutic, juvia
59743 spells the words: Kyrie, Lyrid
62225 spells the words: nabak, Nabal
62226 spells the words: macan, macao, macco
62229 spells the words: macaw, Nabby
62253 spells the words: macle, nable
62326 spells the words: madam, ocean
62342 spells the words: Madia, mafic
62343 spells the words: Madge, madid
62427 spells the words: magas, mahar, Naias
62449 spells the words: Maggy, naggy
62462 spells the words: magma, Ochna
62463 spells the words: mahoe, Maine
62467 spells the words: mains, nagor, Nahor
62468 spells the words: magot, maint
62474 spells the words: Mahri, naish
62482 spells the words: mahua, Nahua
62529 spells the words: malax, Malay, Mckay
62536 spells the words: maleo, oaken
62537 spells the words: maker, naker
62567 spells the words: Major, major
62582 spells the words: Makua, Malva
62586 spells the words: Malto, oakum
62623 spells the words: Nambe, Nance
62629 spells the words: namaz, Nancy, nancy
62632 spells the words: namda, Nanda
62633 spells the words: Mande, maned
62634 spells the words: manei, Nandi, nandi
62637 spells the words: manes, namer, nanes
62642 spells the words: manga, mania, manic, nanga
62643 spells the words: Mamie, mange, manid
62662 spells the words: mamma, manna, manoc
62669 spells the words: mammy, Manny, manny, Nanny, nanny
62674 spells the words: Maori, mbori
62686 spells the words: Manto, manto, Naoto
62724 spells the words: March, march, Marci, Masai, nasch
62725 spells the words: maral, napal, nasal, oasal
62726 spells the words: Marco, marco
62737 spells the words: nares, oases
62742 spells the words: Maria, maria, masha, naric, oaric
62743 spells the words: marge, marid, Marie
62747 spells the words: maris, oasis
62752 spells the words: marka, Marla
62759 spells the words: marly, narky
62766 spells the words: Mason, mason, napoo
62772 spells the words: massa, narra, Nassa
62773 spells the words: masse, nappe
62774 spells the words: Marsh, marsh, Marsi
62779 spells the words: mappy, marry, massy, nappy
62789 spells the words: Marty, masty, nasty
62824 spells the words: matai, match, natch
62825 spells the words: Natal, natal, naval
62827 spells the words: Matar, navar
62829 spells the words: matax, ocuby
62837 spells the words: mater, nates
62838 spells the words: navet, octet
62839 spells the words: matey, navew
62883 spells the words: matte, mauve
62884 spells the words: Matti, matti
62889 spells the words: Matty, natty, navvy
62932 spells the words: Mayda, Mazda
62937 spells the words: Mayer, mazer
62946 spells the words: maxim, nazim
63325 spells the words: medal, offal
63337 spells the words: needs, offer
63339 spells the words: neddy, needy, neffy
63342 spells the words: Media, media, Medic, medic
63353 spells the words: neeld, neele
63373 spells the words: meese, neese
63476 spells the words: Negro, negro
63478 spells the words: neist, odist
63487 spells the words: Negus, negus
63542 spells the words: Melia, melic
63725 spells the words: Merak, mesal, Nepal
63767 spells the words: merop, meros
63773 spells the words: merse, messe
63779 spells the words: merry, messy
63789 spells the words: nervy, nesty
63835 spells the words: metel, nevel
63837 spells the words: meter, neter, never, ofter
63889 spells the words: Netty, netty
64243 spells the words: miche, niche
64259 spells the words: Micky, nicky
64276 spells the words: miasm, micro
64339 spells the words: middy, miffy
64343 spells the words: midge, nidge
64448 spells the words: might, night
64537 spells the words: miler, Miles, ogler, oiler
64552 spells the words: Milla, milla
64559 spells the words: milky, Milly
64623 spells the words: mince, Niobe
64637 spells the words: mimer, miner, mines
64642 spells the words: mimic, ogmic, ohmic
64646 spells the words: Mingo, minim
64666 spells the words: Ninon, ninon
64667 spells the words: minor, Minos
64669 spells the words: minny, ninny, Ninox
64687 spells the words: Mimus, minus
64688 spells the words: nintu, ninut
64746 spells the words: misgo, oisin
64779 spells the words: missy, nippy
64824 spells the words: Mitch, nitch
64837 spells the words: miter, niter
64872 spells the words: Mitra, mitra
64889 spells the words: mitty, nitty
64926 spells the words: Nizam, nizam
65482 spells the words: Oliva, oliva
65483 spells the words: Olive, olive
66229 spells the words: mobby, nobby
66242 spells the words: Mocha, mocha, Omaha, oncia
66253 spells the words: moble, noble
66325 spells the words: modal, nodal
66473 spells the words: moire, moise, noise
66486 spells the words: Mnium, onium
66525 spells the words: molal, oolak
66553 spells the words: molle, nolle
66559 spells the words: Molly, molly, oolly
66623 spells the words: monad, nomad, nonce
66635 spells the words: Monel, monel
66637 spells the words: moner, nones
66639 spells the words: money, moody
66642 spells the words: nomic, nonic
66659 spells the words: nonly, nooky
66669 spells the words: mommy, monny, moony
66673 spells the words: Moore, moose, noose
66684 spells the words: month, mooth
66725 spells the words: moral, nopal, oopak
66726 spells the words: Mopan, Moran
66737 spells the words: moper, mores, Moses, noser
66738 spells the words: Mordv, onset
66739 spells the words: mosey, nosey
66742 spells the words: morga, moric, noria, Noric
66762 spells the words: moroc, Norma, norma, Norna
66763 spells the words: morne, oopod
66766 spells the words: mormo, moron
66773 spells the words: Morse, morse, Norse
66774 spells the words: morph, Mossi
66779 spells the words: moppy, mopsy, mossy
66784 spells the words: Moqui, morth, north
66787 spells the words: mopus, Morus, Mosur
66825 spells the words: notal, ontal
66833 spells the words: moted, noted
66835 spells the words: motel, novel
66837 spells the words: moter, mover, noter
66839 spells the words: motey, moudy
66843 spells the words: motif, movie, ootid
66853 spells the words: mould, moule
66886 spells the words: motto, notum
67243 spells the words: orage, Osage
67246 spells the words: orcin, oscin
67264 spells the words: Orang, orang
67442 spells the words: ophic, orgia, orgic
67738 spells the words: mpret, Osset
67842 spells the words: optic, Ostic
68242 spells the words: mucic, nubia, nucha
68246 spells the words: mucin, nucin
68279 spells the words: otary, ovary
68283 spells the words: otate, ovate
68333 spells the words: mudde, mudee
68339 spells the words: muddy, muffy
68378 spells the words: overt, ovest
68478 spells the words: muist, ovist
68542 spells the words: mulga, oukia
68624 spells the words: munch, nunch
68632 spells the words: Munda, numda
68642 spells the words: munga, Munia
68643 spells the words: munge, ovoid
68664 spells the words: Muong, nummi, nunni, Otomi
68725 spells the words: mural, musal
68742 spells the words: murga, musha, music
68743 spells the words: murid, musie, ouphe, ourie
68759 spells the words: murky, murly, musky, nurly
68773 spells the words: murre, nurse
68779 spells the words: mussy, nursy
68836 spells the words: outdo, outen
68837 spells the words: Muter, otter, outer
69269 spells the words: oxbow, oxboy
69766 spells the words: Myron, myron
72233 spells the words: paced, scaff
72237 spells the words: pacer, racer, saber, scads
72242 spells the words: rabic, Sabia
72243 spells the words: rabid, rache
72253 spells the words: sable, scald, scale
72256 spells the words: Pablo, pablo
72259 spells the words: sably, scaly
72268 spells the words: sabot, scant
72272 spells the words: Sabra, sabra, sacra
72273 spells the words: scape, scare, scarf, scase
72276 spells the words: sacro, scarn
72287 spells the words: scaup, scaur
72327 spells the words: radar, Safar
72339 spells the words: Paddy, paddy
72343 spells the words: padge, sadhe, Sadie
72363 spells the words: scend, scene
72366 spells the words: paeon, radon
72426 spells the words: pagan, Scian
72437 spells the words: pager, rager
72442 spells the words: sahib, saiga
72449 spells the words: raggy, saggy
72463 spells the words: sahme, scind
72468 spells the words: paint, saint, Sciot
72469 spells the words: rainy, saimy
72472 spells the words: paisa, Sagra
72524 spells the words: palch, Rajah, rajah, Sakai
72527 spells the words: palar, palas, Salar, salar
72528 spells the words: Palau, salat, Sclav
72529 spells the words: palay, salay, sclaw
72537 spells the words: paler, Pales, raker, saker, salep, scler
72542 spells the words: Sakha, Salic, salic
72548 spells the words: Rajiv, rakit
72549 spells the words: Salix, salix
72559 spells the words: pally, rally, Sally, sally
72562 spells the words: palma, salma
72565 spells the words: Salol, salol
72566 spells the words: palmo, Salmo, salon
72572 spells the words: Salpa, salpa
72574 spells the words: palpi, Ralph, ralph
72582 spells the words: Palta, salta, Salva
72587 spells the words: Palus, palus
72589 spells the words: salty, salvy
72623 spells the words: rance, scoad
72624 spells the words: ranch, sanai
72625 spells the words: Panak, ramal, ranal, samaj, Samal
72626 spells the words: Raman, Rambo, saman, Sambo, sambo
72627 spells the words: Samas, scobs
72629 spells the words: panax, Sancy
72633 spells the words: paned, ramed, scoff
72635 spells the words: panel, samel
72639 spells the words: pandy, ramex, Randy, randy, Sandy, sandy
72642 spells the words: panic, sanga
72643 spells the words: ramie, range, ranid
72647 spells the words: Pamir, Samir
72652 spells the words: Paola, scolb
72653 spells the words: scoke, scold
72663 spells the words: panne, scone
72666 spells the words: Ramon, scoon
72667 spells the words: Panos, scoop
72669 spells the words: rammy, ranny, Sammy, sammy
72673 spells the words: panse, scope, score
72674 spells the words: sampi, sansi
72683 spells the words: scote, scove
72686 spells the words: panto, Santo
72687 spells the words: pants, ramus, Scots, scoup, scour
72688 spells the words: Scott, scout
72689 spells the words: panty, ranty, scovy
72723 spells the words: saraf, scrae
72724 spells the words: parah, parch, Pasch, Sarah, scrag
72726 spells the words: param, parao, pasan, sapan, Saran, sasan, scram, scran
72729 spells the words: papaw, scraw, scray
72735 spells the words: parel, sapek
72736 spells the words: pardo, paren, rasen
72737 spells the words: paper, parer, raper, raser
72739 spells the words: papey, screw
72742 spells the words: pasha, rapic, Saqib
72743 spells the words: parge, raphe, rapid, sapid, sarif
72746 spells the words: Papio, pargo, pashm, sapin, sargo, sasin, scrim, scrin
72747 spells the words: Paris, sarip, scrip
72753 spells the words: parle, saple
72759 spells the words: parky, parly
72762 spells the words: Parma, parma, sarna, scrob
72763 spells the words: sarod, scrod
72766 spells the words: pasmo, saron, scroo
72767 spells the words: sapor, saros
72772 spells the words: Parra, sarra, sarsa
72773 spells the words: parse, Passe, passe, rappe, rasse
72774 spells the words: pappi, Parsi, Sarsi
72776 spells the words: passo, sarpo
72779 spells the words: pappy, parry, raspy, sappy, sassy
72783 spells the words: Paque, paste, scruf
72785 spells the words: pasul, Saruk
72786 spells the words: parto, scrum
72787 spells the words: Parus, sarus
72789 spells the words: party, pasty
72824 spells the words: patch, ratch
72826 spells the words: patao, pavan, Satan, satan
72833 spells the words: rated, saved, scuff
72835 spells the words: patel, ratel, ravel
72836 spells the words: paten, raven, scudo
72837 spells the words: pater, paver, rater, raver, saver
72843 spells the words: pavid, rathe
72846 spells the words: patio, ratio, ravin, satin, savin
72873 spells the words: pause, scurf, scuse
72879 spells the words: Patsy, saury
72882 spells the words: patta, scuta
72883 spells the words: patte, saute, sauve, scute
72889 spells the words: Patty, patty, ratty, sauty, savvy
72926 spells the words: Rayan, Sawan
72933 spells the words: payed, payee, rayed, razee, sawed
72937 spells the words: pawer, payer, razer, sawer, sayer
72966 spells the words: rayon, razoo, Saxon
72967 spells the words: payor, razor
73223 spells the words: peace, recce
73224 spells the words: peach, reach, rebag
73226 spells the words: Peban, pecan, reban, recco
73227 spells the words: rebar, recap
73233 spells the words: readd, rebed
73243 spells the words: peage, rebid
73259 spells the words: peaky, pecky
73267 spells the words: Pecos, rebop, secos
73269 spells the words: reamy, rebox, seamy
73275 spells the words: pearl, reask
73279 spells the words: peasy, reasy, seary
73283 spells the words: reave, rebud, seave
73286 spells the words: recto, sebum
73287 spells the words: rebus, recur
73288 spells the words: rebut, recut
73289 spells the words: peaty, peavy, rebuy, seavy
73326 spells the words: redan, refan, Sedan, sedan
73337 spells the words: pedes, refer, Seder
73339 spells the words: reddy, reedy, reefy, seedy
73343 spells the words: sedge, seege
73349 spells the words: refix, sedgy
73359 spells the words: redly, reeky, refly, seely
73369 spells the words: peeoy, redox
73376 spells the words: Pedro, pedro
73379 spells the words: peepy, peery, redry, seepy
73383 spells the words: peeve, redue, reeve
73386 spells the words: pedum, Sedum, sedum
73442 spells the words: Regga, regia
73446 spells the words: regin, reign
73449 spells the words: Peggy, peggy
73462 spells the words: regma, reina
73463 spells the words: peine, rehoe, seine
73473 spells the words: peise, seise
73527 spells the words: relap, Sekar
73529 spells the words: relax, relay
73546 spells the words: Pekin, pekin
73582 spells the words: pelta, selva
73623 spells the words: pence, sence
73625 spells the words: penal, renal
73626 spells the words: reman, senam
73639 spells the words: remex, renew
73646 spells the words: pengo, renin
73647 spells the words: penis, semis
73662 spells the words: penna, Senna, senna
73669 spells the words: Penny, penny, peony
73722 spells the words: Perca, serab
73724 spells the words: perch, Pesah, serai
73725 spells the words: sepal, seral
73729 spells the words: Percy, repay, resaw, resay, seraw
73733 spells the words: reree, resee
73734 spells the words: repeg, sereh
73737 spells the words: peres, Serer, Seres
73738 spells the words: perdu, reset
73739 spells the words: repew, resew, resex
73742 spells the words: repic, sepia, sepic, Seric, Sesia
73743 spells the words: Serge, serge, serif
73746 spells the words: repin, resin, serin, serio
73759 spells the words: perky, pesky, reply
73762 spells the words: rerob, sesma
73766 spells the words: sermo, seron
73769 spells the words: rerow, resow, sepoy, serow
73779 spells the words: peppy, Perry, perry, serry
73782 spells the words: rerub, septa, sequa, serta
73783 spells the words: peste, resue, serve
73784 spells the words: Septi, sesti
73786 spells the words: Perun, rerun, resun, serum, servo
73789 spells the words: perty, resty
73824 spells the words: retag, retch
73825 spells the words: petal, setal
73835 spells the words: Reuel, revel
73836 spells the words: retem, seven
73837 spells the words: Peter, peter, rever, sever
73843 spells the words: rethe, retie, revie
73863 spells the words: pfund, reune
73873 spells the words: petre, reuse
73933 spells the words: pewee, rewed, sewed, sexed
73936 spells the words: rexen, sewen
74222 spells the words: Phaca, piaba, sicca
74225 spells the words: pical, shack
74229 spells the words: ribby, sibby
74237 spells the words: Ribes, ricer
74238 spells the words: Phaet, shaft
74239 spells the words: ricey, shady
74244 spells the words: pichi, shahi
74253 spells the words: shake, shale
74258 spells the words: shaku, shalt
74259 spells the words: picky, Ricky, shaky, shaly
74263 spells the words: shame, Shane
74266 spells the words: phano, piano, rhamn
74268 spells the words: picot, riant, shant
74273 spells the words: phare, phase, Shape, shape, shard, share
74276 spells the words: phasm, sharn
74277 spells the words: shaps, sharp
74285 spells the words: picul, shaul
74287 spells the words: Picus, shaup
74295 spells the words: shawl, sibyl
74296 spells the words: shawm, Shawn
74323 spells the words: Phebe, piece, Rheae, sheaf
74325 spells the words: pheal, sheal
74326 spells the words: pidan, Shean
74336 spells the words: rheen, riden, sheen
74337 spells the words: rider, sheep, sheer, sider, sides
74343 spells the words: ridge, sidhe, siege
74353 spells the words: rifle, sheld, shelf, sidle
74362 spells the words: rhema, Siena
74363 spells the words: phene, piend, rheme, shend
74382 spells the words: sheva, Sieva
74383 spells the words: Piete, sieve
74384 spells the words: sheth, sidth
74386 spells the words: Rheum, rheum
74389 spells the words: piety, rifty, sievy
74433 spells the words: shide, shied
74435 spells the words: Rigel, shiel
74437 spells the words: shier, shies
74448 spells the words: right, sight
74455 spells the words: Phill, shill
74462 spells the words: Rhina, Shina, Sigma, sigma
74463 spells the words: rhine, shine
74469 spells the words: Pigmy, shiny
74475 spells the words: shirk, shirl
74527 spells the words: Pilar, pilar, sikar, Silas
74533 spells the words: piked, piled
74537 spells the words: piker, piler, piles
74539 spells the words: pikey, riley, silex
74559 spells the words: rilly, silky, silly
74568 spells the words: Pilot, pilot
74623 spells the words: shoad, Sinae, since
74624 spells the words: pinch, rinch
74625 spells the words: Pinal, rimal, shoal, shock, simal, sinal
74629 spells the words: phoby, pinax
74632 spells the words: pinda, Rhoda
74633 spells the words: pined, Rinde, shode
74637 spells the words: piner, rimer, shoer
74639 spells the words: pindy, piney, rindy, sinew
74642 spells the words: pinic, Simia, Sinic
74643 spells the words: ringe, singe
74644 spells the words: shogi, singh
74652 spells the words: rinka, shola
74659 spells the words: pinky, sinky
74662 spells the words: Phoma, Pinna, pinna, rhomb, Shona
74663 spells the words: phone, shone, shood
74665 spells the words: shook, shool
74666 spells the words: phono, pinon, Simon
74667 spells the words: shoop, shoor
74669 spells the words: phony, pinny
74673 spells the words: phose, rinse, shore
74683 spells the words: pinte, shote, shove
74686 spells the words: photo, pinto, Sinto
74687 spells the words: Pinus, Piotr, pious, sinus
74688 spells the words: shott, shout, Sintu
74725 spells the words: pipal, ripal, sisal
74726 spells the words: Pisan, pisco, shram
74733 spells the words: piped, shred, Shree, shree
74736 spells the words: ripen, risen, siren
74737 spells the words: Piper, piper, riper, riser, siper
74744 spells the words: rishi, sirih
74747 spells the words: shrip, siris
74748 spells the words: pipit, pishu
74759 spells the words: pisky, risky, sirky
74779 spells the words: pippy, sissy
74787 spells the words: ripup, sirup
74824 spells the words: pitch, sitch
74825 spells the words: rival, shuck
74826 spells the words: sitao, Sivan
74837 spells the words: river, siver
74868 spells the words: pivot, shunt
74873 spells the words: shure, shurf
74874 spells the words: piuri, shush, Siusi
74882 spells the words: Pitta, Sitta
74925 spells the words: riyal, sizal
74926 spells the words: Shyam, Siwan
74937 spells the words: shyer, sixer, sizer, sizes
75225 spells the words: plack, Sjaak, slack
75233 spells the words: skaff, slade
75243 spells the words: plage, plaid
75246 spells the words: plain, slain
75248 spells the words: plait, slait
75263 spells the words: plane, slane
75264 spells the words: plang, slang
75265 spells the words: plank, slank
75268 spells the words: plant, slant
75273 spells the words: slape, slare
75274 spells the words: plash, slash
75278 spells the words: skart, slart
75283 spells the words: plate, plaud, skate, slate, Slave, slave
75284 spells the words: slath, Slavi
75289 spells the words: platy, slaty
75292 spells the words: playa, plaza
75323 spells the words: plead, plebe
75325 spells the words: pleck, sleck
75335 spells the words: skeel, sleek
75337 spells the words: skeer, sleep, sleer
75338 spells the words: skeet, sleet
75383 spells the words: skete, slete
75423 spells the words: skice, slice
75433 spells the words: plied, skied, skiff, slide
75437 spells the words: plier, plies, skier, skies
75463 spells the words: skime, slime, sline
75465 spells the words: skink, slink
75469 spells the words: Pliny, slimy
75477 spells the words: skirp, skirr
75478 spells the words: skirt, slirt
75483 spells the words: skite, skive, slite, slive
75625 spells the words: plock, skoal, slock
75665 spells the words: plook, slonk
75677 spells the words: slops, slorp
75683 spells the words: plote, slote
75688 spells the words: plout, skout
75855 spells the words: skulk, skull
75862 spells the words: pluma, plumb
75865 spells the words: plunk, skunk, slunk
75867 spells the words: plump, slump
75874 spells the words: plush, slush
75973 spells the words: skyre, slype
76224 spells the words: poach, roach
76225 spells the words: smack, snack
76229 spells the words: pobby, sobby
76237 spells the words: rober, sober
76245 spells the words: smaik, snail
76246 spells the words: Robin, robin
76253 spells the words: roble, snake, socle
76259 spells the words: pocky, rocky, snaky, soaky, socky
76273 spells the words: snape, snare
76275 spells the words: snark, snarl
76278 spells the words: roast, smart
76279 spells the words: snapy, snary, soapy, soary
76325 spells the words: podal, sneak, sneck
76327 spells the words: smear, sneap, sofar
76337 spells the words: smeer, sneer
76339 spells the words: poddy, podex, soddy
76342 spells the words: sodic, Sofia
76343 spells the words: podge, rodge
76355 spells the words: smell, snell
76426 spells the words: rogan, rohan
76433 spells the words: snide, sniff
76437 spells the words: Roger, roger, soger
76438 spells the words: snift, soget
76449 spells the words: poggy, soggy
76459 spells the words: roily, smily, soily
76462 spells the words: pohna, rohob
76473 spells the words: poise, snipe
76475 spells the words: smirk, snirl
76478 spells the words: Roist, snirt
76483 spells the words: Rogue, rogue, smite, snite
76526 spells the words: Pokan, solan
76527 spells the words: polar, solar
76532 spells the words: Solea, solea
76533 spells the words: poked, rokee, Rolfe
76536 spells the words: roleo, soken, soldo, Solen, solen
76537 spells the words: poker, poler, roker, soler, soles
76539 spells the words: pokey, poley, rokey
76546 spells the words: polio, Solio, solio
76566 spells the words: Pokom, Solon, solon
76623 spells the words: pombe, ponce
76625 spells the words: Pomak, romal, smock, snock, Somal, somal
76626 spells the words: pombo, Roman, ronco
76636 spells the words: Pondo, Romeo, rondo
76639 spells the words: pomey, pondy, poney, roofy
76642 spells the words: ponga, Romic, Ronga, snoga, sonic
76646 spells the words: Pongo, Songo
76652 spells the words: ponja, pooka, Sonja
76653 spells the words: smoke, snoke, Sooke
76659 spells the words: pooly, rooky, smoky, sonly, sooky
76663 spells the words: pomme, snood
76665 spells the words: smook, snook
76667 spells the words: Smoos, snoop
76668 spells the words: smoot, snoot
76669 spells the words: pommy, roomy, Sonny, sonny
76672 spells the words: pompa, roosa
76673 spells the words: smore, snore, soord
76678 spells the words: rompu, roost, snort
76679 spells the words: rompy, sonsy
76683 spells the words: roove, smote
76688 spells the words: smout, snout
76689 spells the words: rooty, sooty
76695 spells the words: snowk, snowl
76725 spells the words: popal, poral, roral, rosal, soral
76733 spells the words: pored, rosed, soree
76737 spells the words: porer, poser, roper, ropes
76739 spells the words: posey, Sorex
76742 spells the words: Poria, roric, Sosia
76746 spells the words: rosin, sorgo
76749 spells the words: porgy, Sophy, sophy
76767 spells the words: poros, sopor
76772 spells the words: poppa, sorra
76779 spells the words: poppy, porry, soppy, sorry
76782 spells the words: porta, sorva
76787 spells the words: porus, sorus
76789 spells the words: porty, rorty, sorty
76824 spells the words: potch, pouch, rotch
76825 spells the words: Rotal, rotal, snuck
76837 spells the words: poter, roter, rover, Soter
76843 spells the words: rotge, rouge, sotie
76844 spells the words: rough, sough
76859 spells the words: rouky, souly
76863 spells the words: pound, round, sound
76873 spells the words: Rotse, rouse, smuse, souse
76877 spells the words: smurr, snurp
76878 spells the words: roust, snurt
76879 spells the words: roupy, soupy, soury
76884 spells the words: routh, South, south
76889 spells the words: potty, pouty
76926 spells the words: rowan, sowan
76935 spells the words: rowel, sowel
76937 spells the words: power, rower, sower
76938 spells the words: rowet, royet
76968 spells the words: poyou, Soyot
77223 spells the words: Space, space
77253 spells the words: spald, spale
77265 spells the words: prank, spank
77273 spells the words: prase, spare
77276 spells the words: sparm, spasm
77283 spells the words: prate, spate, spave
77296 spells the words: prawn, spawn
77325 spells the words: speak, speal, speck
77327 spells the words: spear, specs
77336 spells the words: preen, speen
77355 spells the words: spelk, spell
77399 spells the words: prexy, spewy
77422 spells the words: Spica, spica
77423 spells the words: Price, price, spice
77425 spells the words: prick, spick
77429 spells the words: pshaw, spicy
77433 spells the words: pride, pried, spied, spiff
77437 spells the words: prier, spier
77439 spells the words: pridy, Sphex
77453 spells the words: Spike, spike, spile
77455 spells the words: prill, spill
77462 spells the words: prima, spina
77463 spells the words: prime, prine, spine
77465 spells the words: prink, spink
77467 spells the words: primp, prior
77469 spells the words: primy, spiny
77473 spells the words: spire, spise
77476 spells the words: prism, spiro
77489 spells the words: privy, spitz
77625 spells the words: proal, Spock
77653 spells the words: proke, spoke, spole
77663 spells the words: prone, proof, spoof
77664 spells the words: prong, spong
77665 spells the words: spook, spool
77666 spells the words: spoom, spoon
77673 spells the words: prore, prose, spore
77677 spells the words: props, pross
77683 spells the words: prote, prove
77863 spells the words: prune, spume
77937 spells the words: pryer, spyer
78222 spells the words: qubba, staab
78224 spells the words: ruach, subah, succi
78225 spells the words: pubal, quack, stack
78233 spells the words: quaff, stade, staff, suade
78237 spells the words: pubes, suber
78242 spells the words: pubic, Rubia, staia
78243 spells the words: ruche, stage, staid
78246 spells the words: stain, staio
78247 spells the words: pubis, stair
78253 spells the words: quake, quale, ruble, stake, stale
78255 spells the words: stalk, stall
78259 spells the words: quaky, rucky
78263 spells the words: stand, stane
78267 spells the words: rubor, stamp
78268 spells the words: quant, suant
78273 spells the words: quare, stare, sucre
78274 spells the words: quash, quasi, stash
78275 spells the words: quark, quarl, stark
78278 spells the words: quart, start
78283 spells the words: quave, State, state, stave, suave
78285 spells the words: quauk, stauk
78287 spells the words: Rubus, staup
78325 spells the words: queak, queal, steak, steal
78326 spells the words: quean, steam, stean, Sudan
78333 spells the words: steed, suede
78335 spells the words: steek, steel
78336 spells the words: queen, Steen, steen
78337 spells the words: queer, steep, steer
78339 spells the words: puddy, puffy, ruddy, suddy
78342 spells the words: pudic, Sudic
78343 spells the words: pudge, rudge, steid
78346 spells the words: Stein, stein
78355 spells the words: quell, stell
78363 spells the words: queme, stend
78375 spells the words: querl, sterk
78376 spells the words: quern, Stern, stern, stero
78378 spells the words: quest, stept, stert
78379 spells the words: pudsy, query, sudsy
78383 spells the words: queue, Steve, Sueve
78387 spells the words: Rufus, rufus
78425 spells the words: quick, stick
78433 spells the words: quiff, stife, stiff
78444 spells the words: puggi, Sugih
78449 spells the words: puggy, ruggy
78455 spells the words: quill, still
78458 spells the words: quilt, stilt
78462 spells the words: quina, Suina
78463 spells the words: stime, stine, suine
78464 spells the words: ruing, sting, suing
78465 spells the words: quink, stink
78468 spells the words: quint, stint, suint
78472 spells the words: quira, Stipa
78473 spells the words: quire, stipe
78475 spells the words: quirk, quirl, stirk
78478 spells the words: puist, quipu, quirt, suist
78483 spells the words: quite, stite, stive, suite
78489 spells the words: stivy, suity
78532 spells the words: sulea, sulfa
78537 spells the words: puker, puler, ruler
78539 spells the words: Pulex, Sukey
78552 spells the words: pulka, sulka, sulla
78559 spells the words: sulky, sully
78624 spells the words: punch, runch
78625 spells the words: rumal, stock, Sumak
78626 spells the words: Punan, Ruman, rumbo
78628 spells the words: punct, stoat
78633 spells the words: runed, stoff
78637 spells the words: runer, stoep
78642 spells the words: punga, Punic, runic, stoga, Stoic, stoic
78653 spells the words: stoke, stole
78659 spells the words: punky, rumly
78662 spells the words: stoma, Sunna
78663 spells the words: stond, Stone, stone, stood, stoof
78664 spells the words: stong, Sunni, Suomi
78665 spells the words: stook, stool
78667 spells the words: rumor, stomp, stoop
78669 spells the words: rummy, runny, stony, sunny
78673 spells the words: stope, store
78674 spells the words: stosh, sumph
78682 spells the words: punta, quota
78683 spells the words: quote, stove
78684 spells the words: punti, quoth
78686 spells the words: punto, stoun
78687 spells the words: stoup, stour, sunup
78689 spells the words: punty, runty
78723 spells the words: Strad, strad, strae
78724 spells the words: strag, Supai, surah
78725 spells the words: pupal, rural, sural
78726 spells the words: stram, Susan
78729 spells the words: straw, stray
78733 spells the words: pured, puree, rupee, stree
78737 spells the words: purer, super, sures
78739 spells the words: purdy, strew, strey, surfy
78742 spells the words: purga, rupia, stria
78743 spells the words: purge, rupie, strid, surge, Susie
78749 spells the words: rushy, Strix, strix, surgy
78759 spells the words: rusky, surly
78762 spells the words: rusma, surma
78769 spells the words: strow, stroy
78773 spells the words: purre, purse
78779 spells the words: puppy, purry, pursy, pussy
78788 spells the words: strut, struv
78789 spells the words: Rusty, rusty
78833 spells the words: stude, stuff
78843 spells the words: putid, ruvid
78867 spells the words: stump, sutor
78872 spells the words: stupa, sutra
78877 spells the words: stupp, stuss
78889 spells the words: putty, rutty
78926 spells the words: styan, Suzan
79243 spells the words: pyche, swage
79264 spells the words: swami, swang
79273 spells the words: swape, sward, sware, swarf
79284 spells the words: swath, Swati
79337 spells the words: ryder, sweep, sweer
79425 spells the words: pygal, swick
79469 spells the words: Pygmy, pygmy, swimy
79473 spells the words: swipe, swird, swire
79477 spells the words: Swiss, swiss
79673 spells the words: sword, swore
79739 spells the words: Pyrex, pyrex
79762 spells the words: Syrma, syrma
79787 spells the words: Pyrus, syrup
79947 spells the words: Pyxis, pyxis
82229 spells the words: Tabby, tabby
82243 spells the words: tabid, tache, vache
82339 spells the words: Taffy, taffy
82424 spells the words: taich, tchai
82425 spells the words: Tagal, vagal
82473 spells the words: taise, vaire
82476 spells the words: taipo, tairn
82482 spells the words: tagua, tahua
82526 spells the words: Takao, talao
82527 spells the words: takar, talar
82537 spells the words: taker, taler, tales
82542 spells the words: uckia, vakia
82545 spells the words: Tajik, vakil
82559 spells the words: talky, tally
82572 spells the words: Talpa, vajra, Valsa
82583 spells the words: value, valve
82626 spells the words: tambo, tanan
82642 spells the words: tanga, tanha, tania
82647 spells the words: tamis, tangs, Vanir
82669 spells the words: Tammy, tammy
82726 spells the words: tasco, varan
82732 spells the words: tarea, tarfa, Varda, varec
82737 spells the words: taper, Tareq
82739 spells the words: tardy, vardy
82743 spells the words: targe, tarie, vapid
82747 spells the words: tapir, tapis
82762 spells the words: tapoa, taroc, varna
82773 spells the words: tarse, tasse
82774 spells the words: tarri, tarsi
82783 spells the words: tarve, taste, varve
82789 spells the words: tasty, vasty
82837 spells the words: tater, Tates, taver
82868 spells the words: tatou, taunt, vaunt
82873 spells the words: taupe, Uaupe
82937 spells the words: tawer, taxer, tayer
82947 spells the words: taxis, tayir
83279 spells the words: teary, teasy
83367 spells the words: teems, teens
83527 spells the words: telar, velar
83542 spells the words: telic, velic
83553 spells the words: Tekke, tekke
83566 spells the words: Tejon, tejon
83624 spells the words: tenai, tench
83626 spells the words: Teman, teman
83646 spells the words: temin, tenio, venin
83663 spells the words: Temne, tenne
83666 spells the words: tenon, venom
83673 spells the words: Tempe, temse, tense
83727 spells the words: terap, teras
83735 spells the words: terek, verek
83743 spells the words: tepid, verge
83762 spells the words: terma, terna
83772 spells the words: Verpa, Vespa
83773 spells the words: terse, Vepse, verre, verse
83779 spells the words: Terry, terry
83782 spells the words: testa, Vesta
83783 spells the words: teste, verve
83824 spells the words: tetch, vetch
83937 spells the words: tewer, vexer
84225 spells the words: thack, tical
84239 spells the words: tibey, vibex
84242 spells the words: tibia, Vicia
84259 spells the words: ticky, Vicky
84263 spells the words: thane, viand
84338 spells the words: theet, theft
84339 spells the words: tiddy, tiffy
84373 spells the words: there, these
84382 spells the words: theta, Vidua
84399 spells the words: thewy, viewy
84455 spells the words: thilk, thill
84465 spells the words: Think, think, thiol
84473 spells the words: third, Tigre
84526 spells the words: uhlan, vijao
84533 spells the words: tilde, tiled
84552 spells the words: tikka, villa
84623 spells the words: timbe, Vince
84625 spells the words: uinal, vinal
84632 spells the words: tinea, vinea
84633 spells the words: timed, tined, vined
84637 spells the words: timer, times, viner
84643 spells the words: timid, tinge
84653 spells the words: thoke, thole
84663 spells the words: thone, Timne, Tinne, Vinod
84664 spells the words: thong, Tinni
84666 spells the words: thoom, Timon, timon
84669 spells the words: tinny, vinny
84673 spells the words: thore, Those, those
84676 spells the words: thorn, thoro
84682 spells the words: tinta, Uinta, vinta
84727 spells the words: thrap, tisar
84729 spells the words: thraw, Thrax
84733 spells the words: three, tired
84737 spells the words: tirer, viper
84742 spells the words: Ugric, virga
84743 spells the words: virid, visie
84762 spells the words: throb, tirma
84763 spells the words: throe, visne
84766 spells the words: viron, vison
84779 spells the words: tippy, tipsy
84786 spells the words: thrum, visto
84787 spells the words: tipup, virus
84788 spells the words: thruv, virtu
84826 spells the words: Thuan, Titan
84837 spells the words: titer, tiver, viver, vives
84843 spells the words: tithe, vivid
84853 spells the words: Thule, title
84862 spells the words: thumb, thuoc
84882 spells the words: vitta, viuva
85623 spells the words: ulnad, ulnae
86227 spells the words: unbar, uncap
86233 spells the words: unadd, unbed
86253 spells the words: umble, uncle
86264 spells the words: Unami, unbog
86269 spells the words: unbow, unbox, unboy, uncoy
86272 spells the words: Umbra, umbra
86278 spells the words: toast, unapt
86339 spells the words: toddy, toffy, unfew
86387 spells the words: Todus, unfur
86393 spells the words: undye, uneye
86423 spells the words: unhad, unice, voice
86428 spells the words: unhat, Uniat, uniat
86439 spells the words: unhex, unify
86466 spells the words: uninn, union
86468 spells the words: ungot, unhot
86483 spells the words: togue, unite, vogue
86489 spells the words: toity, unity
86526 spells the words: tolan, unjam
86527 spells the words: unlap, volar
86529 spells the words: Tokay, tokay, unlaw, unlay
86533 spells the words: unked, unled
86536 spells the words: token, toldo, unken
86538 spells the words: unket, unlet, volet
86543 spells the words: unkid, unlid, unlie
86582 spells the words: Volta, volva
86623 spells the words: tombe, unmad
86626 spells the words: toman, unman
86633 spells the words: toned, unode
86637 spells the words: toner, vomer
86639 spells the words: unmew, unnew
86642 spells the words: Tonga, tonga, tonic
86662 spells the words: Tonna, Toona, Unona
86669 spells the words: Tommy, tommy
86724 spells the words: torah, torch
86726 spells the words: toran, unram
86729 spells the words: topaz, unray, unsay
86733 spells the words: topee, tored, unred, unsee
86739 spells the words: unsew, unsex
86742 spells the words: topia, topic, toric
86744 spells the words: torii, unrig
86746 spells the words: unpin, unsin
86749 spells the words: toshy, unshy
86775 spells the words: topsl, torsk
86779 spells the words: toppy, Topsy, tossy
86783 spells the words: toque, torve
86786 spells the words: unrun, unsun
86789 spells the words: umpty, unsty
86824 spells the words: touch, Tovah, vouch
86825 spells the words: total, votal
86827 spells the words: tovar, untap, untar
86837 spells the words: toter, voter
86843 spells the words: untie, vouge
86873 spells the words: touse, unuse
86876 spells the words: tourn, unurn
86926 spells the words: towan, unwan
86933 spells the words: tozee, unwed, vowed
86935 spells the words: towel, vowel
86937 spells the words: tower, toyer, tozer, vower
86966 spells the words: toxon, toyon, unwon
87226 spells the words: Urban, urban
87229 spells the words: Tracy, upbay
87242 spells the words: urbic, vraic
87243 spells the words: upbid, usage
87245 spells the words: traik, trail
87272 spells the words: Trapa, usara
87273 spells the words: urare, urase
87274 spells the words: trash, urari
87277 spells the words: traps, trass
87279 spells the words: trasy, upcry
87283 spells the words: trave, urate
87328 spells the words: treat, upeat
87333 spells the words: treed, urdee
87336 spells the words: treen, Uredo, uredo
87362 spells the words: Trema, Urena
87363 spells the words: trend, upend
87368 spells the words: Trent, urent, usent
87423 spells the words: triad, tribe, trice
87425 spells the words: trial, trick, urial, Ushak
87437 spells the words: trier, upher, urger, usher
87463 spells the words: trine, tsine, urine
87483 spells the words: trite, urite
87623 spells the words: Troad, urnae
87625 spells the words: trock, urnal
87626 spells the words: troco, urman
87632 spells the words: Usnea, usnea
87642 spells the words: Troic, usnic
87662 spells the words: trona, tronc
87667 spells the words: tromp, troop
87743 spells the words: uprid, Ursid
87786 spells the words: uprun, upsun
87787 spells the words: upsup, Ursus
87825 spells the words: truck, usual
87828 spells the words: trubu, urubu, urucu
87837 spells the words: truer, uster
87877 spells the words: truss, usurp
87929 spells the words: upwax, upway
88642 spells the words: Tunga, tunic
88669 spells the words: tummy, tunny
88726 spells the words: Turbo, turbo, Turco, turco
88837 spells the words: utter, uvver
89464 spells the words: tying, vying
89475 spells the words: twirk, twirl
89742 spells the words: Typha, typic
92229 spells the words: wabby, yabby
92272 spells the words: waapa, zabra
92337 spells the words: wader, wafer
92437 spells the words: wager, wages
92466 spells the words: wagon, wahoo, Yahoo, yahoo
92473 spells the words: waird, waise, yaird
92482 spells the words: Yagua, yagua
92526 spells the words: wakan, Yakan
92537 spells the words: waker, wakes, Waler, waler
92552 spells the words: yakka, yalla
92626 spells the words: Yanan, zaman, zambo
92633 spells the words: waned, Zande
92635 spells the words: wamel, Yamel
92636 spells the words: yamen, Yameo
92642 spells the words: wanga, Zamia
92659 spells the words: wanly, yanky
92759 spells the words: warly, yaply, yarly
92768 spells the words: warnt, wasnt
92779 spells the words: waspy, yappy
92783 spells the words: warve, waste, Zaque
92784 spells the words: warth, Yaqui, yarth
92789 spells the words: warty, wasty
92824 spells the words: watch, wauch
92837 spells the words: water, waver
93272 spells the words: yeara, zebra
93476 spells the words: weism, zeism
93574 spells the words: Welsh, welsh
93664 spells the words: zemmi, zemni
93742 spells the words: xeric, yerga
93789 spells the words: westy, yesty, zesty
93859 spells the words: wetly, yeuky
94225 spells the words: whack, Xicak
94259 spells the words: whaly, wicky
94263 spells the words: whame, whand
94273 spells the words: whare, wharf, whase
94287 spells the words: whats, whaup, whaur
94336 spells the words: wheem, wheen, widen
94337 spells the words: wheep, wheer, ziffs
94353 spells the words: wield, yield
94455 spells the words: whilk, whill
94475 spells the words: whirl, whisk
94478 spells the words: whipt, whist
94559 spells the words: Willy, willy
94623 spells the words: wince, yince
94624 spells the words: winch, zimbi
94663 spells the words: whone, whoof, zimme
94673 spells the words: whore, whose
94678 spells the words: whort, yinst
94737 spells the words: wiper, wirer, wiser
94779 spells the words: wispy, zippy
96226 spells the words: yocco, zocco
96425 spells the words: yoick, Zohak
96637 spells the words: wooer, yomer
96639 spells the words: Woody, woody, woofy
96642 spells the words: wonga, zonic
96667 spells the words: woons, zoons
96836 spells the words: woven, yoven
96943 spells the words: yowie, zowie
97325 spells the words: wreak, wreck
97433 spells the words: wride, wried
97483 spells the words: write, wrive
98222 spells the words: Yucca, yucca
99542 spells the words: Xylia, xylic
222229 spells the words: abacay, abbacy
222246 spells the words: acacin, cabaho
222253 spells the words: babble, cabble
222262 spells the words: cabana, Cacana
222377 spells the words: abbess, access
222474 spells the words: babish, Cabiri
222483 spells the words: accite, Babite
222533 spells the words: backed, cabled
222537 spells the words: backer, cabler
222538 spells the words: backet, cablet
222666 spells the words: baboon, cacoon
222733 spells the words: abased, cabree
222742 spells the words: abasia, abasic
223343 spells the words: Caddie, caddie
223353 spells the words: baffle, caddle, caffle
223369 spells the words: caddow, caffoy
223437 spells the words: badger, cadger
223642 spells the words: cadmia, cadmic
223742 spells the words: Aberia, Baeria
223822 spells the words: caduac, caduca
223895 spells the words: acetyl, baetyl
224337 spells the words: abider, acider
224372 spells the words: bahera, Baiera
224455 spells the words: achill, Cahill
224543 spells the words: baikie, bailie
224626 spells the words: bagman, Bagobo, caiman
225233 spells the words: calade, calced
225242 spells the words: Balaic, calcic
225274 spells the words: abkari, calash
225336 spells the words: balden, baleen, calden
225526 spells the words: Balkan, ballam, ballan
225537 spells the words: balker, baller, calker, caller
225538 spells the words: ballet, callet
225569 spells the words: ballow, callow
225587 spells the words: ballup, callus
225822 spells the words: Bakuba, Baluba
225833 spells the words: ablude, calved
225837 spells the words: balter, calver, calves
225842 spells the words: Baltic, Baluga, Caltha
226222 spells the words: banaba, baobab, camaca, canaba
226226 spells the words: bamban, Canaan, cancan
226232 spells the words: Acmaea, Canada, canada
226237 spells the words: camber, cancer
226244 spells the words: banchi, Canchi
226266 spells the words: bamboo, canamo
226272 spells the words: Abobra, camara
226273 spells the words: aboard, canape, canard
226274 spells the words: Canari, canari, Cancri
226343 spells the words: bandie, candid
226348 spells the words: bandhu, bandit
226353 spells the words: bandle, candle
226356 spells the words: Canelo, canelo
226367 spells the words: Bandor, candor
226426 spells the words: banian, cangan
226442 spells the words: Bangia, cangia
226453 spells the words: bangle, cangle
226463 spells the words: acoine, canine
226483 spells the words: acmite, cangue
226492 spells the words: baniwa, baniya
226537 spells the words: banker, canker
226538 spells the words: banket, camlet
226633 spells the words: acnode, cammed, canned
226637 spells the words: banner, canner
226638 spells the words: bannet, cannet
226642 spells the words: acomia, aconic
226646 spells the words: Abongo, aconin
226742 spells the words: acopic, acoria
226766 spells the words: acopon, campoo
226787 spells the words: Acorus, campus
226826 spells the words: Bantam, bantam
226827 spells the words: cantar, canvas
226837 spells the words: banter, canter
226866 spells the words: Canton, canton
226887 spells the words: abouts, cantus
226924 spells the words: Banyai, banzai
226966 spells the words: canyon, canzon
227222 spells the words: Baraca, casaba
227233 spells the words: abrade, barbed, carafe
227235 spells the words: barbel, carcel
227266 spells the words: Barcoo, carbon
227269 spells the words: Caranx, carboy
227272 spells the words: Barbra, Carapa, Carara
227276 spells the words: carapo, carbro
227283 spells the words: casate, casave
227286 spells the words: abraum, casaun
227295 spells the words: acrawl, carbyl
227335 spells the words: bardel, cardel
227337 spells the words: carder, career
227342 spells the words: bardic, cardia, caseic
227346 spells the words: cardin, casein
227359 spells the words: barely, barfly, basely
227385 spells the words: barful, capful, carful
227426 spells the words: abrico, Carian
227427 spells the words: caphar, capias
227429 spells the words: bashaw, cashaw
227437 spells the words: barger, caries
227439 spells the words: basify, cashew
227464 spells the words: baring, casing
227466 spells the words: basion, casino
227474 spells the words: barish, Cariri, casiri
227483 spells the words: acrite, barite
227486 spells the words: barium, Capito
227537 spells the words: barker, basker
227538 spells the words: basket, carlet, casket
227539 spells the words: barkey, barley
227546 spells the words: capkin, caplin, carlin
227626 spells the words: barman, Baroco, capman, Carman, carman
227639 spells the words: Barney, barney, carney
227642 spells the words: Basoga, carnic
227643 spells the words: basoid, Caroid
227646 spells the words: absmho, absohm
227656 spells the words: barolo, Basoko
227665 spells the words: abrook, acrook
227666 spells the words: capomo, caroon
227683 spells the words: basote, capote
227727 spells the words: barras, Caspar
227733 spells the words: barred, capped
227735 spells the words: barrel, carpel, carrel
227737 spells the words: barrer, capper, carper, Casper
227738 spells the words: barret, basset, carpet
227742 spells the words: Bassia, capric, Cassia, cassia
227743 spells the words: bassie, cappie, caprid, capsid, carpid, Carrie, Cassie, cassie
227746 spells the words: Barrio, barrio, caprin
227747 spells the words: Cassis, cassis
227766 spells the words: barsom, casson
227769 spells the words: barrow, carrow
227783 spells the words: Basque, basque, casque
227787 spells the words: bassus, carpus
227825 spells the words: carval, casual
227835 spells the words: barvel, cartel, carvel
227836 spells the words: basten, carven
227837 spells the words: barter, baster, Carter, carter, carver, caster
227866 spells the words: Barton, barton, baston, carton
227867 spells the words: captor, Castor, castor
228226 spells the words: abucco, bataan
228283 spells the words: acuate, cavate
228323 spells the words: caudad, caudae
228328 spells the words: bateau, caveat
228426 spells the words: Actian, Bavian, bavian
228464 spells the words: acting, bating, caving
228466 spells the words: action, batino, cation
228467 spells the words: bathos, cathop
228486 spells the words: Actium, cativo
228489 spells the words: acuity, cavity
228542 spells the words: abulia, abulic
228546 spells the words: catkin, catlin
228737 spells the words: abuser, causer
228787 spells the words: catsup, Caurus, Causus
228825 spells the words: actual, Battak
228835 spells the words: battel, cautel
228837 spells the words: batter, cauter
228853 spells the words: battle, batule, cattle
229273 spells the words: Bayard, bayard
229474 spells the words: bayish, caxiri
229626 spells the words: bayman, cayman
232453 spells the words: Beagle, beagle, Cecile
232533 spells the words: beaked, bebled
232537 spells the words: beaker, becker
232643 spells the words: beanie, ceboid
232837 spells the words: beater, beaver
233273 spells the words: afeard, bedare
233276 spells the words: beearn, cedarn
233323 spells the words: bedead, bedeaf
233328 spells the words: affect, bedebt
233337 spells the words: affeer, bedder, beefer
233363 spells the words: addend, bedene
233453 spells the words: aedile, befile
233478 spells the words: bedirt, befist
233527 spells the words: bedlar, beflap
233532 spells the words: Adelea, beflea
233626 spells the words: bedman, beeman, befoam
233673 spells the words: afford, before
233696 spells the words: bedown, bedoyo
233825 spells the words: afetal, beduck
233853 spells the words: beduke, beetle
233929 spells the words: bedway, beeway
234253 spells the words: behale, behalf
234274 spells the words: begari, begash
234283 spells the words: adiate, begaud, behave
234353 spells the words: afield, beheld
234663 spells the words: begone, behoof
234695 spells the words: begowk, behowl
235273 spells the words: aflare, belard
235283 spells the words: belate, belaud
235379 spells the words: belfry, celery
235425 spells the words: bekick, Belial, belick
235483 spells the words: belite, belive, celite
235533 spells the words: belled, celled
235842 spells the words: beluga, Celtic
235847 spells the words: Beltir, Beltis, Celtis
236326 spells the words: aenean, bemean
236473 spells the words: admire, bemire
236542 spells the words: Aeolia, Aeolic
236638 spells the words: Bennet, bennet
236642 spells the words: Adonia, Adonic
236737 spells the words: adorer, censer
236825 spells the words: bemuck, cental
237243 spells the words: aerage, afraid, bepaid
237246 spells the words: berain, cerago
237253 spells the words: bepale, berake
237278 spells the words: bepart, berapt
237283 spells the words: adsbud, aerate, berate, cerate
237326 spells the words: adream, Berean, beseam
237336 spells the words: beseem, beseen
237338 spells the words: afreet, bereft
237424 spells the words: Afshah, beshag
237427 spells the words: Afshar, Cephas
237433 spells the words: aeried, beride, beside, ceride
237463 spells the words: beshod, cerine
237486 spells the words: cerium, cesium
237668 spells the words: afront, besoot
237673 spells the words: Aerope, aerose
237687 spells the words: besour, cerous
237843 spells the words: Bertie, bervie, certie, cervid
237847 spells the words: bestir, certis
237887 spells the words: Cervus, cestus
238363 spells the words: advene, cetene
238473 spells the words: advise, betire
239378 spells the words: bewept, bewest
239676 spells the words: beworm, beworn
242237 spells the words: Agaces, bibber
242359 spells the words: Cicely, cicely
242582 spells the words: bhakta, chalta
242622 spells the words: Bianca, Chanca
242623 spells the words: Agamae, chance
242626 spells the words: bianco, chanco
242627 spells the words: Chamar, chamar
242634 spells the words: Chandi, chandi
242642 spells the words: agamic, changa
242643 spells the words: agamid, change
242679 spells the words: champy, cibory
242722 spells the words: charac, Charca
242737 spells the words: charer, chaser
242766 spells the words: bicron, Charon
242779 spells the words: chappy, charry
242882 spells the words: chatta, Cicuta
242884 spells the words: Chatti, chauth
242926 spells the words: Agawam, chawan, chazan
243337 spells the words: bidder, cheder
243359 spells the words: agedly, cheeky
243379 spells the words: cheepy, cheery, cheesy
243539 spells the words: bieldy, biflex
243783 spells the words: cheque, cherte
243789 spells the words: cherty, chesty
244633 spells the words: chined, Chinee
244779 spells the words: chippy, chirpy
244825 spells the words: chitak, chital
245464 spells the words: ailing, bikini
245537 spells the words: bilker, biller
246245 spells the words: agnail, bimbil
246246 spells the words: Chocho, chocho
246262 spells the words: Bimana, choana
246263 spells the words: agname, bimane
246283 spells the words: agnate, binate, choate
246337 spells the words: binder, cinder
246425 spells the words: chogak, Choiak
246453 spells the words: bingle, cingle
246464 spells the words: agoing, aiming, Bimini
246537 spells the words: choker, choler
246673 spells the words: Aimore, choose
246679 spells the words: agnosy, choosy
246725 spells the words: bioral, choral
246732 spells the words: chorda, chorea
246779 spells the words: biopsy, choppy
246842 spells the words: Bhotia, biotic
247337 spells the words: agreer, birder
247343 spells the words: agrege, birdie
247543 spells the words: birkie, birlie
247626 spells the words: agroan, airman
247663 spells the words: agroof, chrome
247783 spells the words: bisque, cirque
247787 spells the words: cippus, cirrus, Cissus
247833 spells the words: agrufe, cisted
248725 spells the words: chupak, citral
248766 spells the words: chupon, citron
248787 spells the words: Citrus, citrus
248837 spells the words: bitter, chuter
249642 spells the words: chymia, chymic
252242 spells the words: alacha, Alcaic
252336 spells the words: albedo, Alcedo
252463 spells the words: alcine, Blaine
252466 spells the words: albino, Albion
252483 spells the words: alaite, albite
252624 spells the words: Blanch, blanch
252637 spells the words: blamer, clamer
252742 spells the words: Alaria, Alaric, Blasia
252749 spells the words: blashy, clashy
252789 spells the words: blasty, clarty
252833 spells the words: alated, Claude
252837 spells the words: blaver, claver
252882 spells the words: Blatta, blatta
252937 spells the words: blazer, clawer, clayer
252966 spells the words: alcyon, blazon
253224 spells the words: bleach, cleach
253253 spells the words: akeake, alfaje
253463 spells the words: aldime, Aldine, aldine
253624 spells the words: blench, clench
253824 spells the words: cletch, cleuch
253942 spells the words: Alexia, alexia, alexic
254448 spells the words: alight, blight
254642 spells the words: clinia, clinic
254766 spells the words: Alison, alison
254842 spells the words: clitia, Clivia
254843 spells the words: blithe, clithe
255363 spells the words: alkene, allene
255433 spells the words: alkide, allied
255437 spells the words: Allies, allies
256243 spells the words: alnage, cloche
256639 spells the words: bloody, blooey
256687 spells the words: almous, clonus
256846 spells the words: alnuin, Clotho
256889 spells the words: blotty, clotty, clouty
256937 spells the words: blower, cloyer
257463 spells the words: Alpine, alpine, Alsine
258432 spells the words: Althea, althea
258679 spells the words: clumpy, clumsy
262233 spells the words: bobbed, cobbed
262237 spells the words: Anaces, bobber, cobber
262243 spells the words: ambage, anacid, Bobbie, coccid
262253 spells the words: bobble, cobble
262274 spells the words: ambash, cocash
262428 spells the words: anahau, Anchat
262437 spells the words: ambier, anagep, bocher
262482 spells the words: anagua, coaita
262537 spells the words: ambler, Anakes, coaler, Cocker, cocker
262559 spells the words: anally, cockly
262632 spells the words: Amanda, ananda
262782 spells the words: Amasta, anaqua
262833 spells the words: coated, coatee
262837 spells the words: boater, coater
262843 spells the words: boatie, coatie
262874 spells the words: ambush, coburg
262879 spells the words: ambury, anbury
262966 spells the words: Amazon, anaxon
263337 spells the words: codder, coffer
263353 spells the words: coddle, coffle
263437 spells the words: bodger, bodier, codger
263472 spells the words: Andhra, Andira
263542 spells the words: Amelia, amelia, coelia
263546 spells the words: bodkin, coelho, coelin
263642 spells the words: amenia, Anemia, anemia, anemic
263678 spells the words: anenst, coempt
263723 spells the words: amerce, coerce
263742 spells the words: Andria, andric, anepia
264264 spells the words: Angami, anhang
264437 spells the words: bogier, cogger
264453 spells the words: angild, boggle, coggle, coghle
264462 spells the words: angina, anhima
264533 spells the words: angled, boiled, coiled
264537 spells the words: Amiles, angler, Angles, boiler, coiler
264542 spells the words: Anglic, anilic
264622 spells the words: cognac, cohoba
264626 spells the words: bogman, cogman
264642 spells the words: amimia, aminic
264682 spells the words: Aminta, Bogota
264847 spells the words: Anguis, anguis
264929 spells the words: bogway, cogway
265336 spells the words: bolden, Coleen
265359 spells the words: boldly, coldly
265387 spells the words: coleur, Coleus
265462 spells the words: Colima, colima
265464 spells the words: coking, coling
265538 spells the words: anklet, collet
265546 spells the words: Collin, collin
265677 spells the words: colors, coloss
265837 spells the words: bolter, colter
266224 spells the words: aonach, bonaci
266229 spells the words: Bombax, Bombay
266233 spells the words: bombed, combed
266237 spells the words: amober, bomber, comber
266253 spells the words: annale, comble
266287 spells the words: Bombus, concur
266322 spells the words: amoeba, confab
266325 spells the words: anneal, anodal
266333 spells the words: bonded, Confed
266336 spells the words: comedo, coneen
266353 spells the words: boodle, coodle
266367 spells the words: anodos, condor
266433 spells the words: congee, Coohee
266437 spells the words: booger, conger
266463 spells the words: ammine, anoine, conine
266464 spells the words: coming, cooing
266466 spells the words: amnion, boohoo, comino
266468 spells the words: anoint, congou
266486 spells the words: bonito, Conium
266533 spells the words: booked, cookee
266537 spells the words: booker, conker, cooker, cooler
266543 spells the words: bookie, coolie
266637 spells the words: boomer, conner
266643 spells the words: Bonnie, commie, comoid, Connie, conoid
266662 spells the words: Annona, annona
266666 spells the words: ammono, common
266725 spells the words: amoral, anorak
266733 spells the words: conred, cooree
266737 spells the words: Amores, cooper, cooser
266742 spells the words: anopia, Anosia
266782 spells the words: Amorua, Coosuc
266833 spells the words: booted, bootee
266837 spells the words: booter, Bootes, conter, cooter
266839 spells the words: convex, convey
266843 spells the words: Bootid, cootie
266887 spells the words: amotus, anotus
266937 spells the words: bonzer, boozer
266942 spells the words: anoxia, anoxic
267243 spells the words: borage, corbie
267283 spells the words: ansate, borate
267327 spells the words: bordar, Boreas
267335 spells the words: bordel, cordel
267337 spells the words: bopeep, border, corder
267433 spells the words: boride, copied
267437 spells the words: bosher, copier, cosher
267463 spells the words: borine, cosine
267464 spells the words: boring, coping, coring
267478 spells the words: aorist, copist
267482 spells the words: amrita, copita
267537 spells the words: bosker, corker
267635 spells the words: cormel, cornel
267642 spells the words: aosmic, cornic, cosmic
267676 spells the words: Bororo, Coropo
267687 spells the words: cormus, Cornus
267733 spells the words: bossed, copped
267737 spells the words: bosser, copper
267738 spells the words: bosset, coppet, corset, cosset
267743 spells the words: corrie, corsie, cossid
267825 spells the words: aortal, costal
267837 spells the words: copter, Cortes, corver, coster
267839 spells the words: cortex, cortez
267842 spells the words: aortic, Coptic
267866 spells the words: Boston, boston, Corton
268249 spells the words: botchy, couchy
268427 spells the words: antiar, bougar, cougar
268437 spells the words: anther, bother
268548 spells the words: Anukit, boukit
268626 spells the words: amtman, amunam, cotman
268689 spells the words: bounty, county
268733 spells the words: amused, amusee, couped, coupee
268737 spells the words: amuser, bouser, couper
268742 spells the words: amusia, anuria, anuric
268746 spells the words: Amusgo, antrin, anusim, cousin
268773 spells the words: bourse, course
268837 spells the words: cotter, couter
268866 spells the words: bottom, cotton
269269 spells the words: bowboy, cowboy
269273 spells the words: boyard, coward
269379 spells the words: Bowery, bowery
269464 spells the words: bowing, boxing
269474 spells the words: boyish, cowish, coyish
269537 spells the words: bowker, bowler
269566 spells the words: amylom, amylon
269626 spells the words: bowman, boxman, cowman
269746 spells the words: amyrin, bowpin
272233 spells the words: arcade, braced
272237 spells the words: bracer, braces, craber
272243 spells the words: Apache, apache
272259 spells the words: bracky, cracky
272426 spells the words: ascham, ascian
272437 spells the words: Archer, archer, arches
272464 spells the words: arcing, Brahmi
272467 spells the words: Arains, brains
272473 spells the words: braird, braise
272537 spells the words: Arales, braker
272543 spells the words: aralie, brakie
272623 spells the words: Crambe, crambe, crance
272639 spells the words: Brandy, brandy, craney
272642 spells the words: aranga, Bramia, Crania, crania, cranic
272669 spells the words: branny, cranny
272687 spells the words: Aramus, crants
272826 spells the words: apatan, Arauan
272837 spells the words: braver, crater, craver
272842 spells the words: Arctia, arctic
272852 spells the words: arcula, ascula
272862 spells the words: Arauna, brauna
272937 spells the words: brayer, brazer, crayer
272959 spells the words: brawly, crawly
273224 spells the words: areach, breach
273642 spells the words: Arenga, asemia, Bremia, crenic
273653 spells the words: areole, creole
273779 spells the words: apepsy, cressy
273842 spells the words: Cretic, cretic
273937 spells the words: brewer, crewer
274237 spells the words: apices, briber
274323 spells the words: Apidae, apiece
274343 spells the words: aridge, bridge
274379 spells the words: ashery, briery
274448 spells the words: aright, bright
274483 spells the words: Argive, arigue
274626 spells the words: Argoan, ashman
274643 spells the words: apioid, cringe
274673 spells the words: apiose, ariose, ashore
274679 spells the words: argosy, crimpy
274737 spells the words: cripes, crises
274782 spells the words: arista, crista
274842 spells the words: aphtha, asitia, critic
275268 spells the words: askant, aslant
275483 spells the words: aplite, Arkite, arkite
275673 spells the words: arkose, aslope
276243 spells the words: broche, croche
276246 spells the words: brocho, crocin
276259 spells the words: croaky, crocky
276287 spells the words: Crocus, crocus
276325 spells the words: apneal, apodal
276342 spells the words: apneic, Apodia, apodia
276433 spells the words: apogee, armied
276642 spells the words: aponia, aponic, Aronia, asonia, bromic
276653 spells the words: Arnold, asmoke, Brooke
276742 spells the words: aporia, aposia
276824 spells the words: crotch, crouch
276873 spells the words: armure, arouse, croupe, crouse
276937 spells the words: crower, crozer
277327 spells the words: appear, arrear
277328 spells the words: arrect, aspect
277368 spells the words: arpent, arrent, assent
277378 spells the words: arrest, assert
277446 spells the words: arshin, assign
277473 spells the words: aspire, assise
277474 spells the words: arrish, aspish, assish
277673 spells the words: appose, arrope
277678 spells the words: apport, asport, assort
278243 spells the words: aquage, cruche
278337 spells the words: asteep, asteer
278426 spells the words: Aptian, Astian
278473 spells the words: bruise, cruise
278483 spells the words: astite, cruive
278624 spells the words: brunch, crunch
278629 spells the words: brumby, crumby
278636 spells the words: Arundo, crumen
278669 spells the words: astony, crummy
278725 spells the words: astral, crural
278743 spells the words: Astrid, crusie
279464 spells the words: aswing, crying
282225 spells the words: atabal, buccal
282822 spells the words: Aucuba, aucuba
282868 spells the words: ataunt, avaunt
282942 spells the words: ataxia, ataxic
283337 spells the words: budder, buffer, cuffer
283353 spells the words: buddle, buffle, cuddle
283466 spells the words: Audion, audion
283782 spells the words: Avesta, cuesta
284878 spells the words: August, august
285285 spells the words: atlatl, bulbul
285537 spells the words: bulker, buller, culler
285538 spells the words: auklet, bullet, cullet
285837 spells the words: bulter, culver
286242 spells the words: atocha, atocia, aumaga, cumbha
286537 spells the words: bunker, cunjer
286637 spells the words: atoner, bummer, cummer, cunner
286642 spells the words: atomic, atonia, atonic
286837 spells the words: Bunter, bunter
286937 spells the words: avower, avoyer
286995 spells the words: Atoxyl, atoxyl
287283 spells the words: aurate, curate
287287 spells the words: Cuscus, cuscus
287353 spells the words: burele, curdle
287425 spells the words: atrial, burial, curial
287427 spells the words: Aushar, Avshar
287428 spells the words: Buriat, cushat
287433 spells the words: auride, burgee, buried, bushed, busied
287437 spells the words: burier, busher
287463 spells the words: busine, curine
287466 spells the words: burgoo, burion
287483 spells the words: aurite, curite
287486 spells the words: atrium, curium
287533 spells the words: burled, busked, curled
287537 spells the words: burker, burler, busker, curler
287538 spells the words: burlet, busket
287539 spells the words: Burley, curlew
287626 spells the words: Burman, busman, cupman
287672 spells the words: Atropa, aurora
287687 spells the words: atrous, aurous
287725 spells the words: bursal, cursal, cuspal
287733 spells the words: burred, cupped, cursed, cusped, cussed
287737 spells the words: burrer, busser, cupper, curser, cusser
287743 spells the words: Aussie, cuspid
287833 spells the words: busted, bustee, curved
287837 spells the words: Auster, buster, curver
287853 spells the words: bustle, cupule, curule
287866 spells the words: burton, custom
288363 spells the words: attend, butene
288537 spells the words: Butler, butler, cutler
288837 spells the words: butter, cutter
288853 spells the words: buttle, cuttle
288866 spells the words: autumn, button, cuttoo
292527 spells the words: cyclar, cyclas
292532 spells the words: Azalea, azalea
292687 spells the words: Cyamus, cyanus
294263 spells the words: bygane, byhand
295377 spells the words: awless, ayless
296272 spells the words: Aymara, Cynara
296625 spells the words: axonal, azonal
296642 spells the words: Axonia, azonic
296643 spells the words: cymoid, cynoid
296687 spells the words: awmous, cymous
297529 spells the words: byplay, byrlaw
297787 spells the words: byrrus, byssus
298322 spells the words: Azteca, azteca
298643 spells the words: axunge, cytoid
298733 spells the words: axtree, azured
322426 spells the words: Dacian, Fabian
322537 spells the words: dacker, fabler
322895 spells the words: Dactyl, dactyl
323325 spells the words: Daedal, daedal
323353 spells the words: daddle, daffle, faddle, faffle
324437 spells the words: dagger, fagger
324666 spells the words: dahoon, daimon
324689 spells the words: dainty, fagoty, fainty
325237 spells the words: falcer, falces
325537 spells the words: dalles, faller
325866 spells the words: Dalton, dalton
326243 spells the words: damage, Danaid, danaid
326437 spells the words: damier, danger
326453 spells the words: dangle, fangle
326463 spells the words: damine, daoine, famine
326474 spells the words: Danish, famish
326637 spells the words: dammer, damner, danner, fanner
327237 spells the words: farcer, fasces
327242 spells the words: darbha, fascia
327335 spells the words: fardel, farfel
327433 spells the words: dashed, dashee
327437 spells the words: darger, dasher, easier, fasher
327464 spells the words: daring, earing, easing, faring
327474 spells the words: Farish, farish
327538 spells the words: earlet, farleu
327637 spells the words: darner, earner, farmer
327837 spells the words: darter, Easter, easter, faster
327873 spells the words: dartre, Eastre
327887 spells the words: dastur, fastus
328237 spells the words: dauber, fauces
328464 spells the words: dating, eating
328466 spells the words: dation, fathom
328476 spells the words: Datism, favism
328624 spells the words: daunch, davoch
332273 spells the words: debase, decare
332278 spells the words: decart, decast
332283 spells the words: debate, decate
332336 spells the words: deaden, deafen
332359 spells the words: deadly, deafly
332453 spells the words: debile, decile
332537 spells the words: dealer, decker
332628 spells the words: decoat, decoct
332733 spells the words: decree, feared
333223 spells the words: deface, efface
333328 spells the words: defeat, defect, effect
333642 spells the words: edemic, Edenic
333676 spells the words: deform, efform
333873 spells the words: defuse, effuse
334667 spells the words: Deimos, deinos
335463 spells the words: delime, feline
335833 spells the words: delude, felted
335837 spells the words: delver, felter
336483 spells the words: dengue, fenite
336683 spells the words: demote, denote
336837 spells the words: denter, fenter
337283 spells the words: derate, fescue
337642 spells the words: dermic, desmic
338378 spells the words: detest, devest, eftest
338687 spells the words: detour, devour
339462 spells the words: dezinc, Edwina
339837 spells the words: Dexter, dexter, fewter
342237 spells the words: dibber, fibber
342253 spells the words: diacle, dibble
342273 spells the words: dibase, fiacre
342537 spells the words: dialer, dicker
342762 spells the words: dharma, dharna
342852 spells the words: fibula, Ficula
343337 spells the words: didder, differ
343353 spells the words: diddle, fiddle, Fidele
343782 spells the words: egesta, fiesta
343837 spells the words: Dieter, dieter
345283 spells the words: dilate, filate
345483 spells the words: ehlite, filite
345537 spells the words: dilker, filler
346253 spells the words: dimble, fimble, finale
346337 spells the words: dinder, finder
346425 spells the words: Fingal, finial, finick
346464 spells the words: dining, fining
346489 spells the words: dimity, egoity, finity
346633 spells the words: dimmed, finned
346637 spells the words: dimmer, dinner, finner
347225 spells the words: discal, fiscal
347363 spells the words: diseme, Eirene
347433 spells the words: dished, fished
347437 spells the words: disher, fisher
347626 spells the words: disman, firman
347639 spells the words: dipody, disnew
347837 spells the words: dipter, fister
348378 spells the words: divert, divest
348437 spells the words: dither, either
352463 spells the words: Elaine, elaine
352743 spells the words: Elaphe, elapid
352833 spells the words: elated, flated
352842 spells the words: Elatha, Flavia, flavic
352867 spells the words: elator, flavor
353624 spells the words: elench, flench
353933 spells the words: flewed, flexed
356446 spells the words: Elohim, eloign
356737 spells the words: eloper, flores
356779 spells the words: floppy, flossy
358283 spells the words: eluate, fluate
359742 spells the words: Elysia, elysia
362253 spells the words: doable, enable, encake
362536 spells the words: docken, emblem
362667 spells the words: enamor, encoop
362842 spells the words: embuia, enatic
362875 spells the words: embusk, encurl
363337 spells the words: dodder, doffer, fodder
363483 spells the words: endite, endive
363626 spells the words: dodman, foeman
364283 spells the words: dogate, engaud
364366 spells the words: dogdom, fogdom
364433 spells the words: dogged, fogged
364437 spells the words: dogger, fogger
364537 spells the words: Engler, foiler
364626 spells the words: dogman, fogman
364726 spells the words: engram, fogram
365433 spells the words: enlief, enlife
365462 spells the words: dokhma, dolina
365486 spells the words: dolium, folium
365537 spells the words: Fokker, folles
366323 spells the words: doodad, ennead
366325 spells the words: enodal, fondak
366342 spells the words: Dondia, Doodia
366353 spells the words: doodle, fondle
366368 spells the words: doment, foment
366388 spells the words: domett, Emmett
366466 spells the words: domino, dongon
366539 spells the words: donkey, dooley
366634 spells the words: domnei, Donmeh
366637 spells the words: doomer, fooner
366643 spells the words: domoid, Donnie
366833 spells the words: fonted, footed
367227 spells the words: Dorcas, forbar
367243 spells the words: dosage, enrage, forage, forbid, forche
367263 spells the words: ensand, forane
367275 spells the words: Dorask, empark
367283 spells the words: ensate, eosate
367433 spells the words: eoside, forged
367468 spells the words: forgot, forint
367473 spells the words: Empire, empire
367483 spells the words: enrive, Fosite
367633 spells the words: formed, formee
367637 spells the words: dormer, former
367642 spells the words: dornic, formic
367723 spells the words: dorsad, forrad
367725 spells the words: dorsal, dossal
367735 spells the words: dorsel, dossel
367737 spells the words: Dopper, dopper, dorser, dosser
367738 spells the words: forpet, forset
367745 spells the words: dossil, fossil
367748 spells the words: forpit, forrit
367837 spells the words: dorter, ensuer, Foster, foster
367846 spells the words: enruin, fortin
368243 spells the words: dotage, douche
368437 spells the words: envier, fother
368448 spells the words: dought, fought
368474 spells the words: dotish, dovish
368737 spells the words: douser, fourer
368837 spells the words: dotter, douter, fouter
369379 spells the words: dowery, foxery
369459 spells the words: dowily, dozily, foxily
369663 spells the words: enwood, enzone
372737 spells the words: draper, eraser
372933 spells the words: drawee, frayed
372937 spells the words: drawer, frazer
373624 spells the words: drench, French
374225 spells the words: epical, erical
374263 spells the words: Ergane, friand
374962 spells the words: Epizoa, epizoa
376342 spells the words: epodic, esodic
376779 spells the words: droppy, dropsy, drossy
376844 spells the words: Frothi, frough
378283 spells the words: equate, estate
378489 spells the words: equity, fruity
378725 spells the words: drupal, epural
379677 spells the words: Dryops, Eryops
382283 spells the words: evacue, fucate
382543 spells the words: duckie, Euclid
383337 spells the words: dudder, duffer
383537 spells the words: dudler, dueler, fueler
383783 spells the words: eveque, fuerte
384363 spells the words: ethene, Eugene
384537 spells the words: duiker, fugler
385537 spells the words: dukker, duller, fuller
385843 spells the words: dultie, fulvid
385943 spells the words: fulyie, fulzie
386337 spells the words: dunder, funder
386342 spells the words: Evodia, fundic
386442 spells the words: Fungia, fungic
386537 spells the words: Dunker, dunker, evoker, funker
386635 spells the words: dummel, funnel
386673 spells the words: dumose, fumose
386823 spells the words: euouae, evovae
387225 spells the words: dusack, furcal
387246 spells the words: durain, fusain, fuscin
387426 spells the words: durgan, Durham, durian
387466 spells the words: dupion, euphon, fusion
387643 spells the words: furoid, fusoid
387833 spells the words: dustee, fustee
387846 spells the words: Dustin, fustin
397328 spells the words: expect, exsect
397378 spells the words: expert, exsert
422253 spells the words: gabble, habble
422533 spells the words: hacked, hackee
423337 spells the words: gadder, gaffer
423353 spells the words: gaffle, haffle
423626 spells the words: gadman, iceman
423742 spells the words: Iberia, Iberic
424437 spells the words: gagger, hagger
424453 spells the words: gaggle, haggle
424626 spells the words: gagman, Hainan
424736 spells the words: hairdo, hairen
425524 spells the words: gallah, hallah
425539 spells the words: galley, hallex
425542 spells the words: Gallic, gallic
425566 spells the words: gallon, halloo
425837 spells the words: halter, halver, halves
426242 spells the words: gambia, iambic
426253 spells the words: gamble, hamald, hamble
426337 spells the words: gander, hander
426437 spells the words: ganger, hanger
426459 spells the words: gamily, gangly
426483 spells the words: gangue, Hamite
426537 spells the words: gaoler, hanker
426637 spells the words: gammer, ganner, hammer
426642 spells the words: Gaonic, iconic
426735 spells the words: gansel, hansel
426853 spells the words: hamule, hantle
427253 spells the words: garble, Hapale
427336 spells the words: garden, harden
427422 spells the words: gariba, hashab
427437 spells the words: gashes, hasher
427474 spells the words: garish, harish
427538 spells the words: gasket, haslet
427626 spells the words: gasman, harman
427635 spells the words: garnel, harmel
427637 spells the words: garner, harmer
427727 spells the words: Gaspar, hassar
427737 spells the words: gasper, gasser, harper
427738 spells the words: Garret, garret
427836 spells the words: garten, hapten, hasten
427837 spells the words: garter, gaster, haster
427839 spells the words: garvey, Harvey
428243 spells the words: gauche, havage
428437 spells the words: gather, gauger, havier
428689 spells the words: gaunty, haunty
428837 spells the words: gatter, hatter
429464 spells the words: gazing, hazing
432737 spells the words: heaper, hearer
432837 spells the words: heater, heaver
432867 spells the words: Hector, hector
433337 spells the words: gedder, heeder
433533 spells the words: geejee, heeled
435337 spells the words: gelder, helder
436372 spells the words: genera, hemera
436382 spells the words: Geneva, geneva
436472 spells the words: Genipa, genipa
436476 spells the words: henism, Idoism
436637 spells the words: gemmer, hemmer
436646 spells the words: Geonim, hennin
436736 spells the words: hempen, henpen
436743 spells the words: George, geosid
436837 spells the words: gentes, henter
437253 spells the words: Gerald, herald
437366 spells the words: Gepeoo, hereon
437626 spells the words: German, german, Herman
437642 spells the words: hernia, heroic
437646 spells the words: germin, Heroin, heroin
437648 spells the words: Hermit, hermit
437737 spells the words: Gerres, hepper, herpes, Hesper
438837 spells the words: getter, hetter
442287 spells the words: gibbus, hiccup
443332 spells the words: Ghedda, giddea
444437 spells the words: gigger, higher
444453 spells the words: giggle, higgle
444459 spells the words: giggly, highly
445537 spells the words: giller, Gilles, hiller
446437 spells the words: ginger, hinger
446546 spells the words: Ginkgo, ginkgo
446637 spells the words: gimmer, ginner
446639 spells the words: ginney, hinney
447737 spells the words: gipper, gipser, hisser
447742 spells the words: Hippia, hippic
447753 spells the words: girsle, hipple, hirple, hirsle
452779 spells the words: glarry, glassy
462237 spells the words: gobber, hobber
462238 spells the words: gobbet, hobbet
462253 spells the words: gobble, hobble
462276 spells the words: imbarn, incarn
462278 spells the words: gocart, incast
462378 spells the words: incept, incest
462433 spells the words: inched, incide
462538 spells the words: goblet, hocket
462642 spells the words: imamic, inanga
462662 spells the words: goanna, hobnob
462663 spells the words: inbond, income
462937 spells the words: gnawer, hoaxer
463263 spells the words: indane, infame, infand
463328 spells the words: indebt, infect
463333 spells the words: godded, indeed, infeed
463337 spells the words: goffer, hodder
463353 spells the words: goffle, hoddle
463385 spells the words: Godful, hodful, hoeful
463446 spells the words: indign, indigo
463476 spells the words: infirm, iodism
463483 spells the words: indite, iodite
463653 spells the words: indole, infold
463676 spells the words: inform, iodoso
463823 spells the words: Goetae, induce
463842 spells the words: goetia, goetic
465336 spells the words: golden, holden
465337 spells the words: golder, golfer, holder
465642 spells the words: holmia, holmic
466283 spells the words: inmate, innate
466333 spells the words: hooded, hoofed
466337 spells the words: goofer, hoofer, Inodes
466359 spells the words: goodly, homely
466378 spells the words: honest, innest
466436 spells the words: Imogen, inogen
466459 spells the words: googly, homily, honily
466486 spells the words: Gonium, gonium, ionium
466493 spells the words: Ionize, ionize
466524 spells the words: gomlah, goolah, hookah
466537 spells the words: honker, hooker
466863 spells the words: immund, immune
467225 spells the words: gorbal, impack, insack
467253 spells the words: gorble, impale
467263 spells the words: impane, insane
467275 spells the words: impark, imparl
467378 spells the words: impest, insert
467433 spells the words: gorged, imphee, inside
467436 spells the words: gorhen, Goshen
467437 spells the words: gopher, gorger, hosier
467464 spells the words: goring, inring
467633 spells the words: gormed, hopoff, horned
467667 spells the words: hormos, impoor
467678 spells the words: import, impost, inport
467726 spells the words: gossan, inspan
467737 spells the words: hopper, horser
467837 spells the words: hoster, instep
467873 spells the words: impure, insure
467874 spells the words: inpush, inrush
468233 spells the words: hotbed, invade
468368 spells the words: intent, invent
468376 spells the words: govern, intern
468378 spells the words: invert, invest
468733 spells the words: gourde, inured
468789 spells the words: gousty, housty
469273 spells the words: Howard, inward
469337 spells the words: gowfer, howder
469548 spells the words: gowkit, howkit
472426 spells the words: Graham, graham, Graian, Isaian
472837 spells the words: grater, graver, Graves
472842 spells the words: Gratia, gravic, isatic
472847 spells the words: gratis, Isatis
473443 spells the words: Gregge, greige
474323 spells the words: griece, Ipidae, Isidae
474624 spells the words: grinch, Isinai
474766 spells the words: Grison, grison
476637 spells the words: ironer, isomer
476689 spells the words: grooty, groovy
476737 spells the words: groper, groser
478464 spells the words: Irving, isthmi
482246 spells the words: Guacho, guacin, Gubbin
482744 spells the words: Huashi, hubshi
483353 spells the words: guddle, huddle, huffle
484437 spells the words: hugger, Hughes
484453 spells the words: guggle, huggle
484632 spells the words: Guinea, guinea
486283 spells the words: gunate, humate
486326 spells the words: gunebo, Humean
486476 spells the words: Humism, Itoism
486478 spells the words: Humist, Itoist
486483 spells the words: Gunite, gunite, humite
486537 spells the words: Hunker, hunker
486635 spells the words: gunnel, hummel
486637 spells the words: gummer, gunner, hummer
486642 spells the words: Hunnic, Itonia
486837 spells the words: Gunter, gunter, Hunter
487353 spells the words: gurdle, hurdle, itself
487437 spells the words: gurges, gusher, husher
487533 spells the words: hurled, husked
487537 spells the words: hurler, husker
487724 spells the words: gurrah, hurrah
487743 spells the words: Gussie, gussie
487853 spells the words: hurtle, hustle
493742 spells the words: hydria, hydric
496642 spells the words: gymnic, hymnic
497283 spells the words: gyrate, hypate
522237 spells the words: jabber, labber
522262 spells the words: Jacana, jacana
522273 spells the words: jacare, Kabard
522437 spells the words: laager, laches
522446 spells the words: Kachin, kachin
522537 spells the words: jacker, lacker
522687 spells the words: labour, lacmus
522854 spells the words: kabuki, Kabuli
523337 spells the words: jadder, ladder
523347 spells the words: Kaffir, kaffir
523437 spells the words: jaeger, ladies
523474 spells the words: jadish, Kafiri
524433 spells the words: jagged, lagged
524437 spells the words: jagger, lagger
525264 spells the words: Kalang, lalang
526237 spells the words: lamber, lancer, lances
526242 spells the words: lamaic, lancha
526244 spells the words: kamahi, kanagi
526252 spells the words: kamala, Kanaka
526272 spells the words: janapa, kanara
526453 spells the words: jangle, langle
526487 spells the words: langur, Lanius
526627 spells the words: Lammas, lammas
526637 spells the words: jammer, lammer, lanner
526726 spells the words: jampan, Kansan
527268 spells the words: jarbot, karamu
527292 spells the words: Karaya, karaya
527385 spells the words: jarful, lapful
527437 spells the words: kasher, lasher
527733 spells the words: karree, lapped, lapsed
527737 spells the words: Jasper, jasper, lapper, lapser
527738 spells the words: lappet, lasset
527742 spells the words: karsha, Lappic
527743 spells the words: jassid, lassie
527766 spells the words: Karroo, karroo
528337 spells the words: lauder, laveer
528474 spells the words: latish, lavish
528623 spells the words: jaunce, launce
528735 spells the words: Laurel, laurel
528742 spells the words: latria, lauric
528787 spells the words: katsup, Laurus
528852 spells the words: katuka, Latuka
529464 spells the words: lawing, laying
529626 spells the words: lawman, layman
529633 spells the words: lawned, layoff
529743 spells the words: jaypie, Lawrie
529937 spells the words: jazzer, lawyer
532333 spells the words: leaded, leafed
532336 spells the words: leaden, leafen
532337 spells the words: leader, leafer
532537 spells the words: leaker, lecker
532637 spells the words: Jeames, leamer, leaner
532737 spells the words: leaper, leaser
532837 spells the words: leaver, leaves
533437 spells the words: kedger, ledger
533537 spells the words: keeker, keeler
533737 spells the words: jeerer, keeper
535846 spells the words: Kelvin, kelvin
536273 spells the words: Lenape, lenard
536643 spells the words: Jennie, Leonid
536669 spells the words: lemony, lennow
537242 spells the words: Lepcha, Lesbia
537262 spells the words: jerboa, kerana
537637 spells the words: kermes, kerner
537733 spells the words: jessed, lessee
537737 spells the words: Jesper, lesser
537739 spells the words: Jersey, jersey, kersey
537742 spells the words: Kerria, lepric
537743 spells the words: Jerrie, Jessie, kerrie
537837 spells the words: jester, Lester
537866 spells the words: Lepton, lepton
538268 spells the words: Levant, levant
538837 spells the words: jetter, letter
539359 spells the words: jewely, lewdly
542237 spells the words: jibber, kibber, libber
542253 spells the words: kibble, liable
542272 spells the words: jicara, libbra
542436 spells the words: libido, lichen
542533 spells the words: kialee, kickee
542537 spells the words: kicker, licker
542587 spells the words: khajur, kickup
542725 spells the words: jharal, kharaj, libral
543337 spells the words: Kidder, kidder, lidder
544437 spells the words: jigger, ligger
544826 spells the words: Khitan, Khivan
545837 spells the words: jilter, kilter
546242 spells the words: limbic, linaga
546243 spells the words: limbie, linage
546337 spells the words: Linder, linder
546459 spells the words: jingly, kingly
546464 spells the words: liming, lining
546537 spells the words: jinker, linker
546553 spells the words: jinkle, kinkle
546635 spells the words: kimnel, Lionel, lionel
546637 spells the words: limmer, limner
546638 spells the words: linnet, lionet
546687 spells the words: limous, linous
546746 spells the words: limpin, linpin
546759 spells the words: jimply, limply
547538 spells the words: Kislev, liplet
547737 spells the words: jipper, kipper, kisser, lipper, lisper
547837 spells the words: kirver, lister
548442 spells the words: lithia, lithic
548474 spells the words: kitish, Livish
548836 spells the words: kitten, litten
548837 spells the words: jitter, kitter, litter
548853 spells the words: kittle, little
552966 spells the words: Klaxon, klaxon
562237 spells the words: jobber, lobber
562253 spells the words: jobble, Lobale, locale
562283 spells the words: lobate, locate
562337 spells the words: loader, loafer
562442 spells the words: Kochia, lochia
562537 spells the words: jocker, locker
562664 spells the words: kobong, Loammi
562673 spells the words: jocose, lobose
562853 spells the words: lobule, locule
564437 spells the words: jogger, logger
565537 spells the words: koller, loller
565567 spells the words: jollop, lollop
566737 spells the words: looper, looser
567325 spells the words: kopeck, loreal
567326 spells the words: Jordan, jordan, Korean
567437 spells the words: josher, kosher
567737 spells the words: josser, lopper
568359 spells the words: loudly, lovely
568425 spells the words: Jovial, jovial
568472 spells the words: Louiqa, Louisa
568837 spells the words: jotter, lotter, louter, louver
569379 spells the words: jowery, lowery
582862 spells the words: Jucuna, Lucuma
584437 spells the words: jugger, lugger
586537 spells the words: Junker, junker
586737 spells the words: jumper, lumper
587426 spells the words: kurgan, Lusian
588474 spells the words: Jutish, Luvish
597283 spells the words: lyrate, lysate
597463 spells the words: kyrine, lysine
623336 spells the words: madden, Nadeem
623337 spells the words: madder, nadder
623353 spells the words: maddle, maffle
624264 spells the words: magani, Nahani
624268 spells the words: mahant, naiant
624443 spells the words: Maggie, naigie
624453 spells the words: maggle, naggle
624537 spells the words: mailer, nailer
624626 spells the words: Mainan, nagman
624637 spells the words: magnes, maimer
624654 spells the words: maholi, Maioli
624663 spells the words: mahone, ochone
624686 spells the words: magnum, Ocimum
625274 spells the words: Makari, malapi
625283 spells the words: malate, oblate
625463 spells the words: maline, nakhod
625538 spells the words: mallet, oaklet
625569 spells the words: mallow, Malloy
625664 spells the words: nakong, oblong
626243 spells the words: manage, manche
626377 spells the words: Mamers, maness
626452 spells the words: Manila, manila
626476 spells the words: manism, nanism
626478 spells the words: manist, oboist
626483 spells the words: Mangue, mangue
626538 spells the words: manlet, obolet
626546 spells the words: mankin, Nankin, nankin
626626 spells the words: mannan, Manobo, maomao
626637 spells the words: mammer, manner, Oannes
626643 spells the words: mannie, nanoid
626825 spells the words: mantal, manual, oboval
626835 spells the words: mantel, Manuel
626837 spells the words: manter, mantes
626853 spells the words: mantle, nantle
627226 spells the words: Marcan, Nascan
627235 spells the words: Marcel, marcel
627243 spells the words: marcid, oarage
627267 spells the words: marcor, Marcos
627425 spells the words: mashal, narial, nasial, oarial
627443 spells the words: Margie, mashie
627446 spells the words: margin, Nashim
627463 spells the words: marine, narine
627466 spells the words: Marion, nasion
627468 spells the words: Margot, Mariou
627478 spells the words: Marist, mashru
627533 spells the words: marked, marled, masked
627537 spells the words: marker, marler, masker
627546 spells the words: marlin, maslin, napkin
627587 spells the words: markup, Markus
627733 spells the words: marree, napped
627737 spells the words: mapper, marrer, masser, napper
627766 spells the words: marron, napron
627769 spells the words: marrow, massoy, narrow
627783 spells the words: marque, masque
627835 spells the words: martel, marvel
627837 spells the words: Martes, marver, master
627842 spells the words: Martha, mastic, nastic
627846 spells the words: Martin, martin, Marvin
628246 spells the words: Navaho, oatbin, obtain
628268 spells the words: natant, octant
628378 spells the words: obtest, obvert
628426 spells the words: matico, Nathan
628437 spells the words: mathes, mauger, nather, nauger
628483 spells the words: native, navite
628643 spells the words: maunge, octoid
628725 spells the words: matral, Natraj
628749 spells the words: matrix, Natrix
628766 spells the words: matron, natron
628837 spells the words: matter, natter
628873 spells the words: mature, nature, obtuse
632537 spells the words: mealer, necker
632759 spells the words: measly, nearly
633267 spells the words: meebos, neebor
633337 spells the words: nedder, needer
633353 spells the words: meddle, needle
633423 spells the words: mediad, office
633426 spells the words: Median, median, medico, Meehan
633466 spells the words: medimn, medino
633474 spells the words: Medish, oddish, offish
633538 spells the words: odelet, offlet
634646 spells the words: megmho, megohm
635866 spells the words: melton, nekton
636666 spells the words: Memnon, mennom
636943 spells the words: menyie, menzie
637225 spells the words: mercal, mescal
637423 spells the words: merice, mesiad
637463 spells the words: Nerine, nerine
637466 spells the words: Merino, mesion
637546 spells the words: merkin, merlin
637626 spells the words: merman, nepman
637673 spells the words: Merope, Mesore
637745 spells the words: Merril, mespil
637837 spells the words: mester, nerver, nester
638367 spells the words: meteor, oftens
638437 spells the words: mether, metier, nether
638742 spells the words: metria, metric, neuric
638837 spells the words: netter, neuter
638853 spells the words: mettle, nettle
639225 spells the words: mezcal, newcal
642437 spells the words: micher, nicher
642539 spells the words: Mickey, nickey
642553 spells the words: mickle, nickle
642642 spells the words: miamia, ogamic
642656 spells the words: Nicolo, nicolo
642664 spells the words: nibong, Ogboni
643353 spells the words: middle, niddle
643438 spells the words: midget, nidget
644459 spells the words: niggly, nighly
645366 spells the words: Nikeno, oildom
645537 spells the words: milker, miller
645538 spells the words: millet, oillet
645637 spells the words: Milner, milner
646243 spells the words: Niobid, ohmage
646253 spells the words: mimble, nimble
646424 spells the words: minhag, minhah
646643 spells the words: Minnie, minnie
646926 spells the words: Minyan, minyan
647224 spells the words: Mirach, mirach
647283 spells the words: mirate, miscue
647474 spells the words: mirish, ogrish
647729 spells the words: mispay, missay
647837 spells the words: Mister, mister, nipter
653687 spells the words: Olenus, oleous
662237 spells the words: mobber, nobber
662253 spells the words: nobble, nocake
662472 spells the words: omagra, Onagra, onagra
663376 spells the words: Modern, modern
663842 spells the words: Noetic, noetic
663853 spells the words: module, nodule
664426 spells the words: moggan, Moghan
664537 spells the words: moiler, moiles, noiler
666243 spells the words: nonage, nonaid
666266 spells the words: noncom, noncon
666353 spells the words: moodle, noodle
666368 spells the words: moment, nonent
666425 spells the words: monial, nomial
666427 spells the words: Monias, nongas
666476 spells the words: momism, monism, nomism
666478 spells the words: mongst, monist, omnist
666837 spells the words: Montes, mooter
667242 spells the words: Mosaic, mosaic
667283 spells the words: morate, norate
667426 spells the words: Morgan, morgan
667464 spells the words: moping, nosing
667483 spells the words: morgue, norite
667666 spells the words: Mormon, mormon
667735 spells the words: morsel, norsel
667737 spells the words: mopper, mosser
667747 spells the words: Morris, morris
667769 spells the words: morrow, Norroy
668283 spells the words: notate, novate
668423 spells the words: notice, novice
668437 spells the words: mother, nother
668466 spells the words: motion, notion
669464 spells the words: mowing, mozing
674426 spells the words: Ophian, origan
674466 spells the words: Ophion, orihon
674476 spells the words: Ophism, opiism
674483 spells the words: Ophite, ophite
676283 spells the words: ornate, osmate
676663 spells the words: Ormond, Osmond
677426 spells the words: Oppian, orphan, Ossian
678425 spells the words: orthal, ostial
678442 spells the words: orthic, ortiga
678483 spells the words: optive, ortive
682246 spells the words: mucago, nubbin
682537 spells the words: Mucker, mucker
683353 spells the words: muddle, muffle, nuddle
684323 spells the words: Otidae, Ovidae
684438 spells the words: mugget, nugget
685524 spells the words: mullah, nullah
686253 spells the words: mumble, numble, nuncle
687243 spells the words: murage, muscid
687546 spells the words: murlin, muslin
687837 spells the words: muster, ouster
688243 spells the words: mutage, outage, outbid
688268 spells the words: mutant, nutant
688269 spells the words: outbow, outbox
688283 spells the words: mutate, nutate, outbud
688359 spells the words: mutely, outfly
688483 spells the words: mutive, outhue
688529 spells the words: outlaw, outlay
688538 spells the words: nutlet, outjet, outlet
688729 spells the words: outpay, outray, outsay
688742 spells the words: nutria, oturia
688786 spells the words: outrun, outsum
688837 spells the words: mutter, nutter
689953 spells the words: muzzle, nuzzle
692642 spells the words: oxamic, oxanic
692643 spells the words: mycoid, oxamid
696642 spells the words: oxonic, ozonic
696742 spells the words: myopia, myopic, nympha
697242 spells the words: Myrcia, myrcia
697422 spells the words: Myrica, myrica
697837 spells the words: mystes, oyster
722253 spells the words: pabble, rabble
722425 spells the words: pachak, racial
722426 spells the words: Sabian, Sacian
722462 spells the words: Sabina, sabina
722463 spells the words: Sabine, sabine
722533 spells the words: sacked, scaled
722537 spells the words: packer, racker, sacker, scaler, scales
722538 spells the words: packet, racket
722642 spells the words: Scania, Scanic
722723 spells the words: sacrad, scarce
722787 spells the words: scapus, Scarus, scarus
723353 spells the words: paddle, raddle, raffle, saddle
723462 spells the words: Padina, Saeima
723837 spells the words: rafter, saeter
724272 spells the words: Sahara, Sciara
724363 spells the words: sagene, scheme, schene
724433 spells the words: ragged, raggee
724437 spells the words: ragger, sagger
724453 spells the words: paigle, raggle
724462 spells the words: pagina, Sagina
724464 spells the words: raging, saging
724537 spells the words: railer, sailer
724637 spells the words: Rainer, rainer
724665 spells the words: School, school
724688 spells the words: ragout, schout
724733 spells the words: paired, raised
724737 spells the words: pairer, raiser
724843 spells the words: saithe, schuhe
724853 spells the words: ragule, schule
724883 spells the words: Paiute, schute
725262 spells the words: pajama, palama
725283 spells the words: palate, sclate
725462 spells the words: Salina, salina, sclimb
725464 spells the words: paling, raking
725474 spells the words: palish, rakish, Salish
725482 spells the words: Saliva, saliva
725533 spells the words: palkee, palled, sallee
725538 spells the words: pallet, sallet
725623 spells the words: palmad, Palmae
725663 spells the words: Salome, sblood
725666 spells the words: Salmon, salmon, saloon
725833 spells the words: salted, saltee
725837 spells the words: palter, salter, salver
726225 spells the words: Sambal, sambal
726232 spells the words: panada, ramada
726234 spells the words: rambeh, samadh
726243 spells the words: ramage, ranche, rancid, Sanche
726246 spells the words: rancho, sancho
726325 spells the words: pandal, rameal, Randal, sandak, sandal
726326 spells the words: pandan, Ramean, randan, sandan
726337 spells the words: pander, rander, Sander, sander
726347 spells the words: randir, Sandip
726352 spells the words: Pamela, panela
726353 spells the words: pandle, randle
726359 spells the words: samely, sanely
726368 spells the words: pament, rament
726437 spells the words: ranger, sanger, sanies
726439 spells the words: ramify, rangey, sanify
726474 spells the words: Pamiri, samiri, Samish
726476 spells the words: Ramiro, Ramism
726489 spells the words: Sanity, sanity
726542 spells the words: Sanjib, sankha, Scolia, scolia
726626 spells the words: panman, pannam, Panoan, Samoan
726635 spells the words: pannel, rammel, rannel, sammel
726637 spells the words: panner, rammer, Ramnes, sammer
726687 spells the words: pannus, ramous, sannup
726724 spells the words: ramsch, scorch
726726 spells the words: sampan, Samsam
726727 spells the words: pampas, Sansar
726733 spells the words: ramped, scored
726737 spells the words: pamper, ramper, scorer
726742 spells the words: scopic, scoria
726766 spells the words: ramson, ransom, Samson, samson
726773 spells the words: pampre, scorse
726824 spells the words: Scotch, scotch, scouch
726825 spells the words: Santal, santal
726835 spells the words: Samuel, scovel
726837 spells the words: panter, ranter, scoter
726842 spells the words: Scotia, scotia, Scotic
726853 spells the words: pantle, ramule
726866 spells the words: panton, santon
726879 spells the words: pantry, scoury
727223 spells the words: saraad, scrabe
727225 spells the words: Pascal, rascal
727246 spells the words: Papago, papain
727253 spells the words: parale, sarcle
727264 spells the words: parang, pasang, sasani
727295 spells the words: scrawk, scrawl
727326 spells the words: pardao, scream
727333 spells the words: parded, screed
727335 spells the words: sardel, screek, screel
727426 spells the words: Parian, parian
727437 spells the words: paries, rapier, rasher
727463 spells the words: parine, rapine, sasine, scrime, scrine
727464 spells the words: paring, raping
727466 spells the words: papion, rasion
727474 spells the words: papish, parish, rarish
727478 spells the words: Papist, papist, rapist, script
727484 spells the words: Pariti, Rashti
727486 spells the words: Pashto, Sapium
727489 spells the words: parity, rarity
727633 spells the words: parode, scroff
727664 spells the words: Saponi, sarong
727682 spells the words: Sapota, sapota, scrota
727725 spells the words: parpal, Sassak
727732 spells the words: Pappea, parsec
727733 spells the words: Parsee, passee, rasped
727735 spells the words: parrel, rappel
727736 spells the words: passen, sarsen
727737 spells the words: parser, Passer, passer, rapper, rasper, sapper
727787 spells the words: pappus, passus
727826 spells the words: Papuan, partan
727833 spells the words: parted, pasted, scruff
727837 spells the words: parter, paster, raster
727838 spells the words: paquet, scruft
727845 spells the words: pastil, rastik
727853 spells the words: papule, rastle
727859 spells the words: partly, raptly
727867 spells the words: pastor, raptor, sartor, scrump
727873 spells the words: parure, rasure
727887 spells the words: raptus, Rastus
727926 spells the words: sarwan, Sarzan
728243 spells the words: pavage, raucid, ravage, savage
728272 spells the words: satara, Savara
728339 spells the words: patefy, scuddy, scuffy
728433 spells the words: pathed, rathed
728437 spells the words: pavier, rather, sauger
728463 spells the words: patine, ratine, ravine, satine
728464 spells the words: paving, rating, raving, saving
728467 spells the words: pathos, pavior, savior
728543 spells the words: paulie, saulie
728652 spells the words: patola, savola
728666 spells the words: ratoon, saumon
728687 spells the words: Saumur, savour
728737 spells the words: pauper, pauser
728739 spells the words: scurdy, scurfy
728742 spells the words: patria, Sauria
728766 spells the words: patron, satron
728836 spells the words: patten, ratten
728837 spells the words: patter, ratter
728853 spells the words: rattle, sattle
728886 spells the words: Scutum, scutum
729464 spells the words: pawing, paying, sawing, saying
729474 spells the words: rawish, sawish, Saxish
729633 spells the words: Pawnee, pawnee, payoff
729639 spells the words: Sawney, sawney
729843 spells the words: saxtie, scythe
729929 spells the words: paxwax, sawway
732248 spells the words: rebait, sebait
732249 spells the words: peachy, reachy
732253 spells the words: pebble, rebake, rebale, Secale
732255 spells the words: recalk, recall
732268 spells the words: recant, secant
732273 spells the words: rebase, recase
732278 spells the words: recart, recast
732283 spells the words: rebate, sebate
732333 spells the words: recede, secede
732427 spells the words: rebias, rechar
732483 spells the words: pecite, rebite, recite
732533 spells the words: peaked, pecked, sealed
732537 spells the words: peaker, pecker, reales, sealer
732538 spells the words: pecket, sealet
732559 spells the words: peckly, really
732625 spells the words: recoal, recock
732628 spells the words: recoat, recoct
732633 spells the words: recode, seamed
732637 spells the words: reamer, seamer
732645 spells the words: reboil, recoil
732646 spells the words: recoin, secohm
732653 spells the words: rebold, recoke
732663 spells the words: rebone, second
732665 spells the words: rebook, recook, recool
732673 spells the words: rebore, record
732687 spells the words: recoup, Seamus
732737 spells the words: reaper, rearer, searer
732739 spells the words: rebrew, recrew
732766 spells the words: peason, reason, season
732833 spells the words: rebuff, seated
732837 spells the words: reaver, seater
732867 spells the words: rector, sector
732869 spells the words: reavow, rebuoy
732873 spells the words: recure, recuse, secure
732879 spells the words: rebury, rebusy
732887 spells the words: pectus, reatus, rectus
733282 spells the words: Pedata, redaub
733283 spells the words: pedate, redate, redbud, sedate
733325 spells the words: redeal, redeck
733333 spells the words: redeed, reeded, refeed, seeded
733336 spells the words: redden, redeem, reeden
733337 spells the words: pedder, redder, reeder, reefer, Seeder, seeder
733463 spells the words: refind, refine
733533 spells the words: peeled, reeled, reflee
733537 spells the words: peeler, reeker, reeler, seeker
733643 spells the words: peenge, reenge, seenie
733668 spells the words: refont, refoot
733729 spells the words: redraw, seesaw
733733 spells the words: seeped, seesee
733737 spells the words: peeper, reeper
733823 spells the words: reduce, seduce
733828 spells the words: reduct, seduct
733843 spells the words: refuge, seethe
733853 spells the words: pedule, reetle
734253 spells the words: regale, rehale
734327 spells the words: reheap, rehear
734335 spells the words: reheel, Seidel, seidel
734433 spells the words: pegged, segged
734453 spells the words: peggle, regild
734538 spells the words: peglet, reglet
734637 spells the words: Reiner, seiner
734837 spells the words: reiter, reiver
735263 spells the words: reland, Sekane
735264 spells the words: Rejang, Sekani
735328 spells the words: reject, select
735363 spells the words: relend, Selene
735425 spells the words: pelick, rekick, relick
735463 spells the words: relime, reline
735464 spells the words: Peking, reking
735466 spells the words: peliom, selion
735483 spells the words: pelite, relive
735527 spells the words: pellar, pellas, sellar
735537 spells the words: peller, seller
735646 spells the words: rejoin, sejoin
735837 spells the words: pelter, pelves, Selter
736245 spells the words: pencil, remail, renail
736253 spells the words: remake, remble, semble
736263 spells the words: remand, rename
736264 spells the words: penang, Semang
736275 spells the words: remark, remask
736333 spells the words: remede, semeed, sendee
736337 spells the words: render, sender
736342 spells the words: semeia, senega
736453 spells the words: penile, senile
736623 spells the words: pennae, Semnae
736638 spells the words: pennet, rennet, semmet, sennet
736648 spells the words: reomit, semmit, sennit
736683 spells the words: remote, remove
736736 spells the words: reopen, semsem
736786 spells the words: pensum, sensum
736833 spells the words: rented, rentee
736879 spells the words: penury, sentry
737225 spells the words: repack, rerack, resack
737226 spells the words: rescan, Sesban
737243 spells the words: percid, pesage, repage
737245 spells the words: rerail, resail, serail
737253 spells the words: repale, rerake, resale
737263 spells the words: repand, sesame
737283 spells the words: repave, rerate, rescue
737325 spells the words: repeal, reseal
737326 spells the words: Perean, reseam, Serean
737328 spells the words: repeat, reseat, resect
737332 spells the words: Reseda, reseda
737335 spells the words: rereel, reseek
737363 spells the words: resend, resene, serene
737368 spells the words: repent, rerent, resent
737425 spells the words: repick, serial
737426 spells the words: sepian, Serian
737428 spells the words: Pericu, Seshat
737437 spells the words: serger, series
737446 spells the words: resign, Sergio
737453 spells the words: repile, resile
737463 spells the words: perine, period, repine, reshoe, serine
737464 spells the words: rering, resing
737466 spells the words: pepino, sepion
737473 spells the words: repipe, rerise
737486 spells the words: reshun, sepium
737529 spells the words: replay, reslay
737543 spells the words: perlid, repkie
737546 spells the words: Perkin, perkin, reskin
737568 spells the words: replot, reslot
737586 spells the words: peplum, replum
737627 spells the words: resnap, resoap
737655 spells the words: repoll, reroll
737663 spells the words: repone, reroof, sepone
737666 spells the words: sermon, seroon
737668 spells the words: reroot, seroot
737672 spells the words: resorb, serosa
737673 spells the words: repope, repose, rerope
737678 spells the words: report, repost, resort
737687 spells the words: repour, serous
737726 spells the words: respan, serran
737746 spells the words: peppin, pepsin, respin
737747 spells the words: pepsis, Persis, persis, sepsis
737766 spells the words: perron, person
737825 spells the words: resuck, septal, serval
737826 spells the words: septan, Sequan
737836 spells the words: perten, restem
737837 spells the words: pester, restep, rester, restes, server
737838 spells the words: septet, servet, sestet
737842 spells the words: peptic, septic
737846 spells the words: repugn, requin, Restio, sequin
737847 spells the words: restir, restis
737848 spells the words: requit, resuit
737853 spells the words: peruke, perule, pestle
737886 spells the words: septum, sertum, Sesuto
738273 spells the words: petard, retape, retard, retare
738279 spells the words: petary, revary
738363 spells the words: retene, revend
738368 spells the words: retent, revent
738373 spells the words: revere, severe
738378 spells the words: retest, revert, revest
738379 spells the words: revery, severy
738437 spells the words: retier, setier
738453 spells the words: retile, revile
738473 spells the words: retire, revise
738483 spells the words: petite, revive
738653 spells the words: retold, revoke
738665 spells the words: retook, retool
738687 spells the words: Peumus, retour, setous
738743 spells the words: petrie, reurge
738833 spells the words: petted, retted, settee
738837 spells the words: petter, retter, setter
738853 spells the words: pettle, settle, setule
738863 spells the words: petune, retune
738873 spells the words: returf, retuse
739243 spells the words: pewage, sewage
739276 spells the words: rewarm, rewarn
739464 spells the words: pewing, sewing
739683 spells the words: peyote, rewove
739866 spells the words: peyton, sexton
742233 spells the words: ribbed, sibbed
742237 spells the words: ribber, sibber
742253 spells the words: piacle, ribald, ribble
742333 spells the words: piaffe, shaded
742363 spells the words: Picene, picene
742369 spells the words: Shadow, shadow
742463 spells the words: picine, ricine
742533 spells the words: picked, pickee
742536 spells the words: shaken, sicken
742537 spells the words: picker, ricker, Shaker, shaker, sicker
742538 spells the words: picket, riblet
742542 spells the words: shakha, Sialia, sialic
742553 spells the words: pickle, rickle, sickle
742584 spells the words: Shakti, shakti
742587 spells the words: Phajus, pickup
742639 spells the words: Shandy, shandy
742642 spells the words: phanic, pianic, picnic
742669 spells the words: shammy, shanny
742722 spells the words: ricrac, sicsac
742737 spells the words: phases, shaper, sharer
742742 spells the words: phasic, picric, Sharia
742747 spells the words: phasis, Picris, Rhapis
742762 spells the words: phasma, Piaroa
742766 spells the words: rhason, Sharon
742779 spells the words: sharpy, sharry
742833 spells the words: shaved, shavee
742836 spells the words: picudo, shaven
742852 spells the words: Shaula, sicula
743337 spells the words: ridder, sheder, sidder
743353 spells the words: piddle, piffle, riddle, riffle, siffle
743359 spells the words: piedly, rifely, sheely
743426 spells the words: Piegan, Rifian
743437 spells the words: ridger, sieger
743464 spells the words: riding, siding
743537 spells the words: rifler, sidler
743589 spells the words: shelty, shelvy
743642 spells the words: phemic, phenic
743723 spells the words: Pierce, pierce
743743 spells the words: pierid, sherif
743772 spells the words: Sherpa, Sierra, sierra
743837 spells the words: Pieter, rifter, siever, sifter
744366 spells the words: pigdom, pigeon
744437 spells the words: rigger, sigger, sigher
744489 spells the words: righty, sighty
744625 spells the words: rhinal, shimal, signal
744637 spells the words: shiner, signer
744669 spells the words: shimmy, shinny
744686 spells the words: rignum, Shinto, signum
744729 spells the words: rigsby, Shiraz
744789 spells the words: pigsty, shirty
745243 spells the words: pilage, silage
745464 spells the words: piking, piling
745527 spells the words: pillar, pillas, sillar
745533 spells the words: pilled, silked
745537 spells the words: silker, siller
745538 spells the words: pillet, rillet
745742 spells the words: riksha, Silpha
746242 spells the words: phobic, Sinaic
746243 spells the words: phocid, pinche
746323 spells the words: Phoebe, phoebe
746337 spells the words: pinder, Rhodes, shoder, sinder
746353 spells the words: rindle, sindle
746366 spells the words: Simeon, sindon
746379 spells the words: pinery, sindry
746385 spells the words: shoful, sinful
746426 spells the words: simian, Sinian, Sinico
746433 spells the words: ringed, singed
746437 spells the words: ringer, singer
746439 spells the words: singey, Sinify
746453 spells the words: pingle, ringle, simile, single
746483 spells the words: pingue, pinite, Sinite
746537 spells the words: pinker, rinker, sinker
746546 spells the words: simkin, simlin
746625 spells the words: phonal, pinnal
746632 spells the words: Rhonda, shoofa
746633 spells the words: pinned, rimmed
746635 spells the words: pinnel, simnel
746637 spells the words: pinner, rimmer, rinner, simmer, sinner
746638 spells the words: pinnet, sinnet
746666 spells the words: simmon, simoom, simoon
746687 spells the words: rimous, simous
746737 spells the words: rinser, shorer, simper
746753 spells the words: pimple, rimple, simple
746759 spells the words: pimply, simply
746779 spells the words: phossy, shoppy
746825 spells the words: photal, shoval
746837 spells the words: rioter, shover, sinter
746853 spells the words: pintle, should
746879 spells the words: pioury, riotry
746889 spells the words: piotty, shotty
747222 spells the words: Pisaca, pisaca
747243 spells the words: pipage, Piscid, sipage
747283 spells the words: pirate, shrave
747363 spells the words: Pirene, shrend, sirene
747426 spells the words: Sipibo, Sirian, sirian, sisham
747453 spells the words: Pipile, shrike
747463 spells the words: Shrine, shrine
747464 spells the words: piping, rising, Siping, siping
747483 spells the words: shrite, shrive
747546 spells the words: pipkin, siskin
747683 spells the words: shroud, Shrove, shrove
747733 spells the words: pipped, sirree
747737 spells the words: pipper, ripper, risper, risser, sipper
747738 spells the words: rippet, sippet
747746 spells the words: pippin, sippio
747753 spells the words: ripple, rissle, sirple
747766 spells the words: rippon, sissoo
747842 spells the words: piquia, Pistia, pistic
747853 spells the words: pistle, sistle
747865 spells the words: pistol, shrunk
748467 spells the words: phthor, pithos
748622 spells the words: rhumba, shumac
748825 spells the words: ritual, situal
748833 spells the words: pitted, sittee
748837 spells the words: pitter, sitter
749274 spells the words: Siwash, siwash
749642 spells the words: rhymic, Rhynia
749846 spells the words: phytin, rhythm
749866 spells the words: phyton, rhyton
749953 spells the words: pizzle, rizzle, sizzle
752749 spells the words: plashy, slashy
752824 spells the words: platch, slatch
752833 spells the words: plated, slaved
752837 spells the words: plater, skater, slater, slaver
752839 spells the words: Slavey, slavey
752842 spells the words: platic, Slavic
752937 spells the words: player, slayer
753343 spells the words: pledge, skedge, sledge
753359 spells the words: skeely, sleeky
753379 spells the words: skeery, sleepy
753444 spells the words: skeigh, sleigh
753933 spells the words: skewed, slewed
753937 spells the words: skewer, slewer, sleyer
754448 spells the words: plight, slight
754659 spells the words: slimly, slinky
754679 spells the words: skimpy, slimsy
754779 spells the words: skippy, slippy
754837 spells the words: skiter, skiver, sliver
754889 spells the words: skitty, slitty
756343 spells the words: plodge, slodge
756844 spells the words: plough, slough
758449 spells the words: pluggy, sluggy
758643 spells the words: plunge, slunge
758669 spells the words: plummy, slummy
758679 spells the words: plumpy, slumpy
758749 spells the words: plushy, slushy
759474 spells the words: skyish, slyish
762237 spells the words: robber, sobber, soccer
762246 spells the words: Robbin, robbin
762537 spells the words: Poales, rocker, snaker, soaker, socker
762538 spells the words: pocket, rocket, socket
762559 spells the words: smally, soally
762626 spells the words: rococo, socman
762737 spells the words: roarer, snaper, snarer, soaper, soarer
763333 spells the words: podded, sodded
763368 spells the words: Rodent, rodent
763437 spells the words: podger, Rodger
763486 spells the words: podium, sodium
763559 spells the words: smelly, snelly
763639 spells the words: Rodney, rodney
763859 spells the words: poetly, softly
764529 spells the words: Smilax, smilax
764733 spells the words: poised, soiree
764737 spells the words: poiser, sniper
764766 spells the words: pogrom, poison
764824 spells the words: smitch, snitch
764849 spells the words: smithy, snithy
765225 spells the words: Polack, polack
765326 spells the words: Soldan, soldan
765337 spells the words: polder, solder
765423 spells the words: poliad, police
765474 spells the words: Polish, polish
765526 spells the words: pollam, pollan
765533 spells the words: polled, rolled
765537 spells the words: poller, roller
765539 spells the words: pollex, rolley
765589 spells the words: Pollux, pollux
765974 spells the words: Polypi, polypi
766246 spells the words: poncho, Romain
766254 spells the words: Romaji, Somali
766263 spells the words: pomane, Romane
766282 spells the words: somata, sonata
766337 spells the words: ponder, pooder, roofer
766353 spells the words: poodle, rondle, roodle, soodle
766359 spells the words: snodly, soodly
766537 spells the words: pooler, rooker, smoker
766633 spells the words: pommee, roomed
766637 spells the words: roomer, sooner
766638 spells the words: pommet, sonnet
766639 spells the words: pommey, Romney
766684 spells the words: roomth, smooth
766724 spells the words: Sonrai, Soorah
766737 spells the words: romper, snorer
766739 spells the words: Pompey, pompey
766824 spells the words: smouch, snouch, sontag
766833 spells the words: pontee, rooted
766837 spells the words: pontes, rooter, sooter
766842 spells the words: Pontic, pontic
766889 spells the words: snotty, snouty
767243 spells the words: roscid, sorage
767287 spells the words: Sorbus, sorbus
767359 spells the words: popely, sorely
767379 spells the words: popery, ropery, rosery
767433 spells the words: rosied, soshed
767437 spells the words: porger, rosier
767442 spells the words: Sophia, sophia, sophic
767459 spells the words: ropily, rosily
767464 spells the words: poring, posing, roping
767474 spells the words: Popish, popish, ropish
767483 spells the words: porite, sopite, sorite
767673 spells the words: porose, sorose
767735 spells the words: poppel, Sorrel, sorrel
767737 spells the words: popper, rosser, sopper
767738 spells the words: poppet, porret, posset
767753 spells the words: popple, sossle
767825 spells the words: portal, postal, sortal
767833 spells the words: ported, posted, sorted
767837 spells the words: porter, poster, roquer, roster, sorter
767842 spells the words: Portia, portia, postic
767859 spells the words: portly, sortly
768249 spells the words: pouchy, souchy
768274 spells the words: potash, souari
768279 spells the words: Rotary, rotary
768283 spells the words: potate, rotate
768343 spells the words: smudge, snudge
768437 spells the words: pother, rother
768459 spells the words: smugly, snugly
768623 spells the words: pounce, rounce
768626 spells the words: potman, Rouman
768737 spells the words: pourer, pouser, rouper, rouser, souper, sourer, souser
768743 spells the words: potpie, pourie
768759 spells the words: snurly, sourly
768824 spells the words: pottah, smutch
768833 spells the words: potted, sotted
768837 spells the words: potter, pouter, rotter, router, sotter, souter
768853 spells the words: pottle, rottle
769362 spells the words: Rowena, Royena
769464 spells the words: rowing, snying, sowing
772659 spells the words: pranky, spanky
772743 spells the words: sparge, sparid
772837 spells the words: Prater, prater, spaver
772843 spells the words: spathe, spavie
772846 spells the words: Pravin, spavin
772969 spells the words: prawny, spawny
773243 spells the words: prebid, specie
773729 spells the words: prepay, presay
773937 spells the words: preyer, spewer
774233 spells the words: priced, spiced
774237 spells the words: pricer, spicer
774537 spells the words: spiker, spiler
774623 spells the words: prince, spinae
774625 spells the words: primal, spinal
774659 spells the words: primly, prinky
774687 spells the words: Primus, primus
774725 spells the words: prisal, spiral
774726 spells the words: spiran, Sriram
776526 spells the words: prolan, Spokan
776642 spells the words: promic, pronic
776737 spells the words: proper, proser
776787 spells the words: Propus, sports
776832 spells the words: Protea, protea
776889 spells the words: spotty, spouty
777464 spells the words: Spring, spring
778325 spells the words: squeak, squeal
779243 spells the words: Psyche, psyche
779552 spells the words: Psylla, psylla
782243 spells the words: subage, subaid
782253 spells the words: pubble, rubble, stable, suable
782259 spells the words: quacky, rubbly, stably, suably
782283 spells the words: stacte, subaud
782332 spells the words: stadda, Suaeda, subdeb
782342 spells the words: stadia, stadic
782433 spells the words: rubied, staged
782449 spells the words: quaggy, staggy
782463 spells the words: rubine, subgod
782537 spells the words: pucker, Quaker, quaker, rucker, staker, sucker
782553 spells the words: puckle, ruckle, suckle
782639 spells the words: quandy, subnex
782737 spells the words: stapes, starer, stases
782753 spells the words: quarle, staple
782759 spells the words: quasky, starky
782779 spells the words: quarry, starry
782789 spells the words: quartz, starty, starvy
782837 spells the words: quaver, stater, staver
783256 spells the words: Pueblo, pueblo
783279 spells the words: queasy, sudary
783333 spells the words: puddee, puffed, ruffed
783337 spells the words: pudder, puffer, rudder, ruffer, Sudder, sudder, suffer
783346 spells the words: puffin, ruffin
783353 spells the words: puddle, ruddle, ruffle, suddle
783359 spells the words: puddly, rudely, ruffly, steely
783379 spells the words: queery, steepy
783383 spells the words: queeve, steeve
783524 spells the words: quelch, stelai
783532 spells the words: Ptelea, Quelea
783552 spells the words: Stella, stella
783624 spells the words: quench, stench
783737 spells the words: puerer, Queres
783742 spells the words: pteric, steric
783762 spells the words: Sterna, sterna
783773 spells the words: steppe, Suerre
783824 spells the words: quetch, stetch
783836 spells the words: Steven, steven
783842 spells the words: Stevia, stevia, Suevic
784323 spells the words: Quidae, Suidae
784433 spells the words: pugged, rugged
784437 spells the words: pugger, Rugger
784453 spells the words: puggle, ruggle
784462 spells the words: Quiina, stigma
784559 spells the words: quilly, stilly
784642 spells the words: quinia, quinic
784643 spells the words: ptinid, stinge
784646 spells the words: quinin, stingo
784672 spells the words: Rugosa, rugosa
784673 spells the words: quinse, rugose
784687 spells the words: Ptinus, rugous
784824 spells the words: quitch, stitch
784837 spells the words: quiver, stiver
785464 spells the words: puling, ruling
785474 spells the words: pukish, pulish
785536 spells the words: pullen, sullen
785537 spells the words: puller, ruller, sulker
785826 spells the words: sultam, sultan, Suluan
786224 spells the words: stoach, stocah
786259 spells the words: rumbly, stocky
786386 spells the words: pundum, Sumdum
786536 spells the words: stolen, sunken
786538 spells the words: punlet, runlet, sunket, sunlet
786543 spells the words: punkie, stolid
786633 spells the words: runoff, stoned, summed
786635 spells the words: pummel, runnel
786637 spells the words: punner, rummer, runner, stoner, summer, sumner
786638 spells the words: punnet, runnet
786642 spells the words: punnic, Suomic
786688 spells the words: runout, summut
786729 spells the words: storax, sunray
786737 spells the words: pumper, Rumper, stoper, storer, sumper
786753 spells the words: pumple, rumple, sumple
786833 spells the words: quotee, runted, runtee
786837 spells the words: punter, quoter, stover
786842 spells the words: ptotic, quotha
786929 spells the words: runway, sunway
787233 spells the words: strade, strafe, surbed
787283 spells the words: pupate, strave
787284 spells the words: strath, strati
787325 spells the words: streak, streck
787335 spells the words: streek, streel
787337 spells the words: streep, surfer
787353 spells the words: purfle, streke, surfle
787359 spells the words: purely, purfly, surely
787424 spells the words: rupiah, strich
787425 spells the words: rupial, strial, strick
787433 spells the words: rushed, stride, strife
787437 spells the words: purger, pusher, rusher
787442 spells the words: Striga, striga, suriga
787463 spells the words: purine, rusine, strind, supine
787478 spells the words: purist, stript
787546 spells the words: purlin, ruskin
787653 spells the words: stroke, strold
787662 spells the words: stroma, stromb
787663 spells the words: strome, strone
787683 spells the words: stroud, strove
787733 spells the words: purree, pursed
787735 spells the words: purrel, russel
787737 spells the words: purrer, purser, supper
787738 spells the words: puppet, russet
787739 spells the words: surrey, Sussex
787742 spells the words: Ruppia, Russia, russia
787753 spells the words: purple, supple
787759 spells the words: purply, supply
787783 spells the words: pursue, russud
787839 spells the words: purvey, survey
787842 spells the words: Puruha, rustic
787868 spells the words: strunt, Susumu
788437 spells the words: puther, ruther, suther
788453 spells the words: rutile, sutile
788739 spells the words: stupex, sturdy
788743 spells the words: putrid, stupid
788833 spells the words: puttee, ruttee, suttee
788837 spells the words: putter, rutter
788873 spells the words: puture, suture
789729 spells the words: Styrax, styrax
792642 spells the words: pycnia, ryania
793642 spells the words: pyemia, pyemic
794737 spells the words: swiper, swipes
795826 spells the words: Sylvan, sylvan
795842 spells the words: Sylvia, sylvic
796362 spells the words: syndoc, synema
798442 spells the words: Pythia, Pythic
822537 spells the words: tabler, tables, tacker
822538 spells the words: tablet, tacket
824453 spells the words: taggle, taigle, vagile
824462 spells the words: taihoa, vagina
824538 spells the words: taglet, tailet
824724 spells the words: tagrag, taisch
824746 spells the words: Tahsin, Taisho
825368 spells the words: talent, valent
825537 spells the words: talker, taller, talles
825547 spells the words: tallis, vallis
825833 spells the words: valued, valved
826252 spells the words: Tanaka, Tanala
826272 spells the words: Tamara, tamara
826433 spells the words: tanged, vangee
826437 spells the words: tanger, tanier
826478 spells the words: tanist, Taoist, Vanist
826483 spells the words: tangue, Tanite
826486 spells the words: tangum, tangun
826626 spells the words: Tanoan, vanman
826637 spells the words: tanner, vanner
826642 spells the words: tannic, Vannic
826737 spells the words: tamper, vamper
827256 spells the words: Tapajo, tapalo, tasajo
827433 spells the words: tariff, varied
827437 spells the words: targer, varier
827474 spells the words: Tariri, tarish
827476 spells the words: Tapiro, tapism
827538 spells the words: taplet, taslet, varlet
827622 spells the words: Tarmac, tarmac
827725 spells the words: tarsal, tassal, vassal
827737 spells the words: tapper, tarrer, tasser
827738 spells the words: tappet, tasset
827742 spells the words: tarsia, varsha
827743 spells the words: tarrie, tassie
827766 spells the words: tarpon, tassoo
827826 spells the words: Tartan, tartan
827827 spells the words: Tartar, tartar
827833 spells the words: tasted, varved
827836 spells the words: tarten, tasten
827859 spells the words: tartly, vastly
827862 spells the words: Taruma, Varuna
828742 spells the words: Tauric, tauric
828837 spells the words: tatter, vatter
829379 spells the words: tawdry, tawery
829483 spells the words: tawite, taxite
832269 spells the words: teabox, teaboy
832537 spells the words: udaler, vealer
832737 spells the words: tearer, teaser
832862 spells the words: tecuma, Tecuna
833847 spells the words: Veduis, veduis
835279 spells the words: telary, velary
835342 spells the words: telega, Teleia
836337 spells the words: tender, vender, veneer
836425 spells the words: temiak, venial
836637 spells the words: tenner, venner
836737 spells the words: temper, temser
836837 spells the words: tenter, tenues, venter
837225 spells the words: tesack, verbal
837242 spells the words: terbia, terbic, tercia
837339 spells the words: tepefy, terfez
837625 spells the words: ternal, vernal
837637 spells the words: termer, Termes, Vermes
837646 spells the words: termin, vermin, vernin
837666 spells the words: termon, Vernon
837725 spells the words: terral, versal, vespal
837735 spells the words: tessel, verrel, vessel
837737 spells the words: verser, vesper
837738 spells the words: terret, verset
837767 spells the words: terror, versor
837827 spells the words: testar, Vestas
837833 spells the words: tervee, tested, testee, vestee
837837 spells the words: tester, testes, vester
837866 spells the words: terton, teston
838249 spells the words: tetchy, vetchy
842423 spells the words: tibiad, tibiae
842537 spells the words: thaler, ticker
842543 spells the words: tickie, Vickie
842862 spells the words: Ticuna, vicuna
842867 spells the words: viator, Victor, victor
843252 spells the words: Thecla, thecla
843353 spells the words: tiddle, tiffle
843476 spells the words: theirn, theism
843647 spells the words: Themis, themis
843737 spells the words: theres, theses, tierer
843766 spells the words: thermo, Theron
844437 spells the words: Tigger, tigger
845439 spells the words: uglify, vilify
845464 spells the words: tiling, viking
845537 spells the words: tikker, tiller
846225 spells the words: timbal, tincal
846325 spells the words: tindal, tineal, vineal
846385 spells the words: tinful, vimful
846459 spells the words: tingly, tinily
846464 spells the words: timing, tining
846537 spells the words: tinker, violer
846538 spells the words: tinlet, violet
846742 spells the words: thoria, thoric
847243 spells the words: visage, viscid
847246 spells the words: thrain, virago, viscin
847425 spells the words: virgal, virial, Vishal
847453 spells the words: virile, visile
847464 spells the words: thring, tiring
847483 spells the words: thrive, visite, visive
847663 spells the words: throne, ugsome
847664 spells the words: throng, tiponi
847733 spells the words: tipped, tippee
847738 spells the words: tippet, tirret
847825 spells the words: vistal, visual
848426 spells the words: Titian, titian
848437 spells the words: tither, Tities
848654 spells the words: titoki, Tivoli, tivoli
848853 spells the words: tittle, titule
849687 spells the words: Thymus, thymus
862253 spells the words: unable, unbale, uncake
862255 spells the words: uncalk, uncall
862273 spells the words: unbare, unbase, uncase
862275 spells the words: unbark, uncask
862278 spells the words: uncart, uncast
862283 spells the words: uncate, uncave, vocate
862427 spells the words: Tobias, unbias
862463 spells the words: tobine, unbind
862628 spells the words: unboat, uncoat
862658 spells the words: unbolt, uncolt
862663 spells the words: tocome, umbone, unbone, uncome
862673 spells the words: uncope, uncord, uncore
862726 spells the words: unbran, uncram
862875 spells the words: unbusk, uncurl
862879 spells the words: unbury, unbusy
863323 spells the words: undead, undeaf
863333 spells the words: toffee, unfeed
863337 spells the words: todder, undeep
863353 spells the words: toddle, unfele
863463 spells the words: Undine, undine, unfine
863663 spells the words: undone, unfond
863836 spells the words: uneven, voeten
863855 spells the words: undull, unfull
863933 spells the words: undyed, uneyed
864233 spells the words: togaed, uniced, voiced
864283 spells the words: togate, unhate, unhave, Uniate, uniate
864333 spells the words: unheed, voided, voidee
864353 spells the words: unheld, unhele, unidle
864359 spells the words: unidly, voidly
864453 spells the words: toggle, ungild
864483 spells the words: ungive, unhive
864533 spells the words: toiled, unglee
864653 spells the words: ungold, unhold
864663 spells the words: Tohome, ungone, ungood, unhome, unhood
864825 spells the words: ungual, unital
864837 spells the words: ungues, uniter
864855 spells the words: ungull, unhull
865223 spells the words: unlace, Volcae
865243 spells the words: unlaid, volage
865263 spells the words: tolane, unlame, unland
865323 spells the words: unlead, unleaf
865368 spells the words: unlent, volent
865463 spells the words: unkind, unlime, unline
865465 spells the words: unkink, unlink
865478 spells the words: unkist, unlist
865483 spells the words: tolite, unlive
865678 spells the words: unlost, volost
865878 spells the words: unjust, unlust, volupt
865883 spells the words: unlute, volute
866245 spells the words: unmail, unnail
866263 spells the words: tomcod, unname
866474 spells the words: tomish, tonish
866483 spells the words: tongue, tonite
866486 spells the words: tomium, vomito
866546 spells the words: Tomkin, tomkin, tonkin
866637 spells the words: Tommer, tonner
866766 spells the words: tompon, tooroo
867225 spells the words: unpack, unrack, unsack
867243 spells the words: unpaid, unsage, unsaid
867253 spells the words: unpale, unrake
867274 spells the words: unrash, unsash
867277 spells the words: topass, unpass
867296 spells the words: unpawn, unsawn
867325 spells the words: unreal, unseal
867335 spells the words: torfel, unpeel, unreel
867368 spells the words: unpent, unrent, unsent
867376 spells the words: topepo, torero
867425 spells the words: unpick, unsick
867433 spells the words: unride, unrife, unshed
867459 spells the words: toshly, tosily
867463 spells the words: unrind, unshod, unshoe
867464 spells the words: unring, unsing
867468 spells the words: Torgot, unshot
867473 spells the words: umpire, unripe
867569 spells the words: unplow, unslow
867653 spells the words: unsold, unsole
867663 spells the words: unroof, unsome
867673 spells the words: torose, unpope, unrope, unsore
867687 spells the words: tornus, torous, unsour
867733 spells the words: topped, unsped
867737 spells the words: topper, tosser
867743 spells the words: torpid, torrid
867746 spells the words: unprim, unspin
867767 spells the words: torpor, unprop
867848 spells the words: unquit, unsuit
867864 spells the words: unrung, unsung
867873 spells the words: unpure, unsure
868336 spells the words: unteem, voteen
868676 spells the words: Totoro, untorn
868733 spells the words: toupee, unused
868737 spells the words: tourer, touser
868783 spells the words: tourte, untrue
868837 spells the words: totter, touter
869243 spells the words: towage, voyage
869273 spells the words: toward, unware
869276 spells the words: unwarm, unwarn
869464 spells the words: towing, toying
869473 spells the words: unwire, unwise
869474 spells the words: toyish, unwish
869633 spells the words: towned, townee
869663 spells the words: toxone, unwoof, unzone
872387 spells the words: uraeus, urceus
872623 spells the words: trance, usance
872625 spells the words: tramal, upcock
872642 spells the words: Urania, uranic
872645 spells the words: upboil, upcoil, uramil
872847 spells the words: Travis, travis
872869 spells the words: travoy, upbuoy
873642 spells the words: uremia, uremic
874223 spells the words: triace, tricae
874264 spells the words: upgang, uphang
874336 spells the words: urheen, Usheen
874353 spells the words: trifle, upheld
874625 spells the words: trinal, urinal
874653 spells the words: triole, uphold
874866 spells the words: Triton, triton
875263 spells the words: upland, uplane
876873 spells the words: troupe, trouse
876889 spells the words: trotty, trouty
877363 spells the words: uprend, upsend
877627 spells the words: uproar, upsoar
877874 spells the words: uppush, uprush
878422 spells the words: Urtica, urtica
878474 spells the words: truish, uruisg
879273 spells the words: upward, upyard, usward
879464 spells the words: Trying, trying
882243 spells the words: tubage, tubbie
882538 spells the words: tublet, tucket
882862 spells the words: tucuma, Tucuna
884626 spells the words: tugman, utinam
886635 spells the words: tummel, tunnel
886637 spells the words: tummer, tunner
886742 spells the words: Utopia, utopia
887226 spells the words: turban, Tuscan
887242 spells the words: Tupaia, Turcic
887243 spells the words: turbid, tusche
887336 spells the words: tureen, turfen
887539 spells the words: Turkey, turkey
887649 spells the words: Turnix, turnix
897442 spells the words: typhia, typhic
922237 spells the words: wabber, yabber
922253 spells the words: wabble, yabble
922426 spells the words: yachan, Zabian
923337 spells the words: wadder, zaffer
923353 spells the words: waffle, yaffle
923359 spells the words: waddly, waffly
924437 spells the words: wagger, yagger
924662 spells the words: Wagoma, Yagnob
924837 spells the words: waiter, waiver
924842 spells the words: Waguha, Zaitha
924924 spells the words: wagwag, Waiwai
925464 spells the words: waking, waling
925537 spells the words: walker, waller
925538 spells the words: wallet, zakkeu
925569 spells the words: wallow, yallow
925837 spells the words: Walter, walter
926337 spells the words: wander, yander, zander
926637 spells the words: wanner, yammer
927224 spells the words: warabi, wasabi
927336 spells the words: Warden, warden
927337 spells the words: warder, yarder
927626 spells the words: warman, Yapman
927637 spells the words: warmer, warner, yarner
927726 spells the words: warran, yarran
927729 spells the words: Warsaw, warsaw
927733 spells the words: warped, warree, yapped
927736 spells the words: Warren, warren, waspen
927737 spells the words: wapper, warper, warrer, yapper
927753 spells the words: warple, warsle
927833 spells the words: warted, wasted
928379 spells the words: watery, wavery
929464 spells the words: waxing, waying
929626 spells the words: waxman, wayman
932737 spells the words: wearer, weaser
932766 spells the words: weapon, weason
933333 spells the words: wedded, weeded
933337 spells the words: wedder, weeder
936342 spells the words: Wendic, Zendic
936425 spells the words: xenial, zenick
937837 spells the words: wester, yester
938437 spells the words: wether, yether
942537 spells the words: whaler, wicker
943359 spells the words: wheely, widely, wifely
943474 spells the words: widish, wifish
943539 spells the words: wieldy, yieldy
944669 spells the words: whimmy, whinny
944759 spells the words: whirly, whisky
944779 spells the words: whippy, whirry
944924 spells the words: wigwag, zigzag
945543 spells the words: Willie, willie
946253 spells the words: wimble, zincke
947459 spells the words: wirily, wishly
947737 spells the words: Zipper, zipper
948437 spells the words: wither, zither
965336 spells the words: wolfen, yolden
965837 spells the words: wolter, wolver
966333 spells the words: wooded, woofed
966337 spells the words: wonder, woofer, yonder
966464 spells the words: woning, wooing, zoning
966637 spells the words: wonner, woomer, yonner
967537 spells the words: worker, Yorker, yorker
967645 spells the words: wormil, wornil
968637 spells the words: wounds, zounds
986426 spells the words: yungan, Zunian
988742 spells the words: yttria, yttric
2222283 spells the words: abacate, baccate
2222442 spells the words: Bacchic, bacchic
2222488 spells the words: Babbitt, babbitt
2222526 spells the words: bacalao, Cacajao
2222537 spells the words: babbler, cabbler
2222542 spells the words: cabalic, Cacalia
2224742 spells the words: Cabiria, Cabiric
2225464 spells the words: backing, cabling
2233474 spells the words: baddish, caddish
2235426 spells the words: Abelian, Caelian
2235483 spells the words: Abelite, abelite
2244245 spells the words: Abigail, abigail
2246483 spells the words: Cahnite, Cainite
2246542 spells the words: acholia, acholic, Cahokia
2252687 spells the words: Balanus, Cajanus, calamus
2253474 spells the words: baldish, calfish
2253637 spells the words: Calemes, calends
2253742 spells the words: baldrib, baldric
2254237 spells the words: caliber, calices
2255268 spells the words: ballant, callant
2255464 spells the words: calking, calling
2258632 spells the words: Bakunda, Balunda
2259776 spells the words: Calypso, calypso
2262466 spells the words: bambino, camagon
2262822 spells the words: Bambuba, cambuca
2263252 spells the words: bandaka, bandala
2263478 spells the words: cameist, candiru
2264667 spells the words: canhoop, canions
2266463 spells the words: abomine, aconine
2266464 spells the words: banning, canning
2266625 spells the words: Bannock, bannock, cammock
2266742 spells the words: Canopic, canopic
2266772 spells the words: Camorra, Canossa
2268276 spells the words: acouasm, cantaro
2268733 spells the words: camused, cantred, cantref
2272253 spells the words: capable, carcake
2272272 spells the words: Barabra, Barbara, cascara
2272279 spells the words: Barbary, barbary
2272287 spells the words: Carabus, carabus
2272463 spells the words: abscind, carbine
2272642 spells the words: Acrania, Caranga
2272662 spells the words: capanna, caranna, carbona
2272663 spells the words: abscond, barbone, capanne
2272729 spells the words: abrasax, carapax
2272742 spells the words: acrasia, Casasia
2272853 spells the words: barbule, bascule
2273273 spells the words: carfare, casease
2273385 spells the words: careful, caseful
2273464 spells the words: barding, carding
2273474 spells the words: bardish, barfish
2273538 spells the words: bardlet, capelet
2273552 spells the words: Basella, Capella
2273626 spells the words: acreman, baseman
2273882 spells the words: baretta, Caretta
2274269 spells the words: cashbox, cashboy
2274342 spells the words: acridic, basidia
2274426 spells the words: bargham, Cashibo
2274826 spells the words: acritan, capitan
2274865 spells the words: acritol, Capitol
2275377 spells the words: barless, capless, carless
2275464 spells the words: barking, barling, carking, carling, casking
2275474 spells the words: Baskish, carlish
2276243 spells the words: barmaid, Basoche, carnage, caroche
2276273 spells the words: Barnard, barnard
2276463 spells the words: Carmine, carmine
2276546 spells the words: barmkin, carolin
2276642 spells the words: Aaronic, Abronia, Baronga, caronic
2276783 spells the words: Baroque, baroque
2276842 spells the words: acrotic, carotic
2276873 spells the words: Barotse, carouse
2277225 spells the words: barrack, carrack
2277272 spells the words: bassara, Carrara
2277425 spells the words: Carrick, carrick, carsick
2277426 spells the words: barrico, Capsian, Caspian, Cassian
2277437 spells the words: barrier, carrier
2277463 spells the words: bassine, caprine, cassine
2277464 spells the words: barring, capping, carping
2277466 spells the words: carrion, cassino
2277496 spells the words: Carrizo, carrizo
2277666 spells the words: barroom, bassoon, cassoon
2277678 spells the words: barpost, carport
2277833 spells the words: basqued, casqued
2278243 spells the words: capuche, cartage
2278246 spells the words: abstain, captain
2278273 spells the words: Bastard, bastard
2278464 spells the words: basting, carving, casting
2278466 spells the words: bastion, caption
2278478 spells the words: acquist, Baptist, Cartist, casuist
2278483 spells the words: bastite, captive
2278538 spells the words: capulet, castlet
2278742 spells the words: Bartsia, baruria
2282437 spells the words: batcher, catcher
2282526 spells the words: batakan, Catalan
2282572 spells the words: Catalpa, catalpa
2283282 spells the words: Caudata, caudata
2283474 spells the words: batfish, catfish
2284323 spells the words: cathead, Cavidae
2284537 spells the words: batiker, caviler
2284642 spells the words: Actinia, actinic, bathmic
2285453 spells the words: batlike, catlike
2285464 spells the words: batling, catling
2286642 spells the words: Batonga, Catonic
2287837 spells the words: batster, catstep
2288379 spells the words: battery, cattery, cautery
2288464 spells the words: batting, catting
2288474 spells the words: acutish, battish, cattish
2293663 spells the words: Cayenne, cayenne
2322783 spells the words: bebaste, becarve
2326483 spells the words: Adamite, adamite
2327337 spells the words: bearder, becreep
2327463 spells the words: bebrine, becrime
2327677 spells the words: becross, Cecrops
2327874 spells the words: bebrush, becrush
2332253 spells the words: addable, affable
2332733 spells the words: afeared, cedared
2334524 spells the words: bedikah, befilch
2335437 spells the words: Adelges, bedlids
2335463 spells the words: Adeline, beeline
2335483 spells the words: adelite, beekite
2337377 spells the words: address, bedress
2337625 spells the words: bedrock, bedsock
2339273 spells the words: bedwarf, beeware
2347283 spells the words: adipate, begrave
2347742 spells the words: adipsia, adipsic
2348463 spells the words: Beguine, beguine
2352366 spells the words: Celadon, celadon, Celaeno
2353783 spells the words: Celeste, celeste
2354448 spells the words: aflight, belight
2355483 spells the words: bellite, Cellite
2366426 spells the words: Adonian, aeonian
2367833 spells the words: adopted, adoptee
2368466 spells the words: benthon, centimo
2372468 spells the words: Bepaint, besaint
2374262 spells the words: Adriana, Bergama
2374337 spells the words: Aerides, besides
2374343 spells the words: besiege, Cepheid
2375463 spells the words: berline, beslime
2376273 spells the words: Bernard, besnare
2376765 spells the words: Aerosol, aerosol
2377377 spells the words: adpress, bepress
2377433 spells the words: bepride, berried
2378246 spells the words: bestain, certain
2378425 spells the words: bestial, bestick
2378643 spells the words: cervoid, cestoid
2378683 spells the words: bequote, bestove
2378726 spells the words: Bertram, bertram
2378786 spells the words: bertrum, Cestrum, cestrum
2383773 spells the words: adverse, beverse
2384733 spells the words: advised, advisee
2422537 spells the words: bibbler, chacker
2426237 spells the words: chamber, chancer
2426426 spells the words: agamian, Chamian
2426483 spells the words: Chamite, chamite
2426642 spells the words: biconic, Ciconia
2426842 spells the words: chaotic, Chaouia
2427437 spells the words: charger, charier
2427635 spells the words: charmel, charnel
2427769 spells the words: chappow, charpoy
2427837 spells the words: chapter, charter
2428328 spells the words: Chateau, chateau
2433737 spells the words: cheeper, cheerer, cheeser
2435377 spells the words: ageless, aidless
2437668 spells the words: bifront, cheroot
2437837 spells the words: Chester, chester
2438742 spells the words: ageusia, ageusic
2445359 spells the words: agilely, childly
2447737 spells the words: chipper, chirper
2454279 spells the words: biliary, ciliary
2454283 spells the words: biliate, ciliate
2462842 spells the words: Agnatha, agnatic
2463379 spells the words: bindery, cindery
2465463 spells the words: choline, cimline
2466325 spells the words: bimodal, binodal
2466483 spells the words: Agnoite, binnite
2467325 spells the words: chordal, choreal
2467463 spells the words: chopine, chorine
2472848 spells the words: biscuit, circuit
2476642 spells the words: chromic, chronic
2477643 spells the words: cirsoid, cissoid
2477673 spells the words: bispore, cirrose
2482253 spells the words: bitable, citable
2486637 spells the words: chummer, chunner
2487283 spells the words: biurate, citrate
2488376 spells the words: bittern, cittern
2496687 spells the words: agynous, chymous
2522237 spells the words: blabber, clabber
2522537 spells the words: blacker, clacker
2526633 spells the words: clammed, clanned
2527733 spells the words: clapped, classed
2527737 spells the words: clapper, clasper, classer, classes
2527837 spells the words: Alaster, blaster, claquer
2527843 spells the words: blastid, blastie
2528437 spells the words: blather, clavier
2528837 spells the words: blatter, clatter
2532637 spells the words: cleamer, cleaner
2532837 spells the words: bleater, cleaver
2536368 spells the words: Clement, clement
2536483 spells the words: Alemite, alemite
2539487 spells the words: Alexius, blewits
2542268 spells the words: Alibamu, Alicant
2543629 spells the words: aliency, cliency
2543742 spells the words: algesia, algesic
2546537 spells the words: blinker, clinker
2547837 spells the words: aliptes, Alister, blister
2548837 spells the words: blitter, clitter
2559542 spells the words: alkylic, allylic
2562237 spells the words: blobber, clobber
2562437 spells the words: alnager, clocher
2562533 spells the words: blocked, cloaked, clocked
2562537 spells the words: blocker, clocker
2566637 spells the words: almoner, bloomer
2568837 spells the words: blotter, clotter, clouter
2569464 spells the words: blowing, cloying
2582237 spells the words: blubber, clubber
2586483 spells the words: alumite, alunite
2587837 spells the words: bluster, cluster
2622464 spells the words: bobbing, cobbing
2623642 spells the words: anaemia, anaemic
2624368 spells the words: ambient, ancient, coagent
2624847 spells the words: Anaitis, Cobitis
2625442 spells the words: analgia, analgic
2625464 spells the words: ambling, bocking, cocking
2625748 spells the words: coalpit, cockpit
2626483 spells the words: Anamite, anamite, Ananite
2627643 spells the words: amaroid, ambroid
2627673 spells the words: Ambrose, ambrose
2627837 spells the words: boaster, coaster
2628464 spells the words: boating, coating
2629425 spells the words: anaxial, coaxial
2629464 spells the words: amazing, coaxing
2629663 spells the words: anaxone, bobwood
2636842 spells the words: amentia, Boeotic
2637237 spells the words: amercer, coercer
2637442 spells the words: anergia, anergic
2637643 spells the words: android, aneroid
2638742 spells the words: ametria, aneuria, aneuric
2643426 spells the words: anidian, Cnidian
2645464 spells the words: angling, boiling, coiling
2646283 spells the words: aminate, animate, cognate
2646493 spells the words: aminize, animize, cognize
2649663 spells the words: bogwood, cogwood
2654842 spells the words: bolivia, colitic
2655273 spells the words: bollard, collard, collare
2655283 spells the words: collate, collaud
2655379 spells the words: Collery, collery
2655433 spells the words: collide, collied
2655464 spells the words: bolling, colling
2655467 spells the words: Collins, collins
2655625 spells the words: bollock, collock
2662273 spells the words: bombard, conacre
2662378 spells the words: concept, concert
2662673 spells the words: Concord, concord
2663243 spells the words: amoebid, bondage
2663463 spells the words: coneine, confine
2663538 spells the words: bonelet, conelet
2663742 spells the words: amnesia, amnesic, anoesia
2663842 spells the words: anoetic, cometic
2663883 spells the words: Annette, confute
2664225 spells the words: comical, conical
2665366 spells the words: bookdom, cookdom
2665379 spells the words: bookery, cookery
2665426 spells the words: anolian, Boolian
2665464 spells the words: booking, cooking, cooling
2665474 spells the words: bookish, cookish, coolish
2665626 spells the words: Bookman, bookman
2666459 spells the words: bonnily, coonily
2666464 spells the words: booming, conning
2666483 spells the words: anomite, connive
2666642 spells the words: ammonia, ammonic
2666683 spells the words: commove, connote
2667478 spells the words: amorist, consist
2667642 spells the words: anosmia, anosmic
2667653 spells the words: compole, console
2667678 spells the words: comport, compost, consort
2667742 spells the words: Amorpha, anopsia
2667837 spells the words: booster, compter, conquer
2667883 spells the words: compute, consute
2668328 spells the words: contect, convect
2668368 spells the words: annuent, content, convent
2668378 spells the words: contest, convert
2668437 spells the words: another, boother
2672253 spells the words: borable, copable, coracle
2673243 spells the words: bordage, cordage
2673476 spells the words: boreism, coseism
2676464 spells the words: borning, corning
2676623 spells the words: coronad, coronae
2676637 spells the words: bosomer, coroner
2676642 spells the words: Amsonia, Boronia, boronic
2676853 spells the words: ampoule, cornule
2677243 spells the words: bossage, corsage
2677464 spells the words: bossing, copping, copsing
2678462 spells the words: coquina, cortina, corvina
2682433 spells the words: botched, couched, couchee
2682437 spells the words: botcher, boucher, coucher
2684463 spells the words: anthine, antigod
2684642 spells the words: Bothnic, Cotinga
2684782 spells the words: antiqua, Bovista
2684786 spells the words: antirun, antisun
2685662 spells the words: anuloma, coulomb
2687243 spells the words: coupage, courage
2687266 spells the words: Bourbon, bourbon
2688233 spells the words: boutade, couvade
2693474 spells the words: boxfish, cowfish
2693542 spells the words: amyelia, amyelic
2694323 spells the words: bowhead, boxhead
2695453 spells the words: bowlike, boxlike, boylike, cowlike
2695464 spells the words: bowling, cowling
2699663 spells the words: bowwood, boxwood
2722242 spells the words: Arbacia, braccia
2722246 spells the words: arbacin, braccio
2722262 spells the words: arabana, Aracana
2722342 spells the words: Arcadia, Arcadic
2722537 spells the words: bracker, cracker
2722538 spells the words: bracket, crablet
2723552 spells the words: Arcella, Ascella
2724483 spells the words: archive, bragite
2724643 spells the words: apagoge, brainge
2724837 spells the words: arbiter, ascites
2726243 spells the words: crambid, cranage
2726253 spells the words: bramble, cramble
2726259 spells the words: brambly, crambly
2726425 spells the words: branial, cranial
2726637 spells the words: Ascones, branner, crammer
2726733 spells the words: arbored, cramped
2726738 spells the words: arboret, crampet
2727442 spells the words: Apargia, asaphia, Asaphic
2727742 spells the words: Brassia, brassic
2727743 spells the words: brassie, crappie
2728464 spells the words: braving, craving
2729372 spells the words: brayera, brazera
2729537 spells the words: brawler, crawler
2732537 spells the words: breaker, creaker
2732737 spells the words: breards, creaser
2733537 spells the words: creeker, creeler
2736283 spells the words: cremate, crenate
2737842 spells the words: apeptic, aseptic
2742253 spells the words: ashcake, cribble
2742426 spells the words: Apician, Arician
2742463 spells the words: aribine, aricine
2742542 spells the words: aphakia, aphakic, asialia
2742553 spells the words: brickle, crickle
2742742 spells the words: aphasia, aphasic
2743359 spells the words: bridely, briefly
2743437 spells the words: Bridger, bridger
2743642 spells the words: aphemia, aphemic
2746243 spells the words: Apinage, brioche
2746437 spells the words: bringer, cringer
2746463 spells the words: asinine, crimine
2746637 spells the words: asimmer, brimmer
2746642 spells the words: aphonia, aphonic
2746643 spells the words: apinoid, crinoid
2746842 spells the words: aphotic, argotic
2747753 spells the words: aripple, cripple
2747759 spells the words: cripply, crisply
2747865 spells the words: Aristol, Bristol
2749742 spells the words: aphyric, argyria, argyric
2762273 spells the words: brocard, crocard
2762537 spells the words: Croaker, croaker, crocker
2762538 spells the words: brocket, crocket
2764337 spells the words: Aroides, broider
2764437 spells the words: armiger, brogger
2766426 spells the words: Bromian, Cronian
2766533 spells the words: brooked, crooked
2766637 spells the words: broomer, crooner
2767737 spells the words: cropper, crosser
2768725 spells the words: arousal, croupal
2769336 spells the words: browden, croyden
2769637 spells the words: browner, crowner
2772937 spells the words: arrayer, assayer
2772942 spells the words: apraxia, apraxic
2774937 spells the words: assizer, assizes
2776642 spells the words: arsonic, Assonia
2782742 spells the words: aquaria, astasia
2782842 spells the words: aquatic, astatic
2783746 spells the words: arterin, asterin
2784523 spells the words: Astilbe, astilbe
2784737 spells the words: bruiser, cruiser
2784837 spells the words: aquiver, bruiter
2787433 spells the words: astride, brushed, crushed
2787437 spells the words: astrier, brusher, brushes, crusher
2787853 spells the words: arustle, brustle
2788837 spells the words: brutter, crutter
2796646 spells the words: apyonin, bryonin
2797825 spells the words: cryptal, crystal
2797842 spells the words: cryptic, crystic
2822547 spells the words: Bubalis, bubalis
2828587 spells the words: Cucujus, Cuculus
2833464 spells the words: budding, buffing
2835526 spells the words: Atellan, avellan
2843687 spells the words: atheous, avidous
2849642 spells the words: athymia, athymic
2854642 spells the words: bulimia, bulimic
2855464 spells the words: bulling, culling
2855466 spells the words: bullion, cullion
2855474 spells the words: bulkish, bullish
2866464 spells the words: bumming, cunning
2867426 spells the words: Atophan, atophan
2869268 spells the words: avowant, buoyant
2872253 spells the words: cupcake, curable
2872265 spells the words: Burbank, burbank
2872275 spells the words: burbark, buscarl
2873537 spells the words: cupeler, curdler
2873542 spells the words: Aurelia, aurelia
2873742 spells the words: atresia, atresic
2873883 spells the words: burette, curette
2874323 spells the words: burhead, cuphead
2874366 spells the words: burgeon, cupidon
2874425 spells the words: aurigal, burghal
2875459 spells the words: burlily, curlily
2876625 spells the words: auronal, curnock
2876725 spells the words: atropal, auroral
2876742 spells the words: atropia, atropic
2877283 spells the words: bursate, cuspate
2877333 spells the words: burseed, cupseed
2877433 spells the words: cupride, curried
2877464 spells the words: burring, cupping
2877474 spells the words: burrish, currish
2877483 spells the words: cuprite, cursive
2878273 spells the words: bustard, custard
2878283 spells the words: curtate, curvate
2878725 spells the words: Austral, austral
2879464 spells the words: burying, busying
2882287 spells the words: Attacus, attacus
2882437 spells the words: butcher, cutcher
2885379 spells the words: butlery, cutlery
2888464 spells the words: butting, cutting
2925673 spells the words: cyclope, cyclose
2946463 spells the words: azimine, cygnine
2969463 spells the words: azoxime, azoxine
2977463 spells the words: byssine, cyprine
3228527 spells the words: fabular, facular
3233474 spells the words: daffish, faddish
3246837 spells the words: fagoter, fainter
3262433 spells the words: danaide, fancied
3262437 spells the words: damager, damages, fancier
3263273 spells the words: Fanfare, fanfare
3265453 spells the words: damlike, fanlike
3266464 spells the words: damning, fanning
3272425 spells the words: farcial, fascial
3272478 spells the words: farcist, fascist
3273385 spells the words: dareful, easeful
3274653 spells the words: dariole, earhole
3275474 spells the words: darkish, earlish
3276464 spells the words: darning, earning, farming
3278376 spells the words: Eastern, eastern
3278464 spells the words: darting, easting, fasting
3282253 spells the words: datable, eatable
3282559 spells the words: ectally, fatally
3282742 spells the words: dataria, ectasia
3284342 spells the words: Davidic, fatidic
3286742 spells the words: ectopia, ectopic
3288476 spells the words: fatuism, Fauvism
3296464 spells the words: dawning, fawning
3322343 spells the words: debadge, decafid
3323474 spells the words: deadish, deafish
3325464 spells the words: dealing, decking
3327433 spells the words: debride, debrief, decried
3332237 spells the words: defacer, effacer
3332253 spells the words: effable, feeable
3333269 spells the words: deedbox, feedbox
3333725 spells the words: Federal, federal
3335283 spells the words: deflate, efflate
3337464 spells the words: deeping, feering
3343437 spells the words: deifier, edifier
3362464 spells the words: demagog, fencing
3372363 spells the words: Derbend, descend
3376379 spells the words: fermery, fernery
3376437 spells the words: dernier, feroher
3376643 spells the words: dermoid, desmoid
3377283 spells the words: deprave, ferrate
3377425 spells the words: Derrick, derrick
3377433 spells the words: depside, derride
3377437 spells the words: derries, ferrier
3377483 spells the words: deprive, despite, ferrite
3378463 spells the words: destine, festine
3386833 spells the words: devoted, devotee
3396377 spells the words: fewness, feyness
3422742 spells the words: dibasic, Ficaria
3425595 spells the words: dialkyl, diallyl
3427837 spells the words: diaster, fibster
3428466 spells the words: diction, fiction
3433537 spells the words: diddler, fiddler
3444464 spells the words: digging, figging
3444837 spells the words: dighter, fighter
3445377 spells the words: eggless, figless
3445453 spells the words: egglike, figlike
3452742 spells the words: Filaria, filaria
3452867 spells the words: dilator, filator
3455464 spells the words: dilling, filling
3458833 spells the words: diluted, dilutee
3462742 spells the words: Dinaric, fimbria
3463474 spells the words: fineish, finfish
3463668 spells the words: diodont, finfoot
3463742 spells the words: dimeric, dineric, Eimeria
3464225 spells the words: dinical, finical
3466474 spells the words: dimmish, Finnish
3467483 spells the words: diorite, fiorite
3472273 spells the words: discard, discase
3473269 spells the words: firebox, fireboy
3474385 spells the words: dishful, fishful
3474663 spells the words: disgood, dishome
3476275 spells the words: dismark, dismask
3476342 spells the words: dipodic, disodic, eisodic
3476642 spells the words: disomic, fisnoga
3477283 spells the words: disrate, fissate
3477328 spells the words: disseat, dissect
3477464 spells the words: dipping, disring, firring
3477663 spells the words: dispone, disroof
3477673 spells the words: dispope, dispose
3477678 spells the words: disport, dispost
3482433 spells the words: fitched, fitchee
3482437 spells the words: ditcher, fitcher
3488269 spells the words: dittamy, dittany
3488377 spells the words: Divvers, fitters
3528227 spells the words: flatcap, flatcar
3528463 spells the words: Elatine, flavine
3532867 spells the words: ejector, elector, flector
3536474 spells the words: Flemish, flemish
3548837 spells the words: flitter, flivver
3567737 spells the words: flopper, flosser
3588425 spells the words: eluvial, fluvial
3623542 spells the words: Embelia, embelic, Encelia
3626642 spells the words: encomia, encomic
3627696 spells the words: embrown, encrown
3635377 spells the words: endless, foeless
3644474 spells the words: doggish, foggish
3644663 spells the words: doggone, doghood
3645377 spells the words: dogless, fogless
3647283 spells the words: emirate, engrave
3662833 spells the words: donated, donatee
3663537 spells the words: doodler, fondler
3666474 spells the words: donnish, fonnish
3668385 spells the words: fontful, footful
3673348 spells the words: forefit, forfeit
3673729 spells the words: forepaw, foresay
3674295 spells the words: dorhawk, enshawl
3674642 spells the words: Dosinia, eosinic
3675263 spells the words: emplane, enplane
3675464 spells the words: Dorking, fopling
3676268 spells the words: dormant, formant
3677253 spells the words: dorsale, forsake
3678437 spells the words: emptier, forties
3683742 spells the words: enteria, enteric
3684489 spells the words: doughty, foughty
3724453 spells the words: draggle, fragile
3728448 spells the words: draught, fraught
3729464 spells the words: drawing, fraying
3737463 spells the words: epergne, eserine
3742253 spells the words: dribble, friable, fribble
3745537 spells the words: driller, friller
3746842 spells the words: epiotic, ergotic
3749953 spells the words: drizzle, frizzle
3749959 spells the words: drizzly, frizzly
3764633 spells the words: ermined, erminee
3767737 spells the words: dropper, drosser
3767837 spells the words: epoptes, froster
3769637 spells the words: drowner, frowner
3782259 spells the words: drubbly, equably
3784837 spells the words: equites, fruiter
3824377 spells the words: Duchess, duchess
3827483 spells the words: eucrite, evasive
3843642 spells the words: ethenic, Eugenia, eugenic
3843665 spells the words: ethenol, eugenol
3843742 spells the words: Etheria, etheric
3852542 spells the words: Eulalia, eulalia
3855379 spells the words: dullery, fullery
3855474 spells the words: dullish, fullish
3856442 spells the words: eulogia, eulogic
3862742 spells the words: Fumaria, fumaric, Funaria
3872253 spells the words: dupable, durable
3874663 spells the words: euphone, eupione
3877459 spells the words: furrily, fussily
3878459 spells the words: dustily, fustily
3925283 spells the words: exalate, exclave
3925833 spells the words: exalted, exclude
3927249 spells the words: dyarchy, exarchy
3967642 spells the words: exormia, exosmic
3978742 spells the words: dysuria, dysuric
3978743 spells the words: expurge, exsurge
4233474 spells the words: gaddish, icefish
4235263 spells the words: hadland, Iceland, iceland
4244537 spells the words: gaggler, haggler
4246483 spells the words: gahnite, ichnite
4253642 spells the words: Galenic, galenic, Halenia
4255464 spells the words: galling, halling
4262478 spells the words: gambist, iambist
4263224 spells the words: gamebag, handbag
4263385 spells the words: gameful, handful
4264464 spells the words: ganging, hanging
4264626 spells the words: gangman, hangman
4266625 spells the words: gammock, hammock
4273474 spells the words: garfish, hardish
4275377 spells the words: gasless, hapless
4275464 spells the words: gasking, harling
4275625 spells the words: gaslock, harlock, haslock
4277437 spells the words: happier, harpier, harrier
4277459 spells the words: happily, harshly
4277464 spells the words: gasping, gassing, happing
4283243 spells the words: gateage, haveage
4283385 spells the words: gaudful, hateful
4295474 spells the words: gawkish, hawkish
4322642 spells the words: gebanga, hebamic
4327464 spells the words: gearing, hearing
4328437 spells the words: Heather, heather, heavies
4328464 spells the words: heating, heaving
4363742 spells the words: generic, genesic
4364782 spells the words: Genista, genista
4365453 spells the words: gemlike, henlike
4366373 spells the words: Genoese, genoese
4366662 spells the words: Geonoma, geonoma
4367442 spells the words: Georgia, georgic
4369273 spells the words: henware, henyard
4372842 spells the words: geratic, hepatic
4376464 spells the words: germing, gesning
4377466 spells the words: Gershom, Gershon
4427342 spells the words: Giardia, giardia
4444474 spells the words: giggish, highish
4444537 spells the words: giggler, higgler
4452378 spells the words: Gilbert, gilbert
4453464 spells the words: gilding, hilding
4462842 spells the words: ignatia, ignavia
4469273 spells the words: ginward, himward
4477464 spells the words: hipping, hissing
4488483 spells the words: Gittite, Hittite
4527737 spells the words: glasser, glasses
4569464 spells the words: glowing, glozing
4592463 spells the words: Glycine, glycine
4622537 spells the words: gobbler, hobbler
4623546 spells the words: Gobelin, gobelin
4625463 spells the words: gobline, incline
4627337 spells the words: hoarder, increep
4628773 spells the words: imburse, incurse
4633273 spells the words: Goddard, goddard
4637859 spells the words: ineptly, inertly
4649273 spells the words: hogward, hogyard
4653474 spells the words: goldish, inkfish
4654284 spells the words: Goliath, goliath
4655263 spells the words: golland, Holland
4663474 spells the words: goodish, hoofish
4663538 spells the words: homelet, hooflet
4663626 spells the words: goodman, hoodman
4663743 spells the words: Homerid, immerge
4664342 spells the words: gonidia, gonidic
4665377 spells the words: hookers, innless
4666436 spells the words: homogen, ionogen
4667842 spells the words: Gnostic, gnostic
4675464 spells the words: gosling, impling
4676478 spells the words: hormist, hornist
4677377 spells the words: hoppers, impress
4677439 spells the words: horrify, horsify
4678573 spells the words: impulse, insulse
4688474 spells the words: goutish, hottish
4726842 spells the words: Grantha, Grantia
4727737 spells the words: grasper, grasser
4728359 spells the words: gravely, irately
4728464 spells the words: grating, graving
4732426 spells the words: Grecian, Isfahan
4732837 spells the words: greater, greaves
4737463 spells the words: Iresine, iserine
4743366 spells the words: Griffon, griffon
4743486 spells the words: iridium, isidium
4743837 spells the words: griever, grifter
4762273 spells the words: isobare, isobase
4764726 spells the words: grogram, isogram
4768737 spells the words: grouper, grouser
4784642 spells the words: Isthmia, isthmic
4787426 spells the words: Grusian, Istrian
4795587 spells the words: Gryllus, gryllus
4827264 spells the words: Guarani, guarani
4833537 spells the words: huddler, huffler
4845379 spells the words: guildry, guilery
4847273 spells the words: Guisard, guisard
4865377 spells the words: gumless, gunless, hunkers
4865453 spells the words: gumlike, Hunlike
4866243 spells the words: gummage, gunnage
4866464 spells the words: gumming, gunning, humming
4867463 spells the words: gumshoe, ivorine
4874464 spells the words: gushing, hushing
4875464 spells the words: hurling, husking
4878385 spells the words: gustful, hurtful
4878464 spells the words: hurting, husting
4936643 spells the words: hydnoid, hyenoid
4937663 spells the words: hydrome, hydrone
5225269 spells the words: jackbox, jackboy
5226642 spells the words: Kabonga, Laconic, laconic
5227837 spells the words: Jacques, lacquer
5228268 spells the words: jactant, lactant
5233474 spells the words: Kaddish, laddish
5262328 spells the words: jambeau, lambeau
5262378 spells the words: Lambert, lambert
5264782 spells the words: Lamista, lanista
5264867 spells the words: janitor, languor
5266625 spells the words: jannock, lammock
5267664 spells the words: kampong, Lampong
5268426 spells the words: Kanthan, Kantian, Laotian
5272585 spells the words: Karakul, karakul
5275464 spells the words: Karling, larking
5277464 spells the words: jarring, lapping, lapsing
5277643 spells the words: jaspoid, jassoid
5282642 spells the words: Latania, lavanga
5283478 spells the words: Laudist, laudist
5284642 spells the words: Latinic, Lavinia
5286337 spells the words: jaunder, launder
5287463 spells the words: Katrine, latrine
5295377 spells the words: jawless, lawless
5323243 spells the words: leadage, leafage
5327464 spells the words: leaping, leasing
5332437 spells the words: leecher, leeches
5337464 spells the words: jeering, keeping
5366463 spells the words: Leonine, leonine
5366464 spells the words: kenning, lemming
5367273 spells the words: jeopard, leopard
5377483 spells the words: kerrite, lessive
5378462 spells the words: jervina, kerugma
5395377 spells the words: Jewless, keyless
5425464 spells the words: kicking, licking
5462264 spells the words: jimbang, kimbang
5463626 spells the words: limeman, lineman
5464538 spells the words: jinglet, kinglet
5464825 spells the words: limital, lingual
5477464 spells the words: kissing, lipping
5484359 spells the words: lithely, lividly
5488379 spells the words: jittery, littery
5622253 spells the words: knabble, locable
5622474 spells the words: jobbish, lobbish
5623464 spells the words: loading, loafing
5623538 spells the words: loaflet, lobelet
5623546 spells the words: Jocelin, lobelin
5627737 spells the words: Knapper, knapper
5628527 spells the words: jocular, lobular, locular
5662273 spells the words: Lombard, lombard
5666379 spells the words: loomery, loonery
5667464 spells the words: looping, loosing
5667733 spells the words: knopped, knosped
5672526 spells the words: korakan, Kosalan
5682259 spells the words: knubbly, lovably
5687837 spells the words: jouster, louster
5827439 spells the words: lubrify, lucrify
5864625 spells the words: Luminal, luminal
6225833 spells the words: obclude, occlude
6243476 spells the words: Mahdism, maidism
6244742 spells the words: Maghrib, magiric
6247626 spells the words: magsman, nagsman
6254433 spells the words: obliged, obligee
6255464 spells the words: Malling, oakling
6262253 spells the words: manacle, namable
6262782 spells the words: Namaqua, namaqua
6264323 spells the words: manhead, Manidae
6265464 spells the words: manling, Nanking
6266377 spells the words: manners, manness
6268643 spells the words: mantoid, obovoid
6272533 spells the words: marbled, mascled
6272537 spells the words: marbler, marbles
6272547 spells the words: Nasalis, nasalis
6272664 spells the words: Marconi, marconi
6274842 spells the words: naphtha, oaritic, oasitic
6274847 spells the words: nasitis, oaritis
6275377 spells the words: napless, oarless
6275467 spells the words: markhor, Maskins
6275625 spells the words: marlock, oarlock
6276652 spells the words: masooka, masoola
6277437 spells the words: marrier, massier
6277699 spells the words: marrowy, narrowy
6278243 spells the words: Mapuche, mastage
6282724 spells the words: navarch, octarch
6282842 spells the words: Octavia, octavic
6287333 spells the words: matreed, oatseed
6288437 spells the words: mauther, nauther
6292625 spells the words: Maycock, maycock
6299273 spells the words: mazzard, nayward
6325626 spells the words: mealman, odalman
6333537 spells the words: meddler, needler, needles
6352642 spells the words: Melania, melanic
6356342 spells the words: melodia, melodic
6363742 spells the words: Nemesia, nemesic
6365649 spells the words: neology, odology
6374353 spells the words: Nephele, nephele
6374742 spells the words: nephria, nephric
6374837 spells the words: meriter, Mesites
6376642 spells the words: mesonic, Neronic
6376742 spells the words: meropia, mesopic
6376962 spells the words: Merozoa, Mesozoa
6377459 spells the words: merrily, messily
6424235 spells the words: Michael, Nichael
6426842 spells the words: Niantic, nicotia, nicotic
6434389 spells the words: midgety, nidgety
6453474 spells the words: mildish, oilfish
6455453 spells the words: millile, oillike
6455464 spells the words: milking, milling
6455626 spells the words: milkman, millman
6462326 spells the words: Minaean, Niobean
6462483 spells the words: Niobite, niobite
6464687 spells the words: minimus, nimious
6465474 spells the words: minkish, Nimkish
6473273 spells the words: misease, misfare
6477464 spells the words: missing, nipping
6483552 spells the words: Mitella, Nitella
6483733 spells the words: mitered, nitered
6487283 spells the words: mitrate, nitrate
6596742 spells the words: Olympia, Olympic
6638527 spells the words: modular, nodular
6638587 spells the words: modulus, nodulus
6662342 spells the words: monadic, nomadic
6662629 spells the words: nomancy, oomancy
6662724 spells the words: monarch, nomarch, onmarch
6663742 spells the words: monepic, moneric, monesia, nonepic
6664537 spells the words: mongler, moniker
6665379 spells the words: monkery, nookery
6666268 spells the words: monocot, nonnant
6666459 spells the words: moonily, nonoily
6666464 spells the words: mooning, nooning
6666548 spells the words: moonlit, noonlit
6667243 spells the words: moorage, nonpaid
6667474 spells the words: Moorish, moorish
6667626 spells the words: Moorman, moorman
6668262 spells the words: Montana, montana
6668626 spells the words: Monumbo, mootman
6672478 spells the words: Mosaist, mosaist
6674673 spells the words: onshore, oophore
6676226 spells the words: Morocco, morocco
6677442 spells the words: morphia, morphic
6678437 spells the words: mortier, norther
6682253 spells the words: movable, notable
6682259 spells the words: movably, notably
6682542 spells the words: Notalia, novalia
6682867 spells the words: notator, novator
6683538 spells the words: notelet, novelet
6688437 spells the words: mouther, nouther
6725493 spells the words: opalize, oralize
6742642 spells the words: opianic, organic
6744842 spells the words: Ophitic, ophitic
6774326 spells the words: oppidan, Orphean
6822246 spells the words: ouabain, ouabaio
6825442 spells the words: otalgia, otalgic
6827426 spells the words: otarian, ovarian
6833474 spells the words: muddish, mudfish, muffish
6833537 spells the words: muddler, muffler
6837243 spells the words: overage, overbid
6837269 spells the words: overbow, overcow, overcoy
6837328 spells the words: overeat, overfat
6837333 spells the words: overfed, overfee
6837393 spells the words: overdye, overeye
6837529 spells the words: overlax, overlay
6837569 spells the words: overjoy, overlow
6837738 spells the words: overpet, overset
6837768 spells the words: overpot, oversot
6862537 spells the words: mumbler, numbles
6865649 spells the words: otology, ovology
6866379 spells the words: mummery, nunnery
6866439 spells the words: mummify, nunnify
6872533 spells the words: muraled, muscled
6875474 spells the words: murkish, muskish
6882253 spells the words: mutable, nutcake, outbake
6882663 spells the words: outbond, outcome
6882733 spells the words: outarde, outbred
6882855 spells the words: outbulk, outcull
6887223 spells the words: outpace, outrace
6887243 spells the words: outpage, outrage
6887245 spells the words: outrail, outsail
6887283 spells the words: outrate, outrave
6887333 spells the words: nutseed, outrede
6887337 spells the words: outpeep, outpeer
6887425 spells the words: nutpick, outpick, outrick
6887433 spells the words: outride, outside
6887464 spells the words: outring, outsing
6887627 spells the words: outroar, outsoar
6887655 spells the words: outpoll, outroll
6887678 spells the words: outport, outpost
6887855 spells the words: outpull, outsulk
6887874 spells the words: outpush, outrush
6889253 spells the words: outwake, outwale
6889255 spells the words: outwalk, outwall
6889273 spells the words: outward, outyard
6889355 spells the words: outwell, outyell
6889673 spells the words: outword, outwore
6925442 spells the words: myalgia, myalgic
6926283 spells the words: oxamate, oxanate
6966486 spells the words: oxonium, Ozonium
6968669 spells the words: myotomy, myotony
7222233 spells the words: saccade, scabbed
7222253 spells the words: pacable, scabble
7222284 spells the words: Sabbath, sabbath
7223353 spells the words: scaddle, scaffle
7223552 spells the words: Sabella, sabella
7224342 spells the words: pacific, rabific
7225243 spells the words: package, sackage, scalage
7225385 spells the words: rackful, sackful
7225464 spells the words: racking, sacking, scaling
7225626 spells the words: packman, sackman
7225929 spells the words: packway, rackway
7226342 spells the words: scandia, scandic
7226537 spells the words: scamler, scamles
7227643 spells the words: scapoid, scaroid
7228586 spells the words: pabulum, sabulum
7233464 spells the words: padding, raffing
7233474 spells the words: raffish, saddish
7233533 spells the words: paddled, saddled
7233537 spells the words: paddler, raffler, saddler
7234253 spells the words: radiale, radicle
7236642 spells the words: Paeonia, paeonic
7242742 spells the words: Paharia, Saharic
7243385 spells the words: pageful, rageful
7244464 spells the words: ragging, sagging
7245243 spells the words: railage, sailage
7245284 spells the words: Pahlavi, pahlavi
7245464 spells the words: railing, sailing
7246385 spells the words: painful, rainful
7246474 spells the words: saimiri, sciniph
7246833 spells the words: painted, sainted
7248743 spells the words: pagurid, sciurid
7248787 spells the words: Pagurus, Sciurus
7252837 spells the words: palaver, sclater
7255437 spells the words: rallier, sallier
7262232 spells the words: Panacea, panacea
7262253 spells the words: pancake, sanable
7262537 spells the words: rambler, Ranales
7262626 spells the words: Panaman, Ramanan
7263269 spells the words: sandbox, sandboy
7263337 spells the words: Sandeep, scoffer
7263464 spells the words: randing, sanding
7263672 spells the words: Pandora, pandora
7263687 spells the words: pandour, rameous
7264253 spells the words: panicle, sanicle
7264323 spells the words: panhead, ramhead, Ranidae
7264482 spells the words: samhita, Sanhita
7266237 spells the words: Scomber, sconcer
7266243 spells the words: pannage, panoche
7266437 spells the words: pannier, sammier
7267433 spells the words: panside, pansied
7267464 spells the words: ramping, scoring
7267473 spells the words: Panpipe, rampire
7267537 spells the words: rampler, sampler
7268437 spells the words: panther, panties
7268464 spells the words: panting, ranting, santimi
7268527 spells the words: ramular, ranular
7272253 spells the words: papable, parable, parbake
7272779 spells the words: paraspy, scrappy
7272824 spells the words: scratch, scrauch
7273248 spells the words: parfait, rarebit
7273463 spells the words: pardine, sardine
7274323 spells the words: Paridae, saphead
7274464 spells the words: rashing, sashing
7274483 spells the words: Sarigue, sarigue
7274552 spells the words: papilla, parilla
7274632 spells the words: sapinda, sarinda
7274637 spells the words: rapiner, scrimer
7275377 spells the words: papless, sapless
7275464 spells the words: parking, parling, sapling, sarking
7275474 spells the words: parkish, parlish
7276842 spells the words: Parotia, parotic
7276843 spells the words: parotid, scrouge
7277243 spells the words: passage, rappage
7277442 spells the words: Sapphic, sapphic
7277464 spells the words: passing, rapping, rasping, sapping
7277478 spells the words: Rappist, rappist
7277483 spells the words: passive, Rappite, raspite
7277537 spells the words: sapples, sarpler
7277539 spells the words: parsley, passkey
7277846 spells the words: Pasquin, pasquin
7278453 spells the words: partile, pastile
7278873 spells the words: parture, pasture, rapture
7282253 spells the words: ratable, satable, savable
7282435 spells the words: ratchel, satchel
7282437 spells the words: patcher, ratcher, ravager
7282466 spells the words: Patagon, patagon
7282489 spells the words: paucity, raucity
7282627 spells the words: patamar, Satanas
7282746 spells the words: Patarin, savarin
7283337 spells the words: scudder, scuffer
7283353 spells the words: scuddle, scuffle
7283537 spells the words: raveler, scudler
7283637 spells the words: patener, ravener
7284368 spells the words: patient, satient
7284633 spells the words: patined, ravined, satined
7284687 spells the words: paviour, Saviour
7285463 spells the words: Pauline, ratline
7286637 spells the words: scummer, scunner
7287423 spells the words: Patrice, patrice
7287425 spells the words: patrial, Patrick
7287426 spells the words: patrico, saurian
7288243 spells the words: rattage, scutage
7288537 spells the words: rattler, rattles
7292253 spells the words: payable, sayable
7322253 spells the words: recable, secable
7322437 spells the words: peacher, reacher
7323337 spells the words: receder, Seceder, seceder
7323695 spells the words: peafowl, seafowl
7324825 spells the words: rechuck, recital
7325277 spells the words: reclasp, reclass
7325377 spells the words: rebless, sealess
7325453 spells the words: pealike, sealike
7325463 spells the words: recline, sealine
7325464 spells the words: peaking, sealing
7325474 spells the words: peakish, peckish
7325833 spells the words: rebluff, seclude
7325873 spells the words: recluse, secluse
7326278 spells the words: reboast, recoast
7327425 spells the words: rebrick, seasick
7327464 spells the words: rebring, searing
7327696 spells the words: rebrown, recrown
7327729 spells the words: rearray, reassay
7327874 spells the words: rebrush, recrush
7328453 spells the words: rebuild, sectile
7328466 spells the words: rection, section
7329253 spells the words: reawake, recycle
7329273 spells the words: reaward, reaware, seaward, seaware
7333459 spells the words: reedily, seedily
7333464 spells the words: redding, reeding, reefing
7333474 spells the words: reddish, redfish, reedish
7333626 spells the words: reedman, seedman
7335464 spells the words: peeling, refling, seeking
7336464 spells the words: reeming, seeming
7336863 spells the words: redound, refound
7337243 spells the words: peerage, seepage
7337377 spells the words: peeress, redress, seeress
7337668 spells the words: redroot, refront
7338233 spells the words: reduced, seducee
7338237 spells the words: reducer, seducer
7339273 spells the words: redward, redware
7342743 spells the words: Pegasid, pegasid
7347277 spells the words: regrasp, regrass
7348587 spells the words: Regulus, regulus
7352744 spells the words: Pelargi, Pelasgi
7355283 spells the words: pellate, sellate
7356742 spells the words: peloria, peloric
7363268 spells the words: pendant, remeant
7363464 spells the words: pending, sending
7364733 spells the words: remiped, semiped
7366243 spells the words: pennage, peonage
7366268 spells the words: pennant, remnant
7367453 spells the words: pensile, sensile
7367466 spells the words: pension, sension
7367483 spells the words: pensive, sensive
7372837 spells the words: Perates, rescuer
7373873 spells the words: perdure, perfuse
7374273 spells the words: rephase, reshape, reshare
7374279 spells the words: sepiary, seriary
7374283 spells the words: reshave, seriate
7374637 spells the words: repiner, resiner
7374642 spells the words: resinic, seringa
7374652 spells the words: pergola, Sepiola, Seriola
7374678 spells the words: periost, sepiost
7374687 spells the words: Serinus, serious
7374783 spells the words: perique, repique
7375283 spells the words: replate, reslate
7375459 spells the words: perkily, peskily
7376725 spells the words: peroral, reposal
7376787 spells the words: peropus, seropus
7376863 spells the words: repound, resound
7376883 spells the words: permute, reroute
7377266 spells the words: Serrano, serrano
7377368 spells the words: Serpent, serpent
7377426 spells the words: Persian, persico
7377463 spells the words: reprime, sepsine
7377473 spells the words: reprise, respire
7377663 spells the words: reproof, respond
7377852 spells the words: Serpula, serpula
7378233 spells the words: pervade, restaff
7378246 spells the words: pertain, restain
7378268 spells the words: reptant, restant, servant
7378283 spells the words: restate, septate, septave
7378378 spells the words: pervert, request, sequest
7378385 spells the words: pestful, restful
7378423 spells the words: restiad, service, sestiad
7378426 spells the words: Servian, Sestian
7378433 spells the words: peptide, restiff
7378453 spells the words: reptile, septile, servile
7378463 spells the words: septime, sestine
7378464 spells the words: resting, resuing, serving
7378483 spells the words: requite, restive, Servite
7378625 spells the words: restock, serumal
7378642 spells the words: septoic, Sequoia
7378653 spells the words: septole, sestole
7378743 spells the words: repurge, resurge
7378833 spells the words: reputed, restuff
7378867 spells the words: septuor, sestuor
7383737 spells the words: reverer, severer
7384725 spells the words: retiral, revisal
7384733 spells the words: retired, Revised, revisee
7384737 spells the words: retirer, reviser
7384867 spells the words: petitor, revivor
7388464 spells the words: retting, setting
7395377 spells the words: pewless, sewless, sexless
7398268 spells the words: Sextant, sextant
7422367 spells the words: picador, rhabdos, sibbens
7424366 spells the words: richdom, shahdom
7424687 spells the words: Ricinus, ricinus
7425377 spells the words: ribless, shakers
7425464 spells the words: shaking, sibling
7425537 spells the words: pickler, sickler
7426652 spells the words: Pianola, pianola
7427333 spells the words: sharded, sibrede
7427826 spells the words: Shaptan, Shastan
7427837 spells the words: piaster, shaster
7428837 spells the words: Shatter, shatter
7432253 spells the words: piebald, ridable
7433537 spells the words: piddler, piffler, riddler, riffler
7433733 spells the words: ridered, sheered
7435464 spells the words: rifling, sidling
7435837 spells the words: shelter, shelver
7436474 spells the words: Rhemish, Rhenish
7437426 spells the words: Pierian, rhesian
7437768 spells the words: Pierrot, pierrot
7438478 spells the words: Pietist, pietist
7444464 spells the words: pigging, rigging, sighing
7444474 spells the words: piggish, riggish
7444836 spells the words: righten, sighten
7444837 spells the words: righter, sighter
7444853 spells the words: pightle, rightle
7444859 spells the words: rightly, sightly
7445464 spells the words: pigling, rigling, shikimi
7445547 spells the words: Phillip, Phillis
7446283 spells the words: sigmate, signate
7446459 spells the words: shingly, shinily
7446637 spells the words: shimmer, shinner
7453687 spells the words: pileous, silenus
7455459 spells the words: silkily, sillily
7455625 spells the words: rillock, sillock
7462255 spells the words: pinball, simball
7462273 spells the words: pincase, rimbase
7462326 spells the words: Phocean, Sinaean
7462426 spells the words: Phocian, Pincian
7462537 spells the words: Pinales, shoaler, shocker
7462742 spells the words: pimaric, sinapic
7462747 spells the words: Sinapis, sinapis
7463464 spells the words: rhoding, shoeing
7463649 spells the words: Phoenix, phoenix
7464464 spells the words: ringing, singing
7464537 spells the words: pingler, singler, singles
7464538 spells the words: ringlet, singlet
7464653 spells the words: pinhold, pinhole
7465243 spells the words: pholcid, sinkage
7465263 spells the words: pinjane, rimland
7465377 spells the words: pinless, rimless, sinless
7465464 spells the words: pinking, simling, sinking
7466283 spells the words: phonate, pinnate
7466742 spells the words: sinopia, Sinopic
7467379 spells the words: phoresy, pimpery
7467464 spells the words: pimping, rinsing, shoring
7468687 spells the words: riotous, sinuous
7468837 spells the words: shotter, shouter
7469464 spells the words: pinwing, showing
7472462 spells the words: phragma, piscina
7472642 spells the words: Piranga, piranha
7473642 spells the words: phrenic, Sirenia, sirenic
7477643 spells the words: piproid, rissoid
7484385 spells the words: pithful, pitiful
7486837 spells the words: pivoter, shunter
7488463 spells the words: pittine, sittine
7488464 spells the words: pitting, sitting
7488483 spells the words: Pittite, pittite, pituite
7522326 spells the words: Placean, placebo
7524833 spells the words: plagued, plaited
7524837 spells the words: plaguer, plaiter
7526823 spells the words: plantad, Plantae
7527437 spells the words: plasher, slasher
7527842 spells the words: Plastic, plastic
7528379 spells the words: platery, slavery
7528439 spells the words: slatify, Slavify
7528464 spells the words: plating, skating, slating, slaving
7528474 spells the words: slatish, Slavish, slavish
7528478 spells the words: skatist, Slavist
7528833 spells the words: platted, slatted
7528837 spells the words: platter, slatter
7529269 spells the words: playbox, playboy
7533437 spells the words: pledger, sledger
7533837 spells the words: Skeeter, skeeter, sleever
7536476 spells the words: plenipo, plenism
7543337 spells the words: skidder, slidder
7546537 spells the words: skinker, slinker
7546633 spells the words: skimmed, skinned
7546637 spells the words: skimmer, skinner
7547626 spells the words: skipman, slipman
7547737 spells the words: skipper, slipper
7547738 spells the words: skippet, skirret
7548437 spells the words: skither, slither
7548464 spells the words: skiving, sliving
7548837 spells the words: skitter, slitter
7563337 spells the words: plodder, slodder
7568833 spells the words: plotted, slotted
7568837 spells the words: plotter, plouter, slotter
7583337 spells the words: pluffer, sludder
7584433 spells the words: plugged, slugged
7584437 spells the words: plugger, slugger
7586237 spells the words: plumber, slumber
7586437 spells the words: plumier, plunger
7586637 spells the words: plummer, slummer
7587437 spells the words: pluries, slusher
7622437 spells the words: poacher, socager
7622464 spells the words: robbing, sobbing
7625379 spells the words: rockery, snakery
7625389 spells the words: pockety, rockety
7625459 spells the words: pockily, snakily
7625464 spells the words: rocking, snaking, soaking
7625474 spells the words: rockish, snakish
7625626 spells the words: rockman, soakman
7627464 spells the words: roaring, soaring
7632537 spells the words: sneaker, snecker
7633464 spells the words: rodding, sodding
7635377 spells the words: rodless, sodless
7635453 spells the words: podlike, rodlike, roelike
7642537 spells the words: smicker, snicker
7642538 spells the words: smicket, snicket
7643353 spells the words: sniddle, sniffle
7645464 spells the words: smiling, soiling
7647853 spells the words: smirtle, snirtle
7648464 spells the words: roguing, smiting
7652686 spells the words: Solanum, solanum
7653626 spells the words: poleman, sokeman
7655464 spells the words: polling, rolling
7655625 spells the words: pollock, rollock
7656478 spells the words: poloist, soloist
7656642 spells the words: Polonia, Solonic
7656666 spells the words: pokomoo, Solomon
7662537 spells the words: smocker, snocker
7662623 spells the words: Romance, romance, sonance
7662629 spells the words: romancy, sonancy
7663243 spells the words: pondage, roofage
7663538 spells the words: pondlet, rooflet
7663626 spells the words: pondman, roofman
7664474 spells the words: Songish, songish
7665379 spells the words: rookery, smokery
7665474 spells the words: rookish, smokish
7667464 spells the words: romping, snoring
7667474 spells the words: poorish, rompish
7667837 spells the words: pomster, rooster, snorter
7668227 spells the words: Pontacq, rootcap
7668243 spells the words: pontage, rootage
7668437 spells the words: smother, soother
7668463 spells the words: Pontine, pontine
7668837 spells the words: smotter, snotter, snouter
7672283 spells the words: porcate, sorbate
7673283 spells the words: roseate, rosebud
7673463 spells the words: roseine, sordine
7673466 spells the words: sordino, sorehon
7673552 spells the words: Porella, rosella
7674486 spells the words: Sorghum, sorghum
7674837 spells the words: Porites, sorites
7676747 spells the words: porosis, sorosis
7677482 spells the words: Porpita, Sospita
7678243 spells the words: portage, postage
7678269 spells the words: postbox, postboy
7678527 spells the words: popular, rosular
7678626 spells the words: portman, postman
7682233 spells the words: snubbed, snubbee
7682867 spells the words: potator, rotator
7683353 spells the words: snuffle, souffle
7684337 spells the words: potifer, rotifer
7684437 spells the words: rougher, snugger, sougher
7684453 spells the words: smuggle, snuggle
7686337 spells the words: pounder, rounder, sounder
7686359 spells the words: roundly, soundly
7687464 spells the words: pouring, rousing, souring
7688243 spells the words: pottage, sottage
7688249 spells the words: pottagy, smutchy
7688464 spells the words: potting, pouting, rotting, routing
7692253 spells the words: rowable, sowable
7724743 spells the words: prairie, spairge
7725837 spells the words: psalter, psaltes
7726537 spells the words: pranker, spanker
7727643 spells the words: prasoid, sparoid
7727842 spells the words: prastha, spastic
7728425 spells the words: spathal, spatial
7728433 spells the words: spathed, spavied
7728852 spells the words: Spatula, spatula
7728853 spells the words: prattle, spattle, spatule
7729464 spells the words: praying, spaying
7729637 spells the words: prawner, spawner
7732473 spells the words: precipe, precise
7732559 spells the words: preally, speckly
7732645 spells the words: preboil, precoil
7732665 spells the words: precook, precool
7732837 spells the words: preaver, specter
7733463 spells the words: predine, prefine
7736237 spells the words: Spencer, spencer
7736337 spells the words: prender, spender
7737283 spells the words: prepave, sperate
7737368 spells the words: prerent, present
7738363 spells the words: pretend, prevene
7738473 spells the words: pretire, previse
7742538 spells the words: pricket, spicket
7742553 spells the words: prickle, spickle
7743437 spells the words: spheges, spidger
7745464 spells the words: spiking, spiling
7746243 spells the words: primage, spinage
7746283 spells the words: primate, spinate
7746359 spells the words: primely, spindly
7746643 spells the words: prionid, spinoid, spionid
7746687 spells the words: Prionus, spinous
7746852 spells the words: Primula, primula
7747852 spells the words: Spirula, Spisula
7763337 spells the words: prodder, proffer
7763353 spells the words: proddle, spoffle
7766337 spells the words: proofer, spoofer
7766433 spells the words: pronged, sponged
7766437 spells the words: pronger, sponger
7766822 spells the words: Pronuba, pronuba
7767363 spells the words: propend, propene
7767643 spells the words: psoroid, sporoid
7767687 spells the words: psorous, sporous
7767737 spells the words: propper, prosper
7768328 spells the words: protect, provect
7768433 spells the words: protide, provide
7768486 spells the words: Protium, protium
7768663 spells the words: protome, protone
7768837 spells the words: spotter, spouter
7783269 spells the words: Spudboy, squeamy
7783353 spells the words: spuddle, spuffle
7784552 spells the words: Squilla, squilla
7822273 spells the words: subbase, subcase
7822377 spells the words: rubbers, success
7822464 spells the words: rubbing, subbing
7822473 spells the words: quabird, succise
7822497 spells the words: Stachys, stachys
7822537 spells the words: rubbler, stabler, stacker
7823326 spells the words: quaedam, subdean
7823333 spells the words: quadded, staffed
7823337 spells the words: quaffer, staffer
7823353 spells the words: quaddle, staddle
7823553 spells the words: pucelle, rubelle
7823725 spells the words: puberal, quadral
7823742 spells the words: quadric, suberic
7824342 spells the words: rubidic, rubific
7824373 spells the words: stagese, subherd
7824376 spells the words: puchero, subhero
7824437 spells the words: Stagger, stagger
7824464 spells the words: ruching, staging
7825379 spells the words: puckery, Quakery
7825464 spells the words: quaking, staling, subking, sucking
7825474 spells the words: publish, puckish
7825537 spells the words: stalker, staller, suckler
7826463 spells the words: stanine, submind
7826635 spells the words: stammel, stannel
7826637 spells the words: stammer, stanner
7827433 spells the words: Quashee, subside
7827439 spells the words: quashey, rubrify, subsidy
7827678 spells the words: starost, subport
7827733 spells the words: quarred, starred
7827837 spells the words: quarter, starter, starver
7827853 spells the words: startle, subrule
7828359 spells the words: stately, suavely
7828363 spells the words: subtend, subvene
7828377 spells the words: quaters, stavers
7828466 spells the words: ruction, station, suction
7833459 spells the words: puffily, ruddily
7833464 spells the words: pudding, puffing
7833533 spells the words: puddled, ruffled
7833537 spells the words: puddler, ruffler, steeler
7833625 spells the words: puddock, ruddock
7833737 spells the words: queerer, steeper, steerer
7833759 spells the words: queerly, steeply
7837426 spells the words: Pterian, Stephan
7837453 spells the words: puerile, sterile
7837625 spells the words: quernal, sternal
7837626 spells the words: puerman, sudsman
7837643 spells the words: pteroid, steroid
7837867 spells the words: questor, stertor
7842559 spells the words: quickly, stickly
7843642 spells the words: sthenia, sthenic
7844464 spells the words: pugging, rugging
7845537 spells the words: quiller, stiller
7845833 spells the words: quilted, stilted
7845837 spells the words: quilter, stilter
7846283 spells the words: quinate, ruinate, suimate
7846643 spells the words: ptinoid, quinoid
7846846 spells the words: Quintin, quintin
7847737 spells the words: quipper, stirrer
7848276 spells the words: suguaro, suhuaro
7862473 spells the words: punaise, sunbird
7862537 spells the words: rumbler, stocker
7862872 spells the words: Sumatra, sumatra
7863474 spells the words: runfish, sunfish
7865377 spells the words: punless, rumless, runless, sumless, sunless
7866243 spells the words: punnage, rummage, summage
7866283 spells the words: stomate, summate
7866459 spells the words: rummily, stonily, sunnily
7866464 spells the words: running, stoning
7866474 spells the words: rummish, stonish
7866537 spells the words: stonker, stooker
7866737 spells the words: rumorer, stomper, stooper
7867243 spells the words: pumpage, storage, sumpage
7867626 spells the words: pumpman, sumpman
7867837 spells the words: punster, sumpter
7872783 spells the words: puraque, surcrue
7872937 spells the words: strawer, strayer
7873883 spells the words: strette, surette
7874379 spells the words: purgery, surgery
7874464 spells the words: purging, pushing, rushing, surging
7877363 spells the words: Russene, supreme, suspend
7877439 spells the words: puppify, Russify
7877459 spells the words: puppily, pursily
7877464 spells the words: purring, supping
7877539 spells the words: pursley, pussley
7877663 spells the words: purrone, ruspone
7877673 spells the words: purpose, suppose
7877678 spells the words: purport, support, suppost
7878483 spells the words: ruptive, survive
7883337 spells the words: studder, stuffer
7883486 spells the words: Studium, studium
7886637 spells the words: stummer, stunner
7887339 spells the words: putrefy, stupefy
7895677 spells the words: Stylops, stylops
7926637 spells the words: swanner, Sycones
7935537 spells the words: sweller, Szekler
7968669 spells the words: syntomy, syntony
7973942 spells the words: pyrexia, pyrexic
7977442 spells the words: Pyrrhic, pyrrhic
8225464 spells the words: tabling, tacking
8225643 spells the words: Tabloid, tabloid
8228483 spells the words: tactite, tactive
8252742 spells the words: talaria, talaric
8253385 spells the words: takeful, taleful
8253742 spells the words: Valeria, valeric
8256642 spells the words: talonic, valonia
8257643 spells the words: talpoid, valsoid
8258283 spells the words: valuate, valvate
8264426 spells the words: tangham, tanghan
8267473 spells the words: vampire, vansire
8269273 spells the words: tanyard, vanward
8269463 spells the words: Tamzine, Tanzine
8274653 spells the words: taphole, variole
8274742 spells the words: Taphria, tariric
8276474 spells the words: tarnish, varnish
8277437 spells the words: tarrier, tarsier
8277666 spells the words: tappoon, taproom
8278459 spells the words: tastily, vastily
8286837 spells the words: taunter, vaunter
8287426 spells the words: Taurian, taurian
8327464 spells the words: tearing, teasing
8355462 spells the words: Tellima, Tellina
8356237 spells the words: Vejoces, vejoces
8363464 spells the words: tending, vending
8363725 spells the words: teneral, veneral
8363737 spells the words: venerer, Veneres
8366637 spells the words: tenoner, venomer
8367527 spells the words: Templar, templar
8368243 spells the words: tentage, ventage
8368873 spells the words: tenture, venture
8372632 spells the words: Tepanec, veranda
8372642 spells the words: vesania, vesanic
8376463 spells the words: termine, vernine
8376466 spells the words: termino, ternion
8377263 spells the words: terpane, terrane
8377363 spells the words: terpene, terrene
8377439 spells the words: terrify, versify
8377463 spells the words: terpine, terrine, versine, vespine
8377466 spells the words: tersion, version
8378464 spells the words: testing, vesting, Vestini
8427742 spells the words: Thapsia, thapsia
8433537 spells the words: theeker, tiddler
8436742 spells the words: theoria, theoric
8437386 spells the words: thereto, Theseum
8437387 spells the words: thereup, Theseus
8437425 spells the words: therial, thesial
8437648 spells the words: Thermit, thermit
8438463 spells the words: thetine, viduine
8446642 spells the words: thionic, vigonia
8455243 spells the words: tillage, village
8462253 spells the words: timable, timbale
8462368 spells the words: Vincent, vincent
8462542 spells the words: Timalia, Vinalia
8464625 spells the words: Viminal, viminal
8466849 spells the words: Timothy, timothy
8468243 spells the words: tintage, vintage
8473626 spells the words: tireman, viseman
8473642 spells the words: viremia, viremic
8474837 spells the words: thriver, visiter
8482642 spells the words: titania, Titanic, titanic
8487439 spells the words: thurify, vitrify
8487687 spells the words: thurmus, vitrous
8488527 spells the words: titular, vitular
8562742 spells the words: Ulmaria, ulnaria
8622733 spells the words: unbased, uncased
8622783 spells the words: unbaste, uncaste
8622833 spells the words: unacted, unbated
8623278 spells the words: unadapt, unbeast
8623333 spells the words: unadded, unceded
8624453 spells the words: unagile, unchild
8625378 spells the words: unalert, unblest
8625483 spells the words: unakite, unalive
8625625 spells the words: unblock, uncloak
8625683 spells the words: unaloud, uncloud
8626639 spells the words: unannex, uncomfy
8626642 spells the words: umbonic, uncomic
8626733 spells the words: unbored, uncored
8626933 spells the words: unbowed, unboxed, uncowed
8627243 spells the words: umbrage, unbraid
8627433 spells the words: unbrief, uncried
8627463 spells the words: umbrine, uncrime
8627696 spells the words: unbrown, uncrown
8627833 spells the words: toastee, unarted, uncrude
8628527 spells the words: uncular, vocular
8628778 spells the words: unburst, uncurst
8632233 spells the words: unebbed, unfaced
8633833 spells the words: unfeted, unfeued
8634448 spells the words: undight, unfight
8634533 spells the words: undiked, unfiled
8634633 spells the words: undined, unfined
8636733 spells the words: undoped, undosed
8637433 spells the words: undried, unfried
8638733 spells the words: unduped, unfused
8642833 spells the words: togated, unhated
8642933 spells the words: unhayed, unhazed
8645623 spells the words: unglobe, unilobe
8646633 spells the words: unhoned, unioned
8646733 spells the words: ungored, unhoped, unhosed, unimped
8648474 spells the words: toitish, voguish
8652633 spells the words: unkamed, unlamed
8654633 spells the words: unlimed, unlined
8658243 spells the words: unlucid, voltage
8658259 spells the words: unlucky, volubly
8658283 spells the words: toluate, volvate
8658789 spells the words: unlusty, volupty
8658833 spells the words: unluted, voluted
8662633 spells the words: unmaned, unnamed
8664533 spells the words: unogled, unoiled
8664837 spells the words: tonguer, unmiter, vomiter
8666833 spells the words: unmoved, unnoted
8672233 spells the words: unpaced, unraced
8672468 spells the words: unpaint, unsaint
8672533 spells the words: unpaled, unraked
8672724 spells the words: toparch, unparch
8672733 spells the words: unpared, unraped
8672833 spells the words: unpaved, unrated, unsated, unsaved
8672933 spells the words: unpawed, unrayed, unrazed, unsawed
8673933 spells the words: unsewed, unsexed
8674323 spells the words: unpiece, unsheaf
8674448 spells the words: unright, unsight
8674733 spells the words: unpiped, unriped
8675246 spells the words: unplain, unslain
8675283 spells the words: unslate, unslave
8676233 spells the words: tornade, unrobed
8676278 spells the words: topmast, unroast, unsmart
8676533 spells the words: unpoled, unsoled
8676678 spells the words: topmost, unroost
8676683 spells the words: tornote, unsmote
8676733 spells the words: unposed, unroped, unrosed
8676833 spells the words: unroted, unroved
8676863 spells the words: unround, unsound
8676933 spells the words: unrowed, unsowed
8677245 spells the words: toprail, topsail
8677368 spells the words: torpent, torrent, unspent
8677433 spells the words: topside, unspied
8677453 spells the words: torsile, unspike
8677464 spells the words: topping, tossing
8677645 spells the words: topsoil, unspoil
8678336 spells the words: umpteen, unqueen
8678425 spells the words: unquick, unstick
8678669 spells the words: unstony, unsunny
8682433 spells the words: touched, vouchee
8682437 spells the words: toucher, voucher
8682559 spells the words: totally, votally
8682933 spells the words: untawed, untaxed
8683933 spells the words: untewed, unvexed
8684368 spells the words: totient, Vougeot
8687226 spells the words: touraco, unurban
8687333 spells the words: toupeed, untreed
8687377 spells the words: untress, votress
8687433 spells the words: untried, unurged
8687633 spells the words: tournee, unurned
8687825 spells the words: untruck, unusual
8692933 spells the words: unwaxed, unwayed
8693642 spells the words: toxemia, toxemic
8694733 spells the words: unwiped, unwired
8695377 spells the words: toyless, vowless
8695453 spells the words: towlike, toylike
8696385 spells the words: townful, unwoful
8696626 spells the words: townman, unwoman
8696633 spells the words: unwooed, unzoned
8722824 spells the words: trabuch, upcatch
8724633 spells the words: trained, trainee
8726466 spells the words: uramino, uranion
8726837 spells the words: tranter, upcover
8742253 spells the words: triable, tribble
8746279 spells the words: trinary, urinary
8746489 spells the words: Trinity, trinity
8746538 spells the words: trinket, triolet
8747363 spells the words: trireme, triseme
8747826 spells the words: Tristam, Tristan
8748486 spells the words: tritium, trivium
8748674 spells the words: Triumph, triumph
8762487 spells the words: Trochus, trochus
8768737 spells the words: trouper, trouser
8768837 spells the words: trotter, trouter
8782537 spells the words: trucker, uptaker
8786635 spells the words: trummel, trunnel
8787737 spells the words: trusser, usurper
8792737 spells the words: upwards, uswards
8854283 spells the words: Vulgate, vulgate
8867426 spells the words: Utopian, utopian
8875474 spells the words: Turkish, tuskish
9255464 spells the words: walking, walling
9255666 spells the words: Walloon, walloon
9262624 spells the words: yamamai, yamanai
9272824 spells the words: waratah, Wasatch
9273243 spells the words: wardage, yardage
9273464 spells the words: warding, yarding
9273626 spells the words: wardman, wareman, yardman
9274626 spells the words: washman, Washoan
9276464 spells the words: warming, warning
9276474 spells the words: warmish, warnish
9277464 spells the words: wapping, warping, yapping
9277474 spells the words: waspish, yappish
9283737 spells the words: waterer, waverer
9288273 spells the words: wattape, zattare
9292455 spells the words: waxbill, waybill
9292473 spells the words: waxbird, waybird
9299333 spells the words: waxweed, yawweed
9325849 spells the words: Wealthy, wealthy
9328437 spells the words: weather, yeather
9355464 spells the words: welling, yelling
9378376 spells the words: western, yestern
9425464 spells the words: whaling, wicking
9435337 spells the words: wielder, yielder
9443337 spells the words: whidder, whiffer
9447537 spells the words: whirler, whisker
9447539 spells the words: whirley, whiskey
9447737 spells the words: whipper, whisper
9447738 spells the words: whippet, whirret
9447766 spells the words: whirroo, Whisson
9447853 spells the words: whirtle, whistle
9455437 spells the words: willier, willies
9462464 spells the words: wincing, zincing
9463767 spells the words: Windsor, winesop
9473626 spells the words: wireman, wiseman
9474427 spells the words: Xiphias, xiphias
9474487 spells the words: Xiphius, Ziphius
9633537 spells the words: woffler, yodeler
9663538 spells the words: woodlet, zonelet
22233642 spells the words: Academic, academic
22243642 spells the words: cachemia, cachemic
22243942 spells the words: cachexia, cachexic
22254263 spells the words: backgame, backhand
22266476 spells the words: babooism, Baconism
22268243 spells the words: accouche, babouche, cabotage
22283742 spells the words: bacteria, bacteric
22285463 spells the words: acauline, baculine
22389542 spells the words: acetylic, baetylic
22463842 spells the words: Achmetha, acinetic
22474737 spells the words: bagpiper, bagpipes
22476642 spells the words: achromia, achromic
22522274 spells the words: Calabari, calabash
22526337 spells the words: balander, calander
22526372 spells the words: balandra, Calandra
22526429 spells the words: balangay, calangay
22526483 spells the words: balanite, calamite
22535377 spells the words: baleless, calfless
22535464 spells the words: baldling, calfling
22535483 spells the words: Bakelite, bakelite
22536377 spells the words: ableness, baldness
22588466 spells the words: ablution, abluvion
22627426 spells the words: Cambrian, Canarian
22639675 spells the words: bandwork, canework
22647837 spells the words: bangster, banister, canister
22662786 spells the words: abomasum, Cammarum
22664842 spells the words: aconitia, aconitic
22683737 spells the words: banterer, canterer
22722272 spells the words: barabara, caracara
22723779 spells the words: barberry, carberry
22734426 spells the words: Cardigan, cardigan
22735377 spells the words: baseless, careless, caseless
22735453 spells the words: bardlike, baselike, cardlike
22736368 spells the words: basement, casement
22736377 spells the words: bareness, baseness
22739333 spells the words: capeweed, caseweed
22739676 spells the words: careworn, caseworm
22743437 spells the words: abridger, basifier
22743486 spells the words: Acridium, basidium
22745422 spells the words: Basilica, basilica
22746373 spells the words: Cashmere, cashmere
22746673 spells the words: bargoose, cargoose
22765463 spells the words: Caroline, caroline
22765649 spells the words: acrology, barology
22766425 spells the words: acromial, baronial
22766493 spells the words: baronize, caponize
22772542 spells the words: Bassalia, carpalia
22772747 spells the words: Bassaris, Capparis
22773552 spells the words: Caprella, Capsella
22774286 spells the words: Capsicum, capsicum
22774323 spells the words: capsheaf, Capsidae
22774673 spells the words: capshore, Cassiope
22782253 spells the words: cartable, castable
22782446 spells the words: Capuchin, capuchin
22787253 spells the words: basurale, cartsale
22846476 spells the words: actinism, bathmism
22848283 spells the words: activate, cavitate
22872253 spells the words: abusable, causable
22873385 spells the words: abuseful, causeful
22885392 spells the words: Cattleya, cattleya
23243486 spells the words: aecidium, cecidium
23254766 spells the words: beakiron, beckiron
23272463 spells the words: bearbind, bearbine
23332833 spells the words: addebted, adfected, affected
23374448 spells the words: affright, bedright
23559463 spells the words: bellwind, bellwine
23588268 spells the words: adjutant, adjuvant
23633428 spells the words: Benedict, benedict
23648833 spells the words: admitted, admittee
23652646 spells the words: Benjamin, benjamin
23683353 spells the words: bemuddle, bemuffle
23727426 spells the words: aerarian, Afrasian
23728466 spells the words: aeration, ceration
23732766 spells the words: bereason, cerebron
23742542 spells the words: cephalic, Cerialia
23742668 spells the words: Bergamot, bergamot
23754637 spells the words: Berliner, beslimer
23765483 spells the words: aerolite, cerolite
23773637 spells the words: Bessemer, bessemer
23784323 spells the words: Cervidae, Cestidae
23828766 spells the words: betatron, bevatron
23837243 spells the words: afterage, beverage
23862283 spells the words: aduncate, advocate
23866426 spells the words: Aftonian, cetonian
23872742 spells the words: Cetraria, cetraric
23962642 spells the words: adynamia, adynamic
24228466 spells the words: bibation, cibation
24233929 spells the words: chafewax, chaffwax
24264323 spells the words: Agamidae, Chamidae, Chanidae
24273766 spells the words: chaperno, chaperon
24274837 spells the words: chapiter, Charites
24278478 spells the words: Chartist, chartist
24337459 spells the words: cheepily, cheerily
24363742 spells the words: agenesia, agenesic
24378246 spells the words: cherubim, cherubin
24466884 spells the words: bigmouth, chinotti
24477464 spells the words: chipping, chirping
24546483 spells the words: aikinite, bilinite
24628442 spells the words: agnathia, agnathic
24628466 spells the words: agnation, bination
24639333 spells the words: bindweed, bineweed
24663742 spells the words: chondric, Cimmeria
24673643 spells the words: chordoid, choreoid
24727442 spells the words: agraphia, agraphic
24733253 spells the words: Airedale, airedale
24739333 spells the words: aiseweed, birdweed
24766663 spells the words: agronome, chromone
25262253 spells the words: blamable, clambake
25265389 spells the words: blankety, clankety
25265464 spells the words: blanking, clanking
25265483 spells the words: albolite, blankite
25266464 spells the words: clamming, clanning
25277464 spells the words: clapping, clasping
25296637 spells the words: Alcyones, blazoner
25328464 spells the words: bleating, cleaving
25377463 spells the words: Aleppine, Clepsine
25437463 spells the words: Algerine, algerine
25462464 spells the words: blimbing, climbing
25463742 spells the words: akinesia, akinesic
25465464 spells the words: blinking, clinking
25537442 spells the words: allergia, allergic
25595283 spells the words: alkylate, allylate
25595363 spells the words: alkylene, allylene
25625243 spells the words: blockage, cloakage
25625464 spells the words: blocking, cloaking
25878379 spells the words: blustery, clustery
26227463 spells the words: amacrine, bocasine
26228587 spells the words: Cocculus, cocculus
26228742 spells the words: anacusia, anacusic
26243623 spells the words: ambience, ancience
26243629 spells the words: ambiency, anciency, coagency
26253735 spells the words: bockerel, cockerel
26259737 spells the words: analyser, analyses
26272483 spells the words: anapaite, boarcite
26276746 spells the words: ambrosin, Ambrosio
26277432 spells the words: Anapsida, Anaspida
26278283 spells the words: anastate, coaptate
26278464 spells the words: boasting, coasting
26284323 spells the words: Anatidae, Anatifae, boathead
26285377 spells the words: boatless, coatless
26288245 spells the words: boattail, coattail
26337483 spells the words: andesite, coderive
26374323 spells the words: codpiece, codshead
26378283 spells the words: coequate, coestate
26435366 spells the words: angeldom, Angeleno
26435422 spells the words: Angelica, angelica
26462253 spells the words: animable, coinable
26462542 spells the words: Animalia, animalic
26478766 spells the words: Angstrom, angstrom
26535453 spells the words: bolelike, cokelike
26536377 spells the words: boldness, coldness
26537529 spells the words: coldslaw, coleslaw
26539678 spells the words: bolewort, colewort
26547386 spells the words: Coliseum, coliseum
26553837 spells the words: colleter, Colletes
26553842 spells the words: Colletia, colletic
26567236 spells the words: Colorado, colorado
26586242 spells the words: Columbia, columbic
26622837 spells the words: combater, concaver
26626483 spells the words: Ammanite, Annamite
26634323 spells the words: bonehead, conehead
26635377 spells the words: bondless, boneless
26639642 spells the words: anodynia, anodynic
26643676 spells the words: boniform, coniform
26652253 spells the words: bookable, cookable
26655377 spells the words: bookless, cookless
26657467 spells the words: bookshop, cookshop
26657666 spells the words: bookroom, cookroom
26665377 spells the words: boomless, boonless
26666483 spells the words: Ammonite, ammonite
26676863 spells the words: compound, consound
26677442 spells the words: amorphia, amorphic
26677473 spells the words: comprise, conspire
26687483 spells the words: contrite, contrive
26693642 spells the words: anoxemia, anoxemic
26725483 spells the words: copalite, cosalite
26746742 spells the words: amphoric, copiopia
26773642 spells the words: copremia, copremic
26783883 spells the words: coquette, corvette
26784553 spells the words: Coquille, coquille
26785283 spells the words: ansulate, copulate
26836268 spells the words: cotenant, covenant
26846275 spells the words: antimark, antimask
26846669 spells the words: antimony, antinomy
26846687 spells the words: Antinous, covinous
26847837 spells the words: antiquer, antistes
26872687 spells the words: amurcous, couscous
26873883 spells the words: amusette, bourette
26878379 spells the words: courtepy, courtesy
26886633 spells the words: bottomed, cottonee
26886637 spells the words: bottomer, cottoner
26923779 spells the words: boxberry, cowberry
26925442 spells the words: coxalgia, coxalgic
26962537 spells the words: bowmaker, boxmaker
27223426 spells the words: Arcadian, arcadian
27234323 spells the words: Aradidae, braehead
27243676 spells the words: archform, arciform
27264682 spells the words: Araminta, Craniota
27265626 spells the words: arboloco, crankman
27286483 spells the words: braunite, bravoite
27287886 spells the words: arbustum, bratstvo
27288742 spells the words: Apaturia, Arcturia
27293474 spells the words: crawfish, crayfish
27295464 spells the words: brawling, crawling
27362742 spells the words: Arenaria, asemasia
27384736 spells the words: brethren, brevipen
27426476 spells the words: Arianism, Asianism
27444859 spells the words: arightly, brightly
27478283 spells the words: aristate, cristate
27623929 spells the words: Broadway, broadway
27665483 spells the words: bromlite, brookite
27674323 spells the words: armpiece, crophead
27674842 spells the words: apositia, apositic
27677446 spells the words: aporphin, cropshin
27682433 spells the words: crotched, crouched
27732737 spells the words: appearer, appeaser
27737437 spells the words: asperger, Asperges
27737642 spells the words: aspermia, aspermic
27737733 spells the words: aspersed, assessed, assessee
27737767 spells the words: aspersor, assessor
27737837 spells the words: arrester, asserter
27737867 spells the words: arrestor, assertor
27744633 spells the words: assigned, assignee
27766283 spells the words: arsonate, assonate
27767483 spells the words: apposite, arrosive
27827426 spells the words: Aquarian, aquarian
27837425 spells the words: apterial, arterial, asterial
27837426 spells the words: Artesian, artesian
27837466 spells the words: Asterion, asterion
27837643 spells the words: apteroid, asteroid
27843642 spells the words: asthenia, asthenic
27872326 spells the words: Astraean, astraean
27874464 spells the words: brushing, crushing
27926476 spells the words: Aryanism, Bryanism
28243642 spells the words: Auchenia, auchenia
28526842 spells the words: Atlantic, atlantic
28554323 spells the words: bulkhead, bullhead, Bullidae
28692623 spells the words: avowance, buoyance
28724363 spells the words: Atragene, atragene
28742852 spells the words: Auricula, auricula
28767426 spells the words: Aurorian, Burnsian
28767442 spells the words: atrophia, atrophic
28773359 spells the words: cursedly, cussedly
28774253 spells the words: bursicle, curricle
28842476 spells the words: Atticism, atticism
28842493 spells the words: Atticize, atticize
28864277 spells the words: Autoharp, autoharp
28864476 spells the words: Autogiro, autogiro
29256737 spells the words: Cyclopes, cyclopes
29256742 spells the words: cyclopia, Cyclopic
29625464 spells the words: axmaking, cymbling
29646433 spells the words: awninged, azoimide
29942363 spells the words: Cyzicene, cyzicene
32285687 spells the words: fabulous, faculous
32468464 spells the words: fagoting, fainting
32526637 spells the words: falconer, Falcones
32562842 spells the words: Dalmatic, dalmatic
32639678 spells the words: damewort, Danewort
32662537 spells the words: Damocles, fanmaker
32785263 spells the words: eastland, fastland
32867483 spells the words: favorite, favosite
32965453 spells the words: dawnlike, fawnlike
33236377 spells the words: deadness, deafness
33332837 spells the words: defeater, effecter
33332867 spells the words: defector, effector
33337368 spells the words: deferent, efferent
33356937 spells the words: deflower, efflower
33358368 spells the words: defluent, effluent
33387466 spells the words: defusion, effusion
33737833 spells the words: deserted, deserved
33737837 spells the words: deserter, deserver
33744633 spells the words: designed, designee
33764847 spells the words: dermitis, desmitis
33772833 spells the words: depraved, ferrated
33773837 spells the words: depreter, ferreter
33822833 spells the words: educated, educatee
33828466 spells the words: eduction, fetation
34223842 spells the words: diabetic, diacetic
34272673 spells the words: diascope, diascord
34276842 spells the words: dicrotic, fibrotic
34277432 spells the words: Diapsida, diarrhea
34286642 spells the words: diatomic, diatonic
34289643 spells the words: dictynid, dictyoid
34432837 spells the words: eggeater, figeater
34474355 spells the words: eggshell, figshell
34588466 spells the words: dilution, diluvion
34632253 spells the words: findable, fineable
34638742 spells the words: dimetria, dimetric, dineuric
34692742 spells the words: Dimyaria, dimyaric
34725453 spells the words: disalike, disclike
34732628 spells the words: fireboat, firecoat
34732867 spells the words: director, disfavor
34745453 spells the words: dishlike, fishlike
34745464 spells the words: dishling, fishling
34756742 spells the words: diplopia, diplopic
35328466 spells the words: ejection, election, flection
35328483 spells the words: ejective, elective
35382437 spells the words: Fletcher, fletcher
35673623 spells the words: Florence, florence
36265336 spells the words: embolden, encolden
36333737 spells the words: dodderer, fodderer
36367733 spells the words: endorsed, endorsee
36374323 spells the words: Emesidae, endpiece
36423779 spells the words: Dogberry, dogberry
36477663 spells the words: dogproof, fogproof
36542467 spells the words: Dolichos, dolichos
36627253 spells the words: emmarble, enmarble
36635453 spells the words: domelike, fondlike
36646425 spells the words: dominial, Dominick
36679273 spells the words: doorward, dooryard
36687673 spells the words: footrope, footsore
36689255 spells the words: footwalk, footwall
36732665 spells the words: dopebook, forecool
36734263 spells the words: foregame, forehand
36734663 spells the words: foregone, forehood, forehoof
36737278 spells the words: forepart, forepast
36737837 spells the words: dopester, forestep, forester
36739276 spells the words: forewarm, forewarn
36756933 spells the words: employed, employee
36765533 spells the words: enrolled, enrollee
36787377 spells the words: fortress, fostress
36946377 spells the words: dowiness, doziness, foxiness, foziness
37226642 spells the words: Draconic, draconic
37246626 spells the words: dragoman, drainman
37265546 spells the words: Franklin, franklin
37272253 spells the words: drapable, erasable
37277464 spells the words: drapping, frapping
37422537 spells the words: dribbler, Ericales, fribbler
37426542 spells the words: epibolic, epicolic
37436372 spells the words: Ephemera, ephemera
37437426 spells the words: Ephesian, Friesian
37443642 spells the words: epigenic, Erigenia
37455464 spells the words: drilling, frilling
37486642 spells the words: epitomic, epitonic
37654259 spells the words: frolicky, frolicly
37766483 spells the words: epsomite, essonite
37828466 spells the words: equation, eruction
37843742 spells the words: Estheria, esthesia
37846283 spells the words: equinate, estimate
37848243 spells the words: estivage, fruitage
37848478 spells the words: equitist, fruitist
38247663 spells the words: euchrome, euchrone, fuchsone
38379626 spells the words: Everyman, everyman
38446742 spells the words: Ethiopia, Ethiopic
38465649 spells the words: ethology, etiology
38556377 spells the words: dullness, fullness
38635377 spells the words: fumeless, fundless
38642733 spells the words: dungaree, dungbred
38667489 spells the words: dumosity, fumosity
38669687 spells the words: Euonymus, Evonymus
38746642 spells the words: euphonia, euphonic
38746742 spells the words: euphoria, euphoric
39272442 spells the words: dyarchic, Exarchic
39273837 spells the words: excreter, excretes
39728542 spells the words: dysbulia, dysbulic
39776342 spells the words: dyspneic, Dyssodia
42522842 spells the words: Galactia, galactic
42536377 spells the words: haleness, halfness
42546687 spells the words: halimous, halinous
42556929 spells the words: Galloway, galloway
42632255 spells the words: gameball, handball
42634653 spells the words: handhold, handhole
42635377 spells the words: gameless, handless
42635453 spells the words: gamelike, handlike
42637663 spells the words: gamesome, handsome
42647837 spells the words: gangster, ganister
42664225 spells the words: Hannibal, iconical
42733637 spells the words: gardener, hardener
42736476 spells the words: haremism, Ibsenism
42766642 spells the words: harmonia, harmonic
42832253 spells the words: hateable, haveable
42835377 spells the words: gateless, gaudless, hateless, haveless
42835625 spells the words: gavelock, havelock
42862537 spells the words: hatmaker, havocker
42935377 spells the words: gazeless, hazeless
43237245 spells the words: headrail, headsail
43583842 spells the words: Helvetia, Helvetic
43638749 spells the words: Genetrix, genetrix
43646542 spells the words: hemiolia, hemiolic
43646687 spells the words: geminous, hemionus
43646742 spells the words: hemiopia, hemiopic
43652879 spells the words: geolatry, idolatry
43663687 spells the words: gemmeous, idoneous
43674663 spells the words: Geophone, geophone
43726486 spells the words: Geranium, geranium
43728422 spells the words: Hepatica, hepatica
43762642 spells the words: Germania, Germanic, germanic
43763426 spells the words: Herodian, herodian
43763742 spells the words: Gesneria, gesneria
43763842 spells the words: Hermetic, hermetic
43764625 spells the words: Germinal, germinal
43764663 spells the words: Hermione, herohood
43765453 spells the words: germlike, herolike
43773742 spells the words: Hesperia, Hesperic
43773743 spells the words: Hesperid, hesperid
43794663 spells the words: Gerygone, gerygone
43823742 spells the words: hetaeria, hetaeric
44237642 spells the words: Hibernia, Hibernic
44462642 spells the words: gigmania, gigmanic
44735464 spells the words: girdling, hireling
44772642 spells the words: Hispania, Hispanic
45326464 spells the words: gleaming, gleaning
45923742 spells the words: Glyceria, glyceric
45926642 spells the words: Glyconic, glyconic
46244637 spells the words: imaginer, imagines
46285464 spells the words: gnatling, goatling
46332833 spells the words: indebted, infected
46336833 spells the words: indented, indentee
46342626 spells the words: Indiaman, Indianan
46378425 spells the words: inertial, infrugal
46387483 spells the words: indurite, infusive
46532253 spells the words: holdable, holeable
46535377 spells the words: goldless, holeless
46537626 spells the words: holdsman, Inkerman
46546377 spells the words: holiness, inkiness
46635377 spells the words: homeless, hoodless, hoofless
46635453 spells the words: goodlike, homelike, hoodlike, hooflike
46636377 spells the words: goneness, goodness
46637663 spells the words: gonesome, goodsome, homesome
46639678 spells the words: homewort, honewort, hoodwort
46643486 spells the words: gonidium, Ionidium
46666642 spells the words: Gnomonia, gnomonic
46668973 spells the words: gonotype, homotype
46735377 spells the words: hopeless, hoseless
46737837 spells the words: impester, inserter
46766642 spells the words: hormonic, insomnia
46767837 spells the words: horopter, importer, imposter
46774733 spells the words: gossipee, inspired
46774737 spells the words: gossiper, inspirer
46776327 spells the words: gospodar, hospodar
46837739 spells the words: interrex, intersex
46837867 spells the words: invertor, investor
46846283 spells the words: intimate, invinate
46873385 spells the words: gourdful, houseful
47243642 spells the words: ischemia, ischemic
47277464 spells the words: grasping, grassing
47283626 spells the words: grateman, graveman
47683537 spells the words: groveler, isoteles
47686642 spells the words: isotonia, isotonic
48376739 spells the words: Guernsey, guernsey
48662537 spells the words: gummaker, gunmaker
48782253 spells the words: gustable, hurtable
48785377 spells the words: gustless, hurtless
48962642 spells the words: Guzmania, guzmania
49373642 spells the words: hydremia, hydremic
49662742 spells the words: gymnasia, gymnasic
49725442 spells the words: hypalgia, hypalgic
49764325 spells the words: gyroidal, hypogeal
49783742 spells the words: hysteria, hysteric
52459273 spells the words: jailward, jailyard, kailyard
52539273 spells the words: kaleyard, lakeward
52637426 spells the words: Jamesian, Kanesian
52637547 spells the words: landskip, landslip
52643676 spells the words: Janiform, laniform
52644323 spells the words: Lamiidae, Laniidae
52644623 spells the words: Lamiinae, Laniinae
52726273 spells the words: lapboard, larboard
52726637 spells the words: Japanner, japanner
52846476 spells the words: Latinism, latinism
53235377 spells the words: leadless, leafless
53239675 spells the words: leadwork, leafwork
53272253 spells the words: leapable, leasable
53687426 spells the words: Lemurian, lemurian
53823642 spells the words: leucemia, leucemic
53826837 spells the words: Levanter, levanter
53847283 spells the words: ketipate, levirate
53853642 spells the words: leukemia, leukemic
53978663 spells the words: Jewstone, keystone
54236733 spells the words: licensed, licensee
54552253 spells the words: killable, killcalf
54623759 spells the words: Kimberly, limberly
54635377 spells the words: limeless, lineless
54642473 spells the words: kingbird, lingbird
54645464 spells the words: jingling, kingling
54646377 spells the words: liminess, lininess
54652253 spells the words: kinkable, linkable
54668973 spells the words: Linotype, linotype
54676377 spells the words: jimpness, limpness
54727426 spells the words: Liparian, liparian
54759273 spells the words: kirkward, kirkyard
54782253 spells the words: liquable, listable
54843642 spells the words: lithemia, lithemic
54844283 spells the words: lithiate, litigate
54885474 spells the words: kittlish, littlish
56228466 spells the words: jobation, lobation, location
56235377 spells the words: loadless, lobeless
56235463 spells the words: Joceline, lobeline
56285283 spells the words: lobulate, loculate
56285673 spells the words: lobulose, loculose
56426637 spells the words: Johannes, johannes
56636377 spells the words: loneness, loofness
56735377 spells the words: lordless, loreless
57287483 spells the words: kraurite, krausite
58565463 spells the words: juloline, kukoline
58628466 spells the words: junction, lunation
62335463 spells the words: Madeline, madeline
62455377 spells the words: mailless, nailless
62463742 spells the words: magnesia, magnesic
62466542 spells the words: Magnolia, magnolia
62467678 spells the words: mainport, mainpost
62545483 spells the words: Malikite, nakhlite
62635377 spells the words: maneless, nameless
62637253 spells the words: mandrake, namesake
62684772 spells the words: Mantispa, mantissa
62723552 spells the words: Marcella, marcella
62726426 spells the words: Maranham, Maranhao
62726842 spells the words: marantic, narcotia, narcotic
62742676 spells the words: naricorn, nasicorn
62743676 spells the words: napiform, nariform, nasiform
62748463 spells the words: Maritime, maritime
62755453 spells the words: marllike, masklike
62765366 spells the words: Napoleon, napoleon
62766483 spells the words: Maronite, Masonite, masonite, nasonite
62774542 spells the words: Marsilia, Massilia
62827249 spells the words: navarchy, octarchy
62837425 spells the words: material, maverick
62843676 spells the words: natiform, naviform
62887283 spells the words: maturate, obturate
62887359 spells the words: maturely, obtusely
62887464 spells the words: maturing, naturing
62887474 spells the words: maturish, obtusish
62887489 spells the words: maturity, obtusity
63255377 spells the words: mealless, neckless
63335377 spells the words: meedless, needless
63335464 spells the words: meddling, needling
63343825 spells the words: Medieval, medieval
63665649 spells the words: menology, oenology
63683642 spells the words: neotenia, neotenic
63767663 spells the words: merosome, mesosome
63822652 spells the words: Metabola, metabola
63874847 spells the words: metritis, neuritis
64244426 spells the words: Michigan, michigan
64554273 spells the words: milliard, milliare
64586642 spells the words: Miltonia, Miltonic
64638483 spells the words: mimetite, Ninevite
64663837 spells the words: mhometer, ohmmeter
64667377 spells the words: Minoress, minoress
64667483 spells the words: mimosite, Minorite
64727729 spells the words: misarray, misassay
64786824 spells the words: mistouch, misvouch
66245489 spells the words: mobility, nobility
66325489 spells the words: modality, nodality
66346587 spells the words: Modiolus, modiolus
66385283 spells the words: modulate, nodulate
66473883 spells the words: moirette, noisette
66623476 spells the words: monadism, nomadism
66627249 spells the words: monarchy, nomarchy
66647842 spells the words: monistic, nomistic
66655453 spells the words: monklike, nooklike
66663242 spells the words: Monoecia, Onondaga
66664369 spells the words: monogeny, nomogeny
66664726 spells the words: monogram, nomogram
66665649 spells the words: monology, nomology
66667245 spells the words: monorail, moonsail
66668433 spells the words: moontide, noontide
66675263 spells the words: moorland, nonplane
66675283 spells the words: nonplate, omoplate
66676527 spells the words: nonpolar, nonsolar
66724225 spells the words: Mosaical, mosaical
66728466 spells the words: moration, noration
66765377 spells the words: mornless, normless
66765649 spells the words: morology, nosology
66778486 spells the words: Mosquito, mosquito
66825442 spells the words: notalgia, notalgic
66828466 spells the words: notation, novation
66828483 spells the words: notative, novative
66828679 spells the words: motatory, novatory
66835377 spells the words: moteless, moveless, noteless
66846625 spells the words: motional, notional
67436825 spells the words: Oriental, oriental
68243676 spells the words: muciform, nubiform, nuciform
68372253 spells the words: overable, overbake
68372273 spells the words: overbase, overcape, overcard, overcare
68372569 spells the words: overblow, overcloy
68372645 spells the words: overboil, overcoil
68372653 spells the words: overbold, overcold
68372665 spells the words: overbook, overcook, overcool
68372769 spells the words: overbrow, overcrow
68372855 spells the words: overbulk, overcull
68373325 spells the words: overdeal, overdeck
68373327 spells the words: overdear, overfear
68373663 spells the words: overdome, overdone, overfond
68374264 spells the words: overgang, overhang
68374327 spells the words: overheap, overhear
68374353 spells the words: overheld, overidle
68374875 spells the words: overhurl, overhusk
68375233 spells the words: overjade, overlade
68375283 spells the words: overlate, overlave
68375323 spells the words: overlead, overleaf
68375337 spells the words: overkeep, overleer
68375425 spells the words: overkick, overlick
68375463 spells the words: overkind, overline
68375464 spells the words: overking, overling
68375683 spells the words: overloud, overlove
68376275 spells the words: overmark, overmarl, overmask
68377253 spells the words: overrake, oversale
68377278 spells the words: overpart, overpast
68377283 spells the words: mudspate, overrate, oversave
68377337 spells the words: overpeer, overseer
68377425 spells the words: overpick, oversick
68377433 spells the words: override, overrife, overside
68377468 spells the words: overriot, overshot
68377473 spells the words: overripe, overrise
68377547 spells the words: overskip, overslip
68377569 spells the words: overplow, overslow
68377587 spells the words: overplus, overslur
68377625 spells the words: oversoak, oversock
68377653 spells the words: overpole, oversold
68377663 spells the words: mudproof, overroof
68377687 spells the words: overpour, oversour
68377833 spells the words: overpuff, overrude, overruff
68378663 spells the words: mudstone, overtone
68379327 spells the words: overwear, overyear
68639642 spells the words: otodynia, otodynic
68742283 spells the words: muricate, musicate
68772253 spells the words: mussable, nursable
68773538 spells the words: murrelet, nurselet
68828466 spells the words: mutation, nutation
68872468 spells the words: outpaint, outsaint
68874337 spells the words: outrider, outsider
68874448 spells the words: outright, outsight
69258742 spells the words: oxaluria, oxaluric
69283742 spells the words: Mycteria, mycteric
69286642 spells the words: myatonia, myatonic
69686642 spells the words: myotomic, myotonia, myotonic
69986242 spells the words: oxytocia, oxytocic
72222842 spells the words: Sabbatia, sabbatia, Sabbatic, sabbatic
72224642 spells the words: Rabbinic, rabbinic
72224687 spells the words: scabinus, scabious
72246426 spells the words: Pacinian, Sabinian
72252253 spells the words: packable, scalable
72255377 spells the words: packless, rackless, sackless
72276646 spells the words: Sabromin, sabromin
72277464 spells the words: scarping, scarring
72285687 spells the words: pabulous, rabulous, sabulous
72335464 spells the words: paddling, saddling
72435377 spells the words: pageless, rageless
72437447 spells the words: pageship, sageship
72446283 spells the words: paginate, saginate
72455377 spells the words: railless, sailless
72463687 spells the words: Schoenus, schoenus
72465377 spells the words: painless, rainless
72487463 spells the words: pagurine, sciurine
72487643 spells the words: paguroid, sciuroid
72537626 spells the words: Palesman, salesman
72552342 spells the words: Palladia, palladia, palladic
72554282 spells the words: Palliata, palliata
72563886 spells the words: palmetto, palmetum
72567426 spells the words: Salopian, salopian
72569663 spells the words: palmwood, salmwood
72572253 spells the words: palpable, palpacle
72582867 spells the words: Saltator, saltator
72627486 spells the words: ranarium, samarium
72633642 spells the words: pandemia, pandemic
72635377 spells the words: paneless, sandless
72635464 spells the words: paneling, sandling
72636377 spells the words: sameness, saneness
72642533 spells the words: panicked, panicled
72643676 spells the words: ramiform, raniform
72646642 spells the words: Panionia, Panionic
72672437 spells the words: rampager, scorcher
72686642 spells the words: scotomia, scotomic
72686742 spells the words: scotopia, scotopic
72688474 spells the words: Scottish, scoutish
72723353 spells the words: paraffle, scraffle
72726373 spells the words: paramere, paramese
72743489 spells the words: rapidity, sapidity
72743542 spells the words: parhelia, parhelic
72743837 spells the words: pargeter, parietes, scriever
72767642 spells the words: parosmia, parosmic
72768643 spells the words: parotoid, scrounge
72772253 spells the words: parsable, passable
72773642 spells the words: sapremia, sapremic
72774476 spells the words: Parsiism, Sapphism
72776837 spells the words: parroter, passover
72784253 spells the words: partible, particle
72786377 spells the words: pastness, raptness
72824379 spells the words: patchery, savagery
72826478 spells the words: Satanist, satanist
72835377 spells the words: rateless, sateless
72836368 spells the words: pavement, ratement
72846283 spells the words: patinate, ravinate
72846459 spells the words: ravingly, savingly
72846493 spells the words: patinize, satinize
72857867 spells the words: Sculptor, sculptor
72876763 spells the words: pauropod, sauropod
72883637 spells the words: pattener, rattener
72926637 spells the words: rawbones, sawbones
73223779 spells the words: peaberry, seaberry
73236473 spells the words: readmire, rebemire
73255377 spells the words: peakless, reckless, sealless
73255453 spells the words: peaklike, seallike
73264537 spells the words: reboiler, recoiler
73266337 spells the words: reconfer, seconder
73275464 spells the words: pearling, rearling
73276633 spells the words: reasoned, seasoned
73276637 spells the words: reasoner, seasoner
73277378 spells the words: rearrest, reassert
73278253 spells the words: peastake, seaquake
73286725 spells the words: pectoral, rectoral, sectoral
73328359 spells the words: pedately, sedately
73332253 spells the words: reefable, seedcake
73332473 spells the words: reedbird, seedbird
73335377 spells the words: reedless, seedless
73335453 spells the words: reedlike, seedlike
73335464 spells the words: peddling, reedling, seedling
73337626 spells the words: reddsman, redesman, seedsman
73346368 spells the words: pediment, sediment
73352253 spells the words: peelable, reelable
73374663 spells the words: peerhood, seerhood
73377447 spells the words: peership, seership
73382464 spells the words: reducing, seducing
73468378 spells the words: reinvert, reinvest
73524426 spells the words: Pelagian, pelagian
73527442 spells the words: pelargic, Pelasgic
73527737 spells the words: relapper, relapser
73532833 spells the words: selected, selectee
73532867 spells the words: rejector, selector
73567476 spells the words: pejorism, pelorism
73582433 spells the words: selvaged, selvagee
73634253 spells the words: pendicle, rendible
73643323 spells the words: semidead, semideaf
73643463 spells the words: semidine, semifine
73643676 spells the words: remiform, reniform, semiform
73646453 spells the words: remingle, semimild
73648368 spells the words: penitent, renitent
73662537 spells the words: penmaker, Pennales
73665649 spells the words: penology, semology
73673385 spells the words: penseful, senseful
73682253 spells the words: pentacle, rentable
73722537 spells the words: repacker, reracker
73727283 spells the words: reparate, separate
73727478 spells the words: rescript, Serapist
73735537 spells the words: repeller, reseller
73736837 spells the words: repenter, resenter
73737833 spells the words: reserved, reservee
73743268 spells the words: Sergeant, sergeant
73743376 spells the words: periderm, peridesm
73744323 spells the words: Sepiidae, Sesiidae
73744633 spells the words: resigned, resignee
73762629 spells the words: pernancy, sernamby
73766283 spells the words: peronate, resonate
73766486 spells the words: peponium, peronium
73767837 spells the words: reporter, resorter
73776633 spells the words: personed, responde
73778523 spells the words: Serpulae, serpulae
73782253 spells the words: restable, servable
73784225 spells the words: peptical, septical
73784367 spells the words: Servidor, servidor
73788586 spells the words: septulum, sertulum
73836268 spells the words: retenant, revenant
73836337 spells the words: retender, revender, reveneer
73843676 spells the words: retiform, setiform
73865837 spells the words: revolter, revolver
73882253 spells the words: pettable, settable
74227426 spells the words: picarian, sicarian
74232473 spells the words: ricebird, shadbird
74245426 spells the words: Sicilian, sicilian
74252253 spells the words: pickable, shakable
74264424 spells the words: Shanghai, shanghai
74272253 spells the words: shapable, sharable
74274733 spells the words: Pharisee, pharisee
74327464 spells the words: shearhog, shearing
74335464 spells the words: piddling, riddling, sideling
74336377 spells the words: piedness, rifeness
74337626 spells the words: sheepman, sidesman
74339473 spells the words: shedwise, sidewipe, sidewise
74374323 spells the words: pierhead, Pieridae
74448385 spells the words: rightful, sightful
74462537 spells the words: pigmaker, signaler
74464537 spells the words: shingler, shingles
74466379 spells the words: shimmery, shinnery
74477464 spells the words: shipping, shirring
74479273 spells the words: shipward, shipyard
74559676 spells the words: pillworm, silkworm
74635377 spells the words: rimeless, rindless, shoeless
74642253 spells the words: ringable, singable
74643676 spells the words: piniform, rimiform
74644323 spells the words: ringhead, Simiidae
74647837 spells the words: ringster, sinister
74649255 spells the words: ringwalk, ringwall
74662253 spells the words: pinnacle, sinnable
74662537 spells the words: pinmaker, rimmaker
74666476 spells the words: simonism, Sinonism
74666478 spells the words: Simonist, simonist
74677464 spells the words: shopping, sinsring
74677663 spells the words: pinproof, sinproof
74686742 spells the words: photopia, photopic
74735377 spells the words: pipeless, sireless
74735453 spells the words: pipelike, ripelike
74736464 spells the words: ripening, sirening
74746642 spells the words: siphonia, siphonic
74845377 spells the words: pithless, pitiless
74884323 spells the words: Pittidae, Sittidae
75247837 spells the words: plaister, slaister
75262437 spells the words: plancher, plancier
75268246 spells the words: Plantago, plantain
75268464 spells the words: planting, slanting
75283385 spells the words: plateful, slateful
75283538 spells the words: platelet, slavelet
75283737 spells the words: platerer, slaverer
75286642 spells the words: Platonic, Slavonic
75288464 spells the words: platting, slatting
75292253 spells the words: playable, slayable
75335464 spells the words: skeeling, sleeking
75444833 spells the words: plighted, slighted
75444837 spells the words: plighter, slighter
75465464 spells the words: skinking, slinking
75466464 spells the words: skimming, skinning
75477379 spells the words: skippery, slippery
75477463 spells the words: slipshod, slipshoe
75477464 spells the words: skipping, slipping
75488537 spells the words: skittler, skittles
75688379 spells the words: plottery, slottery
75688464 spells the words: plotting, slotting
75844464 spells the words: plugging, slugging
75845453 spells the words: pluglike, sluglike
75862379 spells the words: plumbery, slumbery
75874459 spells the words: plushily, slushily
76235377 spells the words: roadless, robeless
76252929 spells the words: Rockaway, rockaway, soakaway
76253837 spells the words: pocketer, rocketer
76255377 spells the words: rockless, sockless
76255464 spells the words: rockling, smalling
76259333 spells the words: pockweed, rockweed
76259663 spells the words: pockwood, rockwood
76275377 spells the words: snapless, soapless
76278464 spells the words: roasting, smarting
76279333 spells the words: snapweed, soapweed
76279663 spells the words: snapwood, soapwood
76279678 spells the words: snapwort, soapwort
76385464 spells the words: poetling, softling
76387447 spells the words: poetship, softship
76526337 spells the words: Polander, solander
76527486 spells the words: Solarium, solarium
76527493 spells the words: polarize, solarize
76534323 spells the words: polehead, Soleidae
76535377 spells the words: poleless, soleless
76543246 spells the words: Solidago, solidago
76552253 spells the words: pollable, rollable
76554642 spells the words: pollinia, pollinic, Rollinia
76566426 spells the words: Polonian, Solonian
76593642 spells the words: polyemia, polyemic
76596742 spells the words: polyopia, polyopic
76597673 spells the words: polypore, polypose
76598669 spells the words: polytomy, polytony
76598742 spells the words: polyuria, polyuric
76625464 spells the words: smocking, snobling
76626842 spells the words: romantic, sonantic
76639273 spells the words: Romeward, roofward
76639473 spells the words: roofwise, somewise
76668459 spells the words: smoothly, snootily
76685377 spells the words: rootless, sootless
76685453 spells the words: rootlike, sootlike
76692255 spells the words: Snowball, snowball
76725463 spells the words: Rosalind, Rosaline
76726663 spells the words: Rosamond, Sorbonne
76734323 spells the words: rosehead, sorehead
76735377 spells the words: popeless, roseless
76735453 spells the words: popelike, porelike, ropelike, roselike
76746377 spells the words: poriness, ropiness, rosiness
76746459 spells the words: poringly, posingly
76748466 spells the words: position, sopition
76767425 spells the words: rosorial, sororial
76767489 spells the words: porosity, sorority
76782253 spells the words: portable, postable, sortable
76782259 spells the words: portably, sortably
76784653 spells the words: porthole, posthole
76785283 spells the words: populate, rosulate
76785377 spells the words: portless, postless
76785687 spells the words: populous, porulous
76788433 spells the words: Portugee, postvide
76789273 spells the words: postward, postyard
76824664 spells the words: Souchong, souchong
76828466 spells the words: potation, rotation
76828483 spells the words: potative, rotative
76828679 spells the words: potatory, rotatory
76833537 spells the words: snuffler, snuffles
76844379 spells the words: roughdry, smuggery, snuggery
76844464 spells the words: roughing, soughing
76844474 spells the words: roughish, smuggish, snuggish
76846377 spells the words: smugness, snugness
76863243 spells the words: poundage, soundage
76863464 spells the words: pounding, rounding, sounding
76884766 spells the words: Southron, southron
77265464 spells the words: pranking, spanking
77272947 spells the words: Sparaxis, sparaxis
77275464 spells the words: sparking, sparling
77324687 spells the words: precious, specious
77325464 spells the words: speaking, specking
77332867 spells the words: predator, prefator, prefavor
77362825 spells the words: prenatal, prenaval
77363342 spells the words: premedia, premedic
77374273 spells the words: preshape, preshare
77386483 spells the words: preunite, prevogue
77424686 spells the words: Sphagnum, sphagnum
77462377 spells the words: princeps, princess
77464339 spells the words: Spinifex, spinifex
77472253 spells the words: prisable, spiracle
77494642 spells the words: sphygmia, sphygmic
77622867 spells the words: proactor, probator
77676747 spells the words: Prosopis, psorosis
77683433 spells the words: protegee, proteide
77688464 spells the words: spotting, spouting
77828462 spells the words: Squatina, squatina
77832537 spells the words: squeaker, squealer
77833623 spells the words: Prudence, prudence
77845943 spells the words: spuilyie, spuilzie
77863552 spells the words: Prunella, prunella
77977663 spells the words: pryproof, spyproof
78224642 spells the words: Puccinia, succinic
78237263 spells the words: suberane, subframe
78237283 spells the words: quadrate, suberate
78237825 spells the words: pubertal, quadrual, subequal
78245453 spells the words: staglike, suchlike
78253735 spells the words: puckerel, suckerel
78254226 spells the words: Publican, publican
78255464 spells the words: puckling, ruckling, stalking, stalling, suckling
78262642 spells the words: submania, submanic
78263633 spells the words: stamened, standoff
78273542 spells the words: Stapelia, stapelia
78275464 spells the words: stapling, starling
78276527 spells the words: subpolar, subsolar
78278385 spells the words: quartful, startful
78278537 spells the words: startler, subruler
78287466 spells the words: quatrino, Quatsino, staurion
78295453 spells the words: quaylike, rubylike
78326464 spells the words: steaming, steaning
78335464 spells the words: puddling, ruffling, steeling
78337243 spells the words: steerage, suffrage
78337474 spells the words: queerish, steepish
78355483 spells the words: Stellite, stellite
78375464 spells the words: Sterling, sterling
78422537 spells the words: quibbler, stibbler
78455252 spells the words: Quillaja, quillaja
78455464 spells the words: quilling, stilling
78546459 spells the words: pulingly, rulingly
78574879 spells the words: pulpitry, sulphury
78625464 spells the words: rumbling, stocking
78642476 spells the words: Stoicism, stoicism
78645377 spells the words: quoilers, rungless
78662253 spells the words: punnable, runnable, stonable, summable
78672253 spells the words: pumpable, storable, sunscald
78675377 spells the words: pumpless, rumpless, stopless
78677663 spells the words: punproof, runproof, sunproof
78726637 spells the words: strammer, stranner
78735894 spells the words: Streltzi, streltzi
78736377 spells the words: pureness, sureness
78743336 spells the words: stridden, striffen
78743676 spells the words: pupiform, puriform
78766842 spells the words: strontia, strontic
78775359 spells the words: purplely, supplely
78775423 spells the words: supplice, surplice
78776737 spells the words: purposer, supposer
78777473 spells the words: supprise, surprise
78783925 spells the words: purveyal, surveyal
78783967 spells the words: purveyor, surveyor
78833464 spells the words: studding, stuffing
78874359 spells the words: putridly, stupidly
79443486 spells the words: Pygidium, pygidium
79477464 spells the words: swirring, swissing
79625442 spells the words: synalgia, synalgic
79626442 spells the words: synangia, synangic
79633742 spells the words: Synedria, synedria
79637442 spells the words: synergia, synergic
79643642 spells the words: pyogenic, syngenic
79686642 spells the words: syntomia, syntonic
82266483 spells the words: taconite, Ubbonite
82454262 spells the words: tahkhana, taikhana
82635377 spells the words: tameless, vaneless
82647842 spells the words: tanistic, Taoistic
82682542 spells the words: Tantalic, tantalic
82735453 spells the words: tapelike, vaselike
82735463 spells the words: tapeline, Vaseline
82739675 spells the words: tapework, vasework
82743676 spells the words: variform, vasiform
82782742 spells the words: Tartaric, tartaric
82786377 spells the words: tartness, vastness
82868464 spells the words: taunting, vaunting
82886637 spells the words: tattooer, tautomer
83272253 spells the words: tearable, teasable
83272259 spells the words: tearably, teasably
83536275 spells the words: Telemark, telemark
83538973 spells the words: Teletype, teletype
83626837 spells the words: tenanter, Venantes
83633737 spells the words: tenderer, veneerer
83637687 spells the words: temerous, tenesmus
83682253 spells the words: tentable, tentacle
83685377 spells the words: tentless, ventless
83728742 spells the words: veratria, veratric
83743489 spells the words: tepidity, veridity
83764625 spells the words: terminal, verminal
83764637 spells the words: terminer, verminer
83773552 spells the words: terrella, tessella
83773725 spells the words: tesseral, vesperal
83774253 spells the words: terrible, versicle
83782542 spells the words: Vestalia, vestalia
83784253 spells the words: testicle, vertible
83784279 spells the words: tertiary, vestiary
83788426 spells the words: Vesuvian, vesuvian
83886642 spells the words: Teutonia, Teutonic
84287652 spells the words: Victrola, victrola
84365649 spells the words: theology, tidology
84395377 spells the words: thewless, viewless
84543437 spells the words: uglifier, vilifier
84635377 spells the words: timeless, vineless
84639273 spells the words: timeward, vineyard
84748464 spells the words: thriving, visiting
84842253 spells the words: tithable, vitiable
86222533 spells the words: unbacked, uncabled
86225533 spells the words: unbalked, uncalked, uncalled
86227733 spells the words: unbarred, uncapped
86227833 spells the words: unbasted, uncarted, uncarved
86228464 spells the words: unacting, unbating
86228466 spells the words: unaction, vocation
86228483 spells the words: unactive, vocative
86228733 spells the words: unabused, uncaused
86235433 spells the words: unbelied, unbelief
86235527 spells the words: umbellar, uncellar
86242733 spells the words: unbiased, unchased
86252933 spells the words: unclawed, unclayed
86256733 spells the words: unalmsed, unclosed
86262833 spells the words: uncoated, uncocted
86262933 spells the words: unamazed, uncoaxed
86264533 spells the words: unboiled, uncoiled
86266533 spells the words: unbooked, uncooked, uncooled
86272833 spells the words: unbraved, uncrated
86283333 spells the words: unbudded, unbuffed, uncuffed
86285533 spells the words: unbulled, unculled
86286933 spells the words: unavowed, unbuoyed
86287433 spells the words: unburied, unbusied
86287733 spells the words: uncupped, uncursed, uncusped
86324533 spells the words: uneagled, unfailed
86326633 spells the words: undammed, unfanned
86327633 spells the words: undarned, unearned, unfarmed
86332733 spells the words: undecree, unfeared
86335833 spells the words: undelude, undelved, unfelted
86337243 spells the words: underage, underaid, underbid
86337269 spells the words: underbox, underboy
86337529 spells the words: underjaw, underlay
86337543 spells the words: underlid, underlie
86337729 spells the words: underpay, undersaw
86337759 spells the words: underply, undersky
86337843 spells the words: undertie, unfervid
86339626 spells the words: toddyman, toffyman
86347433 spells the words: undished, unfished
86352833 spells the words: unelated, unflated
86352933 spells the words: unflawed, unflayed
86362533 spells the words: undocked, unfoaled
86372733 spells the words: undraped, unerased
86385533 spells the words: undulled, unfulled
86387733 spells the words: unfurred, unfussed
86422533 spells the words: ungabled, unhacked
86425833 spells the words: unhalted, unhalved
86426433 spells the words: unganged, unhanged
86427433 spells the words: ungashed, unhashed
86427733 spells the words: ungassed, unharped, unhasped
86432733 spells the words: ungeared, unheaped
86432833 spells the words: unheated, unheaved
86447733 spells the words: unhipped, unhissed
86466325 spells the words: unimodal, uninodal
86466333 spells the words: unhooded, unhoofed
86466359 spells the words: ungoodly, unhomely
86468733 spells the words: unhoused, uninured
86472833 spells the words: ungrated, ungraved
86472933 spells the words: ungrayed, ungrazed
86487533 spells the words: unhurled, unhusked
86527733 spells the words: unjarred, unlapped, unlapsed
86532333 spells the words: unleaded, unleafed
86532733 spells the words: unleared, unleased
86537268 spells the words: Tolerant, tolerant
86542533 spells the words: unkicked, unlicked
86564433 spells the words: unjogged, unlogged
86624533 spells the words: unmailed, unnailed
86627533 spells the words: unmarked, unmarled, unmasked
86627733 spells the words: unmapped, unmarred, unmassed, unnapped
86628466 spells the words: tonation, unnation
86628873 spells the words: unmature, unnature
86632733 spells the words: unneaped, unneared
86645533 spells the words: unmilked, unmilled
86646233 spells the words: unminced, unnimbed
86647733 spells the words: unmissed, unnipped
86648464 spells the words: tonguing, vomiting
86664726 spells the words: tomogram, tonogram
86666733 spells the words: unmoored, unnoosed
86667733 spells the words: unmopped, unmossed
86668464 spells the words: unmoving, unnoting
86683353 spells the words: unmuddle, unmuffle
86685474 spells the words: tootlish, unmulish
86722533 spells the words: unpacked, unracked, unsabled, unsacked, unscaled
86722733 spells the words: unsabred, unsacred, unscared
86724533 spells the words: unrailed, unsailed
86724733 spells the words: unpaired, unraised
86725833 spells the words: unsalted, unsalved
86726733 spells the words: unramped, unscored
86727733 spells the words: unparsed, unpassed, unrasped, unsapped
86727833 spells the words: unparted, unpasted
86728464 spells the words: unpaving, unraving, unsaving
86732533 spells the words: unpealed, unpecked, unrecked, unsealed
86732733 spells the words: unreaped, unreared, unseared
86732766 spells the words: unreason, unseason
86733333 spells the words: unreefed, unseeded
86733533 spells the words: unpeeled, unreeled
86737833 spells the words: unrested, unserved
86739464 spells the words: unsewing, unsexing
86742533 spells the words: unpicked, unricked, unshaled
86742733 spells the words: unphased, unshaped, unshared
86743433 spells the words: Torified, unridged
86743833 spells the words: unrifted, unsifted
86746433 spells the words: unringed, unsinged
86746733 spells the words: unrinsed, unshored
86746833 spells the words: unrioted, unshoved
86747733 spells the words: unripped, unsipped
86752833 spells the words: unplated, unslated
86762533 spells the words: unrocked, unsoaked
86762538 spells the words: unpocket, unsocket
86762733 spells the words: unsnared, unsoaped
86763333 spells the words: unpodded, unrodded
86764533 spells the words: unroiled, unsmiled, unsoiled
86765533 spells the words: unpolled, unrolled
86766533 spells the words: unpooled, unsmoked
86767833 spells the words: unposted, unsorted
86768733 spells the words: unpoured, unroused, unsoured, unsoused
86768833 spells the words: unpotted, unrotted, unrouted, unsotted
86772933 spells the words: unprayed, unspayed
86774233 spells the words: unpriced, unspiced
86774359 spells the words: torpidly, torridly
86779464 spells the words: unprying, unspying
86782533 spells the words: unstaled, unsucked
86782833 spells the words: unstated, unstaved
86782933 spells the words: unquayed, unstayed
86783333 spells the words: unpuffed, unruffed
86786536 spells the words: unstoken, unstolen, unsunken
86786633 spells the words: unstoned, unsummed, unsunned
86786733 spells the words: unpumped, unstored
86786833 spells the words: unquoted, unstoved
86787433 spells the words: unpurged, unpushed, unrushed
86787733 spells the words: unpursed, unsupped
86788743 spells the words: unputrid, unstupid
86822533 spells the words: untabled, untacked
86827733 spells the words: untapped, untarred
86836333 spells the words: untended, unvended
86836833 spells the words: untented, unvented, unvenued
86837833 spells the words: untested, unvested
86864233 spells the words: untogaed, unvoiced
86867733 spells the words: untopped, untossed
86867743 spells the words: untorpid, untorrid
86925533 spells the words: unwalked, unwalled
86927359 spells the words: towardly, unwarely
86927633 spells the words: unwarmed, unwarned
86932633 spells the words: unweaned, unyeaned
86933333 spells the words: unwedded, unweeded
86962537 spells the words: toymaker, vowmaker
86965464 spells the words: townling, unyoking
87226478 spells the words: Urbanist, urbanist
87266464 spells the words: tramming, upcoming
87277478 spells the words: Trappist, trappist
87423642 spells the words: uricemia, uricemic
87424462 spells the words: Trichina, trichina
87437426 spells the words: Usherian, usherian
87446642 spells the words: Trigonia, trigonic
87455486 spells the words: Trillium, trillium
87463742 spells the words: trimeric, trimesic
87465649 spells the words: triology, tsiology
87466325 spells the words: trimodal, trinodal
87475263 spells the words: triplane, upisland
87484286 spells the words: Triticum, triticum
87486642 spells the words: Tritonia, Tritonic
87496625 spells the words: trizomal, trizonal
87624242 spells the words: Trochaic, trochaic
87624454 spells the words: Trochili, trochili
87686942 spells the words: urotoxia, urotoxic
87877464 spells the words: trussing, usurping
88252463 spells the words: Tuckahoe, tuckahoe
88724637 spells the words: turbiner, turbines
88755453 spells the words: Turklike, tusklike
89465537 spells the words: twinkler, twinkles
89746642 spells the words: typhonia, Typhonic, typhonic
89765649 spells the words: typology, tyrology
92557433 spells the words: walkrife, walkside
92735377 spells the words: wardless, wareless
92737626 spells the words: wardsman, yardsman
92737666 spells the words: wardroom, wareroom
92775453 spells the words: warplike, wasplike
92837464 spells the words: watering, wavering
92923779 spells the words: waxberry, wayberry
92962537 spells the words: waxmaker, waymaker
93256879 spells the words: zealotry, zealousy
93265464 spells the words: weanling, yeanling
93773546 spells the words: Zeppelin, zeppelin
94335464 spells the words: wheeling, wifeling
94475464 spells the words: whipking, whirling, whisking
94623779 spells the words: wimberry, winberry
94632255 spells the words: windball, wineball
94635377 spells the words: windless, wineless
94635453 spells the words: windlike, winelike
94726642 spells the words: zirconia, zirconic
94735453 spells the words: wirelike, wiselike
94739333 spells the words: wireweed, wiseweed
94744643 spells the words: xiphioid, ziphioid
94746377 spells the words: wiriness, wishness
94782742 spells the words: Wistaria, wistaria
94783742 spells the words: Wisteria, wisteria
96535377 spells the words: wolfless, yokeless
96535453 spells the words: woldlike, wolflike
96632463 spells the words: woodbind, woodbine
96635377 spells the words: woodless, zoneless
96635453 spells the words: woodlike, zonelike
96637433 spells the words: woodshed, woodside
96637833 spells the words: Woodruff, woodruff
96639273 spells the words: woodward, woodware, woodyard
96657225 spells the words: woolpack, woolsack
96666642 spells the words: zoonomia, zoonomic
97325385 spells the words: wreakful, wreckful
98837242 spells the words: ytterbia, ytterbic
99432225 spells the words: Zwieback, zwieback
222546283 spells the words: acclimate, acclinate
222636633 spells the words: abandoned, abandonee
223347459 spells the words: baddishly, caddishly
223828466 spells the words: abduction, acetation
224658742 spells the words: acholuria, acholuric
225227373 spells the words: Calabrese, calabrese
225264837 spells the words: Balanites, Calamites
225346873 spells the words: bakehouse, cakehouse
227223426 spells the words: Barbadian, Cascadian
227227426 spells the words: Barbarian, barbarian
227248282 spells the words: Caraguata, caraguata
227274323 spells the words: Acrasieae, Carapidae
227326273 spells the words: baseboard, cardboard
227362537 spells the words: cardmaker, casemaker
227546459 spells the words: barkingly, carkingly
227627225 spells the words: barmbrack, barnbrack
227649623 spells the words: Acrogynae, acrogynae
227663837 spells the words: acrometer, barometer
227664225 spells the words: Aaronical, acronical
227746373 spells the words: cassimere, Cassinese
227766233 spells the words: carronade, cassonade
227847842 spells the words: baptistic, casuistic
228256442 spells the words: catalogia, catalogic
228286642 spells the words: catatonia, catatonic
228728483 spells the words: acurative, causative
232735377 spells the words: beardless, ceaseless
233356937 spells the words: bedflower, beeflower
233534323 spells the words: addlehead, Adeleidae
233589466 spells the words: adfluxion, affluxion
233734448 spells the words: affreight, befreight
234472684 spells the words: Adigranth, adigranth
235378463 spells the words: Celestine, celestine
235585643 spells the words: Celluloid, celluloid
236368483 spells the words: bementite, cementite
236828787 spells the words: Centaurus, centaurus
236837464 spells the words: centering, centesimi
237223687 spells the words: cepaceous, ceraceous
237647274 spells the words: aerograph, cerograph
237662629 spells the words: aeromancy, ceromancy
238374263 spells the words: aftergame, afterhand
238377278 spells the words: afterpart, afterpast
242339333 spells the words: chafeweed, chaffweed
242522842 spells the words: agalactia, agalactic
242746833 spells the words: charioted, chariotee
242796626 spells the words: chapwoman, charwoman
244252729 spells the words: Chickasaw, chickasaw
244536377 spells the words: agileness, childness
245427942 spells the words: Bilharzia, bilharzic
245428466 spells the words: biliation, ciliation
245628527 spells the words: bilobular, bilocular
246246642 spells the words: cinchonia, cinchonic
246664625 spells the words: agnominal, binominal
247257463 spells the words: Cisalpine, cisalpine
247627463 spells the words: bismarine, cismarine
247668463 spells the words: Bipontine, bisontine
248454933 spells the words: civilized, civilizee
252253474 spells the words: blackfish, clackdish
252253668 spells the words: Blackfoot, blackfoot
252883737 spells the words: blatterer, clatterer
253276377 spells the words: blearness, clearness
253286742 spells the words: Alectoria, alectoria
256255377 spells the words: cloakless, clockless
256255453 spells the words: blocklike, clocklike
256257666 spells the words: cloakroom, clockroom
256259473 spells the words: cloakwise, clockwise
256636377 spells the words: aloneness, aloofness
258323273 spells the words: Bluebeard, bluebeard
262265483 spells the words: anabolite, coccolite
262276842 spells the words: anabrotic, anacrotic
262347742 spells the words: anadipsia, anadipsic
262376242 spells the words: anaerobia, anaerobic
262543742 spells the words: analgesia, analgesic
262596742 spells the words: amblyopia, amblyopic
262746742 spells the words: anaphoria, anaphoric
262767426 spells the words: Ambrosian, ambrosian
262784742 spells the words: anarthria, anarthric
262946459 spells the words: amazingly, coaxingly
263876742 spells the words: ametropia, ametropic
264354225 spells the words: Angelical, angelical
264542493 spells the words: Anglicize, anglicize
264628466 spells the words: amination, animation, cognation
265862463 spells the words: Columbine, columbine
265956842 spells the words: ankylotia, ankylotic
266246283 spells the words: bombinate, combinate
266337737 spells the words: conferrer, confesser
266347633 spells the words: confirmed, confirmee
266348873 spells the words: comfiture, confiture
266422559 spells the words: comically, conically
266546873 spells the words: cookhouse, coolhouse
266547459 spells the words: bookishly, cookishly
266628466 spells the words: commation, connation
266632833 spells the words: annodated, connected
266646377 spells the words: bonniness, cooniness
266668483 spells the words: commotive, connotive
266724687 spells the words: anorchous, conscious
266727737 spells the words: compasser, compasses
266837833 spells the words: contestee, converted
266837837 spells the words: contester, converter
266852742 spells the words: Annularia, Conularia
267362537 spells the words: cordmaker, coremaker
267537626 spells the words: Bosjesman, bosjesman
267546377 spells the words: boskiness, corkiness
267843676 spells the words: corviform, costiform
267868669 spells the words: aortotomy, costotomy
268466642 spells the words: antimonic, antinomic
268472242 spells the words: anthracia, anthracic, antirabic
268476527 spells the words: antipolar, antisolar
268476742 spells the words: anthropic, bothropic
268478283 spells the words: antiquate, antistate
269533737 spells the words: boxkeeper, cowkeeper
269625464 spells the words: bowmaking, boxmaking
272466842 spells the words: Archontia, archontic
272537423 spells the words: Asclepiad, asclepiad
272623779 spells the words: cramberry, cranberry
272828466 spells the words: arctation, arcuation
272957663 spells the words: brawlsome, crawlsome
273628466 spells the words: arenation, cremation, crenation
274335377 spells the words: brideless, briefless
274336377 spells the words: asideness, briefness
274368463 spells the words: Argentine, argentine
274368466 spells the words: Argentino, argention
274635377 spells the words: brineless, crimeless
274826642 spells the words: Britannia, Britannic
274842476 spells the words: Briticism, criticism
276232746 spells the words: Broadbrim, broadbrim
276556642 spells the words: Apollonia, Apollonic
276634566 spells the words: Bromeikon, bromeikon
276786542 spells the words: Apostolic, apostolic
276925542 spells the words: Browallia, browallia
276969678 spells the words: brownwort, crownwort
277222242 spells the words: arracacha, Arracacia
277377466 spells the words: aspersion, assession
277377679 spells the words: aspersory, assessory
277378483 spells the words: arrestive, assertive
278364742 spells the words: Artemisia, artemisic
278476342 spells the words: arthrodia, arthrodic
278662436 spells the words: Brummagem, brummagem
278679425 spells the words: Brunswick, brunswick
278742253 spells the words: brushable, crushable
279552242 spells the words: asyllabia, asyllabic
279626542 spells the words: asymbolia, asymbolic
279674983 spells the words: bryophyte, cryophyte
282743842 spells the words: Aubrietia, aubrietia
282854323 spells the words: Cucujidae, Cuculidae
286642489 spells the words: atomicity, atonicity
286646459 spells the words: atoningly, cunningly
287268486 spells the words: Aurantium, aurantium
287425489 spells the words: burgality, curiality
287546377 spells the words: burliness, curliness
287624687 spells the words: atrochous, atrocious
287728833 spells the words: bursattee, bursautee
287729264 spells the words: burrawang, currawang
287828466 spells the words: curtation, curvation
287863426 spells the words: custodiam, custodian
287872542 spells the words: Australia, Australic
288537377 spells the words: butleress, cutleress
288643642 spells the words: autogenic, autohemic
288837287 spells the words: butterbur, buttercup
288837626 spells the words: butterman, cutterman
292567326 spells the words: Cyclopean, cyclopean
322745643 spells the words: Fabrikoid, fabrikoid
324652542 spells the words: echolalia, echolalic
326272363 spells the words: Damascene, damascene
327846459 spells the words: dartingly, fastingly
328434225 spells the words: Davidical, fatidical
332282433 spells the words: debauched, debauchee
332336464 spells the words: deadening, deafening
333328483 spells the words: defective, effective
333424368 spells the words: deficient, efficient
333528466 spells the words: deflation, efflation
333588486 spells the words: defluvium, effluvium
333589466 spells the words: defluxion, effluxion
335424687 spells the words: Delicious, delicious
336452623 spells the words: demijambe, demilance
336472253 spells the words: demiracle, demisable
337278873 spells the words: departure, depasture
337667483 spells the words: desmosite, fermorite
337846283 spells the words: deruinate, destinate, festinate
342746642 spells the words: diaphonia, diaphonic
342828466 spells the words: dictation, fictation
342866687 spells the words: diatomous, diatonous
343357442 spells the words: Didelphia, didelphic
343962642 spells the words: Didynamia, didynamic
347287737 spells the words: disburser, discusser
347846377 spells the words: dirtiness, fistiness
353282253 spells the words: ejectable, electable
363337464 spells the words: doddering, foddering
364727442 spells the words: engraphia, engraphic
366878255 spells the words: footstalk, footstall
367374448 spells the words: foreright, foresight
367378425 spells the words: forestial, forestick
367434323 spells the words: Dorididae, Empididae
367642283 spells the words: formicate, fornicate
367846377 spells the words: dortiness, emptiness
372252867 spells the words: Escalator, escalator
373624439 spells the words: Frenchify, frenchify
373624464 spells the words: drenching, frenching
374663837 spells the words: ergometer, eriometer
374726725 spells the words: Episcopal, episcopal
374763425 spells the words: epipodial, episodial
376746742 spells the words: esophoria, esophoric
376876742 spells the words: esotropia, esotropic
378482253 spells the words: equitable, fruitcake
378482583 spells the words: equivalue, equivalve
386646377 spells the words: dumminess, funniness
387466476 spells the words: euphonism, fusionism
387746377 spells the words: furriness, fussiness
387846377 spells the words: dustiness, fustiness
392357467 spells the words: Excelsior, excelsior
392437837 spells the words: Exchequer, exchequer
392646283 spells the words: examinate, exanimate
392724478 spells the words: Exarchist, exarchist
396742742 spells the words: exophasia, exophasic
396746742 spells the words: exophoria, exophoric
396876742 spells the words: exotropia, exotropic
397272742 spells the words: dyscrasia, dyscrasic
397638742 spells the words: dysmetria, dysneuria
397742442 spells the words: dysphagia, dysphagic
397742742 spells the words: dysphasia, dysphasic
397746642 spells the words: dysphonia, dysphonic
397746742 spells the words: dysphoria, dysphoric
397876749 spells the words: dystrophy, exstrophy
422373463 spells the words: gaberdine, haberdine
422482253 spells the words: habitable, habitacle
423654642 spells the words: gadolinia, gadolinic
425364225 spells the words: Galenical, galenical
426327238 spells the words: gamecraft, handcraft
427336464 spells the words: gardening, hardening
427647433 spells the words: garnished, garnishee
427746377 spells the words: gaspiness, gassiness, happiness, harshness
432766483 spells the words: Hebronite, hebronite
436288742 spells the words: hematuria, hematuric
436625278 spells the words: genoblast, hemoblast
437482623 spells the words: heritance, hesitance
437626489 spells the words: Germanity, germanity
437626493 spells the words: Germanize, germanize
437637426 spells the words: Gesnerian, Hermesian
438237478 spells the words: Hetaerist, hetaerist
439224673 spells the words: hexabiose, hexachord
439263742 spells the words: hexameric, Hexandria, hexandric
456946459 spells the words: glowingly, glozingly
462432253 spells the words: imageable, inaidable
462732843 spells the words: imbreathe, inbreathe
463477673 spells the words: gneissose, indispose
463786377 spells the words: ineptness, inertness
463874283 spells the words: indusiate, infuriate
465674263 spells the words: Holophane, holophane
465686642 spells the words: holotonia, holotonic
466326863 spells the words: homebound, hoofbound
466346377 spells the words: goofiness, hoofiness
466374323 spells the words: Homeridae, hoodsheaf
466396377 spells the words: goodyness, homeyness
466399663 spells the words: Honeywood, honeywood
466492253 spells the words: immixable, ionizable
466498873 spells the words: immixture, inmixture
466643642 spells the words: homogenic, ionogenic
466682942 spells the words: homotaxia, homotaxic
467278483 spells the words: impartite, impartive
467284368 spells the words: impatient, inpatient
467466426 spells the words: Gorgonian, gorgonian
467678863 spells the words: importune, impostume
467732473 spells the words: gorsebird, imprecise
467734663 spells the words: horsehood, horsehoof
467747464 spells the words: gossiping, inspiring
468368466 spells the words: intention, invention
468368483 spells the words: intentive, inventive
468376377 spells the words: governess, Inverness
468377653 spells the words: interpole, intersole
468378363 spells the words: intervene, invertend
468732628 spells the words: houseboat, housecoat
472347463 spells the words: Gradgrind, gradgrind
472775377 spells the words: graspless, grassless
472835377 spells the words: grateless, graveless
472839273 spells the words: graveward, graveyard
473946863 spells the words: grewhound, greyhound
474782483 spells the words: griquaite, gristbite
476776742 spells the words: isorropic, isosporic
483785464 spells the words: Guestling, guestling
486625464 spells the words: gummaking, gunmaking
486746377 spells the words: humpiness, ivoriness
487446459 spells the words: gushingly, hushingly
487838559 spells the words: gustfully, hurtfully
496263742 spells the words: Gynandria, gynandria
496627486 spells the words: gymnasium, hymnarium
497373642 spells the words: hyperemia, hyperemic
497374286 spells the words: Hypericum, hypericum
497376742 spells the words: hyperopia, hyperopic
497628542 spells the words: hypobulia, hypobulic
497643642 spells the words: hypogenic, hypohemia
497662642 spells the words: hypomania, hypomanic
497672673 spells the words: gyroscope, hyposcope
497674672 spells the words: Gyrophora, hypophora
497682942 spells the words: hypotaxia, hypotaxic
497684322 spells the words: Gyrotheca, hypotheca
497686642 spells the words: hypotonia, hypotonic
522624642 spells the words: Jacobinia, Jacobinic
522828466 spells the words: jactation, lactation
527746459 spells the words: jarringly, lapsingly
528286642 spells the words: katatonia, katatonic
533746459 spells the words: jeeringly, leeringly
538223642 spells the words: leucaemia, leucaemic
538268463 spells the words: Leucothoe, Levantine
543683742 spells the words: lienteria, lienteric
546223687 spells the words: limaceous, linaceous
547643642 spells the words: lipogenic, lipohemia
547746459 spells the words: kissingly, lispingly
548436377 spells the words: litheness, lividness
548468669 spells the words: lithotomy, lithotony
562852759 spells the words: jocularly, lobularly
562852833 spells the words: lobulated, loculated
563378663 spells the words: kneestone, lodestone
564266483 spells the words: Johannite, johannite
566278663 spells the words: knobstone, lomastome
586537366 spells the words: Junkerdom, junkerdom
586537476 spells the words: Junkerism, junkerism
586746377 spells the words: jumpiness, lumpiness
586746459 spells the words: jumpingly, lumpingly
622768663 spells the words: macrotome, macrotone
627268476 spells the words: mascotism, narcotism
627446283 spells the words: marginate, obsignate
627746377 spells the words: massiness, nappiness
627769474 spells the words: marrowish, narrowish
628368466 spells the words: obtention, obvention
633424625 spells the words: medicinal, officinal
634256742 spells the words: megalopia, megalopic
635263642 spells the words: melanemia, melanemic
635268742 spells the words: melanuria, melanuric
635488742 spells the words: melituria, melituric
635662642 spells the words: melomania, melomanic
635676342 spells the words: melopoeia, melopoeic
636666426 spells the words: Memnonian, neonomian
636746242 spells the words: neophobia, neophobic
636834642 spells the words: neoteinia, neoteinic
637233642 spells the words: Mesadenia, mesadenia
637368437 spells the words: Nepenthes, nepenthes
637484323 spells the words: Mesitidae, Neritidae
637746377 spells the words: merriness, messiness
638226542 spells the words: Metabolia, metabolic
638463478 spells the words: Methodist, methodist
638463493 spells the words: Methodize, methodize
638725442 spells the words: metralgia, neuralgia, neuralgic
638762353 spells the words: metrocele, neurocele
638764542 spells the words: neuroglia, neuroglic
638765649 spells the words: metrology, neurology
638766969 spells the words: metronymy, neuronymy
638768663 spells the words: metrotome, neurotome
638768669 spells the words: metrotomy, neurotomy
642768663 spells the words: microtome, microtone
644485377 spells the words: mightless, nightless
645537377 spells the words: milkeress, milleress
645537483 spells the words: Millerite, millerite, niklesite
645546873 spells the words: milkhouse, millhouse
645578663 spells the words: milkstone, millstone
645663837 spells the words: Nilometer, oilometer
647746377 spells the words: missiness, nippiness
647746459 spells the words: missingly, nippingly
662454279 spells the words: mobiliary, nobiliary
662845822 spells the words: Noctiluca, noctiluca
665377663 spells the words: moldproof, moleproof
666234225 spells the words: monadical, nomadical
666263742 spells the words: Monandria, monandric
666627229 spells the words: monocracy, nomocracy
666632426 spells the words: monoecian, Onondagan
666647274 spells the words: monograph, nomograph
666654448 spells the words: moonlight, noonlight
666674463 spells the words: monorhine, moonshine
666678663 spells the words: monostome, moonstone
666692737 spells the words: moonwards, noonwards
666729464 spells the words: nonpaying, nonsawing
667643642 spells the words: nosogenic, nosohemia
667825442 spells the words: nostalgia, nostalgic
672437842 spells the words: Orchestia, orchestic
672643626 spells the words: Orangeman, orangeman
672867426 spells the words: Oratorian, oratorian
677426476 spells the words: orphanism, Ossianism
677426493 spells the words: orphanize, Ossianize
678467632 spells the words: orthopnea, Orthopoda
683727333 spells the words: overbreed, overcreed
683727696 spells the words: overbrown, overcrown
683774448 spells the words: overright, oversight
683777663 spells the words: overprone, overproof
683777683 spells the words: overproud, overprove
683782537 spells the words: mudsucker, overtaker
686436687 spells the words: otogenous, ovogenous
686564478 spells the words: otologist, ovologist
686643676 spells the words: mummiform, nummiform
687268483 spells the words: Muscovite, muscovite
687546377 spells the words: murkiness, muskiness
688735433 spells the words: ottrelife, outrelief
696728442 spells the words: myopathia, myopathic
697478422 spells the words: Myristica, myristica
697842383 spells the words: Mysticete, mysticete
722242786 spells the words: Saccharum, saccharum
722496842 spells the words: pachyntic, pachyotia
722525684 spells the words: packcloth, sackcloth
722533474 spells the words: sablefish, scaldfish, scalefish
722562537 spells the words: packmaker, sackmaker
723353742 spells the words: Rafflesia, rafflesia
724368478 spells the words: Scientist, scientist
724377663 spells the words: rageproof, raidproof
724488279 spells the words: Sagittary, sagittary
724546459 spells the words: railingly, sailingly
724677663 spells the words: painproof, rainproof
724685377 spells the words: paintless, saintless
724685464 spells the words: saintling, scintling
724874323 spells the words: Paguridae, Sciuridae
725267673 spells the words: palampore, salampore
725376842 spells the words: sclerotia, sclerotic
725523486 spells the words: Palladium, palladium
725666642 spells the words: Salomonia, Salomonic
725743676 spells the words: palpiform, salpiform
725823672 spells the words: Salvadora, salvadora
725827726 spells the words: Salvarsan, salvarsan
725828466 spells the words: saltation, salvation
725828679 spells the words: saltatory, salvatory
726433746 spells the words: Sanhedrim, Sanhedrin
726735377 spells the words: scopeless, scoreless
726743676 spells the words: scopiform, scoriform
726753442 spells the words: pamplegia, panplegia
726824626 spells the words: Scotchman, scotchman
726846459 spells the words: pantingly, rantingly
726966842 spells the words: panzootia, panzootic
727228542 spells the words: parabulia, parabulic
727228742 spells the words: paracusia, paracusic
727234742 spells the words: Paradisia, paradisic
727253942 spells the words: paralexia, paralexic
727282437 spells the words: scratcher, scratches
727427786 spells the words: Sargassum, sargassum
727436377 spells the words: rapidness, sapidness
727478873 spells the words: Scripture, scripture
727684847 spells the words: parotitis, scrotitis
727746459 spells the words: passingly, raspingly
727765483 spells the words: saprolite, sassolite
727867425 spells the words: raptorial, sartorial
728355643 spells the words: patelloid, satelloid
728367272 spells the words: Ravensara, ravensara
728677663 spells the words: savorsome, scumproof
728728466 spells the words: pausation, scusation
728742426 spells the words: Patrician, patrician
728767632 spells the words: Pauropoda, Sauropoda
728837637 spells the words: patterner, sauternes
728876426 spells the words: Saturnian, saturnian
728876463 spells the words: Saturnine, saturnine
732377466 spells the words: recession, Secession, secession
732546377 spells the words: peakiness, peckiness
732547459 spells the words: peakishly, peckishly
732587466 spells the words: reclusion, seclusion
732587483 spells the words: reclusive, seclusive
732646377 spells the words: reaminess, seaminess
732668363 spells the words: recontend, reconvene
732668378 spells the words: recontest, reconvert
732766464 spells the words: reasoning, seasoning
732867425 spells the words: rectorial, sectorial
732872623 spells the words: recusance, securance
732877466 spells the words: recursion, recussion
733346377 spells the words: reediness, seediness
733348466 spells the words: reddition, reedition
733546459 spells the words: reekingly, reelingly
733824253 spells the words: reducible, seducible
733828466 spells the words: reduction, seduction
733828483 spells the words: reductive, seductive
735328466 spells the words: rejection, relection, selection
735328483 spells the words: rejective, selective
735843676 spells the words: peltiform, pelviform
736426642 spells the words: semicomic, semiconic
736477663 spells the words: semiprone, semiproof
736483623 spells the words: penitence, renitence
737272253 spells the words: reparable, separable
737272259 spells the words: reparably, separably
737347463 spells the words: peregrine, pereirine
737447274 spells the words: perigraph, serigraph
737463837 spells the words: perimeter, serimeter
737546377 spells the words: perkiness, peskiness
737625569 spells the words: Permalloy, permalloy
737648833 spells the words: permitted, permittee
737746478 spells the words: Perrinist, pessimist
737825463 spells the words: resublime, servaline
737828466 spells the words: septation, servation
737836237 spells the words: September, sequencer
737837837 spells the words: perverter, requester, sequester
737842489 spells the words: pepticity, septicity
737843676 spells the words: restiform, septiform
737845476 spells the words: reptilism, servilism
737845489 spells the words: reptility, servility
737846873 spells the words: pesthouse, resthouse
737877328 spells the words: resurrect, resuspect
737877663 spells the words: pestproof, restproof
737877673 spells the words: repurpose, resuppose
737885283 spells the words: septulate, servulate
738372253 spells the words: reverable, severable
738465283 spells the words: petiolate, reviolate
738472253 spells the words: Revisable, revisable
738658464 spells the words: revolting, revolving
742526437 spells the words: phalanger, phalanges
742553626 spells the words: pickleman, sickleman
742553642 spells the words: sicklemia, sicklemic
742726642 spells the words: Pharaonic, Picramnia
742735377 spells the words: phaseless, shapeless
742743642 spells the words: piarhemia, piarhemic
743354647 spells the words: riddlings, sidelings
743374323 spells the words: sheephead, sidepiece
743375377 spells the words: riderless, sheepless
744485377 spells the words: rightless, sightless
744526337 spells the words: Philander, philander
744628466 spells the words: sigmation, signation
745546377 spells the words: silkiness, silliness
746326463 spells the words: Rhodamine, rhodamine, rhodanine
746366483 spells the words: rhodonite, Simeonite
746446459 spells the words: ringingly, singingly
746477435 spells the words: Singspiel, singspiel
746628466 spells the words: phonation, pinnation
746646459 spells the words: pinningly, sinningly
746847842 spells the words: photistic, riotistic
746867828 spells the words: Photostat, photostat
746868759 spells the words: riotously, sinuously
746877663 spells the words: riotproof, shotproof
747746459 spells the words: rippingly, sippingly
752766342 spells the words: plasmodia, plasmodic
752835377 spells the words: plateless, slaveless
752835453 spells the words: platelike, slatelike, slavelike
752866426 spells the words: Platonian, Slavonian
752866476 spells the words: Platonism, Slavonism
752866493 spells the words: Platonize, Slavonize
752896742 spells the words: platyopia, platyopic
754773733 spells the words: skippered, slippered
758866426 spells the words: Plutonian, plutonian
758866486 spells the words: Plutonium, plutonium
762538385 spells the words: pocketful, socketful
762546377 spells the words: pockiness, rockiness, snakiness
762546459 spells the words: rockingly, soakingly
762723779 spells the words: snapberry, soapberry
762746459 spells the words: roaringly, snaringly, soaringly
763663837 spells the words: pneometer, podometer
763663879 spells the words: pneometry, podometry
763866642 spells the words: pneumonia, pneumonic
764373883 spells the words: Soiesette, soiesette
764835464 spells the words: rogueling, sniveling
765424833 spells the words: solicited, solicitee
765942642 spells the words: Polygamia, polygamic
765943642 spells the words: polygenic, polyhemia
765946642 spells the words: Polygonia, polygonic
765949642 spells the words: Polygynia, polygynic
765963742 spells the words: polymeria, polymeric, polynesic
765976642 spells the words: polysomia, polysomic
766723687 spells the words: Pompadour, pompadour
766746459 spells the words: rompingly, snoringly
766843737 spells the words: smotherer, sootherer
766846377 spells the words: rootiness, sootiness
767746377 spells the words: soppiness, sorriness
767749746 spells the words: porphyrin, Porphyrio
767846873 spells the words: porthouse, posthouse
767874337 spells the words: portsider, postrider
768632253 spells the words: poundcake, soundable
768635377 spells the words: poundless, soundless
768636377 spells the words: roundness, soundness
768746459 spells the words: pouringly, rousingly
768773883 spells the words: poussette, roussette
773228466 spells the words: preaction, precation
773228483 spells the words: preactive, precative
773255377 spells the words: speakless, speckless
773266537 spells the words: precooker, precooler
773328679 spells the words: predatory, prefatory
773333328 spells the words: predefeat, predefect
773586227 spells the words: prelumbar, speluncar
773668466 spells the words: premotion, prenotion
773729842 spells the words: presbytia, presbytic
773735328 spells the words: prereject, preselect
773736683 spells the words: preremote, preremove
773736825 spells the words: prerental, presental
773737678 spells the words: prereport, preresort
774232253 spells the words: priceable, spiceable, spicecake
774235377 spells the words: priceless, spiceless
774366366 spells the words: Sphenodon, sphenodon
774624737 spells the words: Principes, principes
774664323 spells the words: Prionidae, Spionidae
774667489 spells the words: primosity, spinosity
774685463 spells the words: primuline, printline
776228466 spells the words: proaction, probation
776263542 spells the words: Procoelia, procoelia
776636377 spells the words: proneness, proofness
776639587 spells the words: Spondylus, spondylus
776727478 spells the words: propapist, proscript
776728466 spells the words: proration, sporation
776732867 spells the words: prorector, prosector
776742747 spells the words: prophasis, psoriasis
776746642 spells the words: propinoic, propionic
776763425 spells the words: propodial, prosodial
778325464 spells the words: squeaking, squealing
778643676 spells the words: pruniform, spumiform
782245489 spells the words: stability, suability
782372368 spells the words: pubescent, rubescent
782725463 spells the words: starblind, subsaline
782743368 spells the words: subrident, subsident
782835377 spells the words: stateless, staveless
782846625 spells the words: stational, suctional
783346377 spells the words: puffiness, ruddiness
783359273 spells the words: steelware, steelyard
783376377 spells the words: queerness, steepness
783745359 spells the words: puerilely, sterilely
783745489 spells the words: puerility, sterility
783762537 spells the words: Pterocles, Quernales
784259675 spells the words: quickwork, stickwork
784372368 spells the words: quiescent, sugescent
786422559 spells the words: runically, stoically
786423687 spells the words: pumiceous, puniceous
786534653 spells the words: stokehold, stokehole
786639273 spells the words: stoneware, stoneyard
786646377 spells the words: rumminess, stoniness, sunniness
786646459 spells the words: punningly, runningly
786835377 spells the words: quoteless, stoveless
787264537 spells the words: strangler, strangles
787354894 spells the words: Strelitzi, strelitzi
787428466 spells the words: purgation, striation, striction
787428873 spells the words: striature, stricture
787446377 spells the words: rushiness, surginess
787446459 spells the words: pushingly, rushingly
787482642 spells the words: puritanic, Ruritania
787736337 spells the words: surrender, suspender
787738474 spells the words: puppetish, russetish
787787283 spells the words: purpurate, suppurate
787793668 spells the words: puppyfoot, pussyfoot
787924642 spells the words: strychnia, strychnic
788733437 spells the words: putrefier, stupefier
788743489 spells the words: putridity, stupidity
792467662 spells the words: Swainsona, swainsona
795837837 spells the words: Sylvester, sylvester
796337466 spells the words: Synedrion, synedrion
796337486 spells the words: Synedrium, synedrium
796337642 spells the words: pyodermia, pyodermic
796678478 spells the words: Synoptist, synoptist
796746642 spells the words: symphonia, symphonic
797264337 spells the words: pyramider, pyramides
797264342 spells the words: pyramidia, pyramidic
797384786 spells the words: Pyrethrum, pyrethrum
797464325 spells the words: pyrgoidal, syringeal
822246486 spells the words: Vaccinium, vaccinium
824686642 spells the words: vagotonia, vagotonic
825368463 spells the words: Valentine, valentine
825528466 spells the words: talkathon, vallation
825835377 spells the words: valueless, valveless
826266543 spells the words: Tambookie, tambookie
827362537 spells the words: tapemaker, vasemaker
827647437 spells the words: tarnisher, varnisher
827827493 spells the words: Tartarize, tartarize
827846377 spells the words: tastiness, vastiness
829567483 spells the words: Taylorite, taylorite
832867425 spells the words: tectorial, vectorial
835324742 spells the words: Telfairia, telfairic
837624268 spells the words: Termagant, termagant
837646283 spells the words: terminate, verminate
837742853 spells the words: verricule, versicule
837743437 spells the words: terrifier, versifier
837743676 spells the words: versiform, vespiform
838483742 spells the words: Vetiveria, vetiveria
843536483 spells the words: Thelemite, thelemite
843636742 spells the words: Theodoric, Theodosia
847336377 spells the words: threeness, tiredness
847366463 spells the words: threonine, vireonine
862327464 spells the words: unbearing, unceasing
862332253 spells the words: unaddable, unaffable
862384465 spells the words: umbethink, unbethink
862432253 spells the words: unaidable, unbidable
862527733 spells the words: unclasped, unclassed
862556933 spells the words: unallowed, unalloyed
862562533 spells the words: unblocked, uncloaked
862568833 spells the words: unblotted, unclotted
862637233 spells the words: unamerced, uncoerced
862767733 spells the words: uncropped, uncrossed
862769633 spells the words: unbrowned, uncrowned
862772933 spells the words: unarrayed, unassayed
862787433 spells the words: unbrushed, uncrushed
862866464 spells the words: unatoning, uncunning
863262433 spells the words: undamaged, unfancied
863282253 spells the words: undatable, uneatable
863296464 spells the words: undawning, unfawning
863332233 spells the words: undefaced, uneffaced
863343433 spells the words: undeified, unedified
863372665 spells the words: undercook, undercool
863374653 spells the words: underhold, underhole
863375463 spells the words: underkind, underline
863375464 spells the words: underking, underling
863377326 spells the words: underream, underseam
863377337 spells the words: underpeep, underpeer
863377433 spells the words: underside, unferried
863377653 spells the words: underpole, undersole
863377853 spells the words: underpuke, underrule
863378378 spells the words: undertest, undervest
863532833 spells the words: unejected, unelected
863672433 spells the words: unenraged, unforaged
863745533 spells the words: undrilled, unfrilled
863782833 spells the words: unequated, unfructed
863872253 spells the words: undupable, undurable
863932253 spells the words: undyeable, uneyeable
864727733 spells the words: ungrasped, ungrassed
864827426 spells the words: Unitarian, unitarian
864874464 spells the words: ungushing, unhushing
865277464 spells the words: unjarring, unlapsing
865863837 spells the words: voltmeter, volumeter
866262253 spells the words: unmanacle, unnamable
866682253 spells the words: unmovable, unnotable
866833533 spells the words: unmuddled, unmuffled
866899533 spells the words: unmuzzled, unnuzzled
867226483 spells the words: torbanite, toscanite
867233533 spells the words: unraffled, unsaddled
867246833 spells the words: unpainted, unsainted
867282253 spells the words: unratable, unsatable, unsavable
867282433 spells the words: unpatched, unravaged
867292253 spells the words: unpayable, unsayable
867325464 spells the words: unrecking, unsealing
867335464 spells the words: unreeling, unseeking
867338233 spells the words: unreduced, unseduced
867383733 spells the words: unrevered, unsevered
867384733 spells the words: unretired, unrevised
867425533 spells the words: unpickled, unsickled
867433533 spells the words: unriddled, unriffled
867444464 spells the words: unrigging, unsighing
867444833 spells the words: unrighted, unsighted
867444859 spells the words: unrightly, unsightly
867467533 spells the words: unpimpled, unrimpled
867468833 spells the words: unshotted, unshouted
867524833 spells the words: unplagued, unplaited
867526633 spells the words: unplanned, unslammed
867527433 spells the words: unplashed, unslashed
867532833 spells the words: unpleated, unsleaved
867546633 spells the words: unskimmed, unskinned
867568833 spells the words: unplotted, unslotted
867686333 spells the words: unpounded, unrounded, unsounded
867726533 spells the words: unpranked, unspanked
867743489 spells the words: torpidity, torridity
867746459 spells the words: toppingly, tossingly
867748833 spells the words: torpitude, unspitted
867768833 spells the words: unspotted, unspouted
867822533 spells the words: unstabled, unstacked
867823333 spells the words: unquadded, unquaffed, unstaffed
867825533 spells the words: unstalked, unstalled, unsuckled
867827833 spells the words: unstarted, unstarved
867833533 spells the words: unpuddled, unruddled, unruffled, unsteeled
867833733 spells the words: unsteeped, unsteered
867845833 spells the words: unquilted, unstilted
867877533 spells the words: unpurpled, unsuppled
867883333 spells the words: unstudded, unstuffed
868242253 spells the words: touchable, vouchable
868286833 spells the words: untaunted, unvaunted
868664833 spells the words: untongued, unvomited
868682433 spells the words: untouched, unvouched
868787733 spells the words: untrussed, unusurped
869283733 spells the words: unwatered, unwavered
869443642 spells the words: toxigenic, toxihemia
869447533 spells the words: unwhirled, unwhisked
869625464 spells the words: toymaking, vowmaking
869732533 spells the words: unwreaked, unwrecked
872678378 spells the words: transvert, transvest
874223642 spells the words: uricaemia, uricaemic
874254642 spells the words: triclinia, triclinic
874365486 spells the words: Trifolium, trifolium
874742742 spells the words: Triphasia, triphasic
874765463 spells the words: Tripoline, tripoline
876244587 spells the words: Trochilus, trochilus
882852742 spells the words: Tubularia, tubularia
885746483 spells the words: vulpinite, vulsinite
924637483 spells the words: Wagnerite, wagnerite
926846742 spells the words: Xanthopia, xanthopia
927726833 spells the words: warranted, warrantee
928377433 spells the words: watershed, waterside
928379676 spells the words: waterworm, waterworn
938456366 spells the words: Zeuglodon, zeuglodon
943532253 spells the words: wieldable, yieldable
944623779 spells the words: whimberry, whinberry
944678663 spells the words: whimstone, whinstone
944778255 spells the words: whipstalk, whipstall
944833668 spells the words: Whitefoot, whitefoot
944924437 spells the words: wigwagger, zigzagger
946323779 spells the words: windberry, wineberry
947444323 spells the words: Xiphiidae, Ziphiidae
966744542 spells the words: zoophilia, zoophilic
2226249642 spells the words: cacochymia, cacochymic
2226746642 spells the words: cacophonia, cacophonic
2238663642 spells the words: acetonemia, acetonemic
2272466747 spells the words: baragnosis, carcinosis
2273537759 spells the words: baselessly, carelessly, caselessly
2273625464 spells the words: cardmaking, casemaking
2274684426 spells the words: absinthian, Carinthian
2274828483 spells the words: capitative, caritative
2276726742 spells the words: acroscopic, baroscopic
2276744542 spells the words: basophilia, basophilic
2276746242 spells the words: acrophobia, basophobia
2279746642 spells the words: baryphonia, baryphonic
2282746742 spells the words: cataphoria, cataphoric
2284828466 spells the words: activation, cavitation
2288372253 spells the words: batterable, battercake
2332245489 spells the words: addability, affability
2374337687 spells the words: aeriferous, ceriferous
2376472749 spells the words: aerography, cerography
2376746242 spells the words: aerophobia, aerophobic
2433746377 spells the words: cheepiness, cheeriness, cheesiness
2454337687 spells the words: biliferous, ciliferous
2466266642 spells the words: cinnamomic, cinnamonic
2467662642 spells the words: choromania, choromanic
2476664726 spells the words: chromogram, chronogram
2476668263 spells the words: Cismontane, cismontane
2487249273 spells the words: churchward, churchyard
2488548442 spells the words: Bitulithic, bitulithic
2532846459 spells the words: bleatingly, cleavingly
2546524642 spells the words: algolagnia, algolagnic
2546647274 spells the words: climograph, clinograph
2559526463 spells the words: alkylamine, allylamine
2559528466 spells the words: alkylation, allylation
2562546873 spells the words: blockhouse, clockhouse
2562562537 spells the words: blockmaker, cloakmaker, clockmaker
2587837464 spells the words: blustering, clustering
2623588268 spells the words: coadjutant, coadjuvant
2637236368 spells the words: amercement, coercement
2638226542 spells the words: ametabolia, ametabolic
2644625278 spells the words: angioblast, angioclast
2649373642 spells the words: anhydremia, anhydremic
2656638742 spells the words: bolometric, colometric
2662877466 spells the words: concursion, concussion
2663356937 spells the words: boneflower, coneflower
2664225489 spells the words: comicality, conicality
2664337687 spells the words: comiferous, coniferous
2664364825 spells the words: anogenital, congenital
2668328466 spells the words: contection, convection
2668368466 spells the words: contention, convention
2668378483 spells the words: convertite, convertive
2668722833 spells the words: contracted, contractee
2674426542 spells the words: amphibolia, amphibolic
2677352833 spells the words: bosselated, correlated
2679226842 spells the words: Corybantic, corybantic
2682728422 spells the words: Antarctica, antarctica
2683626833 spells the words: covenanted, covenantee
2683626837 spells the words: Covenanter, covenanter
2684737746 spells the words: antipepsin, antisepsin
2687674673 spells the words: antrophore, antrophose
2688665377 spells the words: bottomless, cottonless
2694746377 spells the words: boyishness, coyishness
2722466742 spells the words: arabinosic, arachnopia
2724337687 spells the words: arciferous, asciferous
2728363883 spells the words: Cravenette, cravenette
2729546459 spells the words: brawlingly, crawlingly
2737236842 spells the words: Crescentia, crescentic
2738223687 spells the words: Cretaceous, cretaceous
2744483937 spells the words: Brighteyes, brighteyes
2773782253 spells the words: arrestable, assertable
2774984642 spells the words: arrhythmia, arrhythmic
2784265687 spells the words: aquicolous, arvicolous
2784366742 spells the words: asthenopia, asthenopic
2784725442 spells the words: arthralgia, arthralgic
2787242587 spells the words: Astragalus, astragalus
2842852742 spells the words: Avicularia, avicularia
2855432333 spells the words: bulkheaded, bullheaded
2877336377 spells the words: cursedness, cussedness
2888374323 spells the words: butterhead, cutterhead
2888664653 spells the words: buttonhold, buttonhole
2925673342 spells the words: cyclopedia, cyclopedic
3263356937 spells the words: Daneflower, fameflower
3264536368 spells the words: danglement, fanglement
3287663542 spells the words: ectromelia, ectromelic
3327828466 spells the words: deaquation, februation
3332232253 spells the words: defaceable, effaceable
3332236368 spells the words: defacement, effacement
3333284253 spells the words: defectible, effectible
3333285377 spells the words: defectless, effectless
3333646493 spells the words: defeminize, effeminize
3333783723 spells the words: defervesce, effervesce
3334243623 spells the words: deficience, efficience
3334243629 spells the words: deficiency, efficiency
3366836368 spells the words: denotement, denouement
3373783359 spells the words: desertedly, deservedly
3376672849 spells the words: dermopathy, desmopathy
3423357442 spells the words: Diadelphia, diadelphic
3428466279 spells the words: dictionary, fictionary
3472877466 spells the words: discursion, discussion
3472877483 spells the words: discursive, discussive
3474666437 spells the words: dishmonger, fishmonger
3474843742 spells the words: diphtheria, diphtheric
3483784253 spells the words: divertible, diverticle, divestible
3532842476 spells the words: Eleaticism, electicism
3532848359 spells the words: ejectively, electively
3532848489 spells the words: ejectivity, electivity
3547828466 spells the words: eliquation, flirtation
3627464323 spells the words: Encrinidae, encrinidae
3636366842 spells the words: endodontia, endodontic
3636742742 spells the words: endophasia, endophasic
3663876742 spells the words: emmetropia, emmetropic
3672436368 spells the words: enragement, foragement
3673786637 spells the words: forerunner, foresummer
3673927637 spells the words: forewarmer, forewarner
3686328466 spells the words: emundation, foundation
3724666233 spells the words: dragonnade, dragoonade
3726554642 spells the words: Franklinia, Franklinic
3742527842 spells the words: epiblastic, epiclastic
3769646459 spells the words: drowningly, frowningly
3784828466 spells the words: equitation, estivation
3822597887 spells the words: Eucalyptus, eucalyptus
3832366642 spells the words: eudaemonia, eudaemonic
3872245489 spells the words: dupability, durability
3972784742 spells the words: dysarthria, dysarthric
3978767442 spells the words: dystrophia, dystrophic
3987276527 spells the words: extrapolar, extrasolar
4263766359 spells the words: gamesomely, handsomely
4273362253 spells the words: gardenable, hardenable
4278725442 spells the words: gastralgia, gastralgic
227623742542 spells the words: acrocephalia, acrocephalic
22766342542 spells the words: acromegalia, acromegalic
23363286742 spells the words: adenectopia, adenectopic
23764727442 spells the words: aerographic, cerographic
23767445687 spells the words: aerophilous, cerophilous
25286468742 spells the words: albuminuria, albuminuric
255278668742 spells the words: alkaptonuria, alkaptonuric
25864337687 spells the words: alumiferous, aluniferous
263562527842 spells the words: ameloblastic, coeloblastic
269353623742542 spells the words: amyelencephalia, amyelencephalic
26967843642 spells the words: amyosthenia, amyosthenic
26968767442 spells the words: amyotrophia, amyotrophic
26226588442 spells the words: anacoluthia, anacoluthic
26227649623 spells the words: Anacrogynae, anacrogynae
26272447842 spells the words: anarchistic, anaschistic
263662527842 spells the words: anemoclastic, coenoblastic
263623742542 spells the words: anencephalia, anencephalic
2645424928466 spells the words: Anglicization, anglicization
26456746242 spells the words: Anglophobia, Anglophobic
26462836377 spells the words: animateness, cognateness
26473456642 spells the words: aniseikonia, aniseikonic
2647663876742 spells the words: anisometropia, anisometropic
26847676728442 spells the words: anthropopathia, anthropopathic
26843474843742 spells the words: antidiphtheria, antidiphtheric
268436462842 spells the words: antidogmatic, antifogmatic
268463876742 spells the words: antimetropia, antimetropic
26847665464 spells the words: antipooling, antismoking
27828422559 spells the words: aquatically, astatically
27842858873 spells the words: aquiculture, arviculture
27224664332 spells the words: Arachnoidea, arachnoidea
27736828466 spells the words: arrentation, assentation
27847639642 spells the words: arthrodynia, arthrodynic
28742852742 spells the words: Auricularia, auricularia
2872858672673 spells the words: Auscultoscope, auscultoscope
22283746742442 spells the words: bacteriophagia, bacteriophagic
22334746377 spells the words: baddishness, caddishness
225264337687 spells the words: balaniferous, calamiferous
22582448437486 spells the words: Baluchitherium, baluchitherium
227353776377 spells the words: baselessness, carelessness
2327353776377 spells the words: beardlessness, ceaselessness
23283726273 spells the words: Beaverboard, beaverboard
23554337687 spells the words: belliferous, celliferous
237425663837 spells the words: besiclometer, cephalometer
23773637493 spells the words: Bessemerize, bessemerize
25278674846742 spells the words: blastophthoria, blastophthoric
25327336377 spells the words: blearedness, clearedness
2536667742442 spells the words: blennorrhagia, blennorrhagic
25625625464 spells the words: blockmaking, cloakmaking, clockmaking
258783746459 spells the words: blusteringly, clusteringly
26534327833 spells the words: boldhearted, coldhearted
26624628466 spells the words: bombination, combination
266434228466 spells the words: bonification, conification
26773528466 spells the words: bosselation, correlation
27224963876742 spells the words: brachymetropia, brachymetropic
2766246763866642 spells the words: bronchopneumonia, bronchopneumonic
28748425642 spells the words: buphthalmia, buphthalmic
22263366642 spells the words: cacodemonia, cacodemonic
22268767442 spells the words: cacotrophia, cacotrophic
22524337687 spells the words: Calciferous, calciferous
22672355483 spells the words: Campbellite, campbellite
22774365486 spells the words: Caprifolium, caprifolium
2272664337687 spells the words: Carboniferous, carboniferous
22726786386 spells the words: Carborundum, carborundum
22827473642 spells the words: cataphrenia, cataphrenic
22856783747 spells the words: Caulopteris, caulopteris
23742525442 spells the words: cephalalgia, cephalalgic
237425639642 spells the words: cephalodymia, cephalodynia
2374256753442 spells the words: cephaloplegia, cephaloplegic
23732727843642 spells the words: cerebrasthenia, cerebrasthenic
237327686642 spells the words: cerebrotonia, cerebrotonic
24567263642 spells the words: chloranemia, chloranemic
246637625278 spells the words: chondroblast, chondroclast
24766286728442 spells the words: chromatopathia, chromatopathic
24766286744542 spells the words: chromatophilia, chromatophilic
2476664363747 spells the words: chromogenesis, chronogenesis
2476664363842 spells the words: chromogenetic, chronogenetic
24766647274 spells the words: chromograph, chronograph
24766663837 spells the words: chromometer, chronometer
2476667468647274 spells the words: chromophotograph, chronophotograph
247666746864727442 spells the words: chromophotographic, chronophotographic
24766674686472749 spells the words: chromophotography, chronophotography
24766672673 spells the words: chromoscope, chronoscope
247666726742 spells the words: chromoscopic, chronoscopic
24766672679 spells the words: chromoscopy, chronoscopy
247666876742 spells the words: chromotropic, chronotropic
2476668767476 spells the words: chromotropism, chronotropism
26642256377 spells the words: comicalness, conicalness
26677377466 spells the words: compression, conspersion
266787428466 spells the words: compurgation, constriction
26678742867 spells the words: compurgator, constrictor
26633772253 spells the words: conferrable, confessable
266836846625 spells the words: contentional, conventional
26687228466 spells the words: contraction, conurbation
26776744542 spells the words: coprophilia, coprophilic
268683772633 spells the words: counterpaned, counterscoff
26868378245 spells the words: countertail, countervail
279782663742 spells the words: cryptamnesia, cryptamnesic
279786262287 spells the words: Cryptococcus, cryptococcus
27978642642 spells the words: Cryptogamia, cryptogamic
27978647274 spells the words: cryptograph, crystograph
279786663742 spells the words: cryptomnesia, cryptomnesic
29266247642 spells the words: cyanochroia, cyanochroic
29256746742 spells the words: cyclophoria, cyclophoric
29256753442 spells the words: cycloplegia, cycloplegic
29256849642 spells the words: cyclothymia, cyclothymic
32822536377 spells the words: datableness, eatableness
33332848359 spells the words: defectively, effectively
3333284836377 spells the words: defectiveness, effectiveness
3333783723623 spells the words: defervescence, effervescence
333378372368 spells the words: defervescent, effervescent
33342436859 spells the words: deficiently, efficiently
333448728466 spells the words: defiguration, effiguration
3335673723623 spells the words: deflorescence, efflorescence
33367628466 spells the words: deformation, efformation
33367628483 spells the words: deformative, efformative
33434228466 spells the words: deification, edification
33434228679 spells the words: deificatory, edificatory
3376286728442 spells the words: dermatopathia, dermatopathic
337664727442 spells the words: dermographia, dermographic
33766472749 spells the words: dermography, desmography
3376666765649 spells the words: dermonosology, desmonosology
33766876742 spells the words: dermotropic, desmotropic
337378336377 spells the words: desertedness, deservedness
33784628466 spells the words: destination, festination
338837266742 spells the words: deuteranopia, deuteranopic
34728772253 spells the words: disbursable, discussable
34787428833 spells the words: distributed, distributee
38554327833 spells the words: dullhearted, fullhearted
3626846728442 spells the words: enantiopathia, enantiopathic
362374256728442 spells the words: encephalopathia, encephalopathic
362925673342 spells the words: encyclopedia, encyclopedic
36366387425 spells the words: endometrial, endoneurial
36366387486 spells the words: endometrium, endoneurium
367466744542 spells the words: eosinophilia, eosinophilic
37472672559 spells the words: Episcopally, episcopally
37478366744542 spells the words: epistemophilia, epistemophilic
37484252642 spells the words: epithalamia, epithalamic
37984762527842 spells the words: erythroblastic, erythroclastic
37984766486 spells the words: Erythronium, erythronium
38465644225 spells the words: ethological, etiological
382427478422559 spells the words: Eucharistically, eucharistically
39264628466 spells the words: examination, exanimation
393623742542 spells the words: exencephalia, exencephalic
397374636833 spells the words: experimented, experimentee
36764228466 spells the words: formication, fornication
373624434228466 spells the words: Frenchification, frenchification
38627422323 spells the words: Fumariaceae, Funariaceae
386274223687 spells the words: fumariaceous, funariaceous
4255434228466 spells the words: Gallification, gallification
426376636377 spells the words: gamesomeness, handsomeness
4364867425 spells the words: gemitorial, genitorial
43662527842 spells the words: genoblastic, hemoclastic
4372865649 spells the words: geratology, hepatology
4376264928466 spells the words: Germanization, germanization
4376266746242 spells the words: Germanophobia, Germanophobic
4384736263 spells the words: Gethsemane, gethsemane
43847362642 spells the words: Gethsemanic, gethsemanic
4592643642 spells the words: glycogenic, glycohemia
4592678742 spells the words: glycosuria, glycosuric
46662527842 spells the words: gonoblastic, homoblastic
4666774373 spells the words: gonosphere, ionosphere
4663546377 spells the words: goodliness, homeliness
46774746459 spells the words: gossipingly, inspiringly
4683766368 spells the words: government, internment
4726674663 spells the words: Gramophone, gramophone
47274674663 spells the words: Graphophone, graphophone
47278654842 spells the words: Graptolitha, graptolitic
47677852742 spells the words: Grossularia, grossularia
4782787338 spells the words: Grubstreet, grubstreet
48783856377 spells the words: gustfulness, hurtfulness
4966227342 spells the words: gynocardia, gynocardic
49776472749 spells the words: gypsography, hypsography
4977674452 spells the words: Gypsophila, gypsophila
4976746742 spells the words: gyrophoric, hypophoria
4976782842 spells the words: gyrostatic, hypostatic
49767828422559 spells the words: gyrostatically, hypostatically
423667742442 spells the words: haemorrhagia, haemorrhagic
42734327833 spells the words: hardhearted, harehearted
43237473642 spells the words: hebephrenia, hebephrenic
43546746242 spells the words: heliophobia, heliophobic
43637256742 spells the words: hemeralopia, hemeralopic
4364266742 spells the words: hemianopia, hemianopic
4364246732 spells the words: Hemichorda, hemichorea
4364272642 spells the words: hemicrania, hemicranic
4364753442 spells the words: hemiplegia, hemiplegic
43664562468742 spells the words: hemoglobinuria, hemoglobinuric
4366744542 spells the words: hemophilia, hemophilic
43782637687 spells the words: heptamerous, heptandrous
4378286642 spells the words: heptatomic, heptatonic
43837233642 spells the words: heteradenia, heteradenic
4383762372 spells the words: Heterocera, heterocerc
4383762476642 spells the words: heterochromia, heterochromic, heterochronic
43837624766687 spells the words: heterochromous, heterochronous
438376247669 spells the words: heterochromy, heterochrony
438376687426 spells the words: Heteroousian, heteroousian
438376746742 spells the words: heterophoria, heterophoric
43837682942 spells the words: heterotaxia, heterotaxic
43837686742 spells the words: heterotopia, heterotopic
438376876742 spells the words: heterotropia, heterotropic
4392637687 spells the words: hexamerous, hexandrous
4437662629 spells the words: hidromancy, hieromancy
463663874225 spells the words: hodometrical, iodometrical
46562527842 spells the words: holoblastic, holoclastic
466624766687 spells the words: homochromous, homochronous
46663663742 spells the words: homoeomeria, homoeomeric
46664687426 spells the words: Homoiousian, homoiousian
4678367426 spells the words: Hortensian, hortensian
4687286642 spells the words: Housatonic, intratomic
49372749742 spells the words: hydrargyria, hydrargyric
49376746242 spells the words: hydrophobia, hydrophobic
497372543742 spells the words: hyperalgesia, hyperalgesic
4973727442 spells the words: hyperaphia, hyperaphic
49737267326 spells the words: Hyperborean, hyperborean
4973738542 spells the words: hyperdulia, hyperdulic
4973745923642 spells the words: hyperglycemia, hyperglycemic
49737638742 spells the words: hypermetric, hyperneuria
4973763876742 spells the words: hypermetropia, hypermetropic
49737663742 spells the words: hypermnesia, hypermnesic
4973767642 spells the words: hyperosmia, hyperosmic
49737746742 spells the words: hyperphoria, hyperphoric
49737752742 spells the words: hyperplasia, hyperplasic
497377843642 spells the words: hypersthenia, hypersthenic
497378437642 spells the words: hyperthermia, hyperthermic
4973786642 spells the words: hypertonia, hypertonic
49737843742 spells the words: hypesthesia, hypesthesic
49766746242 spells the words: hypnophobia, hypnophobic
497624567493742 spells the words: hypochlorhydria, hypochlorhydric
49763962642 spells the words: hypodynamia, hypodynamic
497645923642 spells the words: hypoglycemia, hypoglycemic
49767473642 spells the words: hypophrenia, hypophrenic
49767843642 spells the words: hyposthenia, hyposthenic
49768437642 spells the words: hypothermia, hypothermic
49783725442 spells the words: hysteralgia, hysteralgic
42484964727442 spells the words: ichthyographia, ichthyographic
43367527842 spells the words: ideoplastia, ideoplastic
467273662253 spells the words: impardonable, inpardonable
46727828466 spells the words: impartation, impastation
46767886283 spells the words: importunate, impostumate
46784628466 spells the words: impugnation, inquination
4626778784253 spells the words: Incorruptible, incorruptible
46326847363 spells the words: Indanthrene, indanthrene
463328336377 spells the words: indebtedness, infectedness
463332232253 spells the words: indefaceable, ineffaceable
463333284253 spells the words: indefectible, ineffectible
463333284259 spells the words: indefectibly, ineffectibly
46333328483 spells the words: indefective, ineffective
463334243629 spells the words: indeficiency, inefficiency
46333424368 spells the words: indeficient, inefficient
4633342436859 spells the words: indeficiently, inefficiently
4634337687 spells the words: indiferous, iodiferous
4683637283 spells the words: intemerate, intenerate
468363728466 spells the words: intemeration, inteneration
4683634253 spells the words: intendible, invendible
46836846625 spells the words: intentional, inventional
4683684665377 spells the words: intentionless, inventionless
46836848359 spells the words: intentively, inventively
4683684836377 spells the words: intentiveness, inventiveness
46837278725 spells the words: interastral, intercrural
46837268773 spells the words: interbourse, intercourse
4683725277 spells the words: interclasp, interclass
4683758628466 spells the words: interjunction, interlunation
46837562283 spells the words: interlobate, interlocate
468375628527 spells the words: interlobular, interlocular
46837633423 spells the words: intermediae, interoffice
46837646283 spells the words: interminate, inverminate
46837737825 spells the words: interseptal, intersertal
4683782253 spells the words: intestable, investable
4684628466 spells the words: intimation, intinction, invination
4687238725 spells the words: intradural, intrafusal
468725628527 spells the words: intralobular, intralocular
4683784253 spells the words: invertible, investible
4664928466 spells the words: Ionization, ionization
4724425442 spells the words: ischialgia, ischialgic
4763962642 spells the words: isodynamia, isodynamic
5292732537 spells the words: jawbreaker, lawbreaker
52927325464 spells the words: jawbreaking, lawbreaking
5844376288 spells the words: Juggernaut, juggernaut
54824369273 spells the words: kitchenward, kitchenware
5228622245587 spells the words: Lactobacillus, lactobacillus
5263657442 spells the words: Landolphia, landolphia
5378623742542 spells the words: leptocephalia, leptocephalic
5378623742587 spells the words: Leptocephalus, leptocephalus
5382629843642 spells the words: leucocythemia, leucocythemic
53826298673642 spells the words: leucocytopenia, leucocytopenic
5382673642 spells the words: leucopenia, leucopenic
5628528466 spells the words: lobulation, loculation
592268476742 spells the words: lycanthropia, lycanthropic
5926737366 spells the words: Lycoperdon, lycoperdon
5967467742442 spells the words: lymphorrhagia, lymphorrhagic
6227623742542 spells the words: macrocephalia, macrocephalic
6227632289542 spells the words: macrodactylia, macrodactylic
6253342368 spells the words: maledicent, maleficent
62664337687 spells the words: mammiferous, manniferous
62744628466 spells the words: margination, obsignation
6274837483 spells the words: Marguerite, marguerite
6288728466 spells the words: maturation, obturation
6288736377 spells the words: matureness, obtuseness
6296728442 spells the words: mazopathia, mazopathic
63342462559 spells the words: medicinally, officinally
634223742542 spells the words: megacephalia, megacephalic
63425623742542 spells the words: megalocephalia, megalocephalic
63526246542 spells the words: melancholia, melancholic
635266337642 spells the words: melanodermia, melanodermic
63667742442 spells the words: menorrhagia, menorrhagic
63722867425 spells the words: Mercatorial, mercatorial
6373624962 spells the words: merenchyma, mesenchyma
63736249628687 spells the words: merenchymatous, mesenchymatous
6374346625 spells the words: Meridional, meridional
63762527842 spells the words: meroblastic, mesoblastic
63766677442 spells the words: meromorphic, mesomorphic
637675265866 spells the words: meroplankton, mesoplankton
63767526586642 spells the words: meroplanktonic, mesoplanktonic
63767682642 spells the words: mesopotamia, mesopotamic
6377426422559 spells the words: Messianically, messianically
6382667746737 spells the words: metamorphoser, metamorphoses
63873282742 spells the words: metrectasia, neurectasia
6387328669 spells the words: metrectomy, neurectomy
63873286742 spells the words: metrectopia, metrectopic, neurectopia
6387328679 spells the words: metrectopy, neurectopy
6387639642 spells the words: metrodynia, neurodynia
638763427662 spells the words: metrofibroma, neurofibroma
638765644225 spells the words: metrological, neurological
63876564478 spells the words: metrologist, neurologist
638766252242 spells the words: metromalacia, neuromalacia
63876727259747 spells the words: metroparalysis, neuroparalysis
63876728442 spells the words: metropathia, metropathic, neuropathic
6387672849 spells the words: metropathy, neuropathy
638767742442 spells the words: metrorrhagia, metrorrhagic
63876843727478 spells the words: metrotherapist, neurotherapist
638768437279 spells the words: metrotherapy, neurotherapy
6388537663 spells the words: mettlesome, nettlesome
6427654842 spells the words: miarolitic, microlitic
64273623742542 spells the words: micrencephalia, micrencephalic
6427623742542 spells the words: microcephalia, microcephalic
642764628442 spells the words: micrognathia, micrognathic
6427663542 spells the words: micromelia, micromelic
6427663742 spells the words: Micromeria, micromeric
64276748425642 spells the words: microphthalmia, microphthalmic
642767753642 spells the words: microsplenia, microsplenic
647268476742 spells the words: misanthropia, misanthropic
64847432842 spells the words: Mithridatic, mithridatic
6638528466 spells the words: modulation, nodulation
66444727442 spells the words: mogigraphia, mogigraphic
66623422559 spells the words: monadically, nomadically
66627837425 spells the words: monasterial, nonarterial
666362796642 spells the words: monembryonic, nonembryonic
666374726725 spells the words: monepiscopal, nonepiscopal
66662476642 spells the words: monochromic, monochronic
666624766687 spells the words: monochromous, monochronous
6666263542 spells the words: Monocoelia, monocoelic
66663357442 spells the words: Monodelphia, monodelphic
6666436478 spells the words: monogenist, nomogenist
6666436687 spells the words: monogenous, nomogenous
66664727437 spells the words: monographer, nomographer
66664727442 spells the words: monographic, nomographic
6666472744225 spells the words: monographical, nomographical
666647274422559 spells the words: monographically, nomographically
6666472749 spells the words: monography, nomography
66665628527 spells the words: monolobular, monolocular
66665644225 spells the words: monological, nomological
6666564478 spells the words: monologist, nomologist
6666637687 spells the words: monomerous, nononerous
6666742742 spells the words: monophasia, monophasic
666674955687 spells the words: monophyllous, nomophyllous
6666753442 spells the words: monoplegia, monoplegic
6666763486 spells the words: monopodium, monosodium
6666784225 spells the words: monoptical, nonoptical
6666742642 spells the words: monorganic, nonorganic
6666843476 spells the words: monotheism, nomotheism
6666843842 spells the words: monothetic, nomothetic
6666866687 spells the words: monotomous, monotonous
666787434228466 spells the words: monstrification, nonpurification
6666356937 spells the words: moonflower, noonflower
66765644225 spells the words: morological, nosological
6676564422559 spells the words: morologically, nosologically
6676564478 spells the words: morologist, nosologist
6684662253 spells the words: motionable, notionable
6684665377 spells the words: motionless, notionless
6684828466 spells the words: motitation, motivation
6682245489 spells the words: movability, notability
66822536377 spells the words: movableness, notableness
6683537759 spells the words: movelessly, notelessly
668353776377 spells the words: movelessness, notelessness
6824337687 spells the words: muciferous, nubiferous, nuciferous
6824436687 spells the words: mucigenous, nubigenous
6824867687 spells the words: mucivorous, nucivorous
6837546437 spells the words: mudslinger, overlinger
6858447274 spells the words: Multigraph, multigraph
685845628527 spells the words: multilobular, multilocular
6858456285283 spells the words: multilobulate, multiloculate
68584562852833 spells the words: multilobulated, multiloculated
6858466325 spells the words: multimodal, multinodal
6882846625 spells the words: mutational, nutational
6927843642 spells the words: myasthenia, myasthenic
6963962642 spells the words: myodynamia, myodynamic
626623742542 spells the words: nanocephalia, nanocephalic
63276744542 spells the words: necrophilia, necrophilic
63276746242 spells the words: necrophobia, necrophobic
63667445478 spells the words: nemophilist, oenophilist
6366865649 spells the words: neontology, odontology
6374725442 spells the words: nephralgia, nephralgic
6377537493 spells the words: Nesslerize, nesslerize
638727843642 spells the words: neurasthenia, neurasthenic
638728767442 spells the words: neuratrophia, neuratrophic
6387686942 spells the words: neurotoxia, neurotoxic
638876744542 spells the words: neutrophilia, neutrophilic
66635328466 spells the words: nonejection, nonelection
6665644225 spells the words: nonlogical, noological
666633424625 spells the words: nonmedicinal, nonofficinal
666735328466 spells the words: nonrejection, nonselection
6667372728466 spells the words: nonreparation, nonseparation
666738658464 spells the words: nonrevolting, nonrevolving
66675477464 spells the words: nonskipping, nonslipping
6882732537 spells the words: nutbreaker, outbreaker
6928256742 spells the words: nyctalopia, nyctalopic
62532828466 spells the words: objectation, oblectation
6366825442 spells the words: odontalgia, odontalgic
63668625278 spells the words: odontoblast, odontoclast
6366862383 spells the words: Odontocete, odontocete
6544629843642 spells the words: oligocythemia, oligocythemic
6544663862442 spells the words: oligometochia, oligometochic
654466374742 spells the words: Oligonephria, oligonephric
654467473642 spells the words: oligophrenia, oligophrenic
666628676342 spells the words: onomatopoeia, onomatopoeic
6748425625442 spells the words: ophthalmalgia, ophthalmalgic
6748425642 spells the words: ophthalmia, ophthalmic
674842566753442 spells the words: ophthalmoplegia, ophthalmoplegic
6768437279 spells the words: opotherapy, orotherapy
677666744542 spells the words: opsonophilia, opsonophilic
67648463357442 spells the words: Ornithodelphia, ornithodelphic
6764846626842 spells the words: ornithomantia, ornithomantic
67846366842 spells the words: orthodontia, orthodontic
6784673342 spells the words: orthopedia, orthopedic
67846746742 spells the words: orthophoria, orthophoric
6784686642 spells the words: orthotomic, orthotonic
6774925442 spells the words: osphyalgia, osphyalgic
6783625278 spells the words: osteoblast, osteoclast
678362527842 spells the words: osteoblastic, osteoclastic
678366252242 spells the words: osteomalacia, osteomalacic
6865644225 spells the words: otological, ovological
6837265359 spells the words: overboldly, overcoldly
6837526337 spells the words: Overlander, overlander
6992889742 spells the words: oxybutyria, oxybutyric
7224923742542 spells the words: pachycephalia, pachycephalic
72249337642 spells the words: pachydermia, pachydermic
72249423642 spells the words: pachyhaemia, pachyhaemic
722494963642 spells the words: pachyhymenia, pachyhymenic
7224963642 spells the words: pachymenia, pachymenic
7225625464 spells the words: packmaking, sackmaking
7233535453 spells the words: paddlelike, saddlelike
7233994225 spells the words: Paddywhack, paddywhack
7244628466 spells the words: pagination, sagination
724653776377 spells the words: painlessness, rainlessness
725434228466 spells the words: palification, salification
726742762266 spells the words: pampharmacon, panpharmacon
72677924476 spells the words: pampsychism, panpsychism
72677924478 spells the words: pampsychist, panpsychist
72633666486 spells the words: Pandemonium, pandemonium
726434228466 spells the words: panification, ramification, sanification
7264867687 spells the words: panivorous, ranivorous
7267737642 spells the words: panspermia, panspermic
726826677442 spells the words: pantamorphia, pantamorphic
7268263623742542 spells the words: pantanencephalia, pantanencephalic
7268647274 spells the words: pantograph, scotograph
726864727442 spells the words: pantographic, scotographic
72686472749 spells the words: pantography, scotography
7268664642 spells the words: pantomimic, santoninic
72686663742 spells the words: pantomnesia, pantomnesic
726866677442 spells the words: pantomorphia, pantomorphic
72686746242 spells the words: pantophobia, pantophobic, scotophobia
7268672673 spells the words: pantoscope, scotoscope
7272438742 spells the words: parageusia, parageusic
72724727442 spells the words: paragraphia, paragraphic
7272543742 spells the words: paralgesia, paralgesic
72726677442 spells the words: paramorphia, paramorphic
7272742742 spells the words: paraphasia, paraphasic
7272746642 spells the words: paraphonia, paraphonic
72727473642 spells the words: paraphrenia, paraphrenic
7272753442 spells the words: paraplegia, paraplegic
727284976774842 spells the words: parathyroprivia, parathyroprivic
7278336377 spells the words: partedness, pastedness
7278436423 spells the words: partheniad, Partheniae
72774646377 spells the words: passingness, raspingness
7277466478 spells the words: Passionist, passionist
72788735377 spells the words: pastureless, raptureless
7283732645427 spells the words: paterfamiliar, paterfamilias
72876763687 spells the words: pauropodous, sauropodous
7292245489 spells the words: payability, sayability
72922536377 spells the words: payableness, sayableness
73254746377 spells the words: peakishness, peckishness
73342366842 spells the words: pediadontia, pediadontic
7334287478 spells the words: pediatrist, pedicurist
7334636825 spells the words: pedimental, sedimental
7336366842 spells the words: pedodontia, pedodontic
7336744542 spells the words: pedophilia, pedophilic
7352744566 spells the words: Pelargikon, Pelasgikon
736468274268 spells the words: peninvariant, seminvariant
73665644225 spells the words: penological, semological
73682637687 spells the words: pentamerous, pentandrous
736828382425 spells the words: Pentateuchal, pentateuchal
7368286642 spells the words: pentatomic, pentatonic
73683267825 spells the words: Pentecostal, pentecostal
73736728466 spells the words: perforation, resensation
73738628679 spells the words: perfumatory, perfunctory
7374336825 spells the words: peridental, residental
7374337642 spells the words: peridermic, peridesmic
73743376486 spells the words: Peridermium, peridesmium
73743464323 spells the words: Peridinidae, Peridinieae
7374638725 spells the words: perimetral, perineural
737463874847 spells the words: perimetritis, perineuritis
73746387486 spells the words: perimetrium, perineurium
73746366842 spells the words: periodontia, periodontic
73747283842 spells the words: Peripatetic, peripatetic
7374763866642 spells the words: peripneumonia, peripneumonic
7378424325 spells the words: pesticidal, septicidal
73784337687 spells the words: pestiferous, septiferous
738766278643 spells the words: petromastoid, retromastoid
738767427964325 spells the words: petropharyngeal, retropharyngeal
7387689672642 spells the words: petrotympanic, retrotympanic
74236642642 spells the words: Phaenogamia, phaenogamic
742637642642 spells the words: Phanerogamia, phanerogamic
74268276246742 spells the words: phantasmagoria, phantasmagoric
742682762842 spells the words: Phantasmatic, phantasmatic
7427622656442 spells the words: pharmacologia, pharmacologic
7427622673342 spells the words: pharmacopedia, pharmacopedic
742796425442 spells the words: pharyngalgia, pharyngalgic
74279646753442 spells the words: pharyngoplegia, pharyngoplegic
74532686687 spells the words: Phlebotomus, phlebotomus
74626366842 spells the words: Phocodontia, phocodontic
7467666642 spells the words: phoronomia, phoronomic
746774288742 spells the words: phosphaturia, phosphaturic
74686247666472749 spells the words: photochromography, photochronography
74686746242 spells the words: photophobia, photophobic
747366728442 spells the words: phrenopathia, phrenopathic
7425535453 spells the words: picklelike, sicklelike
7425539333 spells the words: pickleweed, sickleweed
74322536377 spells the words: piebaldness, ridableness
7464842852 spells the words: Pinguicula, pinguicula
7478628543 spells the words: pipunculid, sipunculid
7484537759 spells the words: pithlessly, pitilessly
7527446459 spells the words: plashingly, slashingly
7527842463 spells the words: Plasticine, plasticine
7527863962642 spells the words: plastodynamia, plastodynamic
75283465337 spells the words: plateholder, slaveholder
7528362537 spells the words: platemaker, slatemaker
75283625464 spells the words: platemaking, slatemaking
75286637783 spells the words: Platonesque, platonesque
752866422559 spells the words: Platonically, Slavonically
7528664928466 spells the words: Platonization, Slavonization
75289263642 spells the words: platycnemia, platycnemic
7528963742 spells the words: platymeria, platymeric
75289783623742542 spells the words: platystencephalia, platystencephalic
7533435377 spells the words: pledgeless, sledgeless
753462476642 spells the words: pleiochromia, pleiochromic
753647683684279 spells the words: Plenipotentiary, plenipotentiary
7536627842 spells the words: pleomastia, pleomastic, pleonastic
7538725442 spells the words: pleuralgia, pleuralgic
75387639642 spells the words: pleurodynia, pleurodynic
753876763866642 spells the words: pleuropneumonia, pleuropneumonic
7584446459 spells the words: pluggingly, sluggingly
7587446377 spells the words: plushiness, slushiness
7625385377 spells the words: pocketless, socketless
7625385453 spells the words: pocketlike, rocketlike
7636748425642 spells the words: Podophthalmia, podophthalmic
76367495586 spells the words: Podophyllum, podophyllum
7652747842 spells the words: polaristic, solaristic
765274928466 spells the words: polarization, solarization
7655462867 spells the words: pollinator, pollinctor
7659263742 spells the words: Polyandria, polyandria, polyandric
765924766286744542 spells the words: polychromatophilia, polychromatophilic
76592476642 spells the words: polychromia, polychromic
765929843642 spells the words: polycythemia, polycythemic
7659423642 spells the words: polyhaemia, polyhaemic
7659627842 spells the words: polymastia, polymastic
765963862442 spells the words: polymetochia, polymetochic
7659742442 spells the words: polyphagia, polyphagic
7659746242 spells the words: polyphobia, polyphobic
7659746642 spells the words: polyphonia, polyphonic
7659753442 spells the words: polyplegia, polyplegic
765974746642 spells the words: Polysiphonia, polysiphonic
76597737642 spells the words: polyspermia, polyspermic
765984252642 spells the words: Polythalamia, polythalamic
7664337687 spells the words: pomiferous, soniferous
7674746377 spells the words: popishness, ropishness
7673623742542 spells the words: porencephalia, porencephalic
7674337687 spells the words: poriferous, roriferous, soriferous
7677497426 spells the words: Porphyrian, porphyrian
767835328466 spells the words: postelection, postflection
7723867426 spells the words: Praetorian, praetorian
7726546459 spells the words: prankingly, spankingly
77322848359 spells the words: preactively, precatively
7732428466 spells the words: preciation, speciation
7732467489 spells the words: preciosity, speciosity
7732468759 spells the words: preciously, speciously
773246876377 spells the words: preciousness, speciousness
7732662378 spells the words: preconcept, preconcert
7732662378466 spells the words: preconception, preconcertion
7732668368466 spells the words: precontention, preconvention
7732668378 spells the words: precontest, preconvert
77332867459 spells the words: predatorily, prefatorily
7733428679 spells the words: prediatory, predictory
7733428466 spells the words: prediction, prefiction
773342846625 spells the words: predictional, prefictional
7734653464 spells the words: pregolfing, preholding
773468368466 spells the words: preintention, preinvention
7737877673 spells the words: prepurpose, presuppose
77372967473642 spells the words: presbyophrenia, presbyophrenic
7737296742 spells the words: presbyopia, presbyopic
7737877363 spells the words: presupreme, presuspend
773836828483 spells the words: pretentative, preventative
7747663837 spells the words: prisometer, spirometer
7765328483 spells the words: projective, prolectite
7766682253 spells the words: promotable, promovable
7767434228466 spells the words: prosification, sporification
77676725442 spells the words: prosopalgia, prosopalgic
7767676753442 spells the words: prosopoplegia, prosopoplegic
7768266742 spells the words: protanopia, protanopic
7768328466 spells the words: protection, provection
7768425542 spells the words: prothallia, prothallic
776862527842 spells the words: protoblastic, protoclastic
77686728442 spells the words: protopathia, protopathic
77864337687 spells the words: pruniferous, spumiferous
778746876377 spells the words: pruriousness, spuriousness
773836263642 spells the words: pseudoanemia, pseudoanemic
77383653853642 spells the words: pseudoleukemia, pseudoleukemic
7738366677442 spells the words: pseudomorphia, pseudomorphic
77676748425642 spells the words: psorophthalmia, psorophthalmic
7792427843642 spells the words: psychasthenia, psychasthenic
77924428742 spells the words: psychiatria, psychiatric
779246728442 spells the words: psychopathia, psychopathic
77924674984642 spells the words: psychorhythmia, psychorhythmic
78366456772 spells the words: Ptenoglossa, Stenoglossa
7823723623 spells the words: pubescence, rubescence
78374536377 spells the words: puerileness, sterileness
7874436687 spells the words: pupigenous, rurigenous
7877385453 spells the words: puppetlike, russetlike
7874826476 spells the words: Puritanism, puritanism
7877536377 spells the words: purpleness, suppleness
78776785377 spells the words: purportless, supportless
7877673359 spells the words: purposedly, supposedly
7878362623 spells the words: purtenance, sustenance
7878392253 spells the words: purveyable, surveyable
7878392623 spells the words: purveyance, surveyance
78744646377 spells the words: pushingness, rushingness
788733224368 spells the words: putrefacient, stupefacient
788733228466 spells the words: putrefaction, stupefaction
788733228483 spells the words: putrefactive, stupefactive
7887332284836377 spells the words: putrefactiveness, stupefactiveness
7887436377 spells the words: putridness, stupidness
7926663862442 spells the words: pycnometochia, pycnometochic
7964363747 spells the words: pyogenesis, syngenesis
7964363842 spells the words: pyogenetic, syngenetic
7967378423642 spells the words: pyosepticemia, pyosepticemic
79746564478 spells the words: pyrgologist, Syriologist
7823743676 spells the words: quadriform, suberiform
7825375453 spells the words: Quakerlike, suckerlike
7827828466 spells the words: quartation, starvation, substation
7224425442 spells the words: rachialgia, rachialgic
72346366842 spells the words: radiodontia, radiodontic
7264337687 spells the words: ramiferous, raniferous
72822536377 spells the words: ratableness, savableness
7327662253 spells the words: reasonable, seasonable
73276622536377 spells the words: reasonableness, seasonableness
7327662259 spells the words: reasonably, seasonably
7327663359 spells the words: reasonedly, seasonedly
7327665377 spells the words: reasonless, seasonless
73237746625 spells the words: recessional, Secessional, secessional
7325874836377 spells the words: reclusiveness, seclusiveness
7338232253 spells the words: reduceable, seduceable
7338236368 spells the words: reducement, seducement
733828466478 spells the words: reductionist, seductionist
73382848359 spells the words: reductively, seductively
7353282253 spells the words: rejectable, selectable
7368637283 spells the words: remunerate, renumerate
736863728466 spells the words: remuneration, renumeration
73624772623 spells the words: Renaissance, renaissance
7364767825 spells the words: reniportal, semipostal
7366828466 spells the words: renotation, renovation
737272245489 spells the words: reparability, separability
7372728466 spells the words: reparation, separation
7372728483 spells the words: reparative, separative
7372728679 spells the words: reparatory, separatory
73736846459 spells the words: repentingly, resentingly
7377377483 spells the words: repressive, respersive
7384825493 spells the words: revitalize, revivalize
73865846459 spells the words: revoltingly, revolvingly
749624623742542 spells the words: Rhynchocephalia, rhynchocephalic
744483856377 spells the words: rightfulness, sightfulness
7444853776377 spells the words: rightlessness, sightlessness
74686876377 spells the words: riotousness, sinuousness
7627846459 spells the words: roastingly, smartingly
7684447459 spells the words: roughishly, smuggishly
768444746377 spells the words: roughishness, smuggishness
76863432333 spells the words: roundheaded, soundheaded
768634323336377 spells the words: roundheadedness, soundheadedness
7687336377 spells the words: rousedness, souredness
7833546377 spells the words: ruffliness, steeliness
7222284225 spells the words: Sabbatical, sabbatical
7222427669237 spells the words: Saccharomyces, saccharomyces
72226522486 spells the words: Saccolabium, saccolabium
72272636827426 spells the words: Sacramentarian, sacramentarian
722726368279 spells the words: Sacramentary, sacramentary
7227434228466 spells the words: sacrification, scarification
722743422867 spells the words: sacrificator, scarificator
72448827487 spells the words: Sagittarius, sagittarius
7256663552 spells the words: Salmonella, salmonella
725744567747 spells the words: Salpiglossis, salpiglossis
7258286742 spells the words: Saltatoria, saltatoric
7262867486 spells the words: sanatorium, sanctorium
7277223642 spells the words: Sarracenia, sarracenia
7288762542 spells the words: Saturnalia, saturnalia
72887625426 spells the words: Saturnalian, saturnalian
7227266824 spells the words: Scaramouch, scaramouch
7228656442 spells the words: scatologia, scatologic
72449268487 spells the words: Schizanthus, schizanthus
7244967473642 spells the words: schizophrenia, schizophrenic
724496849642 spells the words: schizothymia, schizothymic
7246659273 spells the words: schoolward, schoolyard
72537633762 spells the words: Scleroderma, scleroderma
725376337642 spells the words: sclerodermia, sclerodermic
72537672673 spells the words: Scleroscope, scleroscope
72656736372 spells the words: Scolopendra, scolopendra
726786744542 spells the words: scoptophilia, scoptophilic
7274788725476 spells the words: Scripturalism, scripturalism
7274788725478 spells the words: Scripturalist, scripturalist
7274788725489 spells the words: Scripturality, scripturality
7274788733 spells the words: Scriptured, scriptured
72747887476 spells the words: Scripturism, scripturism
73273827428 spells the words: Secretariat, secretariat
73642664225 spells the words: semicomical, semiconical
7374654323 spells the words: Sepiolidae, Seriolidae
73783627426 spells the words: Septembrian, septenarian
7378423642 spells the words: septicemia, septicemic
7378426793642 spells the words: septicopyemia, septicopyemic
7378824468 spells the words: Septuagint, septuagint
747974624486 spells the words: Sisyrinchium, sisyrinchium
7486746242 spells the words: sitophobia, sitophobic
7547746459 spells the words: skippingly, slippingly
7666846377 spells the words: smoothness, snootiness
76628686642 spells the words: somatotonia, somatotonic
76744787377 spells the words: Sophistress, sophistress
7688437637 spells the words: Southerner, southerner
7727426486 spells the words: Sparganium, sparganium
7727822478 spells the words: Spartacist, spartacist
772766744542 spells the words: spasmophilia, spasmophilic
77325537759 spells the words: speaklessly, specklessly
77436623742542 spells the words: sphenocephalia, sphenocephalic
7753625442 spells the words: splenalgia, splenalgic
7753666342542 spells the words: splenomegalia, splenomegalic
776644625278 spells the words: sponginblast, spongioblast
7768846377 spells the words: spottiness, spoutiness
78274956262287 spells the words: Staphylococcus, staphylococcus
78328679442 spells the words: steatopygia, steatopygic
7836623742542 spells the words: stenocephalia, stenocephalic
78374266847 spells the words: Stephanotis, stephanotis
786694327833 spells the words: stonyhearted, sunnyhearted
7866943278336377 spells the words: stonyheartedness, sunnyheartedness
787377423767 spells the words: Strepsiceros, strepsiceros
7873786262287 spells the words: Streptococcus, streptococcus
787664956747 spells the words: Strongylosis, strongylosis
7822462867486 spells the words: subcinctorium, succinctorium
7857446433 spells the words: sulphimide, sulphinide
78653776377 spells the words: sumlessness, sunlessness
7873746759 spells the words: superimply, superiorly
79583787426 spells the words: Sylvestrian, sylvestrian
79672843842686642 spells the words: sympatheticotonia, sympatheticotonic
796728442686642 spells the words: sympathicotonia, sympathicotonic
79632289542 spells the words: syndactylia, syndactylic
7974456746242 spells the words: syphilophobia, syphilophobic
7974646693542 spells the words: syringomyelia, syringomyelic
8228663837 spells the words: tactometer, vacuometer
8273625464 spells the words: tapemaking, vasemaking
82764746368 spells the words: tarnishment, varnishment
8278273687 spells the words: Tartareous, tartareous
8278274928466 spells the words: Tartarization, tartarization
8286846459 spells the words: tauntingly, vauntingly
832722536377 spells the words: tearableness, teasableness
8354337687 spells the words: teliferous, veliferous
83764628466 spells the words: termination, vermination
8377742467326 spells the words: Terpsichorean, terpsichorean
8377434228466 spells the words: terrification, versification
8378427426 spells the words: tertiarian, vestiarian
8378428527 spells the words: testicular, vestibular
83784285283 spells the words: testiculate, vestibulate
8387263742 spells the words: tetrameric, Tetrandria
83872637687 spells the words: tetramerous, tetrandrous
8387266463 spells the words: tetrammine, tetraonine
842862887442 spells the words: thaumaturgia, thaumaturgic
84365644225 spells the words: theological, tidological
8436742642 spells the words: Theophania, theophania, theophanic
843676387842 spells the words: theopneustia, theopneustic
84372738842 spells the words: Therapeutic, therapeutic
8437662288379 spells the words: thermobattery, thermocautery
843766677442 spells the words: theromorphia, theromorphic
843766746742 spells the words: Thesmophoria, Thesmophoric
844622283742 spells the words: Thiobacteria, thiobacteria
846768442733 spells the words: Thoroughbred, thoroughbred
8487434228466 spells the words: thurification, vitrification
84976774842 spells the words: thyroprivia, thyroprivic
8675444833 spells the words: toplighted, unplighted, unslighted
8677436377 spells the words: torpidness, torridness
8692736377 spells the words: towardness, unwareness
86942643642 spells the words: toxicogenic, toxicohemia
87267264628466 spells the words: transamination, transanimation
8726748626 spells the words: transhuman, transitman
87267767833 spells the words: transported, transportee
872678328466 spells the words: transudation, transvection
874246749842 spells the words: trichophytia, trichophytic
87424678372 spells the words: Trichoptera, trichoptera
8744562446 spells the words: Triglochin, triglochin
87464827426 spells the words: Trinitarian, trinitarian
87479527426 spells the words: Tripylarian, tripylarian
8748266742 spells the words: tritanopia, tritanopic
87624623742542 spells the words: trochocephalia, trochocephalic
87972667662 spells the words: Trypanosoma, trypanosoma
8872265453 spells the words: turbanlike, Tuscanlike
8875662642 spells the words: Turkomania, Turkomanic
8877428527 spells the words: turricular, tussicular
8877483552 spells the words: Turritella, turritella
89764727442 spells the words: typographia, typographic
8247827426 spells the words: Ubiquarian, ubiquarian
824784827426 spells the words: Ubiquitarian, ubiquitarian
845434228466 spells the words: uglification, vilification
8622848359 spells the words: unactively, vocatively
8627737833 spells the words: unarrested, unasserted
8627737733 spells the words: unaspersed, unassessed
8623272253 spells the words: unbearable, unceasable
8623346633 spells the words: unbedimmed, unbedinned
8626886633 spells the words: unbottomed, uncottoned
86242783733 spells the words: unchaptered, unchartered
8624337687 spells the words: unciferous, vociferous
86266774733 spells the words: uncomprised, unconspired
862667747464 spells the words: uncomprising, unconspiring
86266774746459 spells the words: uncomprisingly, unconspiringly
86266234833 spells the words: unconceited, unconceived
86266337733 spells the words: unconferred, unconfessed
86266837833 spells the words: uncontested, unconverted
8626683783359 spells the words: uncontestedly, unconvertedly
862668378336377 spells the words: uncontestedness, unconvertedness
8626773833 spells the words: uncorseted, uncosseted
863332232253 spells the words: undefaceable, uneffaceable
8633332833 spells the words: undefeated, uneffected
863333284253 spells the words: undefectible, uneffectible
86333328483 spells the words: undefective, uneffective
86333424368 spells the words: undeficient, unefficient
86337262833 spells the words: underboated, undercoated
8633776937 spells the words: underpower, underrower
86337787433 spells the words: understride, understrife
8633784633 spells the words: undertimed, undestined
8633782583 spells the words: undervalue, undervalve
8633737833 spells the words: undeserted, undeserved
86337378464 spells the words: undeserting, undeserving
86347287733 spells the words: undisbursed, undiscussed
8634837833 spells the words: undiverted, undivested
8636636377 spells the words: undoneness, unfondness
86368476633 spells the words: unenthroned, unenvironed
8642733633 spells the words: ungardened, unhardened
8643765453 spells the words: ungermlike, unherolike
86452242833 spells the words: unglaciated, unilabiated
8645628527 spells the words: unglobular, unilobular, unilocular
864663546377 spells the words: ungoodliness, unhomeliness
86467747464 spells the words: ungossiping, uninspiring
86467336377 spells the words: unhopedness, unimpedness
8646332833 spells the words: unindebted, uninfected
8646837532833 spells the words: uninterjected, uninterleaved
8646837833 spells the words: uninverted, uninvested
864837725476 spells the words: Universalism, universalism
864837725478 spells the words: Universalist, universalist
86483772547842 spells the words: Universalistic, universalistic
8658646687 spells the words: unluminous, voluminous
86633424625 spells the words: unmedicinal, unofficinal
8672788733 spells the words: unpastured, unraptured
8673352253 spells the words: unpeelable, unreelable
86737837833 spells the words: unperverted, unrequested
8674252253 spells the words: unpickable, unshakable
8675292253 spells the words: unplayable, unslayable
8675684433 spells the words: unploughed, unsloughed
8676782253 spells the words: unportable, unsortable
8677324687 spells the words: unprecious, unspecious
86787767833 spells the words: unpurported, unsupported
8678776733 spells the words: unpurposed, unsupposed
8678783933 spells the words: unpurveyed, unsurveyed
86788733433 spells the words: unputrefied, unstupefied
867327662253 spells the words: unreasonable, unseasonable
8673276622536377 spells the words: unreasonableness, unseasonableness
867327662259 spells the words: unreasonably, unseasonably
8673276633 spells the words: unreasoned, unseasoned
8673233464 spells the words: unreceding, unseceding
86733824253 spells the words: unreducible, unseducible
8673736833 spells the words: unrepented, unresented
86737368464 spells the words: unrepenting, unresenting
8673747833 spells the words: unrepiqued, unresisted
8673782253 spells the words: unrestable, unservable
8673837833 spells the words: unreverted, unrevested
8673865833 spells the words: unrevolted, unrevolved
86738658464 spells the words: unrevolting, unrevolving
86744482253 spells the words: unrightable, unsightable
8674642253 spells the words: unringable, unsingable
8676863464 spells the words: unrounding, unsounding
8678333733 spells the words: unruddered, unsuffered
8672582253 spells the words: unsaltable, unsalvable
8674272253 spells the words: unshapable, unsharable
867427336377 spells the words: unshapedness, unsharedness
8678282253 spells the words: unstatable, unstavable
86782832253 spells the words: unstateable, unstaveable
8678662253 spells the words: unstonable, unsummable
86827647433 spells the words: untarnished, unvarnished
8683633733 spells the words: untendered, unveneered
86837743433 spells the words: unterrified, unversified
8686824336377 spells the words: untouchedness, unvouchedness
8687877464 spells the words: untrussing, unusurping
87266726742 spells the words: uranoscopia, uranoscopic
88674264937 spells the words: Utopianizer, utopianizer
8373845586 spells the words: Veretillum, veretillum
8376384323 spells the words: Vermetidae, vermetidae
83773784546 spells the words: Vespertilio, vespertilio
847237686642 spells the words: viscerotonia, viscerotonic
9283746459 spells the words: wateringly, waveringly
9444426673 spells the words: Whiggamore, whiggamore
9447546459 spells the words: whirlingly, whiskingly
9463242237 spells the words: windbibber, winebibber
94632732537 spells the words: Windbreaker, windbreaker
9966464483 spells the words: Wyomingite, wyomingite
926846247642 spells the words: xanthochroia, Xanthochroic
9268462476642 spells the words: xanthochromia, xanthochromic
92684674673 spells the words: xanthophore, xanthophose
926846774492 spells the words: Xanthorrhiza, Zanthorrhiza
926846774632 spells the words: Xanthorrhoea, xanthorrhoea
93726843686 spells the words: Xeranthemum, xeranthemum
9376337642 spells the words: xerodermia, xerodermic
92684699586 spells the words: Zanthoxylum, zanthoxylum
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
