@invoke alphabetize();
@insert toc();

#### FizzBuzz

-   Print the integers from 1 to 100 (inclusive), but:
    -   for multiples of three, print `"Fizz"` (instead of the number)
    -   for multiples of five, print `"Buzz"` (instead of the number)
    -   for multiples of both three and five, print `"FizzBuzz"` (instead of the number)

@insert discussThisProblem("brianjenkins94", "Rosettas-Node", "FizzBuzz");

**Solution:**

```typescript
@import "./fizzBuzz.ts";
```

@insert improveThisAnswer("brianjenkins94", "Rosettas-Node", "FizzBuzz");

**Sample Output:**

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
...
```

**References:**

-   <http://rosettacode.org/wiki/FizzBuzz>
-   <https://en.wikipedia.org/wiki/Fizz_buzz>

#

#### Fibonacci (Iterative)

-   Print out the `n`th number of the [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_number).
    -   The Fibonacci sequence is the sequence of numbers where each element is the sum of the two previous elements.

@insert discussThisProblem("brianjenkins94", "Rosettas-Node", "Fibonacci (Iterative)");

**Solution:**

```typescript
@import "./iterativeFibonacci.ts";
```

@insert improveThisAnswer("brianjenkins94", "Rosettas-Node", "Fibonacci (Iterative)");

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

@insert discussThisProblem("brianjenkins94", "Rosettas-Node", "Fibonacci (Recursive)");

**Solution:**

```typescript
@import "./recursiveFibonacci.ts";
```

@insert improveThisAnswer("brianjenkins94", "Rosettas-Node", "Fibonacci (Recursive)");

**Sample Output:**

```
55
```

**References:**

-   <http://rosettacode.org/wiki/Fibonacci_sequence>
-   <https://en.wikipedia.org/wiki/Fibonacci_number>

#

#### Palindrome Checker

-   Write a program that checks whether a given string is a [palindrome](https://en.wikipedia.org/wiki/Palindrome).
    -   A palindrome is a word or phrase which reads the same backward and forward.

@insert discussThisProblem("brianjenkins94", "Rosettas-Node", "Palindrome Checker");

**Solution:**

```typescript
@import "./isPalindrome.ts";
```

@insert improveThisAnswer("brianjenkins94", "Rosettas-Node", "Palindrome Checker");

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

-   <http://rosettacode.org/wiki/Palindrome>
-   <https://en.wikipedia.org/wiki/Palindrome>

#

#### Leap Year Checker

-   Write a program that checks whether a given year is a [leap year](https://en.wikipedia.org/wiki/Leap_year).
    -   A leap year is a year divisible by 4 but not 100 and is not divisible by 400.

@insert discussThisProblem("brianjenkins94", "Rosettas-Node", "Leap Year Checker");

**Solution:**

```typescript
@import "./isLeapYear.ts";
```

@insert improveThisAnswer("brianjenkins94", "Rosettas-Node", "Leap Year Checker");

**Sample Output:**

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
...
```

**References:**

-   <http://rosettacode.org/wiki/Leap_year>
-   <https://en.wikipedia.org/wiki/Leap_year>
