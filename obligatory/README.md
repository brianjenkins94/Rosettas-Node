@invoke toc();

#### FizzBuzz

-   Print the integers from 1 to 100 (inclusive), but:
    -   for multiples of three, print `"Fizz"` (instead of the number)
    -   for multiples of five, print `"Buzz"` (instead of the number)
    -   for multiples of both three and five, print `"FizzBuzz"` (instead of the number)

**Solution:**

```typescript
@import "./fizzBuzz.ts";
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
@import "./iterativeFibonacci.ts";
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
@import "./recursiveFibonacci.ts";
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
@import "./isPalindrome.ts";
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

-   https://www.codeabbey.com/index/task_view/palindromes
-   http://rosettacode.org/wiki/Palindrome
-   https://en.wikipedia.org/wiki/Palindrome

#

#### Leap Year Checker

-   Write a function that checks whether a given year is a [leap year](https://en.wikipedia.org/wiki/Leap_year).
    -   A leap year is a year divisible by 4 but not 100 and is not divisible by 400.

**Solution:**

```typescript
@import "./isLeapYear.ts";
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
